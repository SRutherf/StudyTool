import { shuffleArray } from './shuffle'

export type SessionSourceQuestion = {
  id: string
  prompt: string
  explanation: string
  sectionId: string
  subsectionId: string
  choices: string[]
  correctIndex: number
}

export type SessionChoice = {
  text: string
  isCorrect: boolean
}

export type SessionQuestion = {
  id: string
  prompt: string
  explanation: string
  sectionId: string
  subsectionId: string
  choices: SessionChoice[]
}

export function createSessionQuestions(
  questions: SessionSourceQuestion[],
): SessionQuestion[] {
  const shuffledQuestions = shuffleArray(questions)

  return shuffledQuestions.map((question) => {
    const shuffledChoices = shuffleArray(
      question.choices.map((choice, index) => ({
        text: choice,
        isCorrect: index === question.correctIndex,
      })),
    )

    return {
      id: question.id,
      prompt: question.prompt,
      explanation: question.explanation,
      sectionId: question.sectionId,
      subsectionId: question.subsectionId,
      choices: shuffledChoices,
    }
  })
}