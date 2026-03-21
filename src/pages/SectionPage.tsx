import { Link, useParams } from 'react-router-dom'
import { getSection, getSubsectionsForSection } from '../data/studyData'

export default function SectionPage() {
  const { sectionId = '' } = useParams()
  const section = getSection(sectionId)
  const sectionSubsections = getSubsectionsForSection(sectionId)

  if (!section) {
    return <p>Section not found.</p>
  }

  return (
    <div>
      <h1>{section.title}</h1>
      <p>{section.description}</p>

      <div className="card-grid">
        {sectionSubsections.map((subsection) => (
          <Link
            key={`${subsection.sectionId}-${subsection.id}`}
            to={`/section/${section.id}/subsection/${subsection.id}`}
            className="card"
          >
            <h2>{subsection.title}</h2>
            <p>{subsection.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}