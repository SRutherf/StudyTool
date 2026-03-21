import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SectionPage from './pages/SectionPage'
import SubsectionPage from './pages/SubsectionPage'
import BrowsePage from './pages/BrowsePage'
import TestPage from './pages/TestPage'
import SettingsPage from './pages/SettingsPage'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">
            Study Tool
          </Link>
          <Link to="/settings" className="topbar-link">
            Settings
          </Link>
        </div>
      </header>

      <main className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/section/:sectionId" element={<SectionPage />} />
          <Route
            path="/section/:sectionId/subsection/:subsectionId"
            element={<SubsectionPage />}
          />
          <Route
            path="/section/:sectionId/subsection/:subsectionId/browse"
            element={<BrowsePage />}
          />
          <Route
            path="/section/:sectionId/subsection/:subsectionId/test"
            element={<TestPage />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App