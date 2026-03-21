import type { SectionData } from './types'

export const leetcodeSection: SectionData = {
  id: 'leetcode',
  title: 'Leetcode',
  description: 'Pattern recognition and problem solving',
  subsections: {
    arrays: {
      title: 'Arrays',
      description: 'Array-focused questions',
      questions: [
        {
          id: 'lc-arr-1',
          prompt:
            'Given an array and a target, return the indices of two numbers that add to the target.',
          choices: ['Hash Map', 'Monotonic Stack', 'BFS', 'Trie'],
          correctIndex: 0,
          explanation:
            'Track previously seen values in a hash map so each lookup is O(1).',
        },
      ],
    },
    'two-pointers': {
      title: 'Two Pointers',
      description: 'Opposing or same-direction pointer patterns',
      questions: [
        {
          id: 'lc-tp-1',
          prompt:
            'You have a sorted array and need to determine whether two numbers sum to a target.',
          choices: ['Two Pointers', 'DFS', 'Union Find', 'Topological Sort'],
          correctIndex: 0,
          explanation:
            'Because the array is sorted, two pointers can move inward efficiently.',
        },
      ],
    },
    'sliding-window': {
      title: 'Sliding Window',
      description: 'Contiguous subarray/substring optimization',
      questions: [
        {
          id: 'lc-sw-1',
          prompt:
            'Find the longest substring without repeating characters. What is the best pattern?',
          choices: ['Sliding Window', 'Union Find', 'Heap', 'Binary Search'],
          correctIndex: 0,
          explanation:
            'Use a moving window and track character positions or counts as the window expands and contracts.',
        },
      ],
    },
  },
}