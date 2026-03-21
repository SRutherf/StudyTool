import { useState } from 'react'
import { exportProgress, importProgressFromFile } from '../features/progress/progressImportExport'
import { loadProgress } from '../features/progress/progressStorage'
import { useProgress } from '../hooks/useProgress'

export default function SettingsPage() {
  const { resetProgress, replaceProgress } = useProgress()
  const [message, setMessage] = useState('')

  function handleExport() {
    exportProgress(loadProgress())
    setMessage('Progress exported.')
  }

  async function handleImport(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const imported = await importProgressFromFile(file)
      replaceProgress(imported)
      setMessage('Progress imported.')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Import failed.')
    }

    event.target.value = ''
  }

  function handleReset() {
    resetProgress()
    setMessage('Progress reset.')
  }

  return (
    <div>
      <h1>Settings</h1>
      <p>Progress is stored in this browser.</p>

      <div className="stack settings-stack">
        <button className="button-link settings-button" onClick={handleExport}>
          Export Progress
        </button>

        <label className="card settings-card">
          <strong>Import Progress</strong>
          <input type="file" accept="application/json" onChange={handleImport} />
        </label>

        <button className="button-link settings-button danger-button" onClick={handleReset}>
          Reset Progress
        </button>
      </div>

      {message ? <p>{message}</p> : null}
    </div>
  )
}