import { Link, useParams } from 'react-router-dom'
import {
  getQuestionsForSubsection,
  getSection,
  getSubsection,
} from '../data/studyData'

export default function SubsectionPage() {
  const { sectionId = '', subsectionId = '' } = useParams()
  const section = getSection(sectionId)
  const subsection = getSubsection(sectionId, subsectionId)
  const subsectionQuestions = getQuestionsForSubsection(sectionId, subsectionId)

  if (!section || !subsection) {
    return <p>Subsection not found.</p>
  }

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
          to={`/section/${section.id}/subsection/${subsection.id}/browse`}
          className="button-link"
        >
          Browse
        </Link>
        <Link
          to={`/section/${section.id}/subsection/${subsection.id}/test`}
          className="button-link"
        >
          Test
        </Link>
      </div>
    </div>
  )
}