import { useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getSection, getSubsectionsForSection } from '../data'

export default function DetailsPage() {
  const { sectionId = '' } = useParams()
  const [searchParams] = useSearchParams()
  const section = getSection(sectionId)

  const subsectionsCsv = searchParams.get('subsections') ?? ''

  const selectedIds = useMemo(
    () =>
      subsectionsCsv
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean),
    [subsectionsCsv],
  )

  if (!section) {
    return <p>Details page not found.</p>
  }

  const selectedSubsections = getSubsectionsForSection(sectionId).filter(
    (subsection) => selectedIds.includes(subsection.id),
  )

  if (selectedSubsections.length === 0) {
    return <p>No subsections selected.</p>
  }

  return (
    <div className="stack">
      <h1>{section.title} / Details</h1>

      {selectedSubsections.map((subsection) => (
        <article key={subsection.id} className="card stack">
          <h2>{subsection.title}</h2>
          <p>{subsection.explanation}</p>
          
          <br></br>
          <hr/>
          <br></br>
          
          <div className="stack">
            <h2>Vocabulary</h2>
            {subsection.vocab.length > 0 ? (
              subsection.vocab.map((item) => (
                <p key={item.term}>
                  <strong>{item.term}</strong> - {item.definition}
                </p>
              ))
            ) : (
              <p>No vocabulary added yet.</p>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}