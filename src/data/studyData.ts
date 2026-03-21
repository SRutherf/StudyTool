export type Section = {
  id: string
  title: string
  description: string
}

export type Subsection = {
  id: string
  sectionId: string
  title: string
  description: string
}

export type Question = {
  id: string
  sectionId: string
  subsectionId: string
  prompt: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export const sections: Section[] = [
  {
    id: 'leetcode',
    title: 'Leetcode',
    description: 'Pattern recognition and problem solving',
  },
  {
    id: 'systems-design',
    title: 'Systems Design',
    description: 'Architecture and tradeoffs',
  },
  {
    id: 'story-recall',
    title: 'Story Recall',
    description: 'Behavioral and anecdote recall',
  },
]

export const subsections: Subsection[] = [
  {
    id: 'arrays',
    sectionId: 'leetcode',
    title: 'Arrays',
    description: 'Array-focused questions',
  },
  {
    id: 'two-pointers',
    sectionId: 'leetcode',
    title: 'Two Pointers',
    description: 'Opposing or same-direction pointer patterns',
  },
  {
    id: 'sliding-window',
    sectionId: 'leetcode',
    title: 'Sliding Window',
    description: 'Contiguous subarray/substring optimization',
  },
  {
    id: 'all',
    sectionId: 'leetcode',
    title: 'All',
    description: 'All Leetcode questions',
  },
  {
    id: 'caching',
    sectionId: 'systems-design',
    title: 'Caching',
    description: 'Read scaling and latency reduction',
  },
  {
    id: 'idempotency',
    sectionId: 'systems-design',
    title: 'Idempotency',
    description: 'Duplicate request protection',
  },
  {
    id: 'all',
    sectionId: 'systems-design',
    title: 'All',
    description: 'All Systems Design questions',
  },
  {
    id: 'leadership',
    sectionId: 'story-recall',
    title: 'Leadership',
    description: 'Stories about ownership and influence',
  },
  {
    id: 'conflict',
    sectionId: 'story-recall',
    title: 'Conflict',
    description: 'Stories about disagreement and resolution',
  },
  {
    id: 'all',
    sectionId: 'story-recall',
    title: 'All',
    description: 'All Story Recall questions',
  },
]

export const questions: Question[] = [
  {
    id: 'lc-sw-1',
    sectionId: 'leetcode',
    subsectionId: 'sliding-window',
    prompt:
      'Find the longest substring without repeating characters. What is the best pattern?',
    choices: ['Sliding Window', 'Union Find', 'Heap', 'Binary Search'],
    correctIndex: 0,
    explanation:
      'Use a moving window and track character positions or counts as the window expands and contracts.',
  },
  {
    id: 'lc-arr-1',
    sectionId: 'leetcode',
    subsectionId: 'arrays',
    prompt:
      'Given an array and a target, return the indices of two numbers that add to the target.',
    choices: ['Hash Map', 'Monotonic Stack', 'BFS', 'Trie'],
    correctIndex: 0,
    explanation:
      'Track previously seen values in a hash map so each lookup is O(1).',
  },
  {
    id: 'lc-tp-1',
    sectionId: 'leetcode',
    subsectionId: 'two-pointers',
    prompt:
      'You have a sorted array and need to determine whether two numbers sum to a target.',
    choices: ['Two Pointers', 'DFS', 'Union Find', 'Topological Sort'],
    correctIndex: 0,
    explanation:
      'Because the array is sorted, two pointers can move inward efficiently.',
  },
  {
    id: 'sd-cache-1',
    sectionId: 'systems-design',
    subsectionId: 'caching',
    prompt:
      'A read-heavy endpoint is overloading the database. What is the best first move?',
    choices: ['Add caching', 'Use websockets', 'Shard writes', 'Use cron jobs'],
    correctIndex: 0,
    explanation:
      'The bottleneck is repeated reads, so caching is the most direct first step.',
  },
  {
    id: 'sd-idem-1',
    sectionId: 'systems-design',
    subsectionId: 'idempotency',
    prompt:
      'Clients retry payment requests after timeouts, creating duplicate charges. Best answer?',
    choices: ['Idempotency keys', 'Read replicas', 'CDN', 'Larger EC2 instances'],
    correctIndex: 0,
    explanation:
      'Idempotency keys let the server safely identify repeated requests as the same operation.',
  },
  {
    id: 'sr-lead-1',
    sectionId: 'story-recall',
    subsectionId: 'leadership',
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
  {
    id: 'sr-conflict-1',
    sectionId: 'story-recall',
    subsectionId: 'conflict',
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
]

export function getSection(sectionId: string) {
  return sections.find((section) => section.id === sectionId)
}

export function getSubsectionsForSection(sectionId: string) {
  return subsections.filter((subsection) => subsection.sectionId === sectionId)
}

export function getSubsection(sectionId: string, subsectionId: string) {
  return subsections.find(
    (subsection) =>
      subsection.sectionId === sectionId && subsection.id === subsectionId,
  )
}

export function getQuestionsForSubsection(
  sectionId: string,
  subsectionId: string,
) {
  if (subsectionId === 'all') {
    return questions.filter((question) => question.sectionId === sectionId)
  }

  return questions.filter(
    (question) =>
      question.sectionId === sectionId && question.subsectionId === subsectionId,
  )
}