import { Link } from 'react-router-dom'
import { sections } from '../data/studyData'

export default function HomePage() {
  return (
    <div>
      <h1>Sections</h1>
      <div className="card-grid">
        {sections.map((section) => (
          <Link key={section.id} to={`/section/${section.id}`} className="card">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}