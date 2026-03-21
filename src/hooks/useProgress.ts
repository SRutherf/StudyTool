import { useCallback, useEffect, useState } from 'react'
import type { ProgressData } from '../features/progress/progressTypes'
import {
  loadProgress,
  recordAnswer as recordAnswerInStorage,
  resetProgress as resetProgressInStorage,
} from '../features/progress/progressStorage'
import { replaceProgress as replaceProgressInStorage } from '../features/progress/progressImportExport'

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(() => loadProgress())

  useEffect(() => {
    setProgress(loadProgress())
  }, [])

  const recordAnswer = useCallback((cardId: string, isCorrect: boolean) => {
    recordAnswerInStorage(cardId, isCorrect)
    setProgress(loadProgress())
  }, [])

  const resetProgress = useCallback(() => {
    resetProgressInStorage()
    setProgress(loadProgress())
  }, [])

  const replaceProgress = useCallback((next: ProgressData) => {
    replaceProgressInStorage(next)
    setProgress(loadProgress())
  }, [])

  const reloadProgress = useCallback(() => {
    setProgress(loadProgress())
  }, [])

  return {
    progress,
    recordAnswer,
    resetProgress,
    replaceProgress,
    reloadProgress,
  }
}