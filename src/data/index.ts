import { leetcodeSection } from './leetcode'
import { systemsDesignSection } from './systemsDesign'
import { storyRecallSection } from './storyRecall'
import type { Question, SectionData, StudyDataMap } from './types'

export const studyData: StudyDataMap = {
  [leetcodeSection.id]: leetcodeSection,
  [systemsDesignSection.id]: systemsDesignSection,
  [storyRecallSection.id]: storyRecallSection,
}

export function getSections(): SectionData[] {
  return Object.values(studyData)
}

export function getSection(sectionId: string): SectionData | undefined {
  return studyData[sectionId]
}

export function getSubsectionsForSection(sectionId: string) {
  const section = getSection(sectionId)
  if (!section) return []

  return Object.entries(section.subsections).map(([id, subsection]) => ({
    id,
    sectionId,
    title: subsection.title,
    description: subsection.description,
  }))
}

export function getQuestionsForSubsections(
  sectionId: string,
  subsectionIds: string[],
): Array<
  Question & {
    sectionId: string
    subsectionId: string
  }
> {
  const section = getSection(sectionId)
  if (!section) return []

  return subsectionIds.flatMap((subsectionId) => {
    const subsection = section.subsections[subsectionId]
    if (!subsection) return []

    return subsection.questions.map((question) => ({
      ...question,
      sectionId,
      subsectionId,
    }))
  })
}