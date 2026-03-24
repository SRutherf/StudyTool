import type { SectionData } from "./types";

export const cicdSection: SectionData = {
  id: 'cicd',
  title: 'CI/CD',
  description:
    'Delivery pipelines, releases, environments, and production operations',
  subsections: {
    pipelines: {
      title: 'Pipelines',
      description: 'Build, test, and deploy workflow orchestration',
      explanation: '',
      vocab: [],
      questions: [],
    },
    testing: {
      title: 'Testing Strategy',
      description:
        'Unit, integration, end-to-end, and pre-release validation',
      explanation: '',
      vocab: [],
      questions: [],
    },
    deployment: {
      title: 'Deployment Strategies',
      description:
        'Rolling, blue-green, canary, and safe rollout approaches',
      explanation: '',
      vocab: [],
      questions: [],
    },
    rollback: {
      title: 'Rollback Strategies',
      description:
        'Recovery paths when releases fail in production',
      explanation: '',
      vocab: [],
      questions: [],
    },
    environments: {
      title: 'Environments',
      description:
        'Dev, staging, prod separation and configuration management',
      explanation: '',
      vocab: [],
      questions: [],
    },
    'infra-as-code': {
      title: 'Infrastructure as Code',
      description:
        'Provisioning and change management through declarative config',
      explanation: '',
      vocab: [],
      questions: [],
    },
    'github-actions': {
      title: 'GitHub Actions',
      description:
        'Workflow automation, jobs, runners, and release pipelines',
      explanation: '',
      vocab: [],
      questions: [],
    },
    'docker-kubernetes': {
      title: 'Docker & Kubernetes',
      description:
        'Container packaging, orchestration, and deployment runtime concerns',
      explanation: '',
      vocab: [],
      questions: [],
    },
    monitoring: {
      title: 'Monitoring & Alerting',
      description:
        'Detecting issues, tracking health, and surfacing regressions',
      explanation: '',
      vocab: [],
      questions: [],
    },
    'incident-response': {
      title: 'Incident Response',
      description:
        'Handling release failures, mitigation, and operational follow-through',
      explanation: '',
      vocab: [],
      questions: [],
    },
  },
}