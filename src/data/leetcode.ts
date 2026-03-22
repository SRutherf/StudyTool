import type { SectionData } from './types'

export const leetcodeSection: SectionData = {
  id: 'leetcode',
  title: 'Leetcode',
  description: 'Pattern recognition and problem solving',
  subsections: {
    'arrays-hashing': {
      title: 'Arrays & Hashing',
      description: 'Array manipulation, lookup strategies, and hash-based patterns',
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
      description: 'Contiguous subarray and substring optimization',
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
    stack: {
      title: 'Stack',
      description: 'LIFO processing, monotonic structures, and parsing patterns',
      questions: [],
    },
    'linked-list': {
      title: 'Linked List',
      description: 'Pointer manipulation and linked structure traversal',
      questions: [],
    },
    'binary-search': {
      title: 'Binary Search',
      description: 'Search over sorted data and answer-space reduction',
      questions: [],
    },
    trees: {
      title: 'Trees',
      description: 'Traversal, recursion, and hierarchical data problems',
      questions: [],
    },
    heap: {
      title: 'Heap',
      description: 'Priority queue usage for top-k, scheduling, and ordering problems',
      questions: [],
    },
    graphs: {
      title: 'Graphs',
      description: 'Traversal, connectivity, and pathfinding patterns',
      questions: [],
    },
    backtracking: {
      title: 'Backtracking',
      description: 'Search through decision trees with pruning',
      questions: [],
    },
    dp: {
      title: 'Dynamic Programming',
      description: 'Overlapping subproblems and state transition reasoning',
      questions: [],
    },
    'intervals-greedy': {
      title: 'Intervals & Greedy',
      description: 'Interval merging, scheduling, and locally optimal decisions',
      questions: [],
    },
  },
}