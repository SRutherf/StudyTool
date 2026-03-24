import type { SectionData } from './types'

export const leetcodeSection: SectionData = {
  id: 'leetcode',
  title: 'Leetcode',
  description: 'Pattern recognition and problem solving',
  subsections: {
    arrays: {
      title: 'Arrays & Strings',
      description: 'Array and string manipulation, prefix sums, simulation',
      explanation: 'Array problems are about reasoning over contiguous data with direct index access. Interview questions usually test whether you can recognize when a brute-force nested loop can be replaced by a single pass, auxiliary tracking structure, prefix information, or careful in-place mutation. Arrays also overlap heavily with hashing, sliding window, and two pointers, so many “array” problems are really about choosing the right pattern on top of a linear container.',
      vocab: [
        {
          term: 'contiguous memory',
          definition:
            'Array elements are stored next to each other in memory, allowing fast index-based access.',
        },        {
          term: 'index',
          definition:
            'The position of an element in the array, usually used for O(1) lookup.',
        },
        {
          term: 'in-place',
          definition:
            'Modifying the existing array without using significant extra memory.',
        },
        {
          term: 'prefix sum',
          definition:
            'A running total up to each index, used to answer range-sum questions efficiently.',
        },
        {
          term: 'suffix',
          definition:
            'Information computed from the end of the array toward the front.',
        },
        {
          term: 'running total',
          definition:
            'A cumulative value updated as you scan through the array.',
        },
        {
          term: 'sentinel value',
          definition:
            'A special placeholder value used to simplify logic or mark a state.',
        },
        {
          term: 'stable order',
          definition:
            'Keeping the relative order of elements unchanged after processing.',
        },
        {
          term: 'overwrite',
          definition:
            'Writing a new value into an existing array position.',
        },
        {
          term: 'range query',
          definition:
            'A question about a subarray, such as its sum, product, or minimum.',
        },
        {
          term: 'subarray',
          definition:
            'A contiguous slice of an array.',
        },
        {
          term: 'off-by-one error',
          definition:
            'A boundary mistake involving whether an index or range endpoint is included.',
        },
        {
          term: 'traversal',
          definition:
            'Visiting each array element in sequence.',
        },
        {
          term: 'enumerate',
          definition:
            'Iterating while keeping track of both index and value.',
        },
      ],
      questions: [
        {
          id: 'lc-arr-1',
          prompt:
            'Given an array of integers, return true if any value appears at least twice and false if every element is distinct.',
          choices: ['Hash Set', 'Two Pointers', 'Min Heap', 'Trie'],
          correctIndex: 0,
          explanation:
            'A hash set is the most direct solution because it lets you check whether a number has already been seen in average O(1) time per element. Iterate once through the array, and for each value, first check whether it is already in the set. If it is, return true immediately. Otherwise add it and continue. This gives O(n) time overall and O(n) extra space in the worst case. Sorting also works, but that would usually be O(n log n) time, so the hash-set approach is better unless memory constraints are unusually strict.',
        },
        {
          id: 'lc-arr-2',
          prompt:
            'Given two strings s and t, return true if t is an anagram of s and false otherwise.',
          choices: ['Character Frequency Count', 'Sliding Window', 'Monotonic Stack', 'Binary Search'],
          correctIndex: 0,
          explanation:
            'The best pattern is counting character frequencies. Build counts for one string and subtract counts using the other, or compare two frequency maps directly. If the strings have different lengths, return false immediately. For lowercase English letters, you can use a fixed-size array of length 26, which keeps both time and space efficient. The runtime is O(n), where n is the length of the strings, and space is O(1) if the alphabet size is fixed, or O(k) for a general character set with k distinct characters. Sorting would also solve it, but that costs O(n log n) time.',
        },
        {
          id: 'lc-arr-3',
          prompt:
            'Given an array nums, return an array output where output[i] is the product of all elements except nums[i], without using division.',
          choices: ['Prefix and Suffix Products', 'Hash Map', 'Breadth-First Search', 'Union Find'],
          correctIndex: 0,
          explanation:
            'The standard optimal solution uses prefix and suffix products. First store, for each index, the product of everything to its left. Then traverse from right to left while maintaining a running suffix product and multiply it into the result. This avoids division and handles zeros naturally. The total runtime is O(n) because you make a constant number of passes over the array. Extra space is O(1) if the output array does not count toward space complexity, since aside from the returned result you only store a few running variables. If the output array is counted, space is O(n).',
        },
        {
          id: 'lc-arr-4',
          prompt:
            'Given an array of prices where prices[i] is the price of a stock on day i, return the maximum profit you can achieve from one buy and one sell.',
          choices: ['Track Running Minimum', 'Dynamic Programming Table', 'Topological Sort', 'Trie'],
          correctIndex: 0,
          explanation:
            'This is solved by scanning once while tracking the lowest price seen so far. At each day, compute the profit you would make by selling today after buying at that running minimum, and update the best answer. Then update the running minimum if the current price is lower. That gives O(n) time and O(1) extra space. You do not need a full DP table because each step only depends on the smallest earlier value.',
        },
        {
          id: 'lc-arr-5',
          prompt:
            'Given an array, determine whether there exists an increasing subsequence of length 3.',
          choices: ['Track Smallest and Second Smallest', 'Prefix Sum', 'Monotonic Queue', 'Dijkstra'],
          correctIndex: 0,
          explanation:
            'The optimal greedy approach keeps track of the smallest value seen so far and the smallest possible second value of a potential increasing triplet. As you scan, if a new number is less than or equal to the first value, update the first. Else if it is less than or equal to the second, update the second. Otherwise, you have found a number larger than both, which means an increasing triplet exists. This runs in O(n) time and O(1) space. It works because you are always preserving the best possible candidates for the first two positions in the triplet.',
        },
        {
          id: 'lc-arr-6',
          prompt:
            'Given an unsorted integer array, find the length of the longest consecutive sequence of values.',
          choices: ['Hash Set Sequence Starts', 'Sort and Use Two Pointers', 'Backtracking', 'Segment Tree'],
          correctIndex: 0,
          explanation:
            'The best solution inserts all numbers into a hash set, then only starts counting from numbers that do not have a predecessor in the set. That way, each sequence is expanded exactly once from its true beginning. Although there is an inner while loop, each number is visited at most a constant number of times across the full algorithm, so the total time is O(n) on average. Space is O(n) for the set. Sorting would be simpler but would cost O(n log n) time.',
        },
        {
          id: 'lc-arr-7',
          prompt:
            'Given a string, find the first non-repeating character and return its index. If none exists, return -1.',
          choices: ['Frequency Count Then Second Pass', 'Binary Search', 'Union Find', 'Flood Fill'],
          correctIndex: 0,
          explanation:
            'Count how many times each character appears, then scan the string again and return the first index whose character count is 1. The first pass builds the counts and the second pass preserves the original order. This takes O(n) time and O(1) space for a fixed-size alphabet like lowercase English letters, or O(k) space for a general character set with k distinct characters. This is better than repeatedly scanning the string for each character, which would degrade to O(n^2).',
        },
        {
          id: 'lc-arr-8',
          prompt:
            'Given an array nums and an integer k, rotate the array to the right by k steps in-place.',
          choices: ['Reverse Sections', 'Min Heap', 'Depth-First Search', 'Counting Sort'],
          correctIndex: 0,
          explanation:
            'The classic in-place approach reverses the entire array, then reverses the first k elements, then reverses the remaining n - k elements. The intuition is that the final positions can be restored in grouped chunks after the whole array is flipped. This runs in O(n) time and uses O(1) extra space. Using an auxiliary array would also be O(n) time, but it would require O(n) extra space, so the reverse method is preferred when the problem asks for in-place rotation.',
        },
        {
          id: 'lc-arr-9',
          prompt:
            'Given an array containing n distinct numbers taken from the range [0, n], return the one number that is missing from the array.',
          choices: ['Arithmetic Sum Difference', 'Sliding Window', 'Monotonic Stack', 'Trie'],
          correctIndex: 0,
          explanation:
            'One clean solution uses the expected sum of numbers from 0 through n, then subtracts the actual array sum. The missing number is the difference. This takes O(n) time and O(1) extra space. Another strong solution uses XOR, which also achieves O(n) time and O(1) space. The arithmetic-sum method is usually the most straightforward to explain, though in languages with fixed integer sizes you should be aware of overflow risk when values get very large.',
        },
        {
          id: 'lc-arr-10',
          prompt:
            'Given an integer array nums, move all 0s to the end while maintaining the relative order of the non-zero elements.',
          choices: ['Write Pointer Compaction', 'Heap', 'Topological Sort', 'Trie'],
          correctIndex: 0,
          explanation:
            'Use a write pointer that marks the next position where a non-zero value should go. Scan the array once, writing each non-zero into the next write position and advancing the pointer. After that pass, fill the remaining positions with zeroes. This runs in O(n) time and O(1) extra space. It preserves the relative order of non-zero elements because you process them left to right. Swapping each time you see a non-zero also works, but the write-pointer version is often cleaner and can reduce unnecessary writes.',
        },
        {
          id: 'lc-arr-11',
          prompt:
            'Given a string, return the length of the longest palindrome that can be built with those letters.',
          choices: ['Count Even Pairs Plus Optional Center', 'Sliding Window', 'Disjoint Set', 'Binary Indexed Tree'],
          correctIndex: 0,
          explanation:
            'Count the frequency of each character. Every even count can be used fully. For odd counts, you can use count - 1 of each to contribute symmetric pairs, and if any odd count exists at all, you may place exactly one leftover character in the center. This gives O(n) time and O(1) space for a fixed alphabet, or O(k) space for k distinct characters. The key observation is that palindrome construction depends only on how many usable pairs you can form, not on the original character order.',
        },
        {
          id: 'lc-arr-12',
          prompt:
            'Given an array of integers and a target sum, return the length of the longest contiguous subarray whose sum equals the target.',
          choices: ['Prefix Sum with Earliest Index Map', 'Two Pointers', 'Monotonic Stack', 'Trie'],
          correctIndex: 0,
          explanation:
            'Store the earliest index where each prefix sum appears. As you scan, compute the current prefix sum. If currentSum - target has been seen before at index j, then the subarray from j + 1 through the current index sums to the target. Using the earliest occurrence is important because it maximizes the subarray length. This solution runs in O(n) time and uses O(n) extra space for the hash map. Two pointers do not generally work here because negative numbers can break the monotonic behavior needed for shrinking and expanding a window safely.',
        },
        {
          id: 'lc-arr-13',
          prompt:
            'Given an array of integers, determine whether it is possible to make the array non-decreasing by modifying at most one element.',
          choices: ['Single Pass with Violation Check', 'Heap', 'Backtracking', 'Union Find'],
          correctIndex: 0,
          explanation:
            'Scan once and count how many times nums[i] > nums[i + 1]. If that happens more than once, the answer is false. When you find a violation, decide whether to lower nums[i] or raise nums[i + 1] based on surrounding values so that you preserve non-decreasing order as much as possible. This is O(n) time and O(1) space. The trick is not just detecting the bad pair, but understanding which side is safer to modify so you do not create a new violation immediately afterward.',
        },
        {
          id: 'lc-arr-14',
          prompt:
            'Given a list of strings, group the anagrams together.',
          choices: ['Hash by Character Signature', 'Monotonic Stack', 'Binary Search', 'Breadth-First Search'],
          correctIndex: 0,
          explanation:
            'The standard approach is to compute a canonical signature for each word and use it as a hash-map key. Common signatures are the sorted string or a frequency tuple. All words with the same signature belong in the same group. If you sort each string, the total runtime is O(n * k log k), where n is the number of strings and k is the maximum string length. If you use a fixed-size character count signature for lowercase English letters, the runtime becomes O(n * k), with O(n * k) total output-related space plus map overhead. The count-signature version is usually the more optimal interview answer.',
        },
        {
          id: 'lc-arr-15',
          prompt:
            'Given an m x n matrix, if an element is 0, set its entire row and column to 0 in-place.',
          choices: ['Use First Row and Column as Markers', 'Flood Fill', 'Dijkstra', 'Trie'],
          correctIndex: 0,
          explanation:
            'The optimal in-place solution uses the first row and first column of the matrix itself as marker storage. First determine whether the first row or first column originally contained any zeroes, since those positions will be reused as flags. Then scan the interior of the matrix; whenever matrix[r][c] is zero, mark matrix[r][0] and matrix[0][c]. In a second pass, zero out cells based on those markers, then finally handle the first row and first column if needed. This runs in O(mn) time and O(1) extra space. A simpler approach with separate row and column sets uses O(m + n) extra space, but the marker trick is the stronger interview answer.',
        },
      ],
    },
    backtracking: {
      title: 'Backtracking',
      description: 'Permutations, combinations, subsets, constraint search',
      explanation: 'Backtracking is a depth-first search technique for exploring a decision tree. At each step you choose an option, recurse, and then undo that choice before trying the next one. In interviews, it appears when you need to generate all valid possibilities or search through constrained combinations, such as subsets, permutations, N-Queens, word search, or palindrome partitions. The key skill is defining the recursive state clearly and pruning branches that cannot lead to a valid solution.',
      vocab: [
        {
          term: 'decision tree',
          definition:
            'The conceptual tree of all choices the algorithm can make.',
        },
        {
          term: 'recursive state',
          definition:
            'The information passed into each recursive call, such as index, path, or used elements.',
        },
        {
          term: 'path',
          definition:
            'The current partial solution being built during recursion.',
        },
        {
          term: 'choice',
          definition:
            'One candidate action taken at a step in the search.',
        },
        {
          term: 'undo',
          definition:
            'Removing a previously made choice before exploring the next branch.',
        },
        {
          term: 'pruning',
          definition:
            'Stopping exploration of a branch early because it cannot produce a valid answer.',
        },
        {
          term: 'base case',
          definition:
            'The stopping condition for recursion, often when a full solution has been formed.',
        },
        {
          term: 'candidate set',
          definition:
            'The available options that can be chosen at the current step.',
        },
        {
          term: 'combination',
          definition:
            'A selection where order does not matter.',
        },
        {
          term: 'permutation',
          definition:
            'An arrangement where order does matter.',
        },
        {
          term: 'subset',
          definition:
            'Any selection of elements from a set, including the empty set.',
        },
        {
          term: 'constraint',
          definition:
            'A rule that a partial or complete solution must satisfy.',
        },
        {
          term: 'visited',
          definition:
            'A marker showing an element, cell, or node has already been used in the current path.',
        },
        {
          term: 'branch factor',
          definition:
            'How many choices are available from a given state.',
        },
        {
          term: 'search space',
          definition:
            'The full set of possible states or solutions the algorithm may explore.',
        },
      ],
      questions: [
        {
          id: 'lc-back-1',
          prompt:
            'Given an array of distinct integers, return all possible subsets (the power set).',
          choices: [
            'Backtracking (include/exclude)',
            'Sliding Window',
            'Binary Search',
            'Greedy',
          ],
          correctIndex: 0,
          explanation:
            'This is a decision-tree problem: for each element, you either include it or exclude it. Backtracking systematically explores all 2^n possibilities. Time complexity is O(n * 2^n) because there are 2^n subsets and each takes up to O(n) to copy. Space complexity is O(n) for recursion (excluding output). Sliding window and greedy do not apply because there is no ordering or optimization constraint—just full enumeration.',
        },
        {
          id: 'lc-back-2',
          prompt:
            'Given a string of digits (2–9), return all possible letter combinations from a phone keypad.',
          choices: [
            'Backtracking over choices',
            'Breadth-First Search',
            'Dynamic Programming',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'Each digit represents multiple possible letters, forming a tree of choices. Backtracking builds combinations by exploring each path. BFS can technically generate combinations as well, but it is less natural and uses more memory since it stores entire levels. Backtracking is preferred because it uses O(n) recursion space and constructs results incrementally. Time complexity is O(4^n * n) in the worst case, since each digit can map to up to 4 letters.',
        },
        {
          id: 'lc-back-3',
          prompt:
            'Given an array of distinct integers, return all permutations.',
          choices: [
            'Backtracking with used tracking',
            'Greedy',
            'Sliding Window',
            'Prefix Sum',
          ],
          correctIndex: 0,
          explanation:
            'Permutations require trying every unused element at each position. This is inherently factorial growth, making backtracking the correct approach. Time complexity is O(n * n!) due to generating n! permutations and copying each. Space complexity is O(n) for recursion and tracking used elements. Greedy and sliding window cannot enumerate all orderings.',
        },
        {
          id: 'lc-back-4',
          prompt:
            'Generate all valid combinations of n pairs of parentheses.',
          choices: [
            'Backtracking with constraints',
            'Dynamic Programming',
            'Stack simulation',
            'Greedy',
          ],
          correctIndex: 0,
          explanation:
            'Although DP can count solutions, generating all valid strings requires exploring constrained combinations. Backtracking enforces validity by ensuring closing parentheses never exceed openings. The number of results is the nth Catalan number, giving roughly O(C_n * n) time. Space is O(n) recursion depth. Greedy cannot enumerate all valid structures.',
        },
        {
          id: 'lc-back-5',
          prompt:
            'Given candidates and a target, return all combinations where numbers sum to target. You may reuse elements.',
          choices: [
            'Backtracking with pruning',
            'Dynamic Programming',
            'Greedy',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'This is a classic search problem where each number can be reused, forming a tree of possibilities. Backtracking explores combinations and prunes when the sum exceeds the target. DP can solve variations but is less natural for returning all combinations. Time complexity is exponential due to branching, often described as O(N^(T/M)) in worst cases. Space is proportional to recursion depth.',
        },
        {
          id: 'lc-back-6',
          prompt:
            'Given a 2D board and a word, determine if the word exists by moving adjacent cells without reuse.',
          choices: [
            'DFS with backtracking',
            'Breadth-First Search',
            'Union Find',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'This is a path-search problem with constraints (no reuse of cells), which requires DFS + backtracking. BFS is not ideal because it explores breadth and cannot easily track path-specific visited states efficiently. Time complexity is O(m * n * 3^L), where L is word length. Space is O(L) recursion depth.',
        },
        {
          id: 'lc-back-7',
          prompt:
            'Given a string, return all possible palindrome partitions.',
          choices: [
            'Backtracking with partitioning',
            'Sliding Window',
            'Greedy',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'You must try every possible cut and validate palindromes, which naturally forms a recursive decision tree. Sliding window does not work because partitions are non-contiguous decisions. Time complexity is exponential (O(n * 2^n) typical bound). Space is O(n) recursion depth.',
        },
        {
          id: 'lc-back-8',
          prompt:
            'Given numbers 1–9, choose k numbers that sum to n.',
          choices: [
            'Backtracking with pruning',
            'Dynamic Programming',
            'Two Pointers',
            'Greedy',
          ],
          correctIndex: 0,
          explanation:
            'This is a constrained combination problem with a small search space. Backtracking tries combinations and prunes when sum or length constraints are violated. DP could solve counting variants but is less natural for generating all combinations. Worst-case time is exponential, but bounded due to small input size. Space is O(k) recursion depth.',
        },
        {
          id: 'lc-back-9',
          prompt:
            'Given an array with duplicates, return all unique subsets.',
          choices: [
            'Backtracking with sorting and skipping duplicates',
            'Hash Map counting only',
            'Greedy',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'Backtracking still applies, but duplicates must be handled by sorting and skipping repeated values at the same recursion depth. A hash map alone cannot generate all combinations. Time remains O(n * 2^n). Space is O(n) recursion depth.',
        },
        {
          id: 'lc-back-10',
          prompt:
            'Given a board and a list of words, return all words that exist in the board.',
          choices: [
            'Trie + DFS backtracking',
            'Binary Search',
            'Union Find',
            'Greedy',
          ],
          correctIndex: 0,
          explanation:
            'Searching each word independently is too slow. A Trie allows prefix pruning, and DFS explores valid paths. This reduces unnecessary work significantly. Time depends on board size and word set, but is far better than naive exponential search. Space includes Trie + recursion stack.',
        },
        {
          id: 'lc-back-11',
          prompt:
            'Return all permutations of an array with possible duplicates.',
          choices: [
            'Backtracking with sorting and used array',
            'Heap',
            'Sliding Window',
            'Prefix Sum',
          ],
          correctIndex: 0,
          explanation:
            'Handling duplicates requires sorting and skipping repeated values when appropriate. Backtracking ensures all unique permutations are explored. Time is O(n * n!) in worst case. Space is O(n).',
        },
        {
          id: 'lc-back-12',
          prompt:
            'Place n queens on an n×n board such that none attack each other. Return number of solutions.',
          choices: [
            'Backtracking with constraint pruning',
            'Dynamic Programming',
            'Greedy',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'Each row requires choosing a valid column while respecting column and diagonal constraints. Backtracking with pruning eliminates invalid placements early. Worst-case time is exponential (often approximated as O(n!)). Space is O(n).',
        },
        {
          id: 'lc-back-13',
          prompt:
            'Restore all valid IP addresses from a string of digits.',
          choices: [
            'Backtracking with validation',
            'Sliding Window',
            'Greedy',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'Each segment (1–3 digits) must be validated, forming a small branching tree. Backtracking explores valid segment splits with pruning. Input size is small, so complexity is effectively constant for practical constraints. Space is O(1) recursion depth (max depth 4).',
        },
        {
          id: 'lc-back-14',
          prompt:
            'Find all combinations of k numbers from 1 to n.',
          choices: [
            'Backtracking',
            'Dynamic Programming',
            'Two Pointers',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'This is a classic combinations problem. Backtracking builds combinations incrementally and prunes when remaining elements are insufficient. Time is O(C(n, k) * k). Space is O(k).',
        },
        {
          id: 'lc-back-15',
          prompt:
            'Given a string, determine if it can be segmented into dictionary words.',
          choices: [
            'Dynamic Programming',
            'Backtracking',
            'Greedy',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'This is NOT primarily a backtracking problem. A naive backtracking solution would be exponential. The optimal solution uses DP to store whether substrings can be segmented, achieving O(n^2) time and O(n) space. This is a key interview trap: recognizing when NOT to use backtracking.',
        },
      ]
    },
    binarySearch: {
      title: 'Binary Search',
      description: 'Search in sorted space and search on answer',
      explanation: 'Binary search is not just “find a value in a sorted array.” It is a general method for cutting a monotonic search space in half each step. In interview problems, that can mean locating an exact target, the first or last valid index, an insertion point, or even the smallest feasible answer in an abstract range. The real skill is identifying the monotonic condition and maintaining correct left-right boundaries without infinite loops or off-by-one mistakes.',
      vocab: [
        {
          term: 'sorted order',
          definition:
            'Elements are arranged in increasing or decreasing order, enabling efficient halving.',
        },
        {
          term: 'monotonic',
          definition:
            'A condition that changes in only one direction, such as false then true.',
        },
        {
          term: 'midpoint',
          definition:
            'The middle index or value used to divide the search space.',
        },
        {
          term: 'search space',
          definition:
            'The current range of indices or values still under consideration.',
        },
        {
          term: 'left bound',
          definition:
            'The lower endpoint of the current search range.',
        },
        {
          term: 'right bound',
          definition:
            'The upper endpoint of the current search range.',
        },
        {
          term: 'inclusive bounds',
          definition:
            'A range where both endpoints are considered part of the search.',
        },
        {
          term: 'half-open interval',
          definition:
            'A range like [left, right) where the left endpoint is included and the right is excluded.',
        },
        {
          term: 'insertion point',
          definition:
            'The index where a target would be placed to maintain sorted order.',
        },
        {
          term: 'lower bound',
          definition:
            'The first index where a value could appear or the first valid position.',
        },
        {
          term: 'upper bound',
          definition:
            'The first index strictly greater than a target or the boundary after the last valid position.',
        },
        {
          term: 'feasibility check',
          definition:
            'A function used in answer-space binary search to test whether a candidate value works.',
        },
        {
          term: 'answer space',
          definition:
            'A range of possible output values searched with binary search rather than direct array elements.',
        },
        {
          term: 'overflow-safe midpoint',
          definition:
            'Computing mid as left + (right - left) / 2 to avoid integer overflow.',
        },
        {
          term: 'off-by-one error',
          definition:
            'A boundary bug caused by moving left or right incorrectly.',
        },
      ],
      questions: [
        {
          id: 'lc-bs-1',
          prompt:
            'Given a sorted array of integers and a target, return the index of the target if it exists, otherwise return -1.',
          choices: ['Binary Search', 'Sliding Window', 'Backtracking', 'Union Find'],
          correctIndex: 0,
          explanation:
            'Because the array is sorted, binary search is the optimal approach. Compare the target to the middle element, then discard half of the remaining search space each step. This yields O(log n) time complexity and O(1) space complexity if implemented iteratively. Sliding window is for contiguous ranges, backtracking is for exploring decision trees, and union find is for connectivity problems, so none of those fit.',
        },
        {
          id: 'lc-bs-2',
          prompt:
            'Given a sorted array and a target, return the position where the target should be inserted to keep the array sorted.',
          choices: ['Binary Search for lower bound', 'Two Pointers', 'Dynamic Programming', 'Trie'],
          correctIndex: 0,
          explanation:
            'This is a lower-bound style binary search. Even if the exact target is not present, binary search can find the first position where the target could be placed without violating sort order. Time complexity is O(log n) because half the search interval is discarded each step. Space complexity is O(1) for an iterative solution. Two pointers do not improve on this, and the other options are unrelated.',
        },
        {
          id: 'lc-bs-3',
          prompt:
            'Given a sorted array that may contain duplicates and a target, return the index of the first occurrence of the target.',
          choices: [
            'Binary Search with boundary tightening',
            'Hash Map',
            'Monotonic Stack',
            'Breadth-First Search',
          ],
          correctIndex: 0,
          explanation:
            'This is not just ordinary binary search for existence. You need a boundary-search variant that continues searching left even after finding the target, so you end at the first valid index. Time complexity remains O(log n), and space complexity is O(1) iteratively. A hash map would find occurrences in O(n) preprocessing time and extra space, which is worse than using the sorted property directly.',
        },
        {
          id: 'lc-bs-4',
          prompt:
            'Given a sorted array that may contain duplicates and a target, return the index of the last occurrence of the target.',
          choices: [
            'Binary Search with boundary tightening',
            'Sliding Window',
            'Depth-First Search',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'This is the symmetric version of first occurrence. When you find the target, continue searching to the right instead of stopping immediately. That preserves the O(log n) time complexity and O(1) space complexity of binary search. Sliding window and DFS do not apply to ordered boundary location problems.',
        },
        {
          id: 'lc-bs-5',
          prompt:
            'Given a sorted array of integers, return the starting and ending position of a target value.',
          choices: [
            'Two binary searches',
            'One pass with two pointers',
            'Backtracking',
            'Topological Sort',
          ],
          correctIndex: 0,
          explanation:
            'The standard solution is to run binary search twice: once for the left boundary and once for the right boundary. Each search is O(log n), so the total time is still O(log n). Space complexity is O(1) iteratively. A two-pointer scan would usually take O(n), which is inferior when the array is sorted.',
        },
        {
          id: 'lc-bs-6',
          prompt:
            'A sorted array has been rotated at an unknown pivot. Find the target index in O(log n) time.',
          choices: [
            'Modified Binary Search',
            'Sliding Window',
            'Prefix Sum',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Even though the array is rotated, at least one half of the current search interval is still sorted. Compare the middle element with the endpoints to determine which half is sorted, then check whether the target lies inside that sorted half. This preserves O(log n) time and O(1) space. The main trick is reasoning about sorted halves rather than relying on the entire array being globally sorted.',
        },
        {
          id: 'lc-bs-7',
          prompt:
            'A sorted array has been rotated. Find the minimum element.',
          choices: [
            'Binary Search on pivot region',
            'Linear Scan',
            'Greedy',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'The rotated structure allows a binary-search solution because one side around the midpoint is still ordered. By comparing the middle value to the right boundary, you can decide whether the minimum lies in the left portion including mid or strictly to the right of mid. This gives O(log n) time and O(1) space. A linear scan would be O(n), which ignores the ordered structure of the input.',
        },
        {
          id: 'lc-bs-8',
          prompt:
            'Given a sorted array of distinct integers, return the index i such that nums[i] == i, or return -1 if none exists.',
          choices: [
            'Binary Search using value vs index comparison',
            'Backtracking',
            'Monotonic Queue',
            'Flood Fill',
          ],
          correctIndex: 0,
          explanation:
            'Because the array is sorted and distinct, the relationship between nums[i] and i is monotonic enough to binary search. If nums[mid] is smaller than mid, then any valid match must lie to the right. If nums[mid] is larger than mid, any match must lie to the left. That gives O(log n) time and O(1) space. Without sorted distinct values, this reasoning would break.',
        },
        {
          id: 'lc-bs-9',
          prompt:
            'You are given a sorted array of letters and a target letter. Return the smallest letter greater than the target, wrapping around if needed.',
          choices: [
            'Binary Search for first greater element',
            'Sliding Window',
            'Dynamic Programming',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is a first-greater-than-target problem, which is a standard boundary binary search. Find the first letter strictly greater than the target. If none exists, wrap to the first element. Time complexity is O(log n), and space complexity is O(1). This is another example where the real pattern is lower/upper-bound binary search rather than simple exact-match search.',
        },
        {
          id: 'lc-bs-10',
          prompt:
            'Given a sorted matrix where each row is sorted and the first integer of each row is greater than the last integer of the previous row, determine whether a target exists.',
          choices: [
            'Binary Search treating matrix as flattened array',
            'Depth-First Search',
            'Backtracking',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'Because the matrix is globally ordered when read row by row, you can treat it like a single sorted array of size m * n. Use index arithmetic to map a 1D midpoint back to row and column. This yields O(log(mn)) time and O(1) space. DFS and backtracking waste the fact that the data is already ordered.',
        },
        {
          id: 'lc-bs-11',
          prompt:
            'Given an integer array nums and an integer k, split the array into k non-empty contiguous subarrays such that the largest subarray sum is minimized.',
          choices: [
            'Binary Search on answer + greedy feasibility check',
            'Sliding Window',
            'Union Find',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'This is a classic search-on-answer problem. The answer is not an index but a numeric value: the minimum possible largest subarray sum. You binary search that value between max(nums) and sum(nums). For each candidate value, greedily check whether the array can be split into at most k subarrays without any subarray sum exceeding that limit. If feasible, try smaller; otherwise try larger. Time complexity is O(n log S), where S is the size of the answer range, often described as sum(nums) - max(nums). Space complexity is O(1).',
        },
        {
          id: 'lc-bs-12',
          prompt:
            'Koko can eat bananas at some integer speed k per hour. What is the minimum k that lets her finish all piles within h hours?',
          choices: [
            'Binary Search on answer + feasibility check',
            'Dynamic Programming',
            'Topological Sort',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'The key insight is that higher eating speed always makes the task easier, so feasibility is monotonic. That makes the problem ideal for binary search on the answer. Search over k from 1 to max(piles), and for each candidate speed compute total hours required. If the total is within h, search lower; otherwise search higher. Time complexity is O(n log m), where m is the maximum pile size. Space complexity is O(1). This is one of the most common binary-search-on-answer interview problems.',
        },
        {
          id: 'lc-bs-13',
          prompt:
            'Given an array of positive integers weights and an integer days, return the least ship capacity needed to ship all packages within that many days.',
          choices: [
            'Binary Search on answer + greedy simulation',
            'Two Pointers',
            'Backtracking',
            'Breadth-First Search',
          ],
          correctIndex: 0,
          explanation:
            'This is another monotonic feasibility problem. If a certain ship capacity works, then any larger capacity also works. That monotonic property makes binary search on the answer appropriate. Search between max(weights) and sum(weights), and simulate shipping greedily for each trial capacity. Time complexity is O(n log S), where S is the answer range. Space complexity is O(1). Greedy alone is not enough because you still need to find the minimum valid capacity.',
        },
        {
          id: 'lc-bs-14',
          prompt:
            'Given n coins, arrange them into a staircase where the kth row has exactly k coins. Return how many complete rows can be formed.',
          choices: [
            'Binary Search on row count',
            'Sliding Window',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'You want the largest k such that 1 + 2 + ... + k <= n, which is equivalent to k(k + 1) / 2 <= n. Since this condition is monotonic in k, binary search works well over the range 0 to n. Time complexity is O(log n), and space complexity is O(1). A direct mathematical formula also exists, but binary search is often the intended interview pattern because it generalizes well to similar monotonic constraints.',
        },
        {
          id: 'lc-bs-15',
          prompt:
            'Given two sorted arrays nums1 and nums2, find the median of the two sorted arrays in O(log(min(m, n))) time.',
          choices: [
            'Binary Search partitioning',
            'Merge then scan',
            'Heap',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'The optimal solution uses binary search on the partition position of the smaller array. The goal is to split both arrays into left and right halves such that every value on the left is less than or equal to every value on the right, and the total left size matches the median condition. Once the partition is valid, the median can be computed directly from boundary values. This achieves O(log(min(m, n))) time and O(1) space. Merging first would take O(m + n) time, which is easier but not optimal.',
        },
      ],
    },
    bitManipulation: {
      title: 'Bit Manipulation',
      description: 'XOR tricks, masking, binary operations',
      explanation: 'Bit manipulation problems treat integers as binary patterns rather than ordinary numbers. Interviews use this category to test whether you recognize representations, masks, and compact state encoding. Common tasks include checking parity, isolating a bit, turning bits on or off, counting set bits, using XOR to cancel duplicates, or representing subsets with bitmasks. These problems are usually easier once translated from decimal intuition into binary operations.',
      vocab: [
        {
          term: 'bit',
          definition:
            'A single binary digit, either 0 or 1.',
        },
        {
          term: 'binary representation',
          definition:
            'The underlying sequence of bits that stores an integer.',
        },
        {
          term: 'bitmask',
          definition:
            'A binary pattern used to select, clear, or set specific bits.',
        },
        {
          term: 'AND',
          definition:
            'A bitwise operation that keeps a bit as 1 only if both inputs have 1 there.',
        },
        {
          term: 'OR',
          definition:
            'A bitwise operation that sets a bit to 1 if either input has 1 there.',
        },
        {
          term: 'XOR',
          definition:
            'A bitwise operation that sets a bit to 1 only when the inputs differ.',
        },
        {
          term: 'NOT',
          definition:
            'A bitwise operation that flips each bit.',
        },
        {
          term: 'left shift',
          definition:
            'Moves bits to the left, often multiplying by 2 for non-overflowing positive integers.',
        },
        {
          term: 'right shift',
          definition:
            'Moves bits to the right, often dividing by 2 for non-negative integers.',
        },
        {
          term: 'set bit',
          definition:
            'A bit whose value is 1.',
        },
        {
          term: 'unset bit',
          definition:
            'A bit whose value is 0.',
        },
        {
          term: 'toggle',
          definition:
            'Flip a bit from 0 to 1 or from 1 to 0.',
        },
        {
          term: 'least significant bit',
          definition:
            'The rightmost bit, representing the smallest power of two.',
        },
        {
          term: 'most significant bit',
          definition:
            'The leftmost meaningful bit in a number’s binary representation.',
        },
        {
          term: 'popcount',
          definition:
            'The number of set bits in a binary representation.',
        },
        {
          term: 'parity',
          definition:
            'Whether the count of set bits is even or odd.',
        },
        {
          term: 'two’s complement',
          definition:
            'The standard binary system used to represent signed integers.',
        },
        {
          term: 'isolate lowest set bit',
          definition:
            'A common trick using x & -x to keep only the rightmost 1 bit.',
        },
        {
          term: 'clear lowest set bit',
          definition:
            'A common trick using x & (x - 1) to remove the rightmost 1 bit.',
        },
        {
          term: 'subset mask',
          definition:
            'An integer whose bits encode whether elements are included in a subset.',
        },
      ],
      questions: [
        {
          id: 'lc-bit-1',
          prompt:
            'Given an array where every element appears twice except for one, find the single element.',
          choices: [
            'XOR all elements',
            'Hash Map counting',
            'Sorting',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'XOR is ideal because a ^ a = 0 and a ^ 0 = a. All duplicate pairs cancel out, leaving only the single number. This gives O(n) time and O(1) space. A hash map would also work in O(n) time but uses O(n) space. Sorting is O(n log n), which is slower.',
        },
        {
          id: 'lc-bit-2',
          prompt:
            'Given an array where every element appears three times except for one, find that single element.',
          choices: [
            'Bit counting across all positions',
            'XOR only',
            'Heap',
            'Two Pointers',
          ],
          correctIndex: 0,
          explanation:
            'XOR alone does not work when elements appear three times. Instead, count how many numbers have each bit set. Since duplicates appear 3 times, their contributions are multiples of 3. Taking each bit count modulo 3 reconstructs the unique number. Time complexity is O(n * 32) ≈ O(n), and space is O(1).',
        },
        {
          id: 'lc-bit-3',
          prompt:
            'Given two integers, determine if they differ by exactly one bit.',
          choices: [
            'Check if XOR is power of two',
            'Count bits with loop',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'If two numbers differ by exactly one bit, their XOR will have exactly one bit set. A number with one bit set is a power of two. So check x ^ y and verify it is non-zero and (val & (val - 1)) == 0. Time is O(1), space O(1). Counting bits also works but is less optimal.',
        },
        {
          id: 'lc-bit-4',
          prompt:
            'Count the number of 1 bits (Hamming weight) in an integer.',
          choices: [
            'Brian Kernighan’s algorithm',
            'Convert to string and count',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Brian Kernighan’s trick repeatedly removes the lowest set bit using n & (n - 1). Each operation reduces one bit, so the loop runs only as many times as there are set bits. Time complexity is O(k), where k is the number of set bits, which is faster than scanning all 32 bits. Space is O(1).',
        },
        {
          id: 'lc-bit-5',
          prompt:
            'Given an integer n, determine whether it is a power of two.',
          choices: [
            'Check n > 0 and n & (n - 1) == 0',
            'Divide by 2 repeatedly',
            'Binary Search',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'A power of two has exactly one bit set. The expression n & (n - 1) removes the lowest set bit, so if the result is zero, only one bit was present. Time is O(1), space O(1). Repeated division works but is O(log n).',
        },
        {
          id: 'lc-bit-6',
          prompt:
            'Given an integer n, count how many numbers from 0 to n have an odd number of set bits.',
          choices: [
            'Bit DP / parity tracking',
            'Sliding Window',
            'Greedy',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'This is typically solved using DP or recognizing bit parity patterns. The parity (odd/even count of bits) can be derived from previous results or computed efficiently. Time is O(n), space O(n) if storing all results, or O(1) if computed on the fly.',
        },
        {
          id: 'lc-bit-7',
          prompt:
            'Given an array where exactly two elements appear once and all others appear twice, find the two unique elements.',
          choices: [
            'XOR + partition by differing bit',
            'Hash Map',
            'Sorting',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'First XOR all numbers to get x ^ y (the two unique values). Find any set bit in this result, which indicates a position where the two numbers differ. Partition numbers into two groups based on that bit and XOR each group separately to recover the two numbers. Time is O(n), space O(1). Hash map would use extra space.',
        },
        {
          id: 'lc-bit-8',
          prompt:
            'Reverse the bits of a 32-bit unsigned integer.',
          choices: [
            'Bit shifting and masking',
            'String reversal',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Iterate through all 32 bits, shifting the result left and adding the current least significant bit of the input. This runs in O(32) = O(1) time and O(1) space. String conversion works but is less efficient and unnecessary.',
        },
        {
          id: 'lc-bit-9',
          prompt:
            'Given a number, determine if it is a power of four.',
          choices: [
            'Bit check + position constraint',
            'Divide repeatedly',
            'Greedy',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'A power of four must have exactly one bit set (like power of two) AND that bit must be in an even position (0-based). So check n > 0, n & (n - 1) == 0, and (n & 0x55555555) != 0. Time is O(1), space O(1). Division is slower at O(log n).',
        },
        {
          id: 'lc-bit-10',
          prompt:
            'Given an integer, find the number of bits you need to flip to convert it to another integer.',
          choices: [
            'XOR then count set bits',
            'Subtract values',
            'Binary Search',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'XOR identifies which bits differ. Counting the number of set bits in the XOR result gives the number of flips required. Using Brian Kernighan’s algorithm makes counting efficient. Time is O(k), space O(1).',
        },
        {
          id: 'lc-bit-11',
          prompt:
            'Generate all subsets of a set using bit manipulation.',
          choices: [
            'Bitmask enumeration',
            'Backtracking only',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Each subset can be represented by a bitmask from 0 to 2^n - 1. Each bit indicates whether an element is included. This produces all subsets efficiently. Time complexity is O(n * 2^n), and space is O(n) per subset. Backtracking also works, but bitmasking is often cleaner and iterative.',
        },
        {
          id: 'lc-bit-12',
          prompt:
            'Given an integer, swap every pair of adjacent bits.',
          choices: [
            'Bit masking and shifting',
            'Loop and swap manually',
            'Greedy',
            'DFS',
          ],
          correctIndex: 0,
          explanation:
            'Use masks to separate even and odd bits, then shift them in opposite directions and combine. For example, (n & 0xAAAAAAAA) >> 1 and (n & 0x55555555) << 1. Time is O(1), space O(1).',
        },
        {
          id: 'lc-bit-13',
          prompt:
            'Find the missing number in an array containing n distinct numbers from 0 to n.',
          choices: [
            'XOR all indices and values',
            'Sorting',
            'Heap',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'XOR all indices and values together. Since duplicates cancel out, the missing number remains. Time is O(n), space O(1). Arithmetic sum also works, but XOR avoids overflow concerns.',
        },
        {
          id: 'lc-bit-14',
          prompt:
            'Given a number, determine if it has alternating bits (e.g., 101010).',
          choices: [
            'XOR with shifted version',
            'Convert to string',
            'Dynamic Programming',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'If bits alternate, then n ^ (n >> 1) will produce all 1s. A number of all 1s satisfies x & (x + 1) == 0. So check that property. Time is O(1), space O(1). String conversion is slower.',
        },
        {
          id: 'lc-bit-15',
          prompt:
            'Given a list of integers, find the maximum XOR of any two numbers.',
          choices: [
            'Trie (bitwise prefix tree)',
            'Brute force',
            'Sorting',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'The optimal solution builds a bitwise Trie to maximize XOR greedily bit by bit. For each number, try to match opposite bits at each level. This yields O(n * bit_length), typically O(n * 32). Space is O(n * bit_length). Brute force would be O(n^2).',
        },
      ]
    },
    design: {
      title: 'Design',
      description: 'Data structure design (LRU, LFU, etc.)',
      explanation: 'Design problems ask you to build a class or system with specific operations and performance constraints. In LeetCode-style interviews, this usually means designing a data structure such as an LRU cache, min stack, randomized set, hit counter, or median finder. The challenge is not just writing methods that work, but choosing the right internal structures so each operation meets the expected time complexity. You should think in terms of invariants, operation tradeoffs, and how multiple data structures can work together.',
      vocab: [
        {
          term: 'API',
          definition:
            'The public methods and behaviors your class exposes.',
        },
        {
          term: 'operation',
          definition:
            'An action the data structure must support, such as insert, delete, or get.',
        },
        {
          term: 'time complexity',
          definition:
            'How the runtime of an operation grows with input size.',
        },
        {
          term: 'space complexity',
          definition:
            'How much extra memory the design uses.',
        },
        {
          term: 'invariant',
          definition:
            'A condition that must always remain true after every operation.',
        },
        {
          term: 'state',
          definition:
            'The internal data stored by the object at a given moment.',
        },
        {
          term: 'interface',
          definition:
            'The defined inputs and outputs of the class methods.',
        },
        {
          term: 'tradeoff',
          definition:
            'Improving one aspect of the design, such as speed, at the cost of another, such as memory.',
        },
        {
          term: 'eviction',
          definition:
            'Removing an item according to a policy, such as least recently used.',
        },
        {
          term: 'ordering',
          definition:
            'The maintained sequence of elements, often needed for recency or priority logic.',
        },
        {
          term: 'amortized',
          definition:
            'An average cost per operation over a sequence of operations.',
        },
        {
          term: 'lazy deletion',
          definition:
            'Marking something as removed and cleaning it up later instead of immediately.',
        },
        {
          term: 'consistency',
          definition:
            'Keeping multiple internal structures synchronized with each other.',
        },
        {
          term: 'lookup table',
          definition:
            'A structure like a hash map used for fast access by key.',
        },
        {
          term: 'doubly linked list',
          definition:
            'A linked structure often used in design problems when O(1) removal and insertion at known nodes is needed.',
        },
        {
          term: 'heap',
          definition:
            'A priority-based structure used when quick access to min or max is required.',
        },
        {
          term: 'balancing',
          definition:
            'Splitting or organizing data so no operation becomes too expensive.',
        },
        {
          term: 'edge case',
          definition:
            'A special or extreme input scenario that can break a careless design.',
        },
      ],
      questions: [
        {
          id: 'lc-design-1',
          prompt:
            'Design a data structure that supports get(key) and put(key, value) in O(1), while evicting the least recently used item when capacity is exceeded.',
          choices: [
            'Hash Map + Doubly Linked List',
            'Binary Search Tree',
            'Min Heap',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'This is the classic LRU Cache design. A hash map gives O(1) access to nodes by key, and a doubly linked list gives O(1) insertion, removal, and movement of nodes to track recency order. The most recently used item is kept near one end, and the least recently used item is kept at the other end for O(1) eviction. A heap cannot support arbitrary recency updates in true O(1), and a BST would usually give O(log n) operations. Time complexity is O(1) average for both get and put. Space complexity is O(capacity).',
        },
        {
          id: 'lc-design-2',
          prompt:
            'Design a data structure that supports push, pop, top, and retrieving the minimum element in constant time.',
          choices: [
            'Stack with auxiliary min tracking',
            'Queue + Hash Set',
            'Heap only',
            'Binary Search on array',
          ],
          correctIndex: 0,
          explanation:
            'The standard Min Stack solution stores either a second stack of running minimums or stores pairs of {value, currentMin} at each push. That lets top, pop, and getMin all work in O(1). A heap alone cannot support normal stack pop order, and binary search is irrelevant because stack order is last-in-first-out, not sorted. Time complexity is O(1) for all operations. Space complexity is O(n).',
        },
        {
          id: 'lc-design-3',
          prompt:
            'Design a data structure that supports insert(val), remove(val), and getRandom() in average O(1) time.',
          choices: [
            'Array + Hash Map of value to index',
            'Linked List + Queue',
            'Heap + Hash Set',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'The key challenge is making removal O(1) while also supporting O(1) random access. Store values in an array so getRandom can pick a random index in O(1). Use a hash map from value to its array index. For removal, swap the target value with the last array element, update the moved element’s index in the hash map, then pop the last element. This avoids O(n) shifting. Time complexity is O(1) average for all operations. Space complexity is O(n).',
        },
        {
          id: 'lc-design-4',
          prompt:
            'Design a stack that supports push, pop, top, and retrieving the current maximum element in O(1), and popMax in better than O(n).',
          choices: [
            'Doubly Linked List + ordered structure + map',
            'Single stack only',
            'Queue + two pointers',
            'Binary Search on unsorted array',
          ],
          correctIndex: 0,
          explanation:
            'This is the Max Stack style problem. A stack alone can give O(1) max lookup only if you never need efficient removal of the maximum when it is not on top. To support popMax efficiently, you typically combine a doubly linked list for stack order with an ordered map or tree structure keyed by value that points to nodes. That allows removal of the latest maximum node without scanning the whole stack. Time complexity depends on the exact ordered structure, but common solutions achieve O(log n) for popMax and O(1) for top/pop/peekMax or near that. Space complexity is O(n).',
        },
        {
          id: 'lc-design-5',
          prompt:
            'Design a hit counter that records timestamps and returns the number of hits in the past 5 minutes.',
          choices: [
            'Queue or circular buckets by timestamp',
            'Trie + DFS',
            'Union Find',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'Because the query window is fixed at 5 minutes, the design should exploit time locality. One approach uses a queue of timestamps and removes expired hits from the front when querying or recording. Another more optimized fixed-range design uses 300 buckets storing timestamp + count, effectively a circular array. The bucketed approach gives O(1) space relative to the 5-minute window and O(1) time per operation on average. A queue approach is O(1) amortized per hit and O(n) in the worst case during cleanup, with space proportional to hits in the last 5 minutes.',
        },
        {
          id: 'lc-design-6',
          prompt:
            'Design a logger system that should print a message only if the same message has not been printed in the last 10 seconds.',
          choices: [
            'Hash Map of message to last timestamp',
            'Binary Search Tree',
            'Heap only',
            'Sliding Window over characters',
          ],
          correctIndex: 0,
          explanation:
            'This is fundamentally a last-seen lookup problem. A hash map from message to most recent printed timestamp is enough. When a message arrives, check whether it has been seen within the past 10 seconds. If not, update the timestamp and allow printing. Each operation is O(1) average time due to the hash map. Space complexity is O(m), where m is the number of distinct messages retained. More elaborate structures are unnecessary unless the problem also requires cleanup of stale keys.',
        },
        {
          id: 'lc-design-7',
          prompt:
            'Design a time-based key-value store that supports set(key, value, timestamp) and get(key, timestamp), where get returns the value at the greatest timestamp less than or equal to the given timestamp.',
          choices: [
            'Hash Map from key to sorted timestamped values + Binary Search',
            'Heap + queue',
            'Doubly Linked List only',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'For each key, store its values in timestamp order, usually as an array of [timestamp, value] pairs. Then get(key, timestamp) becomes a binary search for the rightmost timestamp less than or equal to the query time. This gives O(1) append time for set if timestamps are added in increasing order, and O(log n) query time per key history. Space complexity is O(total number of stored versions). The important design insight is separating by key first, then using binary search within that key’s history.',
        },
        {
          id: 'lc-design-8',
          prompt:
            'Design an autocomplete system that returns the top matching historical sentences for a typed prefix.',
          choices: [
            'Trie with frequency metadata',
            'Hash Set only',
            'Two Pointers on array',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Autocomplete is a prefix-search problem, which strongly suggests a Trie. Each Trie node can represent a prefix and store enough metadata to retrieve the top matching sentences, such as a list or heap of top candidates, or references that are ranked during traversal. A plain hash set cannot efficiently answer prefix queries without scanning everything. Time complexity depends on the ranking strategy. Traversing the prefix is O(p), where p is prefix length, and selecting top results can range from O(1) to O(k log k) or worse depending on stored metadata. Space complexity is O(total characters stored), often higher due to node overhead.',
        },
        {
          id: 'lc-design-9',
          prompt:
            'Design a file system that supports creating paths and storing values associated with them, such as /a/b -> 5.',
          choices: [
            'Trie-like path tree or Hash Map of full paths',
            'Monotonic Queue',
            'Heap only',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'A file system is naturally hierarchical, so a Trie-like path tree is conceptually clean. Each path segment is a node, and creating /a/b requires verifying that /a exists before inserting b. A simpler design can also use a hash map of full path strings, as long as parent existence is checked by parsing the path. Both are common accepted approaches. Hash map solutions often give O(L) time per operation where L is path length due to string parsing. Trie-style solutions also take O(L) or O(number of segments). Space complexity is O(total stored path content).',
        },
        {
          id: 'lc-design-10',
          prompt:
            'Design a data structure for a moving average from a stream of integers with a fixed window size.',
          choices: [
            'Queue + running sum',
            'Heap + binary search',
            'Trie',
            'Depth-First Search',
          ],
          correctIndex: 0,
          explanation:
            'A queue tracks the current window in insertion order, and a running sum lets each new average be computed in O(1). When a new value arrives and the queue exceeds the window size, remove the oldest value and subtract it from the sum. Then divide by the current queue size or fixed window size as needed. Time complexity is O(1) per next(val) call. Space complexity is O(windowSize). No sorting or complex structure is required because the operation is based only on arrival order.',
        },
        {
          id: 'lc-design-11',
          prompt:
            'Design a browser history system that supports visit(url), back(steps), and forward(steps).',
          choices: [
            'Two stacks or an array with current pointer',
            'Min Heap',
            'Union Find',
            'Trie + DFS',
          ],
          correctIndex: 0,
          explanation:
            'The classic design uses either two stacks or a dynamic array with a current index and truncation of forward history on new visits. With two stacks, one stack stores back history and the other stores forward history. With an array + pointer, visit overwrites forward history beyond the current pointer. Both approaches fit the navigation semantics naturally. Time complexity is O(steps) for back/forward in the straightforward implementation, or effectively O(1) pointer updates per move depending on how operations are counted. Space complexity is O(n) for stored history.',
        },
        {
          id: 'lc-design-12',
          prompt:
            'Design a frequency stack that pops the most frequent element, breaking ties by most recent insertion.',
          choices: [
            'Hash Map of frequencies + Hash Map of stacks by frequency',
            'Single queue',
            'Binary Search Tree only',
            'Two Pointers',
          ],
          correctIndex: 0,
          explanation:
            'The standard FreqStack design tracks each value’s frequency in one hash map, and stores stacks of values grouped by frequency in another hash map. Also track the current maximum frequency. On push, increment the value’s frequency and push it onto the stack for that frequency. On pop, pop from the stack of max frequency, decrement that value’s count, and reduce max frequency if the stack becomes empty. This gives O(1) time for both push and pop on average. Space complexity is O(n).',
        },
        {
          id: 'lc-design-13',
          prompt:
            'Design a rate limiter that allows at most N requests per user within a rolling time window.',
          choices: [
            'Hash Map per user + queue/deque of timestamps',
            'Trie for usernames',
            'Heap sort on requests',
            'Monotonic stack',
          ],
          correctIndex: 0,
          explanation:
            'This problem is about tracking recent timestamps per user. A good design uses a hash map from user ID to a queue or deque of request timestamps. For each new request, remove timestamps older than the allowed time window, then check whether the remaining count is below the limit. If yes, accept and append the new timestamp. Time complexity is O(1) amortized per request because each timestamp is inserted and removed once. Space complexity is proportional to the number of recent requests being tracked. In real systems you might also discuss token bucket or leaky bucket, but for interview-style data structure design, timestamp queues are often the direct fit.',
        },
        {
          id: 'lc-design-14',
          prompt:
            'Design a key-value store that supports incrementing and decrementing string keys and returning one key with the maximal or minimal count in O(1).',
          choices: [
            'Hash Map + Doubly Linked List of count buckets',
            'Min Heap + Max Heap',
            'Trie',
            'Binary Search on sorted keys',
          ],
          correctIndex: 0,
          explanation:
            'This is the All O(1) Data Structure problem. A heap-based solution cannot support both arbitrary count updates and O(1) min/max retrieval with stale-entry cleanup in true O(1). The correct design uses a doubly linked list of count buckets, each holding the set of keys with that count, plus a hash map from key to its current bucket. Increment and decrement move keys between adjacent buckets or create/remove buckets as needed. Min and max keys are available from the head and tail buckets in O(1). All operations are O(1) average. Space complexity is O(n).',
        },
        {
          id: 'lc-design-15',
          prompt:
            'Design a cache that evicts the least frequently used item, with ties broken by least recent use.',
          choices: [
            'Hash Maps + frequency buckets + recency ordering inside each bucket',
            'Single doubly linked list only',
            'Binary Search Tree',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'LFU Cache is harder than LRU because you must track both frequency and recency. The common optimal design uses a hash map from key to node, plus a hash map from frequency to a doubly linked list of nodes with that frequency. Each list maintains recency order among keys of equal frequency. Also track the minimum frequency currently present so eviction is O(1). On access, move the node from frequency f to f + 1. On eviction, remove from the least-recently-used end of the minimum-frequency list. Time complexity is O(1) average for get and put. Space complexity is O(capacity).',
        },
      ]
    },
    dynamicProgramming: {
      title: 'Dynamic Programming',
      description: '1D/2D DP, knapsack, LIS, optimization problems',
      explanation: 'Dynamic programming is used when a problem can be broken into overlapping subproblems and solved by reusing previously computed results. The core idea is to define a state, derive a recurrence relation, and compute results either top-down with memoization or bottom-up with tabulation. In interviews, the difficulty is usually identifying the correct state and transitions rather than writing the code.',
      vocab: [
        {
          term: 'state',
          definition:
            'The minimal set of variables needed to represent a subproblem.',
        },
        {
          term: 'transition',
          definition:
            'The rule that defines how one state depends on previous states.',
        },
        {
          term: 'recurrence relation',
          definition:
            'An equation that expresses a problem in terms of smaller subproblems.',
        },
        {
          term: 'base case',
          definition:
            'The simplest subproblem with a known answer.',
        },
        {
          term: 'memoization',
          definition:
            'Top-down caching of results to avoid recomputation.',
        },
        {
          term: 'tabulation',
          definition:
            'Bottom-up approach that fills a table iteratively.',
        },
        {
          term: 'overlapping subproblems',
          definition:
            'Subproblems that are solved multiple times in a naive approach.',
        },
        {
          term: 'optimal substructure',
          definition:
            'An optimal solution can be built from optimal solutions to subproblems.',
        },
        {
          term: 'dp table',
          definition:
            'A data structure storing computed results for states.',
        },
        {
          term: 'top-down',
          definition:
            'Recursive approach with memoization.',
        },
        {
          term: 'bottom-up',
          definition:
            'Iterative approach building from smallest cases upward.',
        },
        {
          term: 'subsequence',
          definition:
            'A sequence derived by deleting elements without changing order.',
        },
        {
          term: 'knapsack',
          definition:
            'A classic DP problem involving selecting items under constraints.',
        },
        {
          term: 'state compression',
          definition:
            'Reducing memory usage by storing only necessary previous states.',
        },
        {
          term: 'time-space tradeoff',
          definition:
            'Using more memory to reduce computation time or vice versa.',
        },
      ],
      questions: [
        {
          id: 'lc-dp-1',
          prompt:
            'You are climbing a staircase. Each time you can climb either 1 or 2 steps. In how many distinct ways can you reach the top?',
          choices: [
            'Dynamic Programming',
            'Binary Search',
            'Monotonic Stack',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is a classic 1D dynamic programming problem because the number of ways to reach step i depends on previously solved subproblems: ways(i - 1) and ways(i - 2). The recurrence is dp[i] = dp[i - 1] + dp[i - 2]. That makes the structure identical to Fibonacci. A bottom-up solution runs in O(n) time. Space complexity is O(n) with a full DP array, but it can be optimized to O(1) because only the previous two states are needed at any time.',
        },
        {
          id: 'lc-dp-2',
          prompt:
            'Given an array where each element represents the maximum amount of money in a house, return the maximum amount you can rob without robbing two adjacent houses.',
          choices: [
            'Dynamic Programming',
            'Sliding Window',
            'Trie',
            'Topological Sort',
          ],
          correctIndex: 0,
          explanation:
            'This is a DP problem because at each house you choose between two states: rob this house and add its value to the best result from two houses back, or skip it and keep the best result from the previous house. The recurrence is dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]). That overlapping subproblem structure is exactly what DP is for. Time complexity is O(n), and space complexity is O(n) with an array or O(1) with rolling variables.',
        },
        {
          id: 'lc-dp-3',
          prompt:
            'Given an array where each element represents the maximum amount of money in a house arranged in a circle, return the maximum amount you can rob without robbing adjacent houses.',
          choices: [
            'Dynamic Programming with two passes',
            'Greedy',
            'Binary Search',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'This is the circular version of House Robber. Because the first and last houses are adjacent, you cannot include both. The standard DP solution runs the linear House Robber logic twice: once excluding the first house, and once excluding the last house, then takes the maximum of the two results. Each linear pass is O(n), so total time is still O(n). Space complexity is O(1) if each pass uses rolling variables.',
        },
        {
          id: 'lc-dp-4',
          prompt:
            'Given a string s, determine whether it can be segmented into a sequence of one or more dictionary words.',
          choices: [
            'Dynamic Programming',
            'Backtracking',
            'Two Pointers',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is a core DP pattern. Let dp[i] mean whether the prefix s[0:i] can be segmented. For each position i, check earlier split points j and see whether dp[j] is true and s[j:i] is in the dictionary. A naive backtracking solution can become exponential because it re-explores the same suffixes many times. DP avoids that repeated work. Time complexity is commonly O(n^2) plus substring/dictionary lookup cost, assuming efficient set membership. Space complexity is O(n).',
        },
        {
          id: 'lc-dp-5',
          prompt:
            'Given a string, return the length of the longest palindromic subsequence.',
          choices: [
            'Dynamic Programming over substrings',
            'Sliding Window',
            'Greedy',
            'Monotonic Queue',
          ],
          correctIndex: 0,
          explanation:
            'This is a classic interval DP problem. Define dp[i][j] as the length of the longest palindromic subsequence within s[i...j]. If s[i] == s[j], then dp[i][j] = dp[i + 1][j - 1] + 2. Otherwise, dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]). Because each interval depends on smaller intervals, dynamic programming is the natural tool. Time complexity is O(n^2), and space complexity is O(n^2), though some optimizations can reduce space.',
        },
        {
          id: 'lc-dp-6',
          prompt:
            'Given two strings, return the length of their longest common subsequence.',
          choices: [
            '2D Dynamic Programming',
            'Binary Search',
            'Sliding Window',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'Longest Common Subsequence is one of the most standard 2D DP problems. Let dp[i][j] represent the answer for prefixes of the two strings. If the current characters match, add 1 to the answer from dp[i - 1][j - 1]. Otherwise, take the maximum of skipping one character from either string. Time complexity is O(mn), where m and n are the string lengths. Space complexity is O(mn) for the full table, though it can be optimized to O(min(m, n)) if only the length is needed.',
        },
        {
          id: 'lc-dp-7',
          prompt:
            'Given a string s and a string t, return the number of distinct subsequences of s which equal t.',
          choices: [
            'Dynamic Programming',
            'Greedy',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is a counting DP problem. Let dp[i][j] be the number of ways the first i characters of s can form the first j characters of t. If s[i - 1] == t[j - 1], you can either use that matching character or skip it, so the recurrence combines both possibilities. If they do not match, you can only skip the character from s. Time complexity is O(mn), and space complexity is O(mn), with possible reduction to O(n) using rolling rows.',
        },
        {
          id: 'lc-dp-8',
          prompt:
            'Given an array of positive integers, determine whether it can be partitioned into two subsets with equal sum.',
          choices: [
            '0/1 Knapsack Dynamic Programming',
            'Two Pointers',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'If the total sum is odd, the answer is immediately false. Otherwise the problem becomes: can you select a subset summing to total / 2? That is exactly a 0/1 knapsack-style DP. The usual DP tracks which sums are reachable as you process numbers. Time complexity is O(n * target), where target is totalSum / 2. Space complexity is O(target) with a 1D optimized DP array, or O(n * target) with a full table.',
        },
        {
          id: 'lc-dp-9',
          prompt:
            'Given a set of coin denominations and a target amount, return the minimum number of coins needed to make up that amount, or -1 if it is impossible.',
          choices: [
            'Dynamic Programming',
            'Greedy',
            'Binary Search',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'This is a canonical unbounded knapsack / DP problem. Let dp[a] be the minimum number of coins needed to make amount a. For each amount, try every coin and update from dp[a - coin]. Greedy fails in general because locally choosing the largest coin can miss the true minimum unless the coin system has special structure. Time complexity is O(amount * numberOfCoins). Space complexity is O(amount).',
        },
        {
          id: 'lc-dp-10',
          prompt:
            'Given a set of coin denominations and a target amount, return the number of combinations that make up that amount.',
          choices: [
            'Dynamic Programming',
            'Backtracking',
            'Heap',
            'Topological Sort',
          ],
          correctIndex: 0,
          explanation:
            'This is another coin change DP, but now the goal is counting combinations rather than minimizing coin count. The DP state usually means the number of ways to form each amount. Iterating coins in the outer loop ensures combinations are counted without treating different orders as different answers. Time complexity is O(amount * numberOfCoins). Space complexity is O(amount). Backtracking could enumerate all possibilities, but it is much less efficient and unnecessary if only the count is required.',
        },
        {
          id: 'lc-dp-11',
          prompt:
            'Given an array of integers, return the maximum possible sum of a contiguous subarray.',
          choices: [
            'Dynamic Programming (Kadane’s Algorithm)',
            'Sliding Window',
            'Greedy sorting',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Kadane’s Algorithm is a compact DP solution. The key recurrence is: the best subarray ending at index i is either nums[i] alone or nums[i] plus the best subarray ending at i - 1. That is a DP state transition, even though the final implementation is very short. Time complexity is O(n), and space complexity is O(1). Sliding window does not generally work here because negative numbers break the monotonic behavior needed for safe shrinking and expanding.',
        },
        {
          id: 'lc-dp-12',
          prompt:
            'Given an array of integers, return the length of the longest increasing subsequence.',
          choices: [
            'Dynamic Programming',
            'Monotonic Stack',
            'Two Pointers',
            'Breadth-First Search',
          ],
          correctIndex: 0,
          explanation:
            'The standard DP solution defines dp[i] as the length of the longest increasing subsequence ending at index i. For each i, check all earlier j < i and update dp[i] if nums[j] < nums[i]. This gives O(n^2) time and O(n) space. There is also a more advanced O(n log n) solution using binary search, but the problem is still fundamentally categorized as dynamic programming because it is built around optimal substructure over prefixes/endpoints.',
        },
        {
          id: 'lc-dp-13',
          prompt:
            'You are given a grid with non-negative numbers. Starting at the top-left and moving only right or down, find a path to the bottom-right with minimum total sum.',
          choices: [
            'Grid Dynamic Programming',
            'Depth-First Search',
            'Union Find',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Each cell depends only on the minimum path sum to the cell above it and the cell to the left of it. That makes this a straightforward grid DP problem. The recurrence is dp[r][c] = grid[r][c] + min(dp[r - 1][c], dp[r][c - 1]). Time complexity is O(mn), and space complexity is O(mn) with a separate table or O(1) extra if the grid can be updated in place. DFS would explore many redundant paths unless memoized, which turns it back into DP.',
        },
        {
          id: 'lc-dp-14',
          prompt:
            'How many unique paths are there from the top-left to the bottom-right of an m x n grid if you can only move right or down?',
          choices: [
            'Dynamic Programming',
            'Binary Search',
            'Heap',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'The number of ways to reach a cell equals the sum of the ways to reach the cell above and the cell to the left. That recurrence makes this a textbook DP problem. Time complexity is O(mn), and space complexity is O(mn) with a full table or O(n) with rolling-row optimization. There is also a combinatorics solution, but DP is the standard interview approach and generalizes easily to variants with obstacles.',
        },
        {
          id: 'lc-dp-15',
          prompt:
            'Given a string s, return the minimum number of cuts needed to partition it so every substring is a palindrome.',
          choices: [
            'Dynamic Programming',
            'Pure Backtracking',
            'Two Pointers',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'Although the problem looks like a partition-generation problem, the optimal solution is DP. A pure backtracking solution would explore exponentially many partitions. The usual approach precomputes which substrings are palindromes, then uses DP where dp[i] is the minimum cuts needed for the prefix ending at i. That reduces the problem to O(n^2) time with O(n^2) space for the palindrome table, or similar optimized variants. This is a very common interview trap: it looks like backtracking, but the best approach is dynamic programming.',
        },
      ]
    },
    graphs: {
      title: 'Graphs',
      description: 'BFS, DFS, topological sort, shortest path',
      explanation: 'Graph problems model relationships between entities as nodes and edges. The main tasks are traversal, connectivity, shortest path, and cycle detection. Most interview problems reduce to either breadth-first search for shortest paths in unweighted graphs or depth-first search for exploring structure. More advanced problems involve weighted paths, topological sorting, or union-find for connectivity.',
      vocab: [
        {
          term: 'node',
          definition:
            'An individual element or vertex in a graph.',
        },
        {
          term: 'edge',
          definition:
            'A connection between two nodes.',
        },
        {
          term: 'adjacency list',
          definition:
            'A representation where each node stores its neighbors.',
        },
        {
          term: 'adjacency matrix',
          definition:
            'A 2D matrix indicating whether edges exist between nodes.',
        },
        {
          term: 'directed graph',
          definition:
            'Edges have direction from one node to another.',
        },
        {
          term: 'undirected graph',
          definition:
            'Edges have no direction and are bidirectional.',
        },
        {
          term: 'BFS',
          definition:
            'Breadth-first search exploring level by level using a queue.',
        },
        {
          term: 'DFS',
          definition:
            'Depth-first search exploring as far as possible along a branch.',
        },
        {
          term: 'visited set',
          definition:
            'Tracks nodes already explored to prevent cycles or repeats.',
        },
        {
          term: 'cycle',
          definition:
            'A path that starts and ends at the same node.',
        },
        {
          term: 'connected component',
          definition:
            'A group of nodes reachable from each other.',
        },
        {
          term: 'shortest path',
          definition:
            'The minimum distance or cost path between nodes.',
        },
        {
          term: 'topological sort',
          definition:
            'An ordering of nodes in a directed acyclic graph respecting dependencies.',
        },
        {
          term: 'Dijkstra',
          definition:
            'An algorithm for shortest paths in weighted graphs with non-negative edges.',
        },
        {
          term: 'union-find',
          definition:
            'A structure for tracking connected components efficiently.',
        },
        {
          term: 'in-degree',
          definition:
            'The number of incoming edges to a node.',
        },
        {
          term: 'out-degree',
          definition:
            'The number of outgoing edges from a node.',
        },
      ],
      questions: [
        {
          id: 'lc-graph-1',
          prompt:
            'Given a 2D grid of "1"s and "0"s, count how many islands are present, where islands are groups of adjacent land cells connected horizontally or vertically.',
          choices: [
            'DFS or BFS graph traversal',
            'Binary Search',
            'Sliding Window',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'This is a graph connectivity problem in disguise. Each land cell is a node, and edges exist between adjacent land cells. The correct approach is to traverse each unvisited land cell with DFS or BFS and mark the entire connected component as visited, then increment the island count once per component. Time complexity is O(mn) because each cell is visited at most once. Space complexity is O(mn) in the worst case for the visited structure or recursion/queue usage, though it can be reduced by mutating the grid in place.',
        },
        {
          id: 'lc-graph-2',
          prompt:
            'Given a binary matrix, return the maximum area of an island, where area is the number of connected land cells.',
          choices: [
            'DFS or BFS connected-component traversal',
            'Heap',
            'Two Pointers',
            'Prefix Sum',
          ],
          correctIndex: 0,
          explanation:
            'This is another connected-component problem. Traverse each unvisited land cell using DFS or BFS, counting how many cells belong to that component, and track the maximum component size seen. Each cell is processed at most once, so time complexity is O(mn). Space complexity is O(mn) in the worst case due to recursion depth or BFS queue size, though in-place marking can avoid a separate visited matrix.',
        },
        {
          id: 'lc-graph-3',
          prompt:
            'Given a grid where fresh oranges become rotten if adjacent to a rotten orange each minute, return the minimum number of minutes until no fresh oranges remain, or -1 if impossible.',
          choices: [
            'Multi-source BFS',
            'Depth-First Search',
            'Binary Search',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'This is a shortest-time spread problem, which strongly suggests BFS. Because all initially rotten oranges begin spreading at time 0 simultaneously, the correct approach is multi-source BFS: enqueue all rotten oranges first, then process level by level, where each BFS layer represents one minute passing. DFS is not appropriate because it does not naturally preserve minimum-time layering. Time complexity is O(mn), since each cell is enqueued and processed at most once. Space complexity is O(mn) for the queue in the worst case.',
        },
        {
          id: 'lc-graph-4',
          prompt:
            'Given a number of courses and prerequisite pairs, determine whether it is possible to finish all courses.',
          choices: [
            'Topological Sort or cycle detection in directed graph',
            'Union Find',
            'Sliding Window',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'This is a directed graph cycle-detection problem. If the prerequisite graph contains a cycle, then it is impossible to finish all courses. The standard solutions are either topological sort using indegrees (Kahn’s algorithm) or DFS with recursion states to detect back edges. Time complexity is O(V + E), where V is the number of courses and E is the number of prerequisites. Space complexity is also O(V + E) for the adjacency list and bookkeeping structures. Union find is more natural for undirected connectivity, not directed prerequisite ordering.',
        },
        {
          id: 'lc-graph-5',
          prompt:
            'Given a number of courses and prerequisite pairs, return one valid order in which all courses can be completed, or an empty array if impossible.',
          choices: [
            'Topological Sort',
            'Binary Search',
            'Greedy interval scheduling',
            'Heap only',
          ],
          correctIndex: 0,
          explanation:
            'This is the constructive version of course scheduling, so you need a topological ordering of a directed acyclic graph. Kahn’s algorithm uses indegrees and a queue of nodes with zero indegree, outputting courses as their prerequisites are satisfied. If you output all courses, that order is valid. If not, a cycle exists. Time complexity is O(V + E), and space complexity is O(V + E). A heap can be added if you want lexicographically smallest order, but topological sort is the core pattern.',
        },
        {
          id: 'lc-graph-6',
          prompt:
            'Given an undirected graph represented as adjacency lists, determine whether it is a valid tree.',
          choices: [
            'Graph traversal with edge-count / cycle check',
            'Trie',
            'Sliding Window',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'An undirected graph is a valid tree if and only if it is fully connected and has exactly n - 1 edges. You can solve this by checking the edge count first, then running DFS, BFS, or Union Find to verify connectivity and lack of cycles. The graph-traversal framing is the most direct in interview settings. Time complexity is O(V + E), and space complexity is O(V + E) for adjacency representation and visited tracking. The n - 1 edge property is a strong shortcut that helps simplify the reasoning.',
        },
        {
          id: 'lc-graph-7',
          prompt:
            'Given n nodes labeled from 0 to n - 1 and a list of undirected edges, count how many connected components are in the graph.',
          choices: [
            'DFS, BFS, or Union Find over components',
            'Monotonic Queue',
            'Prefix Sum',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'This is a connected-components problem. Build the graph and run DFS or BFS from each unvisited node, incrementing the component count each time a new traversal starts. Union Find is also a strong fit because it directly models merging connected nodes. Time complexity is O(V + E) for DFS/BFS, or near O(E * α(V)) for Union Find, which is effectively linear in practice. Space complexity is O(V + E) for adjacency-based traversal, or O(V) for Union Find storage.',
        },
        {
          id: 'lc-graph-8',
          prompt:
            'Given an undirected graph, determine whether it is bipartite.',
          choices: [
            'BFS or DFS graph coloring',
            'Topological Sort',
            'Binary Search',
            'Two Pointers',
          ],
          correctIndex: 0,
          explanation:
            'A graph is bipartite if you can color its nodes with two colors such that no adjacent nodes share the same color. BFS or DFS can assign alternating colors as you traverse edges. If you ever find an edge connecting two nodes of the same color, the graph is not bipartite. Time complexity is O(V + E), and space complexity is O(V + E) with adjacency lists plus O(V) color storage. Topological sort applies to directed acyclic graphs, not general bipartite testing.',
        },
        {
          id: 'lc-graph-9',
          prompt:
            'Given a grid of heights, water can flow from a cell to neighboring cells of equal or lower height. Return all cells from which water can reach both the Pacific and Atlantic edges.',
          choices: [
            'Reverse-flow DFS or BFS from both oceans',
            'Greedy',
            'Sliding Window',
            'Heap sort',
          ],
          correctIndex: 0,
          explanation:
            'The trick is to reverse the search direction. Instead of checking each cell individually to see if it can flow outward, start from each ocean border and traverse inward only to cells with height greater than or equal to the current cell. Compute the set reachable from the Pacific and the set reachable from the Atlantic, then intersect them. This uses graph traversal over the grid and avoids massive repeated work. Time complexity is O(mn), since each cell is visited at most once per ocean traversal. Space complexity is O(mn) for visited sets and recursion/queue storage.',
        },
        {
          id: 'lc-graph-10',
          prompt:
            'Given a matrix of 0s and 1s, return the distance of each cell to the nearest 0.',
          choices: [
            'Multi-source BFS',
            'Depth-First Search',
            'Union Find',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'This is a nearest-source shortest path problem on an unweighted grid. The optimal approach is multi-source BFS: enqueue all 0-cells first with distance 0, then expand outward so the first time a 1-cell is reached, it receives its minimum distance to any 0. DFS would not preserve shortest distances naturally without additional machinery. Time complexity is O(mn), and space complexity is O(mn) for the queue and distance/visited structures.',
        },
        {
          id: 'lc-graph-11',
          prompt:
            'Given a directed graph where each edge has a non-negative weight, find the shortest distance from a source node to all other nodes.',
          choices: [
            'Dijkstra’s Algorithm',
            'Topological Sort only',
            'Union Find',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'For general directed graphs with non-negative weights, Dijkstra’s algorithm is the standard solution. It repeatedly selects the currently known closest unprocessed node and relaxes its outgoing edges. With an adjacency list and priority queue, the time complexity is O((V + E) log V). Space complexity is O(V + E). Topological-sort-based shortest paths only work when the graph is a DAG, so Dijkstra is the correct general answer here.',
        },
        {
          id: 'lc-graph-12',
          prompt:
            'Given flights between cities with prices, a source, a destination, and a maximum number of stops k, return the cheapest price within that stop limit.',
          choices: [
            'BFS / shortest-path traversal with state including stops',
            'Union Find',
            'Trie',
            'Two Pointers',
          ],
          correctIndex: 0,
          explanation:
            'This is a shortest-path problem with an extra state constraint: number of stops used. The solution must track both cost and stop count, so plain BFS on nodes alone is insufficient. Common correct approaches include modified BFS by levels, Bellman-Ford style relaxation up to k + 1 times, or Dijkstra-like traversal with state. The important pattern is graph shortest path with constrained state, not standard array techniques. Time complexity depends on the exact approach; Bellman-Ford style is O(kE), while priority-queue solutions are often around O(E log V) with additional state management. Space complexity typically includes graph storage plus queue or heap state.',
        },
        {
          id: 'lc-graph-13',
          prompt:
            'Given equations like a / b = 2.0 and b / c = 3.0, answer queries such as a / c.',
          choices: [
            'Weighted graph traversal',
            'Binary Search',
            'Monotonic Queue',
            'Heap merge',
          ],
          correctIndex: 0,
          explanation:
            'Treat each variable as a node and each equation as a weighted directed edge. For example, a -> b has weight 2.0 and b -> a has weight 1 / 2.0. To answer a query, run DFS or BFS from the numerator to the denominator, multiplying edge weights along the path. This is a graph reachability problem with multiplicative edge weights. Time complexity is O(V + E) per query in the worst case if you traverse the graph fresh each time, and space complexity is O(V + E) for graph storage.',
        },
        {
          id: 'lc-graph-14',
          prompt:
            'Given a list of words in an alien language already sorted lexicographically, determine a valid character ordering for that language.',
          choices: [
            'Build graph of precedence constraints + Topological Sort',
            'Trie only',
            'Sliding Window',
            'Binary Search on characters',
          ],
          correctIndex: 0,
          explanation:
            'This is a graph ordering problem. Compare adjacent words and find the first differing character; that gives a precedence edge between characters. Once all such edges are built, the problem becomes topological sorting of the character graph. If a cycle exists, no valid ordering exists. Time complexity is O(total characters in input + number of edges/nodes in the derived graph). Space complexity is O(V + E), where V is the number of distinct characters.',
        },
        {
          id: 'lc-graph-15',
          prompt:
            'Given a weighted undirected graph, find the minimum total cost needed to connect all nodes.',
          choices: [
            'Minimum Spanning Tree (Kruskal or Prim)',
            'Binary Search',
            'Sliding Window',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'This is a minimum spanning tree problem. The correct patterns are Kruskal’s algorithm, which sorts edges and uses Union Find to avoid cycles, or Prim’s algorithm, which grows the tree outward using a priority queue. Both are standard graph algorithms for minimum-cost full connectivity. Kruskal runs in O(E log E), largely from sorting edges, with near-constant amortized Union Find operations. Prim with a heap is typically O(E log V). Space complexity is O(V + E), depending on representation.',
        },
      ]
    },
    greedy: {
      title: 'Greedy',
      description: 'Locally optimal decisions for global optimum',
      explanation: 'Greedy algorithms make the best immediate choice at each step without revisiting previous decisions. They work when a problem has the greedy-choice property, meaning a locally optimal decision leads to a globally optimal solution. In interviews, recognizing when a greedy approach works is key, often involving sorting, intervals, or prioritizing certain elements.',
      vocab: [
        {
          term: 'greedy choice',
          definition:
            'Selecting the locally optimal option at each step.',
        },
        {
          term: 'local optimum',
          definition:
            'The best choice at a specific step.',
        },
        {
          term: 'global optimum',
          definition:
            'The best overall solution to the problem.',
        },
        {
          term: 'greedy property',
          definition:
            'The condition that guarantees local choices lead to a global solution.',
        },
        {
          term: 'interval scheduling',
          definition:
            'Selecting non-overlapping intervals to maximize count.',
        },
        {
          term: 'sorting',
          definition:
            'Often used to order elements before applying greedy logic.',
        },
        {
          term: 'priority',
          definition:
            'Choosing elements based on highest or lowest value.',
        },
        {
          term: 'exchange argument',
          definition:
            'A proof technique showing a greedy solution can be transformed into an optimal one.',
        },
        {
          term: 'feasibility',
          definition:
            'Ensuring a choice does not violate constraints.',
        },
        {
          term: 'deadline',
          definition:
            'A constraint often used in scheduling problems.',
        },
        {
          term: 'activity selection',
          definition:
            'A classic greedy problem selecting maximum compatible activities.',
        },
        {
          term: 'coin change (greedy)',
          definition:
            'Choosing largest denominations first when the system allows optimality.',
        },
        {
          term: 'fractional knapsack',
          definition:
            'A problem solvable greedily by taking highest value-to-weight ratio.',
        },
      ],
      questions: [
        {
          id: 'lc-greedy-1',
          prompt:
            'Given intervals representing meeting times, determine the minimum number of meeting rooms required.',
          choices: [
            'Heap to track earliest ending meeting',
            'Dynamic Programming',
            'Binary Search only',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Sort meetings by start time, then use a min-heap to track the earliest ending meeting currently occupying a room. If the next meeting starts after the earliest end, reuse that room; otherwise allocate a new one. This greedy strategy works because we always free the earliest finishing meeting first. Time complexity is O(n log n) due to sorting and heap operations. Space complexity is O(n) in the worst case for the heap.',
        },
        {
          id: 'lc-greedy-2',
          prompt:
            'Given intervals, remove the minimum number of intervals so the rest do not overlap.',
          choices: [
            'Sort by end time and greedily select',
            'Backtracking all subsets',
            'Union Find',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'This is a classic interval scheduling problem. Sorting by end time ensures that we always pick the interval that leaves the most room for future intervals. Greedily selecting non-overlapping intervals maximizes how many we keep, so removing the rest minimizes removals. Time complexity is O(n log n) due to sorting. Space complexity is O(1) if done in-place. Backtracking would be exponential and unnecessary.',
        },
        {
          id: 'lc-greedy-3',
          prompt:
            'Given an array of non-negative integers where each element represents maximum jump length, determine if you can reach the last index.',
          choices: [
            'Greedy tracking furthest reachable index',
            'Dynamic Programming',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Track the furthest index reachable as you iterate. If at any point your current index exceeds that reach, you cannot proceed. Otherwise, update the reach with max(reach, i + nums[i]). This works because you only care about the best reachable boundary at each step, not all paths. Time complexity is O(n), space O(1). DP works but is less efficient.',
        },
        {
          id: 'lc-greedy-4',
          prompt:
            'Given the same jump array, return the minimum number of jumps needed to reach the last index.',
          choices: [
            'Greedy level-based jump expansion',
            'Binary Search',
            'Union Find',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'Treat the problem like BFS layers. Track the current jump range and the next maximum reachable range. When you reach the end of the current range, increment jump count and expand to the next range. This greedy approach ensures minimum jumps because each expansion covers the maximum possible reach. Time complexity is O(n), space O(1).',
        },
        {
          id: 'lc-greedy-5',
          prompt:
            'Given a list of coin denominations and an amount, find the minimum number of coins needed (assuming canonical coin system like US coins).',
          choices: [
            'Greedy choose largest coin first',
            'Dynamic Programming',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'In canonical coin systems (like US currency), greedy works by always taking the largest coin first. This works due to the specific structure of denominations. However, in general coin systems this fails, and DP is required. Time complexity is O(n) over number of coins chosen, space O(1). This is a key “greedy works only under conditions” question.',
        },
        {
          id: 'lc-greedy-6',
          prompt:
            'Given gas stations and costs between them in a circular route, determine if you can complete the circuit.',
          choices: [
            'Greedy running total reset',
            'Backtracking',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'If total gas < total cost, it is impossible. Otherwise, the greedy insight is that whenever your running balance becomes negative, none of the stations in that segment can be a valid start, so you reset the start position. This works because deficits invalidate all prior candidates. Time complexity is O(n), space O(1). Backtracking would be O(n^2).',
        },
        {
          id: 'lc-greedy-7',
          prompt:
            'Given intervals, determine the maximum number of non-overlapping intervals you can attend.',
          choices: [
            'Sort by end time and select greedily',
            'Dynamic Programming',
            'Union Find',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'This is the canonical activity selection problem. Sorting by earliest finishing time ensures that each chosen interval leaves maximum room for future intervals. This greedy strategy is provably optimal. Time complexity is O(n log n), space O(1).',
        },
        {
          id: 'lc-greedy-8',
          prompt:
            'Given a string of parentheses with some invalid placements, remove the minimum number to make it valid.',
          choices: [
            'Greedy counting + stack or passes',
            'Backtracking all removals',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'You can greedily remove invalid parentheses by scanning left-to-right to remove extra closing brackets, then right-to-left to remove extra opening brackets. Alternatively, use a stack to track indices. This avoids exponential backtracking. Time complexity is O(n), space O(n). Backtracking would be exponential if trying all removals.',
        },
        {
          id: 'lc-greedy-9',
          prompt:
            'Given tasks with deadlines and profits, schedule tasks to maximize total profit assuming one task per time slot.',
          choices: [
            'Greedy by profit with slot assignment',
            'Dynamic Programming',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Sort tasks by descending profit, then assign each to the latest available slot before its deadline. This ensures high-profit tasks are prioritized while preserving flexibility. Often implemented with a union-find or array for slots. Time complexity is O(n log n) due to sorting. Space complexity is O(n).',
        },
        {
          id: 'lc-greedy-10',
          prompt:
            'Given a string, partition it into as many parts as possible so that each letter appears in at most one part.',
          choices: [
            'Greedy tracking last occurrence',
            'Dynamic Programming',
            'Sliding Window',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'First compute the last occurrence of each character. Then scan the string, extending the current partition until you reach the furthest last occurrence of any character seen so far. At that point, you can safely cut the partition. This greedy works because you delay splitting until it is guaranteed safe. Time complexity is O(n), space O(1) for fixed alphabet.',
        },
        {
          id: 'lc-greedy-11',
          prompt:
            'Given an array, find the maximum number of chunks you can split it into so that sorting each chunk individually results in a fully sorted array.',
          choices: [
            'Greedy tracking max prefix',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Track the maximum value seen so far while scanning. Whenever the current index equals that maximum, you can form a chunk. This works because all elements up to that point are guaranteed to belong within that segment. Time complexity is O(n), space O(1).',
        },
        {
          id: 'lc-greedy-12',
          prompt:
            'Given an array of integers, find the maximum product subarray.',
          choices: [
            'Dynamic Programming tracking max/min',
            'Greedy only',
            'Binary Search',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'This is NOT purely greedy. Negative numbers can flip signs, so you must track both maximum and minimum products at each step. This is a DP problem with state transitions. Time complexity is O(n), space O(1). This is a classic trap where greedy intuition fails.',
        },
        {
          id: 'lc-greedy-13',
          prompt:
            'Given children with greed factors and cookies with sizes, assign cookies to maximize satisfied children.',
          choices: [
            'Greedy matching smallest sufficient cookie',
            'Dynamic Programming',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Sort both arrays and assign the smallest cookie that satisfies each child. This greedy strategy works because using larger cookies early would waste resources that could satisfy more children later. Time complexity is O(n log n) due to sorting. Space complexity is O(1) if sorting in place.',
        },
        {
          id: 'lc-greedy-14',
          prompt:
            'Given a string, remove duplicate letters so that every letter appears once and result is smallest lexicographically.',
          choices: [
            'Greedy with stack and last occurrence tracking',
            'Backtracking all permutations',
            'Binary Search',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Use a stack and track last occurrences of characters. While the current character is smaller than the top of the stack and the top character appears later again, pop it. This ensures lexicographic minimality while maintaining feasibility. Time complexity is O(n), space O(n). Backtracking would be factorial.',
        },
        {
          id: 'lc-greedy-15',
          prompt:
            'Given an array of intervals, merge all overlapping intervals.',
          choices: [
            'Sort and merge greedily',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Sort intervals by start time, then iterate and merge overlapping intervals by extending the current interval’s end. This greedy approach works because sorting ensures all overlaps are adjacent. Time complexity is O(n log n), space O(n) for result storage.',
        },
      ]
    },
    hashing: {
      title: 'Hashing',
      description: 'HashMap, HashSet, frequency counting',
      explanation: 'Hashing uses a hash function to map keys to indices, enabling average O(1) lookup, insertion, and deletion. In interviews, hashing is often used to track seen elements, count frequencies, or quickly check for complements. Many array problems become trivial once you realize a hash map or set can eliminate nested loops.',
      vocab: [
        {
          term: 'hash function',
          definition:
            'A function that maps input keys to indices in a table.',
        },
        {
          term: 'hash map',
          definition:
            'A data structure storing key-value pairs with fast lookup.',
        },
        {
          term: 'hash set',
          definition:
            'A collection storing unique elements with fast membership checks.',
        },
        {
          term: 'collision',
          definition:
            'When two keys map to the same index.',
        },
        {
          term: 'bucket',
          definition:
            'A storage location in a hash table for elements with the same hash.',
        },
        {
          term: 'chaining',
          definition:
            'Handling collisions by storing multiple elements in a list at one index.',
        },
        {
          term: 'open addressing',
          definition:
            'Handling collisions by probing other indices.',
        },
        {
          term: 'load factor',
          definition:
            'The ratio of stored elements to table size.',
        },
        {
          term: 'rehashing',
          definition:
            'Resizing and redistributing elements when the table grows.',
        },
        {
          term: 'frequency map',
          definition:
            'A hash map counting occurrences of elements.',
        },
        {
          term: 'lookup',
          definition:
            'Retrieving a value associated with a key.',
        },
        {
          term: 'complement',
          definition:
            'A value needed to complete a condition, often used in sum problems.',
        },
        {
          term: 'key uniqueness',
          definition:
            'Ensuring each key maps to a single value.',
        },
        {
          term: 'amortized O(1)',
          definition:
            'Average constant time per operation over many operations.',
        },
      ],
      questions: [
        {
          id: 'lc-hash-1',
          prompt:
            'Given an array of integers and a target, return the indices of the two numbers that add up to the target.',
          choices: [
            'Hash Map lookup while scanning',
            'Two Pointers',
            'Binary Search on each value',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'The optimal solution uses a hash map to store numbers already seen and their indices. As you scan the array, compute the complement target - nums[i] and check whether it is already in the map. If it is, you have found the pair immediately. This works in O(n) time because each lookup and insertion is O(1) on average. Space complexity is O(n) in the worst case if no answer is found until the end. Two pointers only works directly if the array is sorted, which this problem does not guarantee.',
        },
        {
          id: 'lc-hash-2',
          prompt:
            'Given an array of integers, return true if any value appears at least twice, and false if all values are distinct.',
          choices: [
            'Hash Set membership check',
            'Sliding Window',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'A hash set is the most direct solution. Scan the array once, and for each number, check whether it is already in the set. If yes, return true; otherwise add it and continue. This gives O(n) time on average, since set lookups and insertions are O(1) average case, and O(n) extra space in the worst case. Sorting also works, but that would usually take O(n log n) time.',
        },
        {
          id: 'lc-hash-3',
          prompt:
            'Given two strings s and t, determine whether t is an anagram of s.',
          choices: [
            'Character frequency counting',
            'Two Pointers',
            'Heap',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is a frequency-counting problem. Count how many times each character appears in one string and compare or subtract using the second string. If the strings differ in length, return false immediately. With a fixed alphabet like lowercase English letters, time complexity is O(n) and space complexity is O(1), since the counting array has constant size. For a general alphabet, space is O(k), where k is the number of distinct characters. Sorting would solve it too, but would take O(n log n) time.',
        },
        {
          id: 'lc-hash-4',
          prompt:
            'Given an array of integers, find the length of the longest consecutive sequence of values.',
          choices: [
            'Hash Set with sequence-start detection',
            'Sort and scan',
            'Backtracking',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'Insert all numbers into a hash set, then only start expanding a sequence from numbers that do not have a predecessor in the set. That prevents repeated work, because each sequence is counted only once from its true beginning. The average-case time complexity is O(n), since each number is visited only a constant number of times overall. Space complexity is O(n) for the set. Sorting would be O(n log n), which is slower.',
        },
        {
          id: 'lc-hash-5',
          prompt:
            'Given an array of integers and an integer k, return true if there are two distinct indices i and j such that nums[i] == nums[j] and |i - j| <= k.',
          choices: [
            'Hash Map of value to most recent index',
            'Two Pointers',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Store the most recent index where each value was seen in a hash map. As you scan, if the current value has appeared before and the index difference is at most k, return true. Then update the stored index to the current one. This works in O(n) time with O(n) extra space in the worst case. A sliding-window hash set approach can also work, but the most direct pattern-recognition answer is hash-based last-seen indexing.',
        },
        {
          id: 'lc-hash-6',
          prompt:
            'Given an array of strings, group the strings into lists of anagrams.',
          choices: [
            'Hash by character signature',
            'Monotonic Stack',
            'Binary Search',
            'Greedy interval selection',
          ],
          correctIndex: 0,
          explanation:
            'The key idea is to map each word to a canonical signature so that all anagrams share the same key. Common signatures are a sorted version of the string or a fixed-size frequency tuple. Use a hash map from that signature to the list of words belonging to the group. If you sort each word, total time is O(n * k log k), where n is the number of strings and k is the maximum string length. If you use a 26-count signature for lowercase English letters, time becomes O(n * k). Space complexity is O(n * k) overall for storing the grouped output plus map overhead.',
        },
        {
          id: 'lc-hash-7',
          prompt:
            'Given an array of integers, return the length of the longest subarray whose sum equals k.',
          choices: [
            'Prefix Sum + Hash Map of earliest index',
            'Sliding Window',
            'Two Pointers',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'Use a running prefix sum and store the earliest index where each prefix sum appears. If the current prefix sum is curr and a previous prefix sum curr - k was seen at index j, then the subarray from j + 1 to the current index sums to k. Storing the earliest index is important because it maximizes subarray length. Time complexity is O(n), and space complexity is O(n). Sliding window does not generally work here because negative numbers can break the monotonic behavior needed for safe window adjustment.',
        },
        {
          id: 'lc-hash-8',
          prompt:
            'Given a list of words and a pattern string, return all words that match the pattern under a bijection between letters.',
          choices: [
            'Hash Map character mapping in both directions',
            'Trie prefix search',
            'Binary Search',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This problem is about enforcing a one-to-one mapping between pattern characters and word characters. The standard approach uses two hash maps, one in each direction, or equivalent set logic, to ensure the mapping is consistent and bijective. Each word check runs in O(m), where m is word length, and if there are n words, total time is O(nm). Space complexity per check is O(1) or O(k) depending on alphabet size. A single map is not enough unless you also verify reverse uniqueness.',
        },
        {
          id: 'lc-hash-9',
          prompt:
            'Given two lists of restaurant names, find the common restaurants with the smallest sum of indices.',
          choices: [
            'Hash Map one list, scan the other',
            'Two Pointers',
            'Monotonic Queue',
            'Depth-First Search',
          ],
          correctIndex: 0,
          explanation:
            'Store the first list in a hash map from restaurant name to index. Then scan the second list and, whenever a name is found in the map, compute the index sum and track the minimum. This gives O(n + m) time, where n and m are the list lengths, because each list is scanned once and lookups are O(1) average. Space complexity is O(n) for the map. Two pointers would require sorting and would lose the original index information that the problem depends on.',
        },
        {
          id: 'lc-hash-10',
          prompt:
            'Given a list of points on a 2D plane, determine the maximum number of points that lie on the same straight line.',
          choices: [
            'Hash slope counts per anchor point',
            'Union Find',
            'Sliding Window',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'For each point as an anchor, compute the slope it forms with every other point and count identical slopes in a hash map. Points sharing the same slope relative to the same anchor lie on the same line. To avoid floating-point issues, the slope is often represented as a reduced fraction using gcd normalization. Time complexity is O(n^2), because each pair is considered relative to anchors. Space complexity is O(n) per anchor iteration for the slope-count map.',
        },
        {
          id: 'lc-hash-11',
          prompt:
            'Given a list of strings, return the top k most frequent strings, breaking ties lexicographically.',
          choices: [
            'Hash Map frequency count + Heap',
            'Binary Search',
            'Two Pointers',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'The core first step is hashing: count the frequency of each word in a hash map. After that, use a heap or sorting to extract the top k according to frequency and tie-break rules. Building the frequency map takes O(n) time. If there are u unique words, using a heap gives roughly O(u log k) or O(u log u) depending on the approach, and space complexity is O(u). This is a good example of a question where hashing is necessary but combined with another structure for the final ranking.',
        },
        {
          id: 'lc-hash-12',
          prompt:
            'Given an array of integers, count the number of subarrays whose sum equals k.',
          choices: [
            'Prefix Sum + Hash Map of prefix frequencies',
            'Sliding Window',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'As you scan the array, keep a running prefix sum curr. If a previous prefix sum curr - k has occurred x times, then there are x subarrays ending at the current index whose sum is k. So store frequencies of prefix sums in a hash map and add the frequency of curr - k to the answer at each step. This yields O(n) time and O(n) space. Sliding window does not work in general because negative numbers can cause sums to move unpredictably when the window changes.',
        },
        {
          id: 'lc-hash-13',
          prompt:
            'Given an array of equal-length strings, find all starting indices in a string where a concatenation of all those words appears exactly once and without intervening characters.',
          choices: [
            'Hash Map word counts + fixed-stride window',
            'Binary Search',
            'Union Find',
            'Heap only',
          ],
          correctIndex: 0,
          explanation:
            'This problem is fundamentally about comparing word frequencies, not character frequencies. Build a target hash map of the required words and their counts. Then scan the string using offsets aligned to word length, maintaining a sliding window of seen words and their counts. The hashing is what makes the comparison efficient. Time complexity is roughly O(n * wordLength) or O(n) relative to the number of word-sized chunks processed, depending on how you describe the stride logic. Space complexity is O(u), where u is the number of unique words.',
        },
        {
          id: 'lc-hash-14',
          prompt:
            'Given a string, find the index of the first non-repeating character, or return -1 if none exists.',
          choices: [
            'Hash Map frequency count then second pass',
            'Two Pointers',
            'Monotonic Stack',
            'Greedy sorting',
          ],
          correctIndex: 0,
          explanation:
            'Count the frequency of each character first, then scan the string again and return the first index whose character appears exactly once. The second pass is important because frequency alone does not preserve first occurrence order. Time complexity is O(n), and space complexity is O(1) for a fixed alphabet or O(k) for a general character set. Sorting would destroy the original order, which is essential to the question.',
        },
        {
          id: 'lc-hash-15',
          prompt:
            'Given an array of integers, determine whether there exists a pair of indices i and j such that nums[i] - nums[j] = k.',
          choices: [
            'Hash Set lookup of complements',
            'Backtracking',
            'Trie',
            'Topological Sort',
          ],
          correctIndex: 0,
          explanation:
            'Insert all values into a hash set, then for each number check whether num + k or num - k exists, depending on the problem wording. For the common k-difference formulation, checking num + k is enough if you iterate consistently. This gives O(n) average time and O(n) space. Sorting with two pointers is also a valid pattern for some variants, but hashing is the most direct unsorted-array solution and avoids O(n log n) sorting cost.',
        },
      ]
    },
    heap: {
      title: 'Heap / Priority Queue',
      description: 'Top K, streaming, merging sorted data',
      explanation: 'Heaps are tree-based structures that maintain a partial ordering, allowing fast access to the smallest or largest element. They are commonly used for priority queues, top-k problems, and streaming data scenarios. In interviews, heaps are useful when you need to repeatedly extract the next best element or maintain a dynamic set of candidates.',
      vocab: [
        {
          term: 'heap',
          definition:
            'A complete binary tree satisfying the heap property.',
        },
        {
          term: 'min heap',
          definition:
            'A heap where the smallest element is at the root.',
        },
        {
          term: 'max heap',
          definition:
            'A heap where the largest element is at the root.',
        },
        {
          term: 'priority queue',
          definition:
            'An abstract structure where elements are removed by priority.',
        },
        {
          term: 'heap property',
          definition:
            'Each parent node is ordered relative to its children.',
        },
        {
          term: 'insert',
          definition:
            'Adding an element while maintaining heap structure.',
        },
        {
          term: 'extract',
          definition:
            'Removing the root element and rebalancing the heap.',
        },
        {
          term: 'heapify',
          definition:
            'Transforming an array into a valid heap.',
        },
        {
          term: 'sift up',
          definition:
            'Moving a node up the tree to restore heap order.',
        },
        {
          term: 'sift down',
          definition:
            'Moving a node down the tree to restore heap order.',
        },
        {
          term: 'top-k',
          definition:
            'Finding the k largest or smallest elements.',
        },
        {
          term: 'stream',
          definition:
            'Processing data incrementally as it arrives.',
        },
        {
          term: 'balanced structure',
          definition:
            'A tree that remains approximately balanced for efficiency.',
        },
        {
          term: 'binary heap',
          definition:
            'A heap implemented using an array-based complete binary tree.',
        },
        {
          term: 'log n',
          definition:
            'The time complexity of insert and extract operations.',
        },
      ],
      questions: [
        {
          id: 'lc-heap-1',
          prompt:
            'Given an array of integers, return the k largest elements.',
          choices: [
            'Min Heap of size k',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Maintain a min heap of size k. Iterate through the array, pushing elements into the heap. If the heap exceeds size k, remove the smallest element. At the end, the heap contains the k largest elements. Time complexity is O(n log k) since each insertion/removal costs O(log k). Space complexity is O(k). Sorting would take O(n log n), which is slower.',
        },
        {
          id: 'lc-heap-2',
          prompt:
            'Given a stream of numbers, return the median after each insertion.',
          choices: [
            'Two Heaps (max heap + min heap)',
            'Binary Search Tree',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Use a max heap for the lower half and a min heap for the upper half. Balance them so their sizes differ by at most one. The median is either the top of one heap or the average of both tops. Each insertion is O(log n), and retrieving the median is O(1). Space complexity is O(n). This is the standard streaming median solution.',
        },
        {
          id: 'lc-heap-3',
          prompt:
            'Given an array of points on a plane, return the k closest points to the origin.',
          choices: [
            'Max Heap of size k',
            'Two Pointers',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Use a max heap of size k to store the closest points seen so far. If a new point is closer than the farthest point in the heap, replace it. Distance comparisons can use squared distance to avoid square roots. Time complexity is O(n log k), space O(k). Sorting all points would be O(n log n).',
        },
        {
          id: 'lc-heap-4',
          prompt:
            'Merge k sorted linked lists into one sorted list.',
          choices: [
            'Min Heap',
            'Binary Search',
            'Union Find',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'Push the head of each list into a min heap. Repeatedly extract the smallest node and push its next node into the heap. This ensures the next smallest element is always chosen. Time complexity is O(n log k), where n is total nodes and k is number of lists. Space complexity is O(k).',
        },
        {
          id: 'lc-heap-5',
          prompt:
            'Given a list of words, return the k most frequent words.',
          choices: [
            'Hash Map + Min Heap',
            'Binary Search',
            'Trie only',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'First count frequencies with a hash map, then use a min heap of size k to keep track of the top k frequent words. Each insertion into the heap costs O(log k). Total time is O(n + u log k), where u is number of unique words. Space complexity is O(u + k). Sorting would be O(u log u).',
        },
        {
          id: 'lc-heap-6',
          prompt:
            'Given an array, find the kth smallest element.',
          choices: [
            'Max Heap of size k',
            'Binary Search on value space only',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Maintain a max heap of size k. As you iterate, push elements and remove the largest when size exceeds k. The root will be the kth smallest. Time complexity is O(n log k), space O(k). Quickselect is faster on average (O(n)) but heap is more consistent and easier to implement.',
        },
        {
          id: 'lc-heap-7',
          prompt:
            'Given intervals, determine the minimum number of meeting rooms required.',
          choices: [
            'Min Heap tracking end times',
            'Binary Search',
            'Trie',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'Sort meetings by start time, then use a min heap to track end times of active meetings. If the earliest meeting ends before the next starts, reuse that room. Otherwise allocate a new one. Time complexity is O(n log n), space O(n).',
        },
        {
          id: 'lc-heap-8',
          prompt:
            'Find the kth largest element in a stream of numbers.',
          choices: [
            'Min Heap of size k',
            'Sliding Window',
            'Binary Search',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Maintain a min heap of size k. The root always represents the kth largest element. Each insertion is O(log k), and retrieval is O(1). Space complexity is O(k).',
        },
        {
          id: 'lc-heap-9',
          prompt:
            'Given a list of tasks with execution times, schedule them on a single CPU to minimize total waiting time.',
          choices: [
            'Min Heap (shortest job first)',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Shortest Job First scheduling minimizes waiting time. A min heap allows selecting the shortest available task efficiently. Time complexity is O(n log n) due to heap operations. Space complexity is O(n).',
        },
        {
          id: 'lc-heap-10',
          prompt:
            'Given an array of integers, find the smallest range that includes at least one number from each of k sorted lists.',
          choices: [
            'Min Heap + tracking max',
            'Binary Search',
            'Sliding Window only',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Push one element from each list into a min heap and track the current maximum among them. The range is defined by min and max. Pop the smallest and push the next from its list, updating the range. Time complexity is O(n log k), space O(k).',
        },
        {
          id: 'lc-heap-11',
          prompt:
            'Given a string, rearrange characters so no two adjacent are the same.',
          choices: [
            'Max Heap with greedy pairing',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Count character frequencies and use a max heap to always pick the most frequent remaining characters. Place them in pairs to avoid adjacency conflicts. Time complexity is O(n log k), where k is distinct characters. Space complexity is O(k).',
        },
        {
          id: 'lc-heap-12',
          prompt:
            'Given an array of numbers, repeatedly combine the two smallest elements until one remains, minimizing total cost.',
          choices: [
            'Min Heap',
            'Binary Search',
            'Sliding Window',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Always combining the smallest elements first minimizes total cost (like Huffman coding). A min heap efficiently retrieves the two smallest elements each time. Time complexity is O(n log n), space O(n).',
        },
        {
          id: 'lc-heap-13',
          prompt:
            'Given a list of numbers, return the top k frequent elements.',
          choices: [
            'Hash Map + Heap',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Count frequencies using a hash map, then use a heap to extract top k elements. Time complexity is O(n + u log k). Space complexity is O(u + k).',
        },
        {
          id: 'lc-heap-14',
          prompt:
            'Given an array, sort it in ascending order.',
          choices: [
            'Heap Sort',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Heap sort builds a heap and repeatedly extracts the minimum (or maximum). Time complexity is O(n log n). Space complexity is O(1) if done in-place. While not always the fastest in practice, it guarantees O(n log n) performance.',
        },
        {
          id: 'lc-heap-15',
          prompt:
            'Given tasks with cooldown n, schedule them to minimize total time required.',
          choices: [
            'Max Heap with cooldown tracking',
            'Binary Search',
            'Trie',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'Use a max heap to always execute the most frequent remaining task, while tracking cooldown periods. This ensures tasks are spaced optimally. Time complexity is O(n log k), where k is distinct tasks. Space complexity is O(k).',
        },
      ]
    },
    intervals: {
      title: 'Intervals',
      description: 'Merging, scheduling, overlap problems',
      explanation: 'Interval problems deal with ranges defined by a start and end. The core patterns are sorting by start or end, merging overlapping intervals, and deciding which intervals to keep or remove. Many problems reduce to scanning sorted intervals and maintaining the current active range. The key skill is recognizing overlap conditions and choosing the correct sort order to simplify logic.',
      vocab: [
        {
          term: 'interval',
          definition:
            'A range defined by a start and end value, often inclusive.',
        },
        {
          term: 'overlap',
          definition:
            'Two intervals share at least some common range.',
        },
        {
          term: 'merge',
          definition:
            'Combining overlapping intervals into a single interval.',
        },
        {
          term: 'disjoint',
          definition:
            'Intervals that do not overlap.',
        },
        {
          term: 'sorted by start',
          definition:
            'Ordering intervals by their starting value.',
        },
        {
          term: 'sorted by end',
          definition:
            'Ordering intervals by their ending value.',
        },
        {
          term: 'current interval',
          definition:
            'The interval being tracked while scanning.',
        },
        {
          term: 'active window',
          definition:
            'The interval currently being extended or compared against.',
        },
        {
          term: 'greedy merge',
          definition:
            'Extending the current interval whenever overlap occurs.',
        },
        {
          term: 'gap',
          definition:
            'The space between two non-overlapping intervals.',
        },
        {
          term: 'insert interval',
          definition:
            'Adding a new interval into an existing set and merging if needed.',
        },
        {
          term: 'erase overlap',
          definition:
            'Removing intervals to eliminate conflicts.',
        },
        {
          term: 'sweep line',
          definition:
            'A technique scanning through sorted endpoints to track active intervals.',
        },
        {
          term: 'inclusive vs exclusive',
          definition:
            'Whether interval endpoints are considered part of the range.',
        },
      ],
      questions: [
        {
          id: 'lc-int-1',
          prompt:
            'Given a collection of intervals, merge all overlapping intervals and return the result.',
          choices: [
            'Sort by start time, then scan and merge',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'The standard solution is to sort intervals by start time so that any overlaps appear next to each other. Then scan from left to right, either extending the current merged interval when overlap exists or starting a new interval when it does not. Sorting is the key step because without it, overlaps are not locally visible. Time complexity is O(n log n) due to sorting. The merge scan itself is O(n). Space complexity is O(n) for the output in the worst case, not counting sorting implementation details.',
        },
        {
          id: 'lc-int-2',
          prompt:
            'Given a set of non-overlapping intervals sorted by start time and a new interval, insert the new interval and merge if necessary.',
          choices: [
            'Linear scan with interval merge logic',
            'Heap',
            'Topological Sort',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Because the existing intervals are already sorted and non-overlapping, a single linear scan is enough. First add intervals that end before the new interval starts. Then merge all intervals that overlap the new interval by expanding its boundaries. Finally add the remaining intervals. Time complexity is O(n), since each interval is processed once. Space complexity is O(n) for the result. This is better than re-sorting all intervals, which would waste the existing order guarantee.',
        },
        {
          id: 'lc-int-3',
          prompt:
            'Given a list of intervals, return the minimum number of intervals you need to remove so that the rest do not overlap.',
          choices: [
            'Sort by end time and greedily keep compatible intervals',
            'Backtracking all subsets',
            'Sliding Window',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'This is the interval scheduling pattern. Sort intervals by end time, then greedily keep the interval that finishes earliest among available choices. That maximizes how many intervals can remain without overlap, so the number removed is minimized. Time complexity is O(n log n) because of sorting, and the greedy pass is O(n). Space complexity is O(1) beyond sorting and output variables. Backtracking would be exponential and unnecessary.',
        },
        {
          id: 'lc-int-4',
          prompt:
            'Given a list of meeting time intervals, determine whether a person could attend all meetings.',
          choices: [
            'Sort by start time and check adjacent overlaps',
            'Heap',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Sort the meetings by start time, then check whether any meeting starts before the previous one ends. If that happens, the meetings overlap and the person cannot attend all of them. Time complexity is O(n log n) due to sorting, and the overlap check is O(n). Space complexity is O(1) beyond the sorting overhead. This is one of the simplest interval problems and mainly tests whether the candidate recognizes the need to sort first.',
        },
        {
          id: 'lc-int-5',
          prompt:
            'Given a list of meeting intervals, return the minimum number of meeting rooms required.',
          choices: [
            'Sort by start time and use a min heap of end times',
            'Binary Search',
            'Trie',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'Sort meetings by start time, then use a min heap to track the end times of meetings currently using rooms. If the next meeting starts after the earliest ending meeting finishes, reuse that room by popping the heap. Otherwise allocate a new room by pushing the new end time. The heap size at its maximum is the number of rooms required. Time complexity is O(n log n) due to sorting and heap operations. Space complexity is O(n) in the worst case.',
        },
        {
          id: 'lc-int-6',
          prompt:
            'Given two lists of closed intervals, each pairwise disjoint and sorted, return their intersections.',
          choices: [
            'Two Pointers',
            'Heap',
            'Prefix Sum',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Since both interval lists are already sorted and internally non-overlapping, two pointers is the optimal pattern. At each step, compute the overlap between the current intervals. Then advance the pointer whose interval ends first, because that interval cannot overlap any later interval from the other list. Time complexity is O(m + n), where m and n are the list sizes. Space complexity is O(1) excluding the output. This is one of the cleanest examples of interval problems combining ordering with pointer logic.',
        },
        {
          id: 'lc-int-7',
          prompt:
            'Given a set of balloons represented by horizontal intervals, return the minimum number of arrows needed to burst them all.',
          choices: [
            'Sort by end coordinate and greedily shoot arrows',
            'Dynamic Programming',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is another interval scheduling style greedy problem. Sort balloons by end coordinate, then place an arrow at the end of the first balloon. Any balloon starting before or at that arrow position is also burst, so keep reusing the same arrow until a non-overlapping balloon appears, then fire a new arrow. Time complexity is O(n log n) due to sorting. Space complexity is O(1) beyond sorting. The earliest end-point greedy rule is what makes the solution optimal.',
        },
        {
          id: 'lc-int-8',
          prompt:
            'Given a list of intervals, determine if any interval is completely covered by another interval and return the number of remaining intervals.',
          choices: [
            'Sort by start ascending and end descending, then scan',
            'Heap',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Sort by start ascending, and when starts tie, sort by end descending. That ordering ensures that if one interval covers another, the covering interval appears first. Then scan while tracking the farthest end seen so far. If the current interval ends within that farthest end, it is covered. Otherwise it contributes to the remaining count and updates the farthest end. Time complexity is O(n log n) due to sorting, and the scan is O(n). Space complexity is O(1) beyond sorting.',
        },
        {
          id: 'lc-int-9',
          prompt:
            'Given intervals on a number line, return the minimum number of intervals needed to remove so that no point is covered more than once.',
          choices: [
            'Sort by end time and greedily keep non-overlapping intervals',
            'Backtracking',
            'Trie',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'This is the same core pattern as non-overlapping intervals. To minimize removals, maximize how many non-overlapping intervals you keep. Sorting by earliest end time is optimal because it leaves the most room for future intervals. Time complexity is O(n log n) because of sorting, and space complexity is O(1) beyond sorting. This is a very common interview pattern: turn a “minimum removals” problem into a “maximum keep” greedy interval problem.',
        },
        {
          id: 'lc-int-10',
          prompt:
            'Given a list of employee work schedules, each employee having sorted non-overlapping intervals, return all finite intervals where every employee is free.',
          choices: [
            'Merge all intervals, then find gaps',
            'Trie',
            'Union Find',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'The core idea is to flatten and merge all work intervals across employees, then scan the merged result for gaps. Those gaps are the common free times. If the input is already structured as multiple sorted lists, a heap-based k-way merge is another strong approach, but the pattern is still fundamentally interval merging followed by gap detection. Flatten-and-sort takes O(N log N), where N is the total number of intervals. Space complexity is O(N) for the flattened list and merged result.',
        },
        {
          id: 'lc-int-11',
          prompt:
            'Given a list of intervals, divide them into the minimum number of groups so that no intervals in the same group overlap.',
          choices: [
            'Sort by start time and track active interval ends with a min heap',
            'Topological Sort',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'This is closely related to meeting rooms. Sort by start time, then use a min heap of end times for currently active groups. If the current interval starts after the earliest group end, reuse that group; otherwise start a new group. The maximum heap size is the minimum number of groups needed. Time complexity is O(n log n), and space complexity is O(n) in the worst case. The interview insight is recognizing that “grouping non-overlapping intervals” is the same structure as allocating rooms.',
        },
        {
          id: 'lc-int-12',
          prompt:
            'Given a set of intervals, determine the maximum number of intervals that overlap at any point.',
          choices: [
            'Line Sweep with sorted start/end events',
            'Binary Search',
            'Trie',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'Convert each interval into events: a start event that adds one active interval and an end event that removes one. Sort all events by position, then scan while tracking the active count and the maximum seen. This is the line sweep pattern. Time complexity is O(n log n) due to sorting 2n events, and space complexity is O(n) for the events. A heap-based room-counting method can also solve related problems, but line sweep is the cleanest direct answer for maximum overlap count.',
        },
        {
          id: 'lc-int-13',
          prompt:
            'Given a list of car trips with passenger counts and start/end locations, determine whether the vehicle’s capacity is ever exceeded.',
          choices: [
            'Line Sweep / difference array over trip events',
            'Heap only',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Each trip adds passengers at its start location and removes passengers at its end location. That makes this a sweep-line or difference-array problem over positions. Sort pickup and dropoff events, scan from left to right, and track current passengers. If the count ever exceeds capacity, return false. Time complexity is O(n log n) if using sorted events, or O(maxLocation) with a direct difference array when the coordinate range is small. Space complexity depends on the method: O(n) for events or O(maxLocation) for a difference array.',
        },
        {
          id: 'lc-int-14',
          prompt:
            'Given a list of intervals and a target interval, return whether the target overlaps any existing interval in a calendar booking system.',
          choices: [
            'Sort or maintain ordered intervals, then check neighboring conflicts',
            'Sliding Window',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'In interval booking systems, conflicts are determined by overlap with nearby intervals in sorted order. If intervals are stored sorted by start time, a new booking only needs to be checked against potential neighbors around its insertion point rather than every interval. In a simple one-off version, sorting and scanning works. In a reusable system, a balanced ordered structure is often used. For the one-off problem, time complexity is O(n log n) if sorting first or O(log n) lookup plus neighbor checks in an ordered structure. Space complexity depends on the representation.',
        },
        {
          id: 'lc-int-15',
          prompt:
            'Given many intervals, compute the total length covered by their union on a number line.',
          choices: [
            'Sort intervals, merge overlaps, and sum merged lengths',
            'Binary Search',
            'Heap',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Sort intervals by start position, then merge overlapping ones exactly as in the standard merge-intervals problem. After merging, sum the lengths of the merged intervals. This works because the merged intervals form a disjoint cover of the same union. Time complexity is O(n log n) due to sorting, and the merge pass is O(n). Space complexity is O(n) in the worst case if all intervals remain separate in the merged output.',
        },
      ]
    },
    linkedList: {
      title: 'Linked List',
      description: 'Reversal, cycles, pointer manipulation',
      explanation: 'Linked lists store elements as nodes connected by pointers rather than contiguous memory. Interview problems focus on pointer manipulation, often requiring careful handling of next references without losing track of the list. Common patterns include reversing a list, detecting cycles, merging lists, and using fast and slow pointers. The difficulty is usually in correctly updating pointers and handling edge cases.',
      vocab: [
        {
          term: 'node',
          definition:
            'An element in a linked list containing a value and pointer(s).',
        },
        {
          term: 'pointer',
          definition:
            'A reference to another node in the list.',
        },
        {
          term: 'head',
          definition:
            'The first node in the list.',
        },
        {
          term: 'tail',
          definition:
            'The last node in the list.',
        },
        {
          term: 'next',
          definition:
            'The pointer to the following node.',
        },
        {
          term: 'prev',
          definition:
            'The pointer to the previous node in a doubly linked list.',
        },
        {
          term: 'singly linked list',
          definition:
            'Each node points only to the next node.',
        },
        {
          term: 'doubly linked list',
          definition:
            'Each node points to both next and previous nodes.',
        },
        {
          term: 'traversal',
          definition:
            'Visiting nodes sequentially through pointers.',
        },
        {
          term: 'reverse',
          definition:
            'Rewiring pointers so the list order is flipped.',
        },
        {
          term: 'cycle',
          definition:
            'A loop where a node eventually points back to a previous node.',
        },
        {
          term: 'fast and slow pointers',
          definition:
            'Two pointers moving at different speeds to detect cycles or midpoints.',
        },
        {
          term: 'dummy node',
          definition:
            'A placeholder node used to simplify edge cases.',
        },
        {
          term: 'merge',
          definition:
            'Combining two sorted lists into one.',
        },
        {
          term: 'in-place',
          definition:
            'Modifying the list without allocating new nodes.',
        },
      ],
      questions: [
        {
          id: 'lc-int-1',
          prompt:
            'Given a collection of intervals, merge all overlapping intervals and return the result.',
          choices: [
            'Sort by start time, then scan and merge',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'The standard solution is to sort intervals by start time so that any overlaps appear next to each other. Then scan from left to right, either extending the current merged interval when overlap exists or starting a new interval when it does not. Sorting is the key step because without it, overlaps are not locally visible. Time complexity is O(n log n) due to sorting. The merge scan itself is O(n). Space complexity is O(n) for the output in the worst case, not counting sorting implementation details.',
        },
        {
          id: 'lc-int-2',
          prompt:
            'Given a set of non-overlapping intervals sorted by start time and a new interval, insert the new interval and merge if necessary.',
          choices: [
            'Linear scan with interval merge logic',
            'Heap',
            'Topological Sort',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Because the existing intervals are already sorted and non-overlapping, a single linear scan is enough. First add intervals that end before the new interval starts. Then merge all intervals that overlap the new interval by expanding its boundaries. Finally add the remaining intervals. Time complexity is O(n), since each interval is processed once. Space complexity is O(n) for the result. This is better than re-sorting all intervals, which would waste the existing order guarantee.',
        },
        {
          id: 'lc-int-3',
          prompt:
            'Given a list of intervals, return the minimum number of intervals you need to remove so that the rest do not overlap.',
          choices: [
            'Sort by end time and greedily keep compatible intervals',
            'Backtracking all subsets',
            'Sliding Window',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'This is the interval scheduling pattern. Sort intervals by end time, then greedily keep the interval that finishes earliest among available choices. That maximizes how many intervals can remain without overlap, so the number removed is minimized. Time complexity is O(n log n) because of sorting, and the greedy pass is O(n). Space complexity is O(1) beyond sorting and output variables. Backtracking would be exponential and unnecessary.',
        },
        {
          id: 'lc-int-4',
          prompt:
            'Given a list of meeting time intervals, determine whether a person could attend all meetings.',
          choices: [
            'Sort by start time and check adjacent overlaps',
            'Heap',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Sort the meetings by start time, then check whether any meeting starts before the previous one ends. If that happens, the meetings overlap and the person cannot attend all of them. Time complexity is O(n log n) due to sorting, and the overlap check is O(n). Space complexity is O(1) beyond the sorting overhead. This is one of the simplest interval problems and mainly tests whether the candidate recognizes the need to sort first.',
        },
        {
          id: 'lc-int-5',
          prompt:
            'Given a list of meeting intervals, return the minimum number of meeting rooms required.',
          choices: [
            'Sort by start time and use a min heap of end times',
            'Binary Search',
            'Trie',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'Sort meetings by start time, then use a min heap to track the end times of meetings currently using rooms. If the next meeting starts after the earliest ending meeting finishes, reuse that room by popping the heap. Otherwise allocate a new room by pushing the new end time. The heap size at its maximum is the number of rooms required. Time complexity is O(n log n) due to sorting and heap operations. Space complexity is O(n) in the worst case.',
        },
        {
          id: 'lc-int-6',
          prompt:
            'Given two lists of closed intervals, each pairwise disjoint and sorted, return their intersections.',
          choices: [
            'Two Pointers',
            'Heap',
            'Prefix Sum',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Since both interval lists are already sorted and internally non-overlapping, two pointers is the optimal pattern. At each step, compute the overlap between the current intervals. Then advance the pointer whose interval ends first, because that interval cannot overlap any later interval from the other list. Time complexity is O(m + n), where m and n are the list sizes. Space complexity is O(1) excluding the output. This is one of the cleanest examples of interval problems combining ordering with pointer logic.',
        },
        {
          id: 'lc-int-7',
          prompt:
            'Given a set of balloons represented by horizontal intervals, return the minimum number of arrows needed to burst them all.',
          choices: [
            'Sort by end coordinate and greedily shoot arrows',
            'Dynamic Programming',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is another interval scheduling style greedy problem. Sort balloons by end coordinate, then place an arrow at the end of the first balloon. Any balloon starting before or at that arrow position is also burst, so keep reusing the same arrow until a non-overlapping balloon appears, then fire a new arrow. Time complexity is O(n log n) due to sorting. Space complexity is O(1) beyond sorting. The earliest end-point greedy rule is what makes the solution optimal.',
        },
        {
          id: 'lc-int-8',
          prompt:
            'Given a list of intervals, determine if any interval is completely covered by another interval and return the number of remaining intervals.',
          choices: [
            'Sort by start ascending and end descending, then scan',
            'Heap',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Sort by start ascending, and when starts tie, sort by end descending. That ordering ensures that if one interval covers another, the covering interval appears first. Then scan while tracking the farthest end seen so far. If the current interval ends within that farthest end, it is covered. Otherwise it contributes to the remaining count and updates the farthest end. Time complexity is O(n log n) due to sorting, and the scan is O(n). Space complexity is O(1) beyond sorting.',
        },
        {
          id: 'lc-int-9',
          prompt:
            'Given intervals on a number line, return the minimum number of intervals needed to remove so that no point is covered more than once.',
          choices: [
            'Sort by end time and greedily keep non-overlapping intervals',
            'Backtracking',
            'Trie',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'This is the same core pattern as non-overlapping intervals. To minimize removals, maximize how many non-overlapping intervals you keep. Sorting by earliest end time is optimal because it leaves the most room for future intervals. Time complexity is O(n log n) because of sorting, and space complexity is O(1) beyond sorting. This is a very common interview pattern: turn a “minimum removals” problem into a “maximum keep” greedy interval problem.',
        },
        {
          id: 'lc-int-10',
          prompt:
            'Given a list of employee work schedules, each employee having sorted non-overlapping intervals, return all finite intervals where every employee is free.',
          choices: [
            'Merge all intervals, then find gaps',
            'Trie',
            'Union Find',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'The core idea is to flatten and merge all work intervals across employees, then scan the merged result for gaps. Those gaps are the common free times. If the input is already structured as multiple sorted lists, a heap-based k-way merge is another strong approach, but the pattern is still fundamentally interval merging followed by gap detection. Flatten-and-sort takes O(N log N), where N is the total number of intervals. Space complexity is O(N) for the flattened list and merged result.',
        },
        {
          id: 'lc-int-11',
          prompt:
            'Given a list of intervals, divide them into the minimum number of groups so that no intervals in the same group overlap.',
          choices: [
            'Sort by start time and track active interval ends with a min heap',
            'Topological Sort',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'This is closely related to meeting rooms. Sort by start time, then use a min heap of end times for currently active groups. If the current interval starts after the earliest group end, reuse that group; otherwise start a new group. The maximum heap size is the minimum number of groups needed. Time complexity is O(n log n), and space complexity is O(n) in the worst case. The interview insight is recognizing that “grouping non-overlapping intervals” is the same structure as allocating rooms.',
        },
        {
          id: 'lc-int-12',
          prompt:
            'Given a set of intervals, determine the maximum number of intervals that overlap at any point.',
          choices: [
            'Line Sweep with sorted start/end events',
            'Binary Search',
            'Trie',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'Convert each interval into events: a start event that adds one active interval and an end event that removes one. Sort all events by position, then scan while tracking the active count and the maximum seen. This is the line sweep pattern. Time complexity is O(n log n) due to sorting 2n events, and space complexity is O(n) for the events. A heap-based room-counting method can also solve related problems, but line sweep is the cleanest direct answer for maximum overlap count.',
        },
        {
          id: 'lc-int-13',
          prompt:
            'Given a list of car trips with passenger counts and start/end locations, determine whether the vehicle’s capacity is ever exceeded.',
          choices: [
            'Line Sweep / difference array over trip events',
            'Heap only',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Each trip adds passengers at its start location and removes passengers at its end location. That makes this a sweep-line or difference-array problem over positions. Sort pickup and dropoff events, scan from left to right, and track current passengers. If the count ever exceeds capacity, return false. Time complexity is O(n log n) if using sorted events, or O(maxLocation) with a direct difference array when the coordinate range is small. Space complexity depends on the method: O(n) for events or O(maxLocation) for a difference array.',
        },
        {
          id: 'lc-int-14',
          prompt:
            'Given a list of intervals and a target interval, return whether the target overlaps any existing interval in a calendar booking system.',
          choices: [
            'Sort or maintain ordered intervals, then check neighboring conflicts',
            'Sliding Window',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'In interval booking systems, conflicts are determined by overlap with nearby intervals in sorted order. If intervals are stored sorted by start time, a new booking only needs to be checked against potential neighbors around its insertion point rather than every interval. In a simple one-off version, sorting and scanning works. In a reusable system, a balanced ordered structure is often used. For the one-off problem, time complexity is O(n log n) if sorting first or O(log n) lookup plus neighbor checks in an ordered structure. Space complexity depends on the representation.',
        },
        {
          id: 'lc-int-15',
          prompt:
            'Given many intervals, compute the total length covered by their union on a number line.',
          choices: [
            'Sort intervals, merge overlaps, and sum merged lengths',
            'Binary Search',
            'Heap',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Sort intervals by start position, then merge overlapping ones exactly as in the standard merge-intervals problem. After merging, sum the lengths of the merged intervals. This works because the merged intervals form a disjoint cover of the same union. Time complexity is O(n log n) due to sorting, and the merge pass is O(n). Space complexity is O(n) in the worst case if all intervals remain separate in the merged output.',
        },
      ]
    },
    math: {
      title: 'Math / Geometry',
      description: 'Combinatorics, matrices, geometry',
      explanation: 'Math problems rely on recognizing patterns, formulas, or properties rather than brute-force computation. Common topics include divisibility, primes, modular arithmetic, combinatorics, and geometric reasoning. The key is translating the problem into a known mathematical identity or reducing it to a simpler form that can be computed efficiently.',
      vocab: [
        {
          term: 'prime',
          definition:
            'A number greater than 1 with no divisors other than 1 and itself.',
        },
        {
          term: 'composite',
          definition:
            'A number with factors other than 1 and itself.',
        },
        {
          term: 'divisor',
          definition:
            'A number that divides another without remainder.',
        },
        {
          term: 'modulo',
          definition:
            'The remainder after division.',
        },
        {
          term: 'modular arithmetic',
          definition:
            'Arithmetic under a modulus, often used to avoid overflow.',
        },
        {
          term: 'gcd',
          definition:
            'Greatest common divisor of two numbers.',
        },
        {
          term: 'lcm',
          definition:
            'Least common multiple of two numbers.',
        },
        {
          term: 'factorial',
          definition:
            'The product of all integers from 1 to n.',
        },
        {
          term: 'permutation',
          definition:
            'Arrangements where order matters.',
        },
        {
          term: 'combination',
          definition:
            'Selections where order does not matter.',
        },
        {
          term: 'exponentiation',
          definition:
            'Repeated multiplication, often optimized with fast power.',
        },
        {
          term: 'overflow',
          definition:
            'Exceeding the numeric limit of a data type.',
        },
        {
          term: 'precision',
          definition:
            'Accuracy of numerical representation, especially with floats.',
        },
        {
          term: 'integer division',
          definition:
            'Division that discards the fractional part.',
        },
        {
          term: 'floor/ceil',
          definition:
            'Rounding down or up to the nearest integer.',
        },
      ],
      questions: [
        {
          id: 'lc-ll-1',
          prompt:
            'Given the head of a singly linked list, reverse the list and return the new head.',
          choices: [
            'Iterative pointer reversal',
            'Binary Search',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'The standard solution walks through the list once while rewiring each node’s next pointer to point backward. You keep track of prev, curr, and next so that you do not lose access to the rest of the list during reversal. This is the core linked-list pointer manipulation pattern. Time complexity is O(n) because each node is visited once. Space complexity is O(1) for the iterative approach. A recursive solution also works but uses O(n) call-stack space.',
        },
        {
          id: 'lc-ll-2',
          prompt:
            'Given a singly linked list, determine whether it contains a cycle.',
          choices: [
            'Fast and slow pointers',
            'Heap',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Use Floyd’s tortoise-and-hare algorithm. Move one pointer one step at a time and another pointer two steps at a time. If the list contains a cycle, the fast pointer will eventually lap the slow pointer and they will meet. If the fast pointer reaches null, there is no cycle. Time complexity is O(n), and space complexity is O(1). A hash set of visited nodes also works in O(n) time but uses O(n) extra space.',
        },
        {
          id: 'lc-ll-3',
          prompt:
            'Given two sorted linked lists, merge them into one sorted linked list and return its head.',
          choices: [
            'Dummy node + iterative merge',
            'Sliding Window',
            'Monotonic Stack',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'This is the linked-list version of merge in merge sort. Use a dummy head node and a tail pointer. Compare the current nodes of the two lists, append the smaller one to the merged list, and advance that list’s pointer. At the end, append the remaining nodes. Time complexity is O(m + n), where m and n are the list lengths. Space complexity is O(1) extra if reusing the existing nodes. A recursive version is also common but uses O(m + n) call-stack space.',
        },
        {
          id: 'lc-ll-4',
          prompt:
            'Given the heads of two singly linked lists, return the node where they intersect, or null if they do not intersect.',
          choices: [
            'Two-pointer length-alignment trick',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'The elegant O(1)-space solution uses two pointers, one starting at each list head. When a pointer reaches the end of its list, redirect it to the head of the other list. If the lists intersect, the pointers will meet at the intersection node after traversing equal total distances. If they do not intersect, both eventually become null at the same time. Time complexity is O(m + n), and space complexity is O(1). A hash-set solution also works but uses O(m) or O(n) extra space.',
        },
        {
          id: 'lc-ll-5',
          prompt:
            'Given the head of a linked list, remove the nth node from the end of the list and return the head.',
          choices: [
            'Two pointers with a fixed gap',
            'Heap',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Use a dummy node before the head to simplify edge cases like removing the first node. Advance a fast pointer n steps ahead, then move both fast and slow pointers together until fast reaches the end. At that point, slow is just before the node to remove. Relink slow.next to skip the target node. Time complexity is O(n), and space complexity is O(1). The fixed-gap two-pointer pattern is one of the most common linked-list interview techniques.',
        },
        {
          id: 'lc-ll-6',
          prompt:
            'Given the head of a sorted linked list, delete all duplicates so each element appears only once.',
          choices: [
            'Single pass with current pointer',
            'Binary Search',
            'Backtracking',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Because the list is already sorted, duplicates appear next to each other. Traverse the list with a current pointer, and whenever current.val equals current.next.val, skip the duplicate node by rewiring current.next. Otherwise move current forward. Time complexity is O(n), since each node is examined at most once. Space complexity is O(1). The sorted property is what makes this simple linear pass possible.',
        },
        {
          id: 'lc-ll-7',
          prompt:
            'Given the head of a linked list, return the middle node. If there are two middle nodes, return the second one.',
          choices: [
            'Fast and slow pointers',
            'Sliding Window',
            'Heap',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Move a slow pointer one step at a time and a fast pointer two steps at a time. When the fast pointer reaches the end, the slow pointer will be at the middle. In even-length lists, this naturally lands on the second middle node when the fast pointer moves off the list. Time complexity is O(n), and space complexity is O(1). This is one of the most important linked-list pointer patterns.',
        },
        {
          id: 'lc-ll-8',
          prompt:
            'Given a linked list, determine whether it is a palindrome.',
          choices: [
            'Find middle, reverse second half, then compare',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'The optimal O(1)-extra-space solution uses multiple linked-list techniques together. First find the middle using fast/slow pointers. Then reverse the second half of the list. Finally compare nodes from the first half and reversed second half one by one. If all match, the list is a palindrome. Time complexity is O(n), and space complexity is O(1). A stack-based approach also works in O(n) time but uses O(n) extra space.',
        },
        {
          id: 'lc-ll-9',
          prompt:
            'Given a linked list, reorder it to follow the pattern L0 → Ln → L1 → Ln-1 → L2 → Ln-2 ...',
          choices: [
            'Find middle, reverse second half, then merge alternately',
            'Heap',
            'Sliding Window',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'This is a composite linked-list problem. First find the middle of the list. Then reverse the second half. Finally merge the two halves by alternating nodes from the first half and the reversed second half. This works in O(n) time because each node is processed a constant number of times. Space complexity is O(1) extra. The question is really testing whether you can combine core linked-list operations cleanly.',
        },
        {
          id: 'lc-ll-10',
          prompt:
            'Given a linked list where each node has an additional random pointer, return a deep copy of the list.',
          choices: [
            'Hash Map from original node to cloned node',
            'Binary Search',
            'Two Pointers only',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'The most straightforward solution uses a hash map from each original node to its cloned node. First create all clone nodes and store the mapping. Then make a second pass to assign next and random pointers using the map. This gives O(n) time and O(n) extra space. There is also an advanced O(1)-extra-space interleaving trick, but the hash-map solution is usually the clearest first answer in interviews unless optimal-space follow-up is requested.',
        },
        {
          id: 'lc-ll-11',
          prompt:
            'Given k sorted linked lists, merge them into one sorted linked list.',
          choices: [
            'Min Heap of list heads',
            'Binary Search',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Push the head of each non-empty list into a min heap. Repeatedly extract the smallest node, append it to the output, and then push that node’s next pointer if it exists. The heap ensures the smallest available current node is always chosen. Time complexity is O(n log k), where n is the total number of nodes and k is the number of lists. Space complexity is O(k) for the heap. Divide-and-conquer merging is also a strong alternative with the same time complexity.',
        },
        {
          id: 'lc-ll-12',
          prompt:
            'Design a data structure that supports get(key) and put(key, value) in O(1), while evicting the least recently used item when capacity is exceeded.',
          choices: [
            'Hash Map + Doubly Linked List',
            'Binary Search Tree',
            'Heap only',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'This is the classic LRU Cache problem and one of the most important linked-list design questions. The hash map provides O(1) access to nodes by key, while the doubly linked list provides O(1) insertion, deletion, and movement of nodes to track recency. On get or put, move the accessed node to the front. When capacity is exceeded, remove the node at the tail, which is the least recently used. Time complexity is O(1) average for both get and put. Space complexity is O(capacity).',
        },
        {
          id: 'lc-ll-13',
          prompt:
            'Reverse the nodes of a linked list from position left to position right and return the modified list.',
          choices: [
            'Pointer reversal within a sublist window',
            'Sliding Window',
            'Binary Search',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'Use a dummy node so you can easily access the node before the reversal region. Move a pointer to the node just before position left, then reverse the next portion of the list up to position right. Finally reconnect the reversed sublist to the untouched prefix and suffix. Time complexity is O(n), since you scan the list and reverse part of it once. Space complexity is O(1). This tests whether you can do careful local pointer surgery without losing track of boundaries.',
        },
        {
          id: 'lc-ll-14',
          prompt:
            'Given a linked list and an integer x, partition the list so that all nodes with values less than x come before nodes greater than or equal to x, while preserving original relative order.',
          choices: [
            'Build two lists and connect them',
            'Heap',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'The cleanest solution creates two linked lists during one pass: one for nodes less than x and one for nodes greater than or equal to x. Use dummy heads for both lists, append each node to the correct list, then connect the small list to the large list at the end. This preserves relative order within each partition. Time complexity is O(n), and space complexity is O(1) extra if reusing the original nodes rather than allocating new ones.',
        },
        {
          id: 'lc-ll-15',
          prompt:
            'Given a linked list, sort it in O(n log n) time and constant extra space.',
          choices: [
            'Merge Sort on linked list',
            'Binary Search',
            'Trie',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'Merge sort is the standard optimal approach for sorting linked lists because linked lists support splitting and merging efficiently without random access. Use fast/slow pointers to split the list into two halves, recursively sort each half, then merge the sorted halves. Time complexity is O(n log n). The algorithm uses O(log n) recursion stack space in most implementations, though it is often discussed as the right linked-list sorting strategy because it avoids the random-access requirements of array-based sorts like quicksort or heapsort.',
        },
      ]
    },
    recursion: {
      title: 'Recursion',
      description:
        'Base cases, recursive decomposition, DFS patterns, and call-stack reasoning',
      explanation:
        'Recursion solves a problem by reducing it into smaller instances of the same problem until reaching a base case. In coding interviews, recursion appears constantly in trees, graphs, backtracking, divide-and-conquer, linked lists, and dynamic programming. Strong candidates do not treat recursion as magic. They identify the base case, define what each recursive call returns or accomplishes, and reason clearly about how the smaller result combines into the full answer. Just as important, they understand the practical risks: stack depth, repeated subproblems, and when recursion should be replaced with memoization or an explicit stack. Interview recursion is usually less about syntax and more about whether you can model a problem in a self-similar way.',
      vocab: [
        {
          term: 'recursion',
          definition:
            'A technique where a function solves a problem by calling itself on smaller subproblems.',
        },
        {
          term: 'base case',
          definition:
            'The stopping condition that prevents infinite recursion.',
        },
        {
          term: 'recursive case',
          definition:
            'The part of the function that reduces the problem and calls itself again.',
        },
        {
          term: 'call stack',
          definition:
            'The stack of active function calls maintained by the runtime.',
        },
        {
          term: 'stack overflow',
          definition:
            'A runtime failure caused by too many nested recursive calls.',
        },
        {
          term: 'divide and conquer',
          definition:
            'A strategy that splits a problem into smaller independent parts, solves them, and combines the results.',
        },
        {
          term: 'backtracking',
          definition:
            'A recursive search technique that tries choices, explores, and then undoes them.',
        },
        {
          term: 'DFS',
          definition:
            'Depth-first search, often naturally implemented with recursion.',
        },
        {
          term: 'postorder',
          definition:
            'A traversal pattern where recursive calls happen before processing the current node’s final result.',
        },
        {
          term: 'preorder',
          definition:
            'A traversal pattern where processing happens before recursive calls descend further.',
        },
        {
          term: 'inorder',
          definition:
            'A binary-tree traversal pattern of left, node, right.',
        },
        {
          term: 'memoization',
          definition:
            'Caching recursive results so repeated subproblems are not recomputed.',
        },
        {
          term: 'subproblem',
          definition:
            'A smaller instance of the original problem solved within recursion.',
        },
        {
          term: 'state',
          definition:
            'The information that defines a recursive call, such as index, path, or remaining target.',
        },
        {
          term: 'implicit stack',
          definition:
            'Using the language runtime call stack instead of creating an explicit stack data structure yourself.',
        },
        {
          term: 'tree height',
          definition:
            'The number of levels or longest root-to-leaf path, often relevant to recursive complexity.',
        },
        {
          term: 'leaf node',
          definition:
            'A node with no children, often a natural base case in tree recursion.',
        },
        {
          term: 'tail recursion',
          definition:
            'A recursive style where the recursive call is the last operation, though many interview languages do not optimize it.',
        },
        {
          term: 'combine step',
          definition:
            'The logic that merges recursive results into the answer for the current call.',
        },
        {
          term: 'termination',
          definition:
            'The guarantee that recursion eventually reaches a base case and stops.',
        },
      ],
      questions: [
        {
          id: 'lc-rec-1',
          prompt:
            'What is the most important ingredient that prevents infinite recursion?',
          choices: [
            'A correct base case',
            'A hash map',
            'Sorting the input first',
            'A priority queue',
          ],
          correctIndex: 0,
          explanation:
            'Every recursive function needs a stopping condition. Without a base case, the function keeps calling itself until it crashes. In interviews, the first thing to verify is usually “When does this stop?”',
        },
        {
          id: 'lc-rec-2',
          prompt:
            'Why are tree problems often a natural fit for recursion?',
          choices: [
            'Because each subtree is itself a smaller tree problem',
            'Because trees always require dynamic programming',
            'Because recursion makes tree nodes mutable',
            'Because iterative tree solutions are impossible',
          ],
          correctIndex: 0,
          explanation:
            'Trees are self-similar. The left subtree and right subtree are smaller versions of the same structure, so recursion often mirrors the problem definition very cleanly.',
        },
        {
          id: 'lc-rec-3',
          prompt:
            'What does the call stack store during recursion?',
          choices: [
            'The active function calls and their local state',
            'Only the final answer',
            'A sorted copy of the array',
            'All visited nodes in BFS order',
          ],
          correctIndex: 0,
          explanation:
            'Each recursive call has its own parameters, locals, and return point. The runtime stores these frames on the call stack. Deep recursion can therefore consume significant stack memory.',
        },
        {
          id: 'lc-rec-4',
          prompt:
            'Which traversal is left subtree, then node, then right subtree?',
          choices: ['Inorder', 'Preorder', 'Postorder', 'Level order'],
          correctIndex: 0,
          explanation:
            'Inorder traversal of a binary tree visits left, then current node, then right. It is especially common in BST problems because it visits values in sorted order.',
        },
        {
          id: 'lc-rec-5',
          prompt:
            'Which traversal processes the current node before recursing into children?',
          choices: ['Preorder', 'Postorder', 'Inorder', 'Bottom-up'],
          correctIndex: 0,
          explanation:
            'Preorder means process first, then recurse. That is useful when you want to copy a tree, serialize structure top-down, or build paths while descending.',
        },
        {
          id: 'lc-rec-6',
          prompt:
            'Which traversal usually fits problems where a node answer depends on answers from its children?',
          choices: ['Postorder', 'Preorder', 'Level order', 'Binary search'],
          correctIndex: 0,
          explanation:
            'When the parent depends on completed child results, postorder is a natural fit because you recurse first and combine afterward. Many height, balance, diameter, and subtree-aggregation problems follow this pattern.',
        },
        {
          id: 'lc-rec-7',
          prompt:
            'If a recursive solution recomputes the same subproblems many times, what technique most directly helps?',
          choices: ['Memoization', 'Two pointers', 'Heapifying', 'Bucket sort'],
          correctIndex: 0,
          explanation:
            'Memoization stores answers for previously solved states so repeated recursive calls reuse the cached result. This is the classic top-down dynamic programming improvement.',
        },
        {
          id: 'lc-rec-8',
          prompt:
            'What is the main difference between recursion and backtracking?',
          choices: [
            'Backtracking is recursion that explores choices and undoes them',
            'Backtracking never uses recursion',
            'Recursion only works on trees',
            'Backtracking always guarantees polynomial time',
          ],
          correctIndex: 0,
          explanation:
            'Backtracking is a special recursive pattern for exploring possibilities. You choose, recurse, and then undo the choice so you can try the next possibility.',
        },
        {
          id: 'lc-rec-9',
          prompt:
            'What is usually the recursive state in a “generate all subsets” problem?',
          choices: [
            'The current index and the current subset/path',
            'Only the final answer length',
            'A heap of used values',
            'The array sorted in descending order only',
          ],
          correctIndex: 0,
          explanation:
            'Subset recursion typically tracks where you are in the input and what elements are currently chosen. That state is enough to branch on include versus exclude decisions.',
        },
        {
          id: 'lc-rec-10',
          prompt:
            'Why can recursion be risky on a very deep linked list or skewed tree?',
          choices: [
            'It may exceed the call stack limit',
            'It automatically changes node values',
            'It forces O(n log n) time',
            'It cannot return values correctly',
          ],
          correctIndex: 0,
          explanation:
            'If recursion depth grows linearly with input depth, the program may hit stack overflow. This is one reason interviewers sometimes ask for iterative alternatives on deep structures.',
        },
        {
          id: 'lc-rec-11',
          prompt:
            'When writing a recursive helper, what should you usually define clearly first?',
          choices: [
            'What each call returns or accomplishes',
            'How to use a priority queue',
            'The exact variable names for the loop',
            'How to avoid all helper functions',
          ],
          correctIndex: 0,
          explanation:
            'A powerful way to reason about recursion is to define the contract of the helper. For example: “This function returns the height of the subtree rooted here.” Once that contract is clear, the implementation becomes much easier.',
        },
        {
          id: 'lc-rec-12',
          prompt:
            'Which problem pattern is most naturally recursive?',
          choices: [
            'Computing the maximum depth of a binary tree',
            'Finding the median of two sorted arrays by merging everything',
            'Keeping track of a monotonic stack',
            'Scanning a fixed-size sliding window',
          ],
          correctIndex: 0,
          explanation:
            'Maximum depth is naturally expressed as 1 + max(left depth, right depth). That directly mirrors recursive tree structure.',
        },
        {
          id: 'lc-rec-13',
          prompt:
            'What is the combine step in recursion?',
          choices: [
            'The logic that builds the current answer from recursive results',
            'The moment you allocate the input array',
            'The syntax for declaring the helper function',
            'The rule that all recursive calls must be identical',
          ],
          correctIndex: 0,
          explanation:
            'A recursive solution often has three parts: base case, recursive calls, and combine step. The combine step is where child answers or smaller subproblem answers become the answer for the current state.',
        },
        {
          id: 'lc-rec-14',
          prompt:
            'Which statement about recursion in interviews is most accurate?',
          choices: [
            'It is often cleaner than iteration when the data structure is naturally hierarchical',
            'It is always faster than iteration',
            'It should never use helper functions',
            'It only works for mathematical sequences',
          ],
          correctIndex: 0,
          explanation:
            'Recursion is often chosen for clarity and natural structure, especially in trees, graphs, and backtracking. It is not automatically faster, and sometimes iterative solutions are safer.',
        },
        {
          id: 'lc-rec-15',
          prompt:
            'If a recursive tree function returns incorrect results, what is often the best debugging question?',
          choices: [
            'What is my helper supposed to return for one node, and is the base case consistent with that contract?',
            'Did I sort the tree values first?',
            'Should I replace recursion with a heap immediately?',
            'Did I use enough global variables?',
          ],
          correctIndex: 0,
          explanation:
            'Most recursive bugs come from a broken function contract or an inconsistent base case. Re-checking what the helper means and what null or leaf should return is often the fastest fix.',
        },
      ],
    },
    search: {
      title: 'Search',
      description:
        'Binary search, graph search, state exploration, and pruning strategies',
      explanation:
        'Search in interview problems means systematically exploring possibilities to find a target, an answer, or a valid state. That can mean binary search over a sorted domain, BFS over levels of a graph, DFS through a state space, or backtracking through candidate solutions. Strong candidates do not memorize one “search trick.” They identify the search space, decide whether they need shortest path, exhaustive exploration, or boundary finding, and then pick the right technique. Search problems are often really about recognizing structure: sorted monotonic conditions suggest binary search, unweighted shortest path suggests BFS, hierarchical or exhaustive exploration often suggests DFS or backtracking. The most important skill is matching the problem shape to the search method.',
      vocab: [
        {
          term: 'search space',
          definition:
            'The full set of candidates, states, or answers that the algorithm may need to explore.',
        },
        {
          term: 'binary search',
          definition:
            'A search technique that repeatedly halves a monotonic sorted search range.',
        },
        {
          term: 'BFS',
          definition:
            'Breadth-first search, which explores level by level and is often used for shortest path in unweighted graphs.',
        },
        {
          term: 'DFS',
          definition:
            'Depth-first search, which explores one path deeply before backtracking.',
        },
        {
          term: 'visited set',
          definition:
            'A set used to avoid reprocessing the same node or state repeatedly.',
        },
        {
          term: 'queue',
          definition:
            'The data structure commonly used for BFS to process states in first-in, first-out order.',
        },
        {
          term: 'stack',
          definition:
            'A data structure or implicit call-stack behavior used for DFS.',
        },
        {
          term: 'monotonic predicate',
          definition:
            'A condition that stays false then true, or true then false, across a search range, enabling binary search.',
        },
        {
          term: 'boundary search',
          definition:
            'Using binary search to find the first or last position where a condition changes.',
        },
        {
          term: 'pruning',
          definition:
            'Skipping branches of the search space that cannot lead to a useful solution.',
        },
        {
          term: 'state graph',
          definition:
            'A graph where each node represents a problem state and edges represent allowed transitions.',
        },
        {
          term: 'shortest path',
          definition:
            'The minimum number of edges or cost needed to move from one state to another.',
        },
        {
          term: 'level-order exploration',
          definition:
            'Exploring states by distance or depth layer, characteristic of BFS.',
        },
        {
          term: 'answer-space binary search',
          definition:
            'Binary search over possible answers rather than directly over array indices.',
        },
        {
          term: 'feasibility check',
          definition:
            'A helper that tests whether a candidate answer works, often used inside answer-space binary search.',
        },
        {
          term: 'branching factor',
          definition:
            'How many next choices or neighbors each state can generate.',
        },
        {
          term: 'neighbor expansion',
          definition:
            'Generating adjacent states from the current state in graph or grid search.',
        },
        {
          term: 'unweighted graph',
          definition:
            'A graph where every edge has equal cost, making BFS suitable for shortest path.',
        },
        {
          term: 'target state',
          definition:
            'The state the search is trying to find or reach.',
        },
        {
          term: 'termination condition',
          definition:
            'The rule that determines when the search can stop.',
        },
      ],
      questions: [
        {
          id: 'lc-search-1',
          prompt:
            'When is classic binary search most appropriate?',
          choices: [
            'When the search space is ordered and the condition is monotonic',
            'When you need shortest path in an unweighted graph',
            'When every permutation must be generated',
            'When the input is a linked list with random pointers',
          ],
          correctIndex: 0,
          explanation:
            'Binary search relies on order and a monotonic rule that lets you eliminate half the search space each step. Without that structure, halving is not justified.',
        },
        {
          id: 'lc-search-2',
          prompt:
            'Which search technique is best for shortest path in an unweighted graph?',
          choices: ['BFS', 'DFS', 'Binary search', 'Quickselect'],
          correctIndex: 0,
          explanation:
            'BFS explores by layers of distance. The first time it reaches a node in an unweighted graph, that path uses the fewest edges.',
        },
        {
          id: 'lc-search-3',
          prompt:
            'Why is a queue used in BFS?',
          choices: [
            'Because BFS must process states in first-in, first-out level order',
            'Because queues automatically sort nodes',
            'Because recursion requires a queue',
            'Because BFS only works on arrays',
          ],
          correctIndex: 0,
          explanation:
            'The FIFO behavior of a queue ensures nodes are expanded in the order they were discovered, which preserves the layer-by-layer property needed for unweighted shortest paths.',
        },
        {
          id: 'lc-search-4',
          prompt:
            'What is the main reason to maintain a visited set in graph search?',
          choices: [
            'To avoid infinite loops and repeated work',
            'To keep nodes sorted',
            'To guarantee O(log n) time',
            'To replace the queue or stack',
          ],
          correctIndex: 0,
          explanation:
            'Graphs can contain cycles or multiple paths to the same node. Without visited tracking, the search may revisit states indefinitely or do a lot of redundant work.',
        },
        {
          id: 'lc-search-5',
          prompt:
            'Which technique is usually best when you need to explore all valid combinations or paths?',
          choices: ['DFS/backtracking', 'BFS', 'Binary search', 'Heap search'],
          correctIndex: 0,
          explanation:
            'When the goal is exhaustive exploration rather than shortest path, DFS or backtracking is often the natural pattern. It descends through choices and backtracks when done.',
        },
        {
          id: 'lc-search-6',
          prompt:
            'What is answer-space binary search?',
          choices: [
            'Binary searching possible answer values and checking feasibility',
            'Binary searching only on tree nodes',
            'Searching both halves recursively and summing them',
            'Running BFS twice on the same graph',
          ],
          correctIndex: 0,
          explanation:
            'Some problems do not directly ask for an index in a sorted array, but the answer itself lies in a numeric range with a monotonic feasibility condition. Then you binary search the answer value.',
        },
        {
          id: 'lc-search-7',
          prompt:
            'If you need the first index where a condition becomes true in a sorted range, what pattern is that?',
          choices: [
            'Boundary binary search',
            'Topological sorting',
            'Union-find compression',
            'Sliding window contraction',
          ],
          correctIndex: 0,
          explanation:
            'Boundary search is a classic binary search use case. You are not just asking “is target present?” but “where does the false-to-true transition happen?”',
        },
        {
          id: 'lc-search-8',
          prompt:
            'Why is DFS often convenient for grids and graphs even when written recursively?',
          choices: [
            'Because it naturally follows one path deeply and backtracks cleanly',
            'Because it always finds the shortest path first',
            'Because it does not need visited tracking',
            'Because it sorts neighbors automatically',
          ],
          correctIndex: 0,
          explanation:
            'DFS is a natural way to explore connected regions, components, or all reachable states. It is especially common in flood fill, island counting, and path-existence problems.',
        },
        {
          id: 'lc-search-9',
          prompt:
            'What does pruning mean in a search problem?',
          choices: [
            'Skipping branches that cannot lead to a useful solution',
            'Deleting part of the input permanently',
            'Converting DFS into BFS',
            'Sorting neighbors before every recursive call',
          ],
          correctIndex: 0,
          explanation:
            'Pruning reduces work by cutting off hopeless branches early. In backtracking, pruning is often what turns an impossible brute-force search into a practical interview solution.',
        },
        {
          id: 'lc-search-10',
          prompt:
            'Which statement about BFS and DFS is most accurate?',
          choices: [
            'BFS is often better for unweighted shortest path, while DFS is often better for exhaustive exploration',
            'DFS always uses less memory than BFS in every case',
            'BFS and DFS always return identical traversal order',
            'DFS cannot be iterative',
          ],
          correctIndex: 0,
          explanation:
            'Their strengths differ. BFS explores by distance layers, while DFS goes deep first. That makes them suitable for different classes of problems.',
        },
        {
          id: 'lc-search-11',
          prompt:
            'What is the main requirement for using binary search on an answer range?',
          choices: [
            'A monotonic feasibility function over the candidate answers',
            'A graph with no cycles',
            'A queue-based traversal',
            'All values must be unique',
          ],
          correctIndex: 0,
          explanation:
            'To binary search answers, you need a function like “Can we achieve this answer?” that changes in one direction across the range. Otherwise you cannot discard half the possibilities safely.',
        },
        {
          id: 'lc-search-12',
          prompt:
            'In a maze where each move has equal cost and you want the minimum number of moves, what is the best default search?',
          choices: ['BFS', 'DFS', 'Binary search', 'Recursion without visited'],
          correctIndex: 0,
          explanation:
            'Equal edge cost means the shortest path by number of moves is exactly what BFS is designed to find. DFS may eventually find a path, but not necessarily the shortest one first.',
        },
        {
          id: 'lc-search-13',
          prompt:
            'What is the “state” in a search problem?',
          choices: [
            'The information needed to uniquely describe where you are in the exploration',
            'Only the final output array',
            'The runtime language being used',
            'The number of lines in the solution',
          ],
          correctIndex: 0,
          explanation:
            'Search problems are much easier once you define state clearly. For example, a state might be a grid position, a word transformation, or an index plus remaining budget.',
        },
        {
          id: 'lc-search-14',
          prompt:
            'Why can DFS without a visited set be wrong on a cyclic graph?',
          choices: [
            'It may revisit the same nodes forever or do redundant work',
            'It automatically becomes BFS',
            'It loses access to neighbors',
            'It forces the graph to become directed',
          ],
          correctIndex: 0,
          explanation:
            'Cycles are the classic reason visited tracking matters. Without it, DFS can get trapped revisiting states endlessly or expanding them many more times than necessary.',
        },
        {
          id: 'lc-search-15',
          prompt:
            'What is usually the first question to ask when choosing a search strategy?',
          choices: [
            'What structure does the search space have, and do I need shortest path, exhaustive exploration, or boundary finding?',
            'Should I use recursion no matter what?',
            'Can I force the solution to use a heap?',
            'Would sorting the input always help?',
          ],
          correctIndex: 0,
          explanation:
            'Choosing a search method is mainly about identifying the problem shape. Sorted monotonic search space suggests binary search, unweighted shortest path suggests BFS, and exhaustive structured exploration often suggests DFS or backtracking.',
        },
      ],
    },
    slidingWindow: {
      title: 'Sliding Window',
      description: 'Subarray and substring window optimization',
      explanation: 'Sliding window is used for problems involving contiguous subarrays or substrings. Instead of recomputing from scratch, you maintain a window defined by two pointers and update it as you expand or shrink the range. This reduces many O(n^2) problems to O(n). The main skill is knowing when to expand, when to shrink, and what condition defines a valid window.',
      vocab: [
        {
          term: 'window',
          definition:
            'A contiguous range defined by two pointers.',
        },
        {
          term: 'left pointer',
          definition:
            'The start of the current window.',
        },
        {
          term: 'right pointer',
          definition:
            'The end of the current window.',
        },
        {
          term: 'expand',
          definition:
            'Move the right pointer to grow the window.',
        },
        {
          term: 'shrink',
          definition:
            'Move the left pointer to reduce the window size.',
        },
        {
          term: 'valid window',
          definition:
            'A window that satisfies the problem’s condition.',
        },
        {
          term: 'frequency map',
          definition:
            'Tracking counts of elements inside the window.',
        },
        {
          term: 'fixed window',
          definition:
            'A window with constant size.',
        },
        {
          term: 'variable window',
          definition:
            'A window that grows and shrinks based on conditions.',
        },
        {
          term: 'max/min window',
          definition:
            'Finding the largest or smallest valid window.',
        },
        {
          term: 'two pointers',
          definition:
            'Technique using two indices to define a range.',
        },
        {
          term: 'invariant',
          definition:
            'A condition that remains true while adjusting the window.',
        },
        {
          term: 'substring',
          definition:
            'A contiguous sequence of characters in a string.',
        },
        {
          term: 'subarray',
          definition:
            'A contiguous sequence of elements in an array.',
        },
      ],
      questions: [
        {
          id: 'lc-sw-1',
          prompt:
            'Given a string, find the length of the longest substring without repeating characters.',
          choices: [
            'Sliding Window with hash map',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Use a sliding window with two pointers and a hash map storing the last index of each character. Expand the right pointer, and if a duplicate is found, move the left pointer just past the previous occurrence. This ensures the window always contains unique characters. Time complexity is O(n) since each character is processed at most twice. Space complexity is O(k), where k is the number of distinct characters.',
        },
        {
          id: 'lc-sw-2',
          prompt:
            'Given an array of positive integers and a target sum, find the length of the smallest contiguous subarray whose sum is at least the target.',
          choices: [
            'Sliding Window with shrinking',
            'Binary Search',
            'Trie',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'Since all numbers are positive, the window sum increases as you expand right and decreases as you shrink left. Expand until the sum meets or exceeds the target, then shrink from the left to minimize length. This works because the sum is monotonic with window expansion. Time complexity is O(n), and space complexity is O(1). This would not work with negative numbers.',
        },
        {
          id: 'lc-sw-3',
          prompt:
            'Given an array of integers (can include negatives), find the maximum sum of a subarray of size k.',
          choices: [
            'Fixed-size Sliding Window',
            'Dynamic Programming',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Since the window size is fixed, maintain the sum of the current window and slide it by adding the next element and removing the leftmost element. This avoids recomputing sums from scratch. Time complexity is O(n), and space complexity is O(1). DP is unnecessary because there are no overlapping subproblems beyond the window.',
        },
        {
          id: 'lc-sw-4',
          prompt:
            'Given a string s and a string t, find the minimum window in s that contains all characters of t.',
          choices: [
            'Sliding Window with frequency map',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Use a variable-length sliding window with two pointers and a frequency map to track required characters. Expand the window until all required characters are included, then shrink it from the left while maintaining validity. Track the minimum window length during this process. Time complexity is O(n), since each character is processed at most twice. Space complexity is O(k), where k is the number of distinct characters in t.',
        },
        {
          id: 'lc-sw-5',
          prompt:
            'Given an array of integers, find the maximum number of consecutive 1s if you can flip at most k zeros.',
          choices: [
            'Sliding Window with constraint tracking',
            'Binary Search',
            'Trie',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'Use a sliding window that tracks how many zeros are inside the window. Expand the right pointer, and if the number of zeros exceeds k, shrink from the left until the constraint is satisfied again. The window size at each valid state is a candidate answer. Time complexity is O(n), and space complexity is O(1).',
        },
        {
          id: 'lc-sw-6',
          prompt:
            'Given a string, count how many substrings contain all three characters a, b, and c.',
          choices: [
            'Sliding Window with counting',
            'Binary Search',
            'Union Find',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Use a sliding window that ensures all required characters are present. Once the window is valid, all substrings extending to the right from the left pointer are also valid, so you can count them efficiently. Time complexity is O(n), and space complexity is O(1) since only a fixed number of character counts are tracked.',
        },
        {
          id: 'lc-sw-7',
          prompt:
            'Given an array of integers, find the number of subarrays with exactly k distinct integers.',
          choices: [
            'Sliding Window with at-most-k trick',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Compute the number of subarrays with at most k distinct elements and subtract the number with at most k - 1. Each of those is computed using a sliding window with a frequency map. Time complexity is O(n), since each element enters and leaves the window at most once. Space complexity is O(k) for the map.',
        },
        {
          id: 'lc-sw-8',
          prompt:
            'Given a string, find all starting indices of substrings that are anagrams of a target string.',
          choices: [
            'Sliding Window with frequency comparison',
            'Binary Search',
            'Heap',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Use a fixed-size sliding window equal to the length of the target string. Maintain character frequency counts and compare with the target’s counts. Update counts incrementally as the window moves. Time complexity is O(n), and space complexity is O(k), where k is alphabet size.',
        },
        {
          id: 'lc-sw-9',
          prompt:
            'Given an array of positive integers, count the number of subarrays with sum less than k.',
          choices: [
            'Sliding Window with product/sum tracking',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'For positive numbers, you can maintain a sliding window and shrink it whenever the sum exceeds or equals k. Each valid window contributes multiple subarrays ending at the current right pointer. Time complexity is O(n), and space complexity is O(1). This approach relies on positivity to maintain monotonic behavior.',
        },
        {
          id: 'lc-sw-10',
          prompt:
            'Given a binary array, find the longest subarray containing at most one zero.',
          choices: [
            'Sliding Window with constraint',
            'Binary Search',
            'Trie',
            'Backtracking',
          ],
          correctIndex: 0,
          explanation:
            'Track the number of zeros in the current window. Expand right, and if more than one zero is included, shrink from the left until only one remains. This maintains a valid window. Time complexity is O(n), and space complexity is O(1).',
        },
        {
          id: 'lc-sw-11',
          prompt:
            'Given a string, find the length of the longest substring with at most k distinct characters.',
          choices: [
            'Sliding Window with frequency map',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Use a sliding window with a hash map tracking character frequencies. Expand right, and if the number of distinct characters exceeds k, shrink from the left until it is valid again. Track the maximum window size. Time complexity is O(n), and space complexity is O(k).',
        },
        {
          id: 'lc-sw-12',
          prompt:
            'Given an array, find the maximum average subarray of length k.',
          choices: [
            'Fixed-size Sliding Window',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Maintain a running sum of a window of size k. Slide the window by adding the next element and removing the previous one. Track the maximum sum seen. Time complexity is O(n), and space complexity is O(1).',
        },
        {
          id: 'lc-sw-13',
          prompt:
            'Given a string, find the longest substring where you can replace at most k characters to make all characters the same.',
          choices: [
            'Sliding Window with max frequency tracking',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Maintain a sliding window and track the count of the most frequent character in the window. The number of replacements needed is window size minus that max frequency. If it exceeds k, shrink the window. This works because the optimal window always keeps the dominant character. Time complexity is O(n), space O(k).',
        },
        {
          id: 'lc-sw-14',
          prompt:
            'Given an array of integers, find the longest subarray with sum equal to k.',
          choices: [
            'Prefix Sum + Hash Map',
            'Sliding Window',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'This is NOT a sliding window problem when negative numbers are present. Sliding window requires monotonicity, which negative numbers break. The correct approach uses prefix sums and a hash map storing earliest indices. Time complexity is O(n), space O(n). This is a key trap question.',
        },
        {
          id: 'lc-sw-15',
          prompt:
            'Given a string and integer k, count the number of substrings with exactly k distinct characters.',
          choices: [
            'Sliding Window using at-most-k trick',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Compute substrings with at most k distinct characters and subtract those with at most k - 1. Each is computed using sliding window with a frequency map. Time complexity is O(n), space complexity is O(k). This pattern is very common in interview problems involving exact counts.',
        },
      ]
    },
    stack: {
      title: 'Stack / Monotonic Stack',
      description: 'Stack-based processing and monotonic patterns',
      explanation: 'Stacks follow a last-in, first-out (LIFO) order and are useful for tracking nested structures, reversing order, or maintaining candidates. Many interview problems use stacks for parsing expressions, validating parentheses, or building monotonic stacks to efficiently find next greater or smaller elements. The key is recognizing when the most recent element should be processed first.',
      vocab: [
        {
          term: 'stack',
          definition:
            'A LIFO data structure where the last element added is removed first.',
        },
        {
          term: 'push',
          definition:
            'Add an element to the top of the stack.',
        },
        {
          term: 'pop',
          definition:
            'Remove the top element from the stack.',
        },
        {
          term: 'peek',
          definition:
            'View the top element without removing it.',
        },
        {
          term: 'LIFO',
          definition:
            'Last-in, first-out ordering.',
        },
        {
          term: 'monotonic stack',
          definition:
            'A stack maintaining elements in increasing or decreasing order.',
        },
        {
          term: 'next greater element',
          definition:
            'The next element to the right that is larger.',
        },
        {
          term: 'next smaller element',
          definition:
            'The next element to the right that is smaller.',
        },
        {
          term: 'balanced parentheses',
          definition:
            'Matching opening and closing symbols correctly.',
        },
        {
          term: 'call stack',
          definition:
            'The stack used by recursion to track function calls.',
        },
        {
          term: 'expression parsing',
          definition:
            'Using stacks to evaluate or validate mathematical expressions.',
        },
        {
          term: 'reverse order',
          definition:
            'Using a stack to invert sequence order.',
        },
        {
          term: 'auxiliary stack',
          definition:
            'An extra stack used to support additional operations.',
        },
      ],
      questions: [
        {
          id: 'lc-stack-1',
          prompt:
            'Given a string containing only the characters (), {}, and [], determine whether the input string is valid.',
          choices: [
            'Stack of opening brackets',
            'Two Pointers',
            'Binary Search',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is the classic stack problem because the most recently opened bracket must be the first one closed. Push opening brackets onto the stack, and whenever you see a closing bracket, check whether it matches the stack top. If not, the string is invalid. At the end, the stack must also be empty. Time complexity is O(n), since each character is pushed and popped at most once. Space complexity is O(n) in the worst case if all characters are opening brackets.',
        },
        {
          id: 'lc-stack-2',
          prompt:
            'Given an array of integers, return an array where each element is the next greater element to its right, or -1 if none exists.',
          choices: [
            'Monotonic decreasing stack',
            'Sliding Window',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'A monotonic decreasing stack is ideal here. Scan from right to left, popping any values less than or equal to the current value because they can never be the next greater element for anything further left. After popping, the stack top is the next greater element if it exists. Then push the current value. Each element is pushed and popped at most once, so time complexity is O(n). Space complexity is O(n) for the stack.',
        },
        {
          id: 'lc-stack-3',
          prompt:
            'Given an array of daily temperatures, return how many days you would have to wait until a warmer temperature for each day.',
          choices: [
            'Monotonic decreasing stack of indices',
            'Binary Search',
            'Two Pointers',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Use a monotonic decreasing stack storing indices of unresolved days. As you scan from left to right, if the current temperature is warmer than the temperature at the stack top, you have resolved that earlier day, so pop it and record the difference in indices. Continue until the stack is empty or the current temperature is no longer warmer. Then push the current index. Time complexity is O(n) because each index is pushed and popped once. Space complexity is O(n).',
        },
        {
          id: 'lc-stack-4',
          prompt:
            'Given an array of bar heights representing a histogram, return the area of the largest rectangle.',
          choices: [
            'Monotonic increasing stack',
            'Sliding Window',
            'Heap',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'The key is to determine, for each bar, the widest range where that bar is the limiting height. A monotonic increasing stack lets you find when a bar’s rectangle must end because a shorter bar appears. When popping a bar, you can compute the rectangle area using that bar as the height and the current index plus the new stack top to determine width boundaries. Time complexity is O(n), since each bar is pushed and popped at most once. Space complexity is O(n).',
        },
        {
          id: 'lc-stack-5',
          prompt:
            'Given a string representing a mathematical expression with +, -, parentheses, and spaces, evaluate it.',
          choices: [
            'Stack for sign/context management',
            'Binary Search',
            'Sliding Window',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'A stack is useful because parentheses create nested evaluation contexts. When you encounter an opening parenthesis, push the current result and sign onto the stack, then reset for the subexpression. When you encounter a closing parenthesis, finish the subexpression and combine it with the previous context from the stack. Time complexity is O(n), since each character is processed once. Space complexity is O(n) in the worst case for deeply nested parentheses.',
        },
        {
          id: 'lc-stack-6',
          prompt:
            'Given a list of tokens in Reverse Polish Notation, evaluate the expression.',
          choices: [
            'Operand stack',
            'Two Pointers',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Reverse Polish Notation is a direct stack use case. Push numbers onto the stack. When you encounter an operator, pop the top two operands, apply the operator in the correct order, and push the result back. At the end, the stack contains the final value. Time complexity is O(n), since each token is processed once. Space complexity is O(n) in the worst case when many operands appear before operators.',
        },
        {
          id: 'lc-stack-7',
          prompt:
            'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
          choices: [
            'Stack with auxiliary min tracking',
            'Binary Search Tree',
            'Heap only',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'Use either a second stack storing the running minimum at each depth, or store pairs like {value, currentMin} in the main stack. That way, when you pop, the previous minimum is automatically restored. All operations—push, pop, top, and getMin—run in O(1) time. Space complexity is O(n). A heap alone cannot preserve stack order for pop operations.',
        },
        {
          id: 'lc-stack-8',
          prompt:
            'Given a string, remove adjacent duplicate characters repeatedly until no such duplicates remain.',
          choices: [
            'Stack simulation',
            'Binary Search',
            'Trie',
            'Greedy interval selection',
          ],
          correctIndex: 0,
          explanation:
            'A stack works because when a character matches the current top, the pair should cancel out, just like undoing the last unmatched character. If it does not match, push it. This naturally handles chain reactions, because removing one pair may expose another new pair. Time complexity is O(n), since each character is pushed and popped at most once. Space complexity is O(n).',
        },
        {
          id: 'lc-stack-9',
          prompt:
            'Given a Unix-style file path, simplify it to its canonical path.',
          choices: [
            'Stack of path components',
            'Sliding Window',
            'Binary Search',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Split the path by slashes and process each component. Ignore empty strings and ".", and when you see "..", pop from the stack if possible. Otherwise push normal directory names. Finally join the remaining stack contents with slashes. The stack matches the way directory navigation works: entering a directory pushes, going up pops. Time complexity is O(n), where n is the length of the path. Space complexity is O(n) for stored components.',
        },
        {
          id: 'lc-stack-10',
          prompt:
            'Given a string of parentheses, return the length of the longest valid parentheses substring.',
          choices: [
            'Stack of indices',
            'Two Pointers only',
            'Heap',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'A common stack solution stores indices, not characters. Initialize with -1 as a base index. Push indices of opening parentheses. On a closing parenthesis, pop. If the stack becomes empty, push the current index as the new base. Otherwise, the difference between the current index and the new stack top gives a valid substring length. Time complexity is O(n), and space complexity is O(n). There is also a valid two-pass counter solution, but the indexed stack method is the most standard interview answer.',
        },
        {
          id: 'lc-stack-11',
          prompt:
            'Given an array, find the next greater element for each value in a circular array.',
          choices: [
            'Monotonic stack with two passes',
            'Binary Search',
            'Union Find',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'This is a circular extension of next greater element. Use a monotonic decreasing stack of indices and iterate through the array twice modulo n. The second pass lets elements near the end of the array find greater values near the front. Only push indices during the first pass so you do not duplicate work. Time complexity is O(n), because each index is pushed and popped at most once. Space complexity is O(n).',
        },
        {
          id: 'lc-stack-12',
          prompt:
            'Given a string containing letters and parentheses, remove the minimum number of parentheses so the result is valid.',
          choices: [
            'Stack or index-tracking for unmatched parentheses',
            'Backtracking all possibilities',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'A stack or equivalent index-tracking structure lets you identify unmatched opening and closing parentheses in one pass. Mark the invalid indices, then build the result while skipping them. This runs in O(n) time and O(n) space. Backtracking would explore exponentially many removal combinations and is not needed when the task is just to construct one valid minimum-removal result.',
        },
        {
          id: 'lc-stack-13',
          prompt:
            'Given preorder traversal of a binary search tree, determine whether it could represent a valid BST.',
          choices: [
            'Stack with lower-bound tracking',
            'Union Find',
            'Sliding Window',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'Use a stack to simulate traversal through ancestor boundaries. Maintain a lower bound for valid node values. As you scan the preorder array, whenever the current value is greater than the stack top, pop and update the lower bound, because you are moving into a right subtree. If a value ever violates the lower bound, the preorder is invalid. Time complexity is O(n), and space complexity is O(n) in the worst case.',
        },
        {
          id: 'lc-stack-14',
          prompt:
            'Given an array of integers, find the sum of the minimum value of every subarray.',
          choices: [
            'Monotonic increasing stack',
            'Sliding Window',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'The optimal approach counts how many subarrays use each element as their minimum. A monotonic increasing stack helps find the previous and next smaller elements, which determine how far the element can extend left and right while remaining the minimum. Multiply those span counts by the element value and sum across all elements. Time complexity is O(n), since each element is pushed and popped at most once. Space complexity is O(n). A brute-force sliding window approach would be far too slow.',
        },
        {
          id: 'lc-stack-15',
          prompt:
            'Given an array of asteroids moving left or right, return the state of the asteroids after all collisions.',
          choices: [
            'Stack simulation of collisions',
            'Binary Search',
            'Two Pointers',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Use a stack to represent the stable asteroids seen so far. A collision is only possible when the stack top is moving right and the current asteroid is moving left. Then repeatedly compare sizes, popping destroyed asteroids until the collision resolves. This is a good stack problem because each new asteroid interacts only with the most recent unresolved right-moving asteroid. Time complexity is O(n), since each asteroid is pushed and popped at most once. Space complexity is O(n).',
        },
      ]
    },
    trees: {
      title: 'Trees',
      description: 'Binary trees, BST, DFS/BFS traversal',
      explanation: 'Tree problems involve hierarchical structures where each node connects to children rather than a linear sequence. Most interview questions focus on traversal (DFS or BFS), recursion, and aggregating information from subtrees. Binary trees are the most common, and BSTs add ordering properties that allow pruning and efficient searches. The key is understanding how information flows up and down the tree during recursion.',
      vocab: [
        {
          term: 'tree',
          definition:
            'A hierarchical structure of nodes with a single root and no cycles.',
        },
        {
          term: 'root',
          definition:
            'The top node of a tree.',
        },
        {
          term: 'child',
          definition:
            'A node directly below another node.',
        },
        {
          term: 'parent',
          definition:
            'A node directly above another node.',
        },
        {
          term: 'leaf',
          definition:
            'A node with no children.',
        },
        {
          term: 'binary tree',
          definition:
            'A tree where each node has at most two children.',
        },
        {
          term: 'BST',
          definition:
            'A binary search tree with left < node < right ordering.',
        },
        {
          term: 'height',
          definition:
            'The length of the longest path from a node to a leaf.',
        },
        {
          term: 'depth',
          definition:
            'The distance from the root to a node.',
        },
        {
          term: 'DFS',
          definition:
            'Depth-first traversal exploring one branch fully before others.',
        },
        {
          term: 'BFS',
          definition:
            'Breadth-first traversal exploring level by level.',
        },
        {
          term: 'inorder',
          definition:
            'Traversal: left, node, right.',
        },
        {
          term: 'preorder',
          definition:
            'Traversal: node, left, right.',
        },
        {
          term: 'postorder',
          definition:
            'Traversal: left, right, node.',
        },
        {
          term: 'subtree',
          definition:
            'A tree formed from a node and its descendants.',
        },
        {
          term: 'balanced tree',
          definition:
            'A tree where heights of subtrees differ minimally.',
        },
        {
          term: 'recursive traversal',
          definition:
            'Using recursion to visit nodes.',
        },
      ],
      questions: [
        {
          id: 'lc-tree-1',
          prompt:
            'Given the root of a binary tree, return its maximum depth.',
          choices: [
            'DFS recursion',
            'Binary Search',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is a classic tree traversal problem. The maximum depth of a node is 1 plus the maximum of the depths of its left and right subtrees. That naturally leads to a recursive DFS solution. Time complexity is O(n), since every node is visited once. Space complexity is O(h), where h is the tree height, due to the recursion stack. In the worst case of a skewed tree, this becomes O(n); in a balanced tree it is O(log n). A BFS level-order traversal also works, but DFS recursion is the most direct pattern here.',
        },
        {
          id: 'lc-tree-2',
          prompt:
            'Given the root of a binary tree, determine whether it is height-balanced.',
          choices: [
            'Postorder DFS returning height and balance status',
            'Sliding Window',
            'Trie',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'The optimal solution uses postorder DFS so each node can compute information from its children before deciding whether it is balanced. For each node, compute the heights of the left and right subtrees and check whether their difference is at most 1. If any subtree is already unbalanced, propagate failure upward immediately. Time complexity is O(n), since each node is processed once. Space complexity is O(h) for recursion depth. A naive solution that recomputes subtree heights repeatedly would degrade to O(n^2).',
        },
        {
          id: 'lc-tree-3',
          prompt:
            'Given the root of a binary tree, determine whether there exists a root-to-leaf path whose values sum to a target.',
          choices: [
            'DFS path traversal',
            'Heap',
            'Binary Search',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is a root-to-leaf traversal problem, so DFS is the natural choice. At each node, subtract the node value from the remaining target and recurse into children. When you reach a leaf, check whether the remaining target equals that leaf’s value. Time complexity is O(n), since every node may need to be explored. Space complexity is O(h) for the recursion stack, where h is the tree height. BFS also works, but DFS is usually simpler to express.',
        },
        {
          id: 'lc-tree-4',
          prompt:
            'Given the root of a binary tree, return its level order traversal.',
          choices: [
            'BFS with queue',
            'Monotonic Stack',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Level order traversal is the textbook use case for BFS. Use a queue, processing nodes level by level. For each level, pop all currently queued nodes, record their values, and push their children. This guarantees nodes are visited in top-down, left-to-right level order. Time complexity is O(n), since each node is enqueued and dequeued once. Space complexity is O(w), where w is the maximum width of the tree, which can be O(n) in the worst case.',
        },
        {
          id: 'lc-tree-5',
          prompt:
            'Given the root of a binary search tree and an integer k, return the kth smallest value in the tree.',
          choices: [
            'Inorder traversal',
            'Sliding Window',
            'Heap only',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'In a binary search tree, inorder traversal visits nodes in sorted order. That means the kth node visited during inorder traversal is the kth smallest element. You can implement this recursively or iteratively with a stack. Time complexity is O(h + k) in the best structured early-stop implementation, because you only descend through height h and then visit k nodes. In the worst case it is O(n). Space complexity is O(h) for the recursion stack or explicit stack.',
        },
        {
          id: 'lc-tree-6',
          prompt:
            'Given the root of a binary tree, determine whether it is a valid binary search tree.',
          choices: [
            'DFS with value bounds',
            'Heap',
            'Sliding Window',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'The best solution carries valid lower and upper bounds down the tree. Each node must be strictly greater than all values allowed in its left ancestry lower bound and strictly less than all values allowed in its right ancestry upper bound. This is better than only comparing a node to its immediate children, which misses deeper violations. Time complexity is O(n), since each node is checked once. Space complexity is O(h) for recursion depth.',
        },
        {
          id: 'lc-tree-7',
          prompt:
            'Given the roots of two binary trees, determine whether they are structurally identical and have the same node values.',
          choices: [
            'Recursive DFS comparison',
            'Binary Search',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is a straightforward recursive tree comparison. Two trees are the same if their roots have the same value and their left subtrees are the same and their right subtrees are the same. If one node is null and the other is not, they differ immediately. Time complexity is O(n), where n is the number of nodes being compared in the overlapping structure. Space complexity is O(h) for recursion depth. BFS comparison is also possible, but recursion is the cleanest solution.',
        },
        {
          id: 'lc-tree-8',
          prompt:
            'Given the root of a binary tree, invert the tree in place.',
          choices: [
            'DFS or BFS swapping children',
            'Binary Search',
            'Sliding Window',
            'Two Pointers',
          ],
          correctIndex: 0,
          explanation:
            'To invert a binary tree, swap the left and right child pointers at every node. This can be done with DFS recursively or iteratively, or with BFS using a queue. Every node must be visited once, so time complexity is O(n). Space complexity is O(h) with DFS recursion or O(w) with BFS, where h is tree height and w is maximum width. The problem mainly tests simple tree traversal and pointer manipulation.',
        },
        {
          id: 'lc-tree-9',
          prompt:
            'Given the root of a binary tree, return the diameter of the tree, defined as the number of edges on the longest path between any two nodes.',
          choices: [
            'Postorder DFS computing subtree heights',
            'Sliding Window',
            'Trie',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'The diameter through a node is the sum of the heights of its left and right subtrees. A postorder DFS lets you compute each subtree height and update a global maximum diameter as you return upward. This avoids recomputing heights repeatedly. Time complexity is O(n), since each node is processed once. Space complexity is O(h) for recursion depth. A naive separate-height-per-node solution would be O(n^2) in the worst case.',
        },
        {
          id: 'lc-tree-10',
          prompt:
            'Given the root of a binary tree, return the lowest common ancestor of two given nodes in the tree.',
          choices: [
            'Recursive DFS',
            'Binary Search',
            'Heap',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'For a general binary tree, use recursive DFS. If the current node is null, p, or q, return it. Recurse into left and right subtrees. If both sides return non-null values, the current node is the lowest common ancestor. Otherwise return whichever side is non-null. Time complexity is O(n), since in the worst case you may visit every node. Space complexity is O(h) for recursion depth. This differs from the BST version, where ordering allows a more direct search.',
        },
        {
          id: 'lc-tree-11',
          prompt:
            'Given the root of a binary search tree and two node values, find their lowest common ancestor.',
          choices: [
            'Use BST ordering to walk downward',
            'Union Find',
            'Trie',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'In a BST, if both target values are smaller than the current node, move left. If both are larger, move right. Otherwise, the current node is where their paths split, so it is the lowest common ancestor. This uses the BST ordering property directly and is simpler than general-tree DFS. Time complexity is O(h), where h is the tree height. Space complexity is O(1) iteratively or O(h) recursively.',
        },
        {
          id: 'lc-tree-12',
          prompt:
            'Given preorder and inorder traversal arrays of a binary tree, reconstruct the tree.',
          choices: [
            'DFS recursion with inorder index map',
            'Sliding Window',
            'Binary Search',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'The first element in preorder is always the root. Find that root in inorder to determine how many nodes belong to the left and right subtrees, then recurse on those segments. A hash map from inorder value to index avoids repeated linear searches. With that map, time complexity is O(n), since each node is created once and each inorder lookup is O(1). Space complexity is O(n) for the map plus O(h) recursion depth. Without the map, time would degrade to O(n^2) in the worst case.',
        },
        {
          id: 'lc-tree-13',
          prompt:
            'Serialize and deserialize a binary tree so that its exact structure can be reconstructed later.',
          choices: [
            'Tree traversal with null markers',
            'Binary Search',
            'Union Find',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'A correct serialization must preserve both values and structure, so traversal alone is not enough unless null children are recorded explicitly. Preorder traversal with null markers is a common solution: write node values and a marker for nulls, then reconstruct using the same order during deserialization. BFS with null markers also works. Time complexity is O(n) for both serialization and deserialization, since every node and null position is processed once. Space complexity is O(n) for the serialized representation and recursion or queue usage.',
        },
        {
          id: 'lc-tree-14',
          prompt:
            'Given the root of a binary tree, return the maximum path sum, where a path may start and end at any nodes.',
          choices: [
            'Postorder DFS with gain calculation',
            'Two Pointers',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'This is a tree DP / DFS problem. For each node, compute the maximum gain it can contribute upward to its parent, which is node.val plus the larger of the left or right gains if they are positive. Also compute the best complete path passing through the node as node.val + leftGain + rightGain, and update a global maximum. Postorder traversal is required because each node depends on child results. Time complexity is O(n), and space complexity is O(h) for recursion depth.',
        },
        {
          id: 'lc-tree-15',
          prompt:
            'Given the root of a binary tree, flatten it to a linked list in-place following preorder traversal order.',
          choices: [
            'Preorder-style DFS rewiring pointers',
            'Heap',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'The flattened list must follow preorder order, so the transformation should preserve root, then left subtree, then right subtree. A common approach is postorder-like DFS that flattens left and right subtrees first, then splices the flattened left subtree between the root and the flattened right subtree. Another clean method uses reverse preorder traversal with a prev pointer. Time complexity is O(n), since each node is rewired a constant number of times. Space complexity is O(h) for recursion depth, or O(1) extra with Morris-style techniques if you go for the advanced variant.',
        },
      ]
    },
    trie: {
      title: 'Trie',
      description: 'Prefix trees and word search',
      explanation: 'A trie is a specialized tree used to store strings by their prefixes. Each node represents a character, and paths from root to node form prefixes or full words. Tries are useful for prefix searches, autocomplete, and dictionary problems. The main advantage is efficient lookup based on shared prefixes, but they trade memory for speed.',
      vocab: [
        {
          term: 'trie',
          definition:
            'A tree structure where each path represents a sequence of characters.',
        },
        {
          term: 'prefix',
          definition:
            'The beginning part of a string.',
        },
        {
          term: 'root',
          definition:
            'The starting node of the trie.',
        },
        {
          term: 'child node',
          definition:
            'Represents the next character in a sequence.',
        },
        {
          term: 'end of word',
          definition:
            'A marker indicating a complete word in the trie.',
        },
        {
          term: 'insert',
          definition:
            'Adding a word character by character into the trie.',
        },
        {
          term: 'search',
          definition:
            'Checking if a word exists in the trie.',
        },
        {
          term: 'startsWith',
          definition:
            'Checking if any word begins with a given prefix.',
        },
        {
          term: 'branching factor',
          definition:
            'Number of children per node, often based on alphabet size.',
        },
        {
          term: 'path',
          definition:
            'Sequence of nodes representing characters.',
        },
        {
          term: 'compressed trie',
          definition:
            'A space-optimized trie merging chains of single children.',
        },
        {
          term: 'autocomplete',
          definition:
            'Finding words that match a given prefix.',
        },
        {
          term: 'dictionary',
          definition:
            'A collection of words stored in the trie.',
        },
      ],
      questions: [
        {
          id: 'lc-trie-1',
          prompt:
            'Design a data structure that supports insert(word), search(word), and startsWith(prefix).',
          choices: [
            'Trie',
            'Binary Search Tree',
            'Heap',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is the canonical Trie problem. A Trie stores words character by character, so insert, exact-word search, and prefix search all follow the same path traversal logic. Each node represents a prefix, and a boolean flag marks whether a full word ends there. If the word length is m, then insert, search, and startsWith each run in O(m) time. Space complexity is O(total characters inserted), though actual memory usage is higher because each node stores child references.',
        },
        {
          id: 'lc-trie-2',
          prompt:
            'Given a list of words, replace each word in a sentence with the shortest root from a dictionary if one exists as a prefix.',
          choices: [
            'Trie prefix search',
            'Sliding Window',
            'Binary Search',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'A Trie is ideal because you want the shortest matching prefix from a dictionary. Insert all root words into the Trie, then for each word in the sentence, scan character by character until either you find a Trie node marking the end of a root or the path breaks. The first root found is the shortest valid replacement because Trie traversal follows prefixes in order. If the sentence has total length N, the overall time is O(N) plus Trie construction time. Space complexity is O(total root characters).',
        },
        {
          id: 'lc-trie-3',
          prompt:
            'Given a list of words, return the longest word such that every prefix of that word is also in the list.',
          choices: [
            'Trie with prefix-end validation',
            'Heap only',
            'Binary Search',
            'Two Pointers',
          ],
          correctIndex: 0,
          explanation:
            'A Trie works well because each node represents a prefix. To validate a candidate word, every node along its path must also mark the end of a complete word. You can insert all words, then run DFS or scan candidates while checking that every prefix node is terminal. The Trie makes prefix validation efficient and structured. Let total inserted characters be T. Building the Trie is O(T), and validating words is also O(T) total if done carefully. Space complexity is O(T).',
        },
        {
          id: 'lc-trie-4',
          prompt:
            'Given a list of products and a search word, return up to three lexicographically smallest product suggestions after each typed character.',
          choices: [
            'Trie with prefix traversal',
            'Union Find',
            'Sliding Window',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'This is a classic autocomplete-by-prefix problem. A Trie naturally organizes products by prefix, so after each typed character you can move one level deeper and retrieve suggestions from that subtree. Many implementations store a small sorted list of up to three products at each node during insertion, which makes each query prefix O(m) where m is prefix length plus O(1) retrieval of suggestions. Trie construction costs O(total product characters), and space complexity is O(total product characters) plus suggestion metadata.',
        },
        {
          id: 'lc-trie-5',
          prompt:
            'Given a board of letters and a list of words, return all words that can be formed by traversing adjacent cells.',
          choices: [
            'Trie + DFS backtracking',
            'Binary Search',
            'Heap',
            'Two Pointers',
          ],
          correctIndex: 0,
          explanation:
            'Searching each word independently is far too expensive. The optimal approach builds a Trie from the word list, then performs DFS from each board cell while walking the Trie in parallel. If the current board path is not a prefix in the Trie, the search prunes immediately. This avoids exploring huge numbers of dead paths. Time complexity depends on board size and word structure, but in interview terms the key gain is prefix pruning. Space complexity includes O(total word characters) for the Trie plus O(L) recursion depth, where L is the maximum word length.',
        },
        {
          id: 'lc-trie-6',
          prompt:
            'Design a data structure that supports adding words and searching where the query may contain "." to match any single character.',
          choices: [
            'Trie with DFS wildcard branching',
            'Binary Search Tree',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'A Trie is the natural structure because exact characters follow one path, while "." branches to all children at the current node. AddWord is O(m), where m is the word length. Search is O(m) in the best case without wildcards, but can branch exponentially in the worst case with many "." characters, up to O(26^m) for lowercase English in the extreme. Space complexity is O(total inserted characters). The important interview insight is that Trie handles wildcard prefix branching cleanly.',
        },
        {
          id: 'lc-trie-7',
          prompt:
            'Given a list of words, return the shortest unique prefix for each word.',
          choices: [
            'Trie with prefix frequency counts',
            'Heap',
            'Sliding Window',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'Insert all words into a Trie while incrementing a count at each node for how many words pass through that prefix. Then for each word, walk the Trie until you reach the first node whose count is 1. That prefix is unique. If total characters across all words is T, building the Trie is O(T) and extracting all shortest unique prefixes is also O(T). Space complexity is O(T). This is a very standard Trie use case because prefix sharing is exactly what the data structure captures.',
        },
        {
          id: 'lc-trie-8',
          prompt:
            'Given a dictionary of words, determine whether any word is a prefix of another word.',
          choices: [
            'Trie prefix-end conflict check',
            'Monotonic Stack',
            'Two Pointers',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'A Trie makes prefix conflicts easy to detect. While inserting a word, if you encounter a node already marked as the end of a word before finishing the current word, then an earlier word is a prefix of this one. Also, after insertion, if the final node has children, then the current word is a prefix of some longer word. Time complexity is O(T), where T is the total number of characters inserted. Space complexity is O(T). Sorting can also solve this problem, but Trie is the direct prefix-oriented structure.',
        },
        {
          id: 'lc-trie-9',
          prompt:
            'Given a list of integers, find the maximum XOR of any two numbers.',
          choices: [
            'Bitwise Trie',
            'Binary Search',
            'Sliding Window',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'This is one of the most common non-string Trie problems. Build a bitwise Trie from the binary representations of the numbers. For each number, greedily try to move to the opposite bit at each level, because opposite bits maximize XOR. With fixed-width integers, each insertion and query is O(B), where B is the number of bits, typically 32. For n numbers, total time is O(nB), which is effectively O(n). Space complexity is O(nB) in the worst case.',
        },
        {
          id: 'lc-trie-10',
          prompt:
            'Given a stream of characters queried one by one, determine after each query whether any suffix of the stream matches a word from a dictionary.',
          choices: [
            'Reversed Trie',
            'Heap',
            'Binary Search',
            'Two Pointers',
          ],
          correctIndex: 0,
          explanation:
            'Store dictionary words in reversed form inside a Trie. As characters stream in, keep a recent suffix buffer and traverse the Trie backward through that buffer. If you hit a terminal Trie node, then some suffix matches a dictionary word. This is more efficient than checking every dictionary word against every suffix. If the maximum word length is L, each query can be processed in O(L) time. Space complexity is O(total dictionary characters).',
        },
        {
          id: 'lc-trie-11',
          prompt:
            'Given a set of folder paths, remove all subfolders and return only the top-level folders.',
          choices: [
            'Trie over path segments',
            'Sliding Window',
            'Heap',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'A Trie over path segments captures folder hierarchy directly. When a node is marked as a complete folder, all deeper descendants are subfolders and can be ignored in the output. This gives a natural hierarchical solution. If the total number of path segments is T, building and traversing the Trie is O(T). Space complexity is O(T). Sorting by string also works well for this problem, but Trie is a valid and structurally clean approach when thinking in terms of nested paths.',
        },
        {
          id: 'lc-trie-12',
          prompt:
            'Given a dictionary, determine whether a word can be formed by concatenating two or more shorter words from the same dictionary.',
          choices: [
            'Trie + DFS / DP over prefixes',
            'Binary Search',
            'Heap',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'A Trie helps efficiently enumerate valid prefix breaks. As you scan a word through the Trie, every point where you hit a terminal node is a possible split, and then DFS or DP can continue checking the suffix. Trie reduces repeated prefix checks compared with scanning all dictionary words directly. Time complexity depends on the number of valid split points and memoization strategy, but the key pattern is prefix search plus recursion or DP. Space complexity includes O(total dictionary characters) for the Trie plus recursion or memo storage.',
        },
        {
          id: 'lc-trie-13',
          prompt:
            'Given a list of words, count how many distinct prefixes appear across the entire dictionary.',
          choices: [
            'Trie node counting',
            'Binary Search',
            'Two Pointers',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Each Trie node corresponds to a distinct prefix. After inserting all words, the number of non-root nodes equals the number of distinct non-empty prefixes. Building the Trie takes O(T), where T is the total number of characters across all words. Counting nodes is O(number of Trie nodes), which is also O(T). Space complexity is O(T). This is a strong conceptual Trie question because the data structure directly materializes prefix uniqueness.',
        },
        {
          id: 'lc-trie-14',
          prompt:
            'Design an autocomplete system that returns the top matching historical sentences for a typed prefix.',
          choices: [
            'Trie with frequency metadata',
            'Sliding Window',
            'Union Find',
            'Binary Search only',
          ],
          correctIndex: 0,
          explanation:
            'Autocomplete is fundamentally a prefix query problem, which makes Trie the best fit. Each Trie node represents a prefix and can store ranked sentence metadata, such as top candidates or references used to compute rankings. Querying then becomes walking the prefix in O(m) time, where m is the typed prefix length, followed by retrieving the top results from node metadata. Space complexity is O(total sentence characters) plus ranking storage. This is one of the most important practical Trie design questions.',
        },
        {
          id: 'lc-trie-15',
          prompt:
            'Given a list of words, determine whether a query string starts with any dictionary word and return the earliest matching dictionary prefix.',
          choices: [
            'Trie prefix walk',
            'Heap',
            'Binary Search over unsorted words',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'A Trie lets you scan the query string character by character and stop as soon as you either leave the Trie or hit a terminal node. The first terminal node encountered gives the earliest matching dictionary prefix. This is O(m) time for a query of length m, since you follow at most one path through the Trie. Space complexity is O(total dictionary characters). Without a Trie, checking all dictionary words separately would be much less efficient.',
        },
      ]
    },
    twoPointers: {
      title: 'Two Pointers',
      description: 'Opposing or fast-slow pointer techniques',
      explanation: 'Two pointers is a technique where two indices move through a structure to reduce complexity. Often used on sorted arrays or strings, it helps solve problems like finding pairs, removing duplicates, or partitioning data. The main idea is adjusting pointers based on conditions to avoid nested loops and achieve linear time.',
      vocab: [
        {
          term: 'two pointers',
          definition:
            'Using two indices to traverse or process data efficiently.',
        },
        {
          term: 'left pointer',
          definition:
            'The pointer starting from the beginning.',
        },
        {
          term: 'right pointer',
          definition:
            'The pointer starting from the end or advancing ahead.',
        },
        {
          term: 'converging pointers',
          definition:
            'Pointers moving toward each other.',
        },
        {
          term: 'fast and slow',
          definition:
            'Pointers moving at different speeds.',
        },
        {
          term: 'sorted array',
          definition:
            'A prerequisite that enables efficient pointer movement.',
        },
        {
          term: 'pair sum',
          definition:
            'Finding two values that meet a target condition.',
        },
        {
          term: 'partition',
          definition:
            'Rearranging elements based on a condition.',
        },
        {
          term: 'in-place',
          definition:
            'Modifying data without extra memory.',
        },
        {
          term: 'duplicate removal',
          definition:
            'Eliminating repeated elements using pointer logic.',
        },
        {
          term: 'window',
          definition:
            'A range defined by two pointers (overlaps with sliding window).',
        },
        {
          term: 'linear scan',
          definition:
            'Traversing the structure once.',
        },
        {
          term: 'invariant',
          definition:
            'A condition maintained during pointer movement.',
        },
      ],
      questions: [
        {
          id: 'lc-tp-1',
          prompt:
            'Given a sorted array of integers and a target sum, return the indices of the two numbers that add up to the target.',
          choices: [
            'Two Pointers from both ends',
            'Hash Map',
            'Monotonic Stack',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Because the array is sorted, two pointers is the optimal pattern. Start one pointer at the left end and one at the right end. If the sum is too small, move the left pointer right to increase it. If the sum is too large, move the right pointer left to decrease it. This works because sorting gives a monotonic relationship between pointer movement and sum changes. Time complexity is O(n), since each pointer moves at most n times total. Space complexity is O(1). A hash map also works in O(n) time, but two pointers is cleaner here and uses constant extra space.',
        },
        {
          id: 'lc-tp-2',
          prompt:
            'Given a string, determine whether it is a palindrome after ignoring non-alphanumeric characters and case.',
          choices: [
            'Two Pointers from both ends',
            'Sliding Window',
            'Binary Search',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Use one pointer at the start and one at the end. Move each inward until both point to alphanumeric characters, compare them case-insensitively, and continue. If any pair differs, the string is not a palindrome. This is a classic two-pointer pattern because you are comparing mirrored positions while skipping irrelevant characters. Time complexity is O(n), since each pointer moves inward at most once through the string. Space complexity is O(1).',
        },
        {
          id: 'lc-tp-3',
          prompt:
            'Given a sorted array, remove duplicates in-place so that each element appears only once and return the new length.',
          choices: [
            'Slow/Fast Two Pointers',
            'Hash Set',
            'Heap',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Use a slow pointer to mark the position of the next unique value and a fast pointer to scan the array. Whenever the fast pointer finds a new value different from the previous unique one, write it at the slow pointer and advance slow. This preserves the first occurrence of each value in-place. Time complexity is O(n), since the fast pointer scans once. Space complexity is O(1). A hash set would use unnecessary extra space and would not preserve the in-place sorted-array structure as cleanly.',
        },
        {
          id: 'lc-tp-4',
          prompt:
            'Given a sorted array and a target, count how many unique pairs have sum equal to the target.',
          choices: [
            'Two Pointers with duplicate skipping',
            'Sliding Window',
            'Union Find',
            'Topological Sort',
          ],
          correctIndex: 0,
          explanation:
            'Because the array is sorted, two pointers is the natural approach. Compare the sum of the left and right pointers. If the sum is too small, move left; if too large, move right. When you find a valid pair, count it and skip all duplicates on both sides so only unique pairs are counted. Time complexity is O(n), because each pointer moves inward at most once across the array. Space complexity is O(1).',
        },
        {
          id: 'lc-tp-5',
          prompt:
            'Given an array of heights, find two lines that together with the x-axis form a container holding the maximum amount of water.',
          choices: [
            'Two Pointers from both ends',
            'Dynamic Programming',
            'Trie',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'Start with the widest possible container using the leftmost and rightmost lines. The area is limited by the shorter line, so to possibly improve the result, move the pointer at the shorter line inward. Moving the taller line cannot help if the shorter one stays the bottleneck. This greedy two-pointer reasoning is what makes the problem elegant. Time complexity is O(n), since each pointer moves inward at most once. Space complexity is O(1). A brute-force check of all pairs would be O(n^2).',
        },
        {
          id: 'lc-tp-6',
          prompt:
            'Given an array of integers, move all zeroes to the end while maintaining the relative order of the non-zero elements.',
          choices: [
            'Slow/Fast Two Pointers',
            'Heap',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Use a slow pointer to track where the next non-zero value should be written, and a fast pointer to scan the array. Whenever the fast pointer sees a non-zero, write it at slow and advance slow. After the scan, fill the remaining positions with zeroes. This preserves relative order and does the work in-place. Time complexity is O(n), and space complexity is O(1). This is one of the most common write-pointer style two-pointer problems.',
        },
        {
          id: 'lc-tp-7',
          prompt:
            'Given a linked list, determine whether it contains a cycle.',
          choices: [
            'Fast and Slow Pointers',
            'Binary Search',
            'Trie',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'This is Floyd’s tortoise-and-hare algorithm, one of the most important two-pointer techniques. Move one pointer one step at a time and another two steps at a time. If there is a cycle, the fast pointer will eventually meet the slow pointer. If the fast pointer reaches null, there is no cycle. Time complexity is O(n), and space complexity is O(1). A hash set of visited nodes also works but uses O(n) extra space.',
        },
        {
          id: 'lc-tp-8',
          prompt:
            'Given a linked list, return the middle node. If there are two middle nodes, return the second one.',
          choices: [
            'Fast and Slow Pointers',
            'Heap',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Move one pointer one node at a time and another two nodes at a time. When the fast pointer reaches the end, the slow pointer will be at the middle. In an even-length list, this lands on the second middle node naturally. Time complexity is O(n), and space complexity is O(1). This is one of the foundational fast/slow pointer patterns for linked lists.',
        },
        {
          id: 'lc-tp-9',
          prompt:
            'Given two singly linked lists, return the node where they intersect, or null if they do not intersect.',
          choices: [
            'Two Pointers switching heads',
            'Sliding Window',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Start one pointer at each list head. When a pointer reaches the end of its list, redirect it to the head of the other list. If the lists intersect, the pointers will meet at the intersection after traversing equal total distances. If not, they both eventually become null. Time complexity is O(m + n), and space complexity is O(1). This is a very elegant two-pointer equalization trick.',
        },
        {
          id: 'lc-tp-10',
          prompt:
            'Given a sorted array, return all unique triplets that sum to zero.',
          choices: [
            'Sort + fixed index + Two Pointers',
            'Hash Set only',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'After sorting, fix one element and reduce the rest of the problem to a two-sum search using two pointers on the remaining suffix. If the sum is too small, move left; if too large, move right. Skip duplicates for both the fixed index and the moving pointers to avoid repeated triplets. Sorting costs O(n log n), and the outer loop plus two-pointer scan gives O(n^2) total time. Space complexity is O(1) excluding the output if sorting is in-place.',
        },
        {
          id: 'lc-tp-11',
          prompt:
            'Given a string and a dictionary of valid abbreviations, determine whether the string can be transformed by deleting some characters while preserving relative order.',
          choices: [
            'Two Pointers subsequence check',
            'Heap',
            'Binary Search',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'This is a subsequence-style problem. Use one pointer for the original string and one for the candidate abbreviation or target subsequence. Advance the source pointer always, and advance the target pointer only when characters match. If the target pointer reaches the end, the target is a valid subsequence. Time complexity is O(n), where n is the source length, and space complexity is O(1). This pattern shows up constantly in string interview questions.',
        },
        {
          id: 'lc-tp-12',
          prompt:
            'Given a string, reverse only the vowels and leave all other characters in place.',
          choices: [
            'Two Pointers from both ends',
            'Sliding Window',
            'Trie',
            'Union Find',
          ],
          correctIndex: 0,
          explanation:
            'Use one pointer from the left and one from the right. Move each until it lands on a vowel, then swap those vowels and continue inward. Because only specific characters participate and order outside that set stays fixed, mirrored two-pointer scanning is the perfect fit. Time complexity is O(n), since each pointer moves inward at most once across the string. Space complexity is O(1) if the string is handled as a mutable array of characters.',
        },
        {
          id: 'lc-tp-13',
          prompt:
            'Given a sorted array and a target sum, determine whether any three numbers add up to the target.',
          choices: [
            'Sort + fixed index + Two Pointers',
            'Sliding Window',
            'Trie',
            'Binary Search Tree',
          ],
          correctIndex: 0,
          explanation:
            'This is the generalization of two-sum in sorted arrays. Fix one index, then solve the remaining pair-sum problem using two pointers on the rest of the array. Move the pointers inward based on whether the current sum is too small or too large. Sorting first allows monotonic pointer decisions. Time complexity is O(n^2), because each fixed index triggers an O(n) two-pointer scan. Space complexity is O(1) excluding sorting overhead.',
        },
        {
          id: 'lc-tp-14',
          prompt:
            'Given a linked list and an integer n, remove the nth node from the end of the list.',
          choices: [
            'Two Pointers with fixed gap',
            'Heap',
            'Trie',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'Use a dummy node before the head to simplify edge cases. Advance a fast pointer n steps ahead, then move both fast and slow pointers together until fast reaches the end. At that point, the slow pointer is just before the node that must be removed. Rewire slow.next to skip the target node. Time complexity is O(n), and space complexity is O(1). This is a classic gap-maintenance two-pointer problem.',
        },
        {
          id: 'lc-tp-15',
          prompt:
            'Given an array of integers, return the squares of each number sorted in non-decreasing order.',
          choices: [
            'Two Pointers from both ends',
            'Heap',
            'Union Find',
            'Sliding Window',
          ],
          correctIndex: 0,
          explanation:
            'Because the input array is sorted but may contain negatives, the largest square can come from either end. Use one pointer at the left and one at the right, compare absolute values, place the larger square into the result from the back, and move the corresponding pointer inward. This builds the sorted squared array in O(n) time. Space complexity is O(n) for the output array. Sorting the squared values afterward would take O(n log n), so the two-pointer approach is better.',
        },
      ]
    },
    unionFind: {
      title: 'Union Find',
      description: 'Disjoint set, connectivity, cycle detection',
      explanation: 'Union-Find, also called Disjoint Set Union (DSU), is used to efficiently track connected components. It supports two main operations: finding the representative of a set and merging two sets. It is commonly used in graph problems for connectivity, cycle detection, and Kruskal’s algorithm. Optimizations like path compression and union by rank make operations nearly constant time.',
      vocab: [
        {
          term: 'union-find',
          definition:
            'A data structure for managing disjoint sets.',
        },
        {
          term: 'disjoint set',
          definition:
            'A collection of non-overlapping groups.',
        },
        {
          term: 'find',
          definition:
            'Returns the representative of a set.',
        },
        {
          term: 'union',
          definition:
            'Merges two sets into one.',
        },
        {
          term: 'parent',
          definition:
            'The representative pointer for each element.',
        },
        {
          term: 'root',
          definition:
            'The top-level representative of a set.',
        },
        {
          term: 'path compression',
          definition:
            'Flattening the structure during find to speed up future queries.',
        },
        {
          term: 'union by rank',
          definition:
            'Attaching smaller trees under larger ones to keep structure shallow.',
        },
        {
          term: 'union by size',
          definition:
            'Merging based on the number of elements in each set.',
        },
        {
          term: 'connected',
          definition:
            'Two elements belong to the same set.',
        },
        {
          term: 'component',
          definition:
            'A group of connected elements.',
        },
        {
          term: 'cycle detection',
          definition:
            'Using union-find to check if adding an edge creates a loop.',
        },
        {
          term: 'amortized time',
          definition:
            'Average time per operation over many operations.',
        },
      ],
      questions: [
        {
          id: 'lc-uf-1',
          prompt:
            'Given a list of undirected edges and n nodes labeled 0 through n - 1, determine whether the graph contains a cycle.',
          choices: [
            'Union Find',
            'Topological Sort',
            'Sliding Window',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Union Find is a strong fit for cycle detection in an undirected graph. As you process each edge, check whether the two endpoints already belong to the same connected component. If they do, adding that edge would create a cycle. Otherwise, union their components. With path compression and union by rank or size, each operation is nearly constant time, specifically O(alpha(n)) amortized, where alpha is the inverse Ackermann function and grows so slowly it is effectively constant in practice. Total time complexity is O(E * alpha(n)), and space complexity is O(n) for the parent and rank/size arrays.',
        },
        {
          id: 'lc-uf-2',
          prompt:
            'Given n nodes and a list of undirected edges, return the number of connected components.',
          choices: [
            'Union Find',
            'Binary Search',
            'Monotonic Stack',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Initialize each node as its own component. For every edge, union the two endpoints if they are currently in different sets. Each successful union reduces the number of connected components by one. This is one of the most standard Union Find use cases. Time complexity is O(E * alpha(n)) amortized, and space complexity is O(n). DFS/BFS also works, but Union Find is often cleaner when the input is simply an edge list and you only need connectivity information.',
        },
        {
          id: 'lc-uf-3',
          prompt:
            'A graph starts as a tree with one extra undirected edge added. Return the redundant edge that creates a cycle.',
          choices: [
            'Union Find',
            'Topological Sort',
            'Sliding Window',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'Process edges in order. For each edge, check whether its endpoints are already connected. If they are, that edge is redundant because it closes a cycle. Otherwise, union them and continue. This is exactly what Union Find is designed for: incremental connectivity tracking in undirected graphs. Time complexity is O(E * alpha(n)) amortized, and space complexity is O(n). This is one of the most classic Leetcode Union Find questions.',
        },
        {
          id: 'lc-uf-4',
          prompt:
            'Given equations like a == b and a != b, determine whether all equations can be satisfied simultaneously.',
          choices: [
            'Union Find',
            'Sliding Window',
            'Trie',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'First union all variables connected by equality equations. Then scan the inequality equations and check whether any pair that must be different now belongs to the same set. If so, the system is inconsistent. This works because equality defines connected components, and inequality constraints must not occur inside the same component. If there are m equations, time complexity is O(m * alpha(n)) amortized, where n is the number of possible variables. Space complexity is O(n).',
        },
        {
          id: 'lc-uf-5',
          prompt:
            'Given a 2D grid of land and water, count the number of islands.',
          choices: [
            'Union Find over land cells',
            'Binary Search',
            'Trie',
            'Monotonic Queue',
          ],
          correctIndex: 0,
          explanation:
            'Treat each land cell as a node and union adjacent land cells. Start with a count of all land cells, then decrement the count each time a union merges two previously separate land components. The final count is the number of islands. This is an alternative to DFS/BFS and is especially useful when thinking in terms of connected components. If the grid has m * n cells, time complexity is O(mn * alpha(mn)) amortized, and space complexity is O(mn) for the parent/rank arrays.',
        },
        {
          id: 'lc-uf-6',
          prompt:
            'Given a list of friendships that form over time, determine the earliest time when everyone becomes connected.',
          choices: [
            'Union Find',
            'Topological Sort',
            'Sliding Window',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Sort the friendship events by timestamp, then process them in chronological order. Union the two people for each event, and track how many connected components remain. The earliest time when only one component remains is the answer. Union Find is ideal here because the graph evolves incrementally and the question is about when global connectivity emerges. Sorting costs O(E log E), and the unions/finds cost O(E * alpha(n)) amortized. Space complexity is O(n).',
        },
        {
          id: 'lc-uf-7',
          prompt:
            'Given a matrix where matrix[i][j] = 1 means person i and person j are directly connected, return the number of friend circles / provinces.',
          choices: [
            'Union Find',
            'Heap',
            'Binary Search',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Each person starts in their own set. Scan the matrix, and when matrix[i][j] is 1, union those two people. The number of unique roots at the end is the number of provinces. This is a direct connected-components problem, and Union Find handles it neatly. If there are n people, scanning the matrix takes O(n^2), and the union/find operations are effectively constant amortized, so total time is O(n^2 * alpha(n)). Space complexity is O(n). DFS/BFS also works, but Union Find is very natural when the input is an adjacency matrix of equivalence-style relations.',
        },
        {
          id: 'lc-uf-8',
          prompt:
            'Given accounts where each account has a name followed by email addresses, merge accounts that belong to the same person if they share any email.',
          choices: [
            'Union Find',
            'Sliding Window',
            'Trie only',
            'Binary Search',
          ],
          correctIndex: 0,
          explanation:
            'Union all emails that appear in the same account. After processing all accounts, emails belonging to the same connected component represent one merged person. Then group emails by root and reconstruct the merged accounts. Union Find is perfect because shared emails define equivalence relationships that may chain across multiple accounts. If there are E total emails, time complexity is near O(E * alpha(E)) for the unions plus grouping work, and space complexity is O(E).',
        },
        {
          id: 'lc-uf-9',
          prompt:
            'Given a grid of 0s and 1s, you may flip at most one 0 to 1. Return the size of the largest island possible.',
          choices: [
            'Union Find to label components',
            'Topological Sort',
            'Sliding Window',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'First use Union Find to group all existing land cells into connected components and record each component size. Then for each water cell, look at its distinct neighboring land components, sum their sizes plus one for the flipped cell, and track the maximum. This works because Union Find gives quick component identity and size lookup. If the grid has N cells, time complexity is O(N * alpha(N)) for building components plus O(N) for checking flips. Space complexity is O(N). DFS labeling can also solve it, but Union Find is a clean component-based approach.',
        },
        {
          id: 'lc-uf-10',
          prompt:
            'You are given a stream of land additions to an initially all-water grid. After each addition, return the current number of islands.',
          choices: [
            'Dynamic Union Find',
            'Binary Search',
            'Trie',
            'Monotonic Stack',
          ],
          correctIndex: 0,
          explanation:
            'This is one of the best dynamic Union Find problems. As each land cell is added, treat it as a new component and increment the island count. Then union it with any adjacent land cells already present. Each successful union reduces the island count by one. This gives the island count after each operation efficiently without recomputing the whole grid. If there are k additions, total time is O(k * alpha(mn)) amortized, where mn is the number of grid cells. Space complexity is O(mn) for the parent/rank structures.',
        },
        {
          id: 'lc-uf-11',
          prompt:
            'Given pairs of equivalent letters, determine whether two strings are equivalent character by character under those relationships.',
          choices: [
            'Union Find over characters',
            'Sliding Window',
            'Binary Search',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'Treat each character as a node and each equivalence pair as a union operation. After building the equivalence classes, compare the two strings character by character and ensure each pair of characters belongs to the same set. Union Find is a natural fit because equivalence is transitive, so a == b and b == c should imply a == c automatically. If there are p pairs and the strings have length n, time complexity is O((p + n) * alpha(k)), where k is alphabet size. Space complexity is O(k).',
        },
        {
          id: 'lc-uf-12',
          prompt:
            'Given edges of an undirected weighted graph, determine whether two nodes are connected using only edges below a given limit, across many queries.',
          choices: [
            'Sort edges and queries, then Union Find incrementally',
            'Sliding Window',
            'Trie',
            'Two Pointers',
          ],
          correctIndex: 0,
          explanation:
            'Sort edges by weight and sort queries by their limit. As you process queries in increasing order of limit, union all edges whose weight is below the current query limit. Then simply check whether the two query nodes belong to the same set. This offline-query pattern is a very powerful Union Find application because it avoids recomputing connectivity from scratch per query. Sorting dominates the time at O((E + Q) log(E + Q)), and the union/find work is O((E + Q) * alpha(n)) amortized. Space complexity is O(n + Q) depending on how queries are stored.',
        },
        {
          id: 'lc-uf-13',
          prompt:
            'Given stones placed on a grid, a stone can be removed if another stone shares its row or column. Return the maximum number of stones that can be removed.',
          choices: [
            'Union Find on row/column-connected stones',
            'Binary Search',
            'Trie',
            'Monotonic Queue',
          ],
          correctIndex: 0,
          explanation:
            'The key insight is that within each connected component of stones linked by same-row or same-column relationships, all but one stone can be removed. So the answer is total stones minus number of connected components. Union Find efficiently groups stones that share a row or column, either directly or through chains. If there are n stones, a naive pairwise scan is O(n^2), though optimized row/column mapping can improve it. Space complexity is O(n) for Union Find and supporting maps.',
        },
        {
          id: 'lc-uf-14',
          prompt:
            'Given computer network connections between n computers, determine the minimum number of operations needed to make the whole network connected, or return -1 if impossible.',
          choices: [
            'Union Find',
            'Sliding Window',
            'Trie',
            'Heap',
          ],
          correctIndex: 0,
          explanation:
            'A connected network of n nodes needs at least n - 1 edges, so first check that condition. Then use Union Find to count how many connected components currently exist. If there are c components, you need c - 1 operations to connect them using spare edges. This is a direct connectivity-count problem. Time complexity is O(E * alpha(n)) amortized, and space complexity is O(n). DFS/BFS also works, but Union Find matches the edge-list input nicely.',
        },
        {
          id: 'lc-uf-15',
          prompt:
            'Given a weighted undirected graph, find the minimum total cost to connect all nodes.',
          choices: [
            'Kruskal’s Algorithm with Union Find',
            'Binary Search',
            'Sliding Window',
            'Trie',
          ],
          correctIndex: 0,
          explanation:
            'Kruskal’s algorithm sorts all edges by increasing weight and greedily adds them if they connect two previously separate components. Union Find is what makes the cycle check efficient. This builds a minimum spanning tree if the graph is connected. Sorting edges costs O(E log E), and the union/find operations cost O(E * alpha(n)) amortized. Space complexity is O(n) for Union Find plus edge storage. This is one of the most important algorithmic uses of Union Find beyond simple connectivity queries.',
        },
      ]
    },
  }
}