import type { Question } from '../data/types'
import type { ProgressData } from '../features/progress/progressTypes'

export type QuestionFilterMode = 'all' | 'wrong' | 'unseen'

export function filterQuestionsByMode<T extends Question>(
  questions: T[],
  progress: ProgressData,
  mode: QuestionFilterMode,
): T[] {
  if (mode === 'all') return questions

  return questions.filter((question) => {
    const card = progress.cards[question.id]

    if (mode === 'wrong') {
      return card?.status === 'wrong'
    }

    if (mode === 'unseen') {
      return !card || card.status === 'unseen'
    }

    return true
  })
}