import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  getQuestionsForSubsections,
  getSection,
  getSubsectionsForSection,
} from '../data'
import { useProgress } from '../hooks/useProgress'
import type { QuestionFilterMode } from '../utils/questionFilters'

export default function SectionPage() {
  const { sectionId = '' } = useParams()
  const navigate = useNavigate()
  const section = getSection(sectionId)
  const sectionSubsections = getSubsectionsForSection(sectionId)
  const { progress } = useProgress()
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [filterMode, setFilterMode] = useState<QuestionFilterMode>('all')

  const countsBySubsection = useMemo(() => {
    const result: Record<
      string,
      { unseen: number; wrong: number; correct: number }
    > = {}

    for (const subsection of sectionSubsections) {
      result[subsection.id] = { unseen: 0, wrong: 0, correct: 0 }
    }

    for (const subsection of sectionSubsections) {
      const subsectionQuestions = getQuestionsForSubsections(sectionId, [
        subsection.id,
      ])

      for (const question of subsectionQuestions) {
        const card = progress.cards[question.id]

        if (!card || card.status === 'unseen') {
          result[subsection.id].unseen += 1
        } else if (card.status === 'wrong') {
          result[subsection.id].wrong += 1
        } else if (card.status === 'correct') {
          result[subsection.id].correct += 1
        }
      }
    }

    return result
  }, [progress.cards, sectionId, sectionSubsections])

  if (!section) {
    return <p>Section not found.</p>
  }

  function toggleSubsection(subsectionId: string) {
    setSelectedIds((current) =>
      current.includes(subsectionId)
        ? current.filter((id) => id !== subsectionId)
        : [...current, subsectionId],
    )
  }

  function selectAll() {
    setSelectedIds(sectionSubsections.map((subsection) => subsection.id))
  }

  function clearAll() {
    setSelectedIds([])
  }

  function goToMode(mode: 'browse' | 'test') {
    if (selectedIds.length === 0) return

    const params = new URLSearchParams()
    params.set('subsections', selectedIds.join(','))
    params.set('filter', filterMode)

    navigate(`/section/${sectionId}/${mode}?${params.toString()}`)
  }

  return (
    <div>
      <h1>{section.title}</h1>
      <p>{section.description}</p>

      <div className="section-toolbar">
        <button className="button-link" onClick={selectAll}>
          Select All
        </button>
        <button className="button-link button-muted" onClick={clearAll}>
          Clear
        </button>
      </div>

      <div className="filter-row">
        <label className="filter-label">
          <span>Question Filter</span>
          <select
            value={filterMode}
            onChange={(e) => setFilterMode(e.target.value as QuestionFilterMode)}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="wrong">Only wrong</option>
            <option value="unseen">Only unseen</option>
          </select>
        </label>
      </div>

      <div className="card-grid">
        {sectionSubsections.map((subsection) => {
          const isSelected = selectedIds.includes(subsection.id)
          const stats = countsBySubsection[subsection.id]

          return (
            <button
              key={`${subsection.sectionId}-${subsection.id}`}
              type="button"
              className={`card subsection-card ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleSubsection(subsection.id)}
            >
              <h2>{subsection.title}</h2>
              <p>{subsection.description}</p>
              <div className="mini-stats">
                <span>✓ {stats?.correct ?? 0}</span>
                <span>✗ {stats?.wrong ?? 0}</span>
                <span>— {stats?.unseen ?? 0}</span>
              </div>
            </button>
          )
        })}
      </div>

      <div className="button-row">
        <button
          className="button-link"
          onClick={() => goToMode('browse')}
          disabled={selectedIds.length === 0}
        >
          Browse Selected
        </button>
        <button
          className="button-link"
          onClick={() => goToMode('test')}
          disabled={selectedIds.length === 0}
        >
          Test Selected
        </button>
      </div>

      <p className="helper-text">
        Selected: {selectedIds.length === 0 ? 'none' : selectedIds.join(', ')}
      </p>
    </div>
  )
}