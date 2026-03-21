import type { ProgressData } from './progressTypes'
import { saveProgress } from './progressStorage'

function isValidCardProgress(value: unknown): boolean {
  if (typeof value !== 'object' || value === null) return false

  const item = value as Record<string, unknown>

  return (
    typeof item.testTaken === 'boolean' &&
    (item.status === 'unseen' || item.status === 'wrong' || item.status === 'correct') &&
    typeof item.correctCount === 'number' &&
    typeof item.wrongCount === 'number' &&
    (item.lastAnsweredAt === undefined || typeof item.lastAnsweredAt === 'string')
  )
}

export function isValidProgressData(value: unknown): value is ProgressData {
  if (typeof value !== 'object' || value === null) return false

  const data = value as Record<string, unknown>

  if (data.version !== 1) return false
  if (typeof data.updatedAt !== 'string') return false
  if (typeof data.cards !== 'object' || data.cards === null) return false

  for (const item of Object.values(data.cards as Record<string, unknown>)) {
    if (!isValidCardProgress(item)) return false
  }

  return true
}

export function exportProgress(progress: ProgressData): void {
  const blob = new Blob([JSON.stringify(progress, null, 2)], {
    type: 'application/json',
  })

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'studytool-progress.json'
  a.click()
  URL.revokeObjectURL(url)
}

export async function importProgressFromFile(file: File): Promise<ProgressData> {
  const text = await file.text()
  const parsed = JSON.parse(text) as unknown

  if (!isValidProgressData(parsed)) {
    throw new Error('Invalid progress file.')
  }

  return parsed
}

export function replaceProgress(progress: ProgressData): void {
  saveProgress(progress)
}