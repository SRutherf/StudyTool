import type { SectionData } from './types'

export const systemsDesignSection: SectionData = {
  id: 'systems-design',
  title: 'Systems Design',
  description: 'Architecture, scaling, and tradeoff analysis',
  subsections: {
    requirements: {
      title: 'Requirements',
      description: 'Clarifying scope, constraints, and success criteria',
      explanation: '',
      vocab: [],
      questions: [],
    },
    estimation: {
      title: 'Estimation',
      description: 'Back-of-the-envelope sizing and capacity reasoning',
      explanation: '',
      vocab: [],
      questions: [],
    },
    'data-modeling': {
      title: 'Data Modeling',
      description:
        'Entities, relationships, and access-pattern-driven schema design',
      explanation: '',
      vocab: [],
      questions: [],
    },
    databases: {
      title: 'Databases',
      description:
        'Storage engine choices, indexing, and persistence tradeoffs',
      explanation: '',
      vocab: [],
      questions: [],
    },
    caching: {
      title: 'Caching',
      description:
        'Read scaling, latency reduction, and cache invalidation tradeoffs',
      explanation: '',
      vocab: [],
      questions: [],
    },
    messaging: {
      title: 'Messaging',
      description:
        'Queues, pub-sub, and asynchronous workflow design',
      explanation: '',
      vocab: [],
      questions: [],
    },
    consistency: {
      title: 'Consistency',
      description:
        'Consistency models, concurrency concerns, and distributed tradeoffs',
      explanation: '',
      vocab: [],
      questions: [],
    },
    scaling: {
      title: 'Scaling',
      description:
        'Horizontal growth, bottleneck analysis, and traffic distribution',
      explanation: '',
      vocab: [],
      questions: [],
    },
    reliability: {
      title: 'Reliability',
      description:
        'Failure handling, redundancy, retries, and resilience',
      explanation: '',
      vocab: [],
      questions: [],
    },
    'rate-limiting': {
      title: 'Rate Limiting',
      description:
        'Protecting systems from abuse and unbounded load',
      explanation: '',
      vocab: [],
      questions: [],
    },
    idempotency: {
      title: 'Idempotency',
      description:
        'Safe retries and duplicate-request protection',
      explanation: '',
      vocab: [],
      questions: [],
    },
    observability: {
      title: 'Observability',
      description:
        'Metrics, logs, traces, and operational visibility',
      explanation: '',
      vocab: [],
      questions: [],
    },
    security: {
      title: 'Security',
      description:
        'Authentication, authorization, and secure system boundaries',
      explanation: '',
      vocab: [],
      questions: [],
    },
    tradeoffs: {
      title: 'Tradeoffs',
      description:
        'Communicating decisions and comparing competing approaches',
      explanation: '',
      vocab: [],
      questions: [],
    },
  },
}