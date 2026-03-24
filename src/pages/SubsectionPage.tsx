import { Link, useParams } from 'react-router-dom'
import {
  getQuestionsForSubsections,
  getSection,
  getSubsectionsForSection,
} from '../data'

export default function SubsectionPage() {
  const { sectionId = '', subsectionId = '' } = useParams()
  const section = getSection(sectionId)

  const subsection = getSubsectionsForSection(sectionId).find(
    (item) => item.id === subsectionId,
  )

  const subsectionQuestions = subsectionId
    ? getQuestionsForSubsections(sectionId, [subsectionId])
    : []

  if (!section || !subsection) {
    return <p>Subsection not found.</p>
  }

  const questionParams = new URLSearchParams()
  questionParams.set('subsections', subsectionId)
  questionParams.set('filter', 'all')

  const detailsParams = new URLSearchParams()
  detailsParams.set('subsections', subsectionId)

  return (
    <div>
      <h1>{subsection.title}</h1>
      <p>{subsection.description}</p>
      <p>
        {subsectionQuestions.length} question
        {subsectionQuestions.length === 1 ? '' : 's'}
      </p>

      <div className="button-row">
        <Link
          to={`/section/${section.id}/browse?${questionParams.toString()}`}
          className="button-link"
        >
          Browse
        </Link>
        <Link
          to={`/section/${section.id}/test?${questionParams.toString()}`}
          className="button-link"
        >
          Test
        </Link>
        <Link
          to={`/section/${section.id}/details?${detailsParams.toString()}`}
          className="button-link"
        >
          Explain Selected
        </Link>
      </div>
    </div>
  )
}