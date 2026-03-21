import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  getQuestionsForSubsection,
  getSection,
  getSubsection,
} from '../data/studyData'
import { useProgress } from '../hooks/useProgress'

export default function TestPage() {
  const { sectionId = '', subsectionId = '' } = useParams()
  const section = getSection(sectionId)
  const subsection = getSubsection(sectionId, subsectionId)
  const subsectionQuestions = useMemo(
    () => getQuestionsForSubsection(sectionId, subsectionId),
    [sectionId, subsectionId],
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const { recordAnswer } = useProgress()

  if (!section || !subsection) {
    return <p>Test page not found.</p>
  }

  if (subsectionQuestions.length === 0) {
    return <p>No questions yet.</p>
  }

  const question = subsectionQuestions[currentIndex]
  const answered = selectedIndex !== null

  function handleChoiceClick(index: number) {
    if (answered) return

    setSelectedIndex(index)
    recordAnswer(question.id, index === question.correctIndex)
  }

  function handleNext() {
    setSelectedIndex(null)
    setCurrentIndex((prev) => (prev + 1) % subsectionQuestions.length)
  }

  return (
    <div>
      <h1>
        {section.title} / {subsection.title} / Test
      </h1>
      <p>
        Question {currentIndex + 1} of {subsectionQuestions.length}
      </p>

      <article className="card">
        <h2>{question.prompt}</h2>

        <div className="stack">
          {question.choices.map((choice, index) => {
            let className = 'choice-button'

            if (answered && index === question.correctIndex) {
              className += ' correct'
            } else if (
              answered &&
              index === selectedIndex &&
              index !== question.correctIndex
            ) {
              className += ' incorrect'
            }

            return (
              <button
                key={`${question.id}-${choice}`}
                className={className}
                onClick={() => handleChoiceClick(index)}
              >
                {choice}
              </button>
            )
          })}
        </div>

        {answered ? (
          <div className="answer-box">
            <p>
              <strong>Correct answer:</strong>{' '}
              {question.choices[question.correctIndex]}
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