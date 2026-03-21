import { useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {
  getQuestionsForSubsections,
  getSection,
  getSubsectionsForSection,
} from '../data'
import { useProgress } from '../hooks/useProgress'
import type { CardProgressStatus } from '../features/progress/progressTypes'
import { filterQuestionsByMode } from '../utils/questionFilters'
import type { Question } from '../data/types'

function statusSymbol(status: CardProgressStatus | undefined) {
  if (!status || status === 'unseen') return '—'
  if (status === 'wrong') return '✗'
  return '✓'
}

function statusLabel(status: CardProgressStatus | undefined) {
  if (!status || status === 'unseen') return "Haven't taken in test"
  if (status === 'wrong') return 'Taken, last result wrong'
  return 'Taken, last result correct'
}

export default function BrowsePage() {
  const { sectionId = '' } = useParams()
  const [searchParams] = useSearchParams()
  const section = getSection(sectionId)
  const { progress } = useProgress()

  const subsectionsCsv = searchParams.get('subsections') ?? ''
  const filterMode = (searchParams.get('filter') ?? 'all') as
    | 'all'
    | 'wrong'
    | 'unseen'

  const selectedIds = useMemo(
    () => subsectionsCsv.split(',').filter(Boolean),
    [subsectionsCsv],
  )

  if (!section) {
    return <p>Browse page not found.</p>
  }

  const selectedSubsections = getSubsectionsForSection(sectionId).filter(
    (subsection) => selectedIds.includes(subsection.id),
  )

  const rawQuestions = getQuestionsForSubsections(sectionId, selectedIds)
  const subsectionQuestions = filterQuestionsByMode(
    rawQuestions,
    progress,
    filterMode,
  )

  return (
    <div>
      <h1>{section.title} / Browse</h1>
      <p>
        Subsections:{' '}
        {selectedSubsections.length > 0
          ? selectedSubsections.map((subsection) => subsection.title).join(', ')
          : 'None selected'}
      </p>
      <p>Filter: {filterMode}</p>

      <div className="browse-legend">
        <span>
          <strong>—</strong> unseen
        </span>
        <span>
          <strong>✗</strong> wrong
        </span>
        <span>
          <strong>✓</strong> correct
        </span>
      </div>

      <div className="stack">
        {subsectionQuestions.map((question: Question) => {
          const cardProgress = progress.cards[question.id]
          const status = cardProgress?.status

          return (
            <article key={question.id} className="card">
              <div className="question-status-row">
                <span
                  className={`status-pill status-${status ?? 'unseen'}`}
                  title={statusLabel(status)}
                  aria-label={statusLabel(status)}
                >
                  {statusSymbol(status)}
                </span>
                <span className="status-text">{statusLabel(status)}</span>
              </div>

              <h2>{question.prompt}</h2>
              <p>
                <strong>Answer:</strong> {question.choices[question.correctIndex]}
              </p>
              <p>{question.explanation}</p>
            </article>
          )
        })}

        {subsectionQuestions.length === 0 ? (
          <article className="card">
            <h2>No questions matched this filter.</h2>
          </article>
        ) : null}
      </div>
    </div>
  )
}