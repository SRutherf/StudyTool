import type { SectionData } from './types'

export const systemsDesignSection: SectionData = {
  id: 'systems-design',
  title: 'Systems Design',
  description: 'Architecture and tradeoffs',
  subsections: {
    caching: {
      title: 'Caching',
      description: 'Read scaling and latency reduction',
      questions: [
        {
          id: 'sd-cache-1',
          prompt:
            'A read-heavy endpoint is overloading the database. What is the best first move?',
          choices: ['Add caching', 'Use websockets', 'Shard writes', 'Use cron jobs'],
          correctIndex: 0,
          explanation:
            'The bottleneck is repeated reads, so caching is the most direct first step.',
        },
      ],
    },
    idempotency: {
      title: 'Idempotency',
      description: 'Duplicate request protection',
      questions: [
        {
          id: 'sd-idem-1',
          prompt:
            'Clients retry payment requests after timeouts, creating duplicate charges. Best answer?',
          choices: ['Idempotency keys', 'Read replicas', 'CDN', 'Larger EC2 instances'],
          correctIndex: 0,
          explanation:
            'Idempotency keys let the server safely identify repeated requests as the same operation.',
        },
      ],
    },
  },
}