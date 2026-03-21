import { useParams } from 'react-router-dom'
import {
  getQuestionsForSubsection,
  getSection,
  getSubsection,
} from '../data/studyData'
import { useProgress } from '../hooks/useProgress'
import type { CardProgressStatus } from '../features/progress/progressTypes'

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
  const { sectionId = '', subsectionId = '' } = useParams()
  const section = getSection(sectionId)
  const subsection = getSubsection(sectionId, subsectionId)
  const subsectionQuestions = getQuestionsForSubsection(sectionId, subsectionId)
  const { progress } = useProgress()

  if (!section || !subsection) {
    return <p>Browse page not found.</p>
  }

  return (
    <div>
      <h1>
        {section.title} / {subsection.title} / Browse
      </h1>

      <div className="browse-legend">
        <span><strong>—</strong> unseen</span>
        <span><strong>✗</strong> wrong</span>
        <span><strong>✓</strong> correct</span>
      </div>

      <div className="stack">
        {subsectionQuestions.map((question) => {
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
      </div>
    </div>
  )
}