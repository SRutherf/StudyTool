export type CardProgressStatus = 'unseen' | 'wrong' | 'correct'

export type CardProgress = {
  testTaken: boolean
  status: CardProgressStatus
  correctCount: number
  wrongCount: number
  lastAnsweredAt?: string
}

export type ProgressData = {
  version: 1
  updatedAt: string
  cards: Record<string, CardProgress>
}