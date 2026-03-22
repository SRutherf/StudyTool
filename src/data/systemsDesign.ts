import type { SectionData } from './types'

export const systemsDesignSection: SectionData = {
  id: 'systems-design',
  title: 'Systems Design',
  description: 'Architecture, scaling, and tradeoff analysis',
  subsections: {
    requirements: {
      title: 'Requirements',
      description: 'Clarifying scope, constraints, and success criteria',
      questions: [],
    },
    estimation: {
      title: 'Estimation',
      description: 'Back-of-the-envelope sizing and capacity reasoning',
      questions: [],
    },
    'data-modeling': {
      title: 'Data Modeling',
      description: 'Entities, relationships, and access-pattern-driven schema design',
      questions: [],
    },
    databases: {
      title: 'Databases',
      description: 'Storage engine choices, indexing, and persistence tradeoffs',
      questions: [],
    },
    caching: {
      title: 'Caching',
      description: 'Read scaling, latency reduction, and cache invalidation tradeoffs',
      questions: [],
    },
    messaging: {
      title: 'Messaging',
      description: 'Queues, pub-sub, and asynchronous workflow design',
      questions: [],
    },
    consistency: {
      title: 'Consistency',
      description: 'Consistency models, concurrency concerns, and distributed tradeoffs',
      questions: [],
    },
    scaling: {
      title: 'Scaling',
      description: 'Horizontal growth, bottleneck analysis, and traffic distribution',
      questions: [],
    },
    reliability: {
      title: 'Reliability',
      description: 'Failure handling, redundancy, retries, and resilience',
      questions: [],
    },
    'rate-limiting': {
      title: 'Rate Limiting',
      description: 'Protecting systems from abuse and unbounded load',
      questions: [],
    },
    idempotency: {
      title: 'Idempotency',
      description: 'Safe retries and duplicate-request protection',
      questions: [],
    },
    observability: {
      title: 'Observability',
      description: 'Metrics, logs, traces, and operational visibility',
      questions: [],
    },
    security: {
      title: 'Security',
      description: 'Authentication, authorization, and secure system boundaries',
      questions: [],
    },
    tradeoffs: {
      title: 'Tradeoffs',
      description: 'Communicating decisions and comparing competing approaches',
      questions: [],
    },
  },
}