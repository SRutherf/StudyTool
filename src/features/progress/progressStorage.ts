import type { CardProgress, ProgressData } from './progressTypes'

const STORAGE_KEY = 'studytool.progress'

export function createEmptyProgress(): ProgressData {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    cards: {},
  }
}

export function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return createEmptyProgress()

    const parsed = JSON.parse(raw) as ProgressData

    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      parsed.version !== 1 ||
      typeof parsed.cards !== 'object' ||
      parsed.cards === null
    ) {
      return createEmptyProgress()
    }

    return parsed
  } catch {
    return createEmptyProgress()
  }
}

export function saveProgress(progress: ProgressData): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...progress,
      updatedAt: new Date().toISOString(),
    }),
  )
}

export function resetProgress(): void {
  localStorage.removeItem(STORAGE_KEY)
}

export function getCardProgress(cardId: string): CardProgress | undefined {
  const progress = loadProgress()
  return progress.cards[cardId]
}

export function recordAnswer(cardId: string, isCorrect: boolean): CardProgress {
  const progress = loadProgress()

  const current: CardProgress = progress.cards[cardId] ?? {
    testTaken: false,
    status: 'unseen',
    correctCount: 0,
    wrongCount: 0,
  }

  const next: CardProgress = {
    ...current,
    testTaken: true,
    status: isCorrect ? 'correct' : 'wrong',
    correctCount: current.correctCount + (isCorrect ? 1 : 0),
    wrongCount: current.wrongCount + (isCorrect ? 0 : 1),
    lastAnsweredAt: new Date().toISOString(),
  }

  progress.cards[cardId] = next
  saveProgress(progress)

  return next
}