import type { SectionData } from './types'

export const storyRecallSection: SectionData = {
  id: 'story-recall',
  title: 'Story Recall',
  description: 'Behavioral and anecdote recall',
  subsections: {
    leadership: {
      title: 'Leadership',
      description: 'Stories about ownership and influence',
      questions: [
        {
          id: 'sr-lead-1',
          prompt:
            'Which of your stories best demonstrates leading without formal authority?',
          choices: [
            'Legacy service migration',
            'Bug fix with no stakeholders',
            'One-day refactor',
            'Simple dashboard tweak',
          ],
          correctIndex: 0,
          explanation:
            'A cross-team migration or coordination story usually best shows leadership without authority.',
        },
      ],
    },
    conflict: {
      title: 'Conflict',
      description: 'Stories about disagreement and resolution',
      questions: [
        {
          id: 'sr-conflict-1',
          prompt:
            'Which story best fits disagreement over rollout risk and technical tradeoffs?',
          choices: [
            'Migration rollout disagreement',
            'Routine sprint task',
            'Local dev setup',
            'Personal learning project',
          ],
          correctIndex: 0,
          explanation:
            'Conflict stories usually involve differing priorities, risk tolerance, and communication.',
        },
      ],
    },
  },
}