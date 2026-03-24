export type Vocab = {
  term: string
  definition: string
}

export type Question = {
  id: string
  prompt: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export type SubsectionData = {
  title: string
  description: string
  explanation: string
  vocab: Vocab[]
  questions: Question[]
}

export type SectionData = {
  id: string
  title: string
  description: string
  subsections: Record<string, SubsectionData>
}

export type StudyDataMap = Record<string, SectionData>