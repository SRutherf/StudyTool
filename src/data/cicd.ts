import type { SectionData } from './types'

export const cicdSection: SectionData = {
  id: 'cicd',
  title: 'CI/CD',
  description: 'Delivery pipelines, releases, environments, and production operations',
  subsections: {
    pipelines: {
      title: 'Pipelines',
      description: 'Build, test, and deploy workflow orchestration',
      questions: [],
    },
    testing: {
      title: 'Testing Strategy',
      description: 'Unit, integration, end-to-end, and pre-release validation',
      questions: [],
    },
    deployment: {
      title: 'Deployment Strategies',
      description: 'Rolling, blue-green, canary, and safe rollout approaches',
      questions: [],
    },
    rollback: {
      title: 'Rollback Strategies',
      description: 'Recovery paths when releases fail in production',
      questions: [],
    },
    environments: {
      title: 'Environments',
      description: 'Dev, staging, prod separation and configuration management',
      questions: [],
    },
    'infra-as-code': {
      title: 'Infrastructure as Code',
      description: 'Provisioning and change management through declarative config',
      questions: [],
    },
    'github-actions': {
      title: 'GitHub Actions',
      description: 'Workflow automation, jobs, runners, and release pipelines',
      questions: [],
    },
    'docker-kubernetes': {
      title: 'Docker & Kubernetes',
      description: 'Container packaging, orchestration, and deployment runtime concerns',
      questions: [],
    },
    monitoring: {
      title: 'Monitoring & Alerting',
      description: 'Detecting issues, tracking health, and surfacing regressions',
      questions: [],
    },
    'incident-response': {
      title: 'Incident Response',
      description: 'Handling release failures, mitigation, and operational follow-through',
      questions: [],
    },
  },
}