import { useEffect, useMemo, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {
  getQuestionsForSubsections,
  getSection,
  getSubsectionsForSection,
} from '../data'
import { useProgress } from '../hooks/useProgress'
import { createSessionQuestions, type SessionQuestion } from '../utils/questionSession'
import { filterQuestionsByMode } from '../utils/questionFilters'

export default function TestPage() {
  const { sectionId = '' } = useParams()
  const [searchParams] = useSearchParams()
  const section = getSection(sectionId)
  const subsectionsCsv = searchParams.get('subsections') ?? ''
  const filterMode = (searchParams.get('filter') ?? 'all') as
    | 'all'
    | 'wrong'
    | 'unseen'

  const selectedIds = useMemo(
    () => subsectionsCsv.split(',').filter(Boolean),
    [subsectionsCsv],
  )

  const selectedTitles = getSubsectionsForSection(sectionId)
    .filter((subsection) => selectedIds.includes(subsection.id))
    .map((subsection) => subsection.title)

  const { progress, recordAnswer } = useProgress()

  const sourceQuestions = useMemo(() => {
    const raw = getQuestionsForSubsections(sectionId, selectedIds)
    return filterQuestionsByMode(raw, progress, filterMode)
  }, [sectionId, selectedIds, progress, filterMode])

  const [sessionQuestions, setSessionQuestions] = useState<SessionQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    setSessionQuestions(createSessionQuestions(sourceQuestions))
    setCurrentIndex(0)
    setSelectedIndex(null)
  }, [sectionId, subsectionsCsv, filterMode])

  if (!section) {
    return <p>Test page not found.</p>
  }

  if (sessionQuestions.length === 0) {
    return <p>No questions matched this filter.</p>
  }

  const question = sessionQuestions[currentIndex]
  const answered = selectedIndex !== null

  function handleChoiceClick(index: number) {
    if (answered) return

    setSelectedIndex(index)
    recordAnswer(question.id, question.choices[index].isCorrect)
  }

  function handleNext() {
    setSelectedIndex(null)
    setCurrentIndex((prev) => {
      if (prev + 1 >= sessionQuestions.length) {
        return 0
      }
      return prev + 1
    })
  }

  return (
    <div>
      <h1>{section.title} / Test</h1>
      <p>Subsections: {selectedTitles.join(', ') || 'None selected'}</p>
      <p>Filter: {filterMode}</p>
      <p>
        Question {currentIndex + 1} of {sessionQuestions.length}
      </p>

      <article className="card">
        <h2>{question.prompt}</h2>

        <div className="stack">
          {question.choices.map((choice, index) => {
            let className = 'choice-button'

            if (answered && choice.isCorrect) {
              className += ' correct'
            } else if (answered && index === selectedIndex && !choice.isCorrect) {
              className += ' incorrect'
            }

            return (
              <button
                key={`${question.id}-${choice.text}-${index}`}
                className={className}
                onClick={() => handleChoiceClick(index)}
              >
                {choice.text}
              </button>
            )
          })}
        </div>

        {answered ? (
          <div className="answer-box">
            <p>
              <strong>Correct answer:</strong>{' '}
              {question.choices.find((choice) => choice.isCorrect)?.text}
            </p>
            <p>{question.explanation}</p>
            <button className="button-link button-inline" onClick={handleNext}>
              Next
            </button>
          </div>
        ) : null}
      </article>
    </div>
  )
}