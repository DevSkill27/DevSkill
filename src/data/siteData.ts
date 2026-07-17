import {
  Braces,
  FileText,
  Globe2,
  MessagesSquare,
} from 'lucide-react'

export const navigation = [
  { label: 'Motivation', href: '#motivation' },
  { label: 'Approach', href: '#approach' },
  { label: 'Results', href: '#results' },
  { label: 'Demonstration', href: '#demonstration' },
  { label: 'Artifacts', href: '#artifacts' },
]

export const traceSources = [
  {
    name: 'IDE',
    detail: 'Edits, navigation, terminal',
    icon: Braces,
    tone: 'bg-lime',
  },
  {
    name: 'Browser',
    detail: 'Visits and content snapshots',
    icon: Globe2,
    tone: 'bg-aqua',
  },
  {
    name: 'Office',
    detail: 'Document access and duration',
    icon: FileText,
    tone: 'bg-[#ffc5b8]',
  },
  {
    name: 'Agent',
    detail: 'Repository-linked conversations',
    icon: MessagesSquare,
    tone: 'bg-[#cfd8ff]',
  },
]

export const skillFields = [
  'Intent',
  'Preconditions',
  'Happy solution',
  'Unhappy solution',
  'Agent guidance',
  'Validation',
  'Evidence',
]

export const benchmarkRepositories = [
  {
    name: 'Echo',
    language: 'Go',
    type: 'Web framework',
    url: 'https://github.com/labstack/echo',
  },
  {
    name: 'Excalidraw',
    language: 'TypeScript',
    type: 'Frontend',
    url: 'https://github.com/excalidraw/excalidraw',
  },
  {
    name: 'Gin',
    language: 'Go',
    type: 'Web framework',
    url: 'https://github.com/gin-gonic/gin',
  },
  {
    name: 'JavaParser',
    language: 'Java',
    type: 'Parser',
    url: 'https://github.com/javaparser/javaparser',
  },
  {
    name: 'Spring Boot',
    language: 'JVM',
    type: 'Framework',
    url: 'https://github.com/spring-projects/spring-boot',
  },
  {
    name: 'SymPy',
    language: 'Python',
    type: 'Scientific',
    url: 'https://github.com/sympy/sympy',
  },
]

export const modelResults = [
  {
    model: 'glm-5.2',
    executable: '90.48%',
    score: '81.27',
    rows: [
      { label: 'No reference', value: 60.87 },
      { label: 'Raw diff', value: 70.77 },
      { label: 'Hermes Skill', value: 75.63 },
      { label: 'DevSkill', value: 81.27, featured: true },
    ],
  },
  {
    model: 'deepseek-v4-pro',
    executable: '92.86%',
    score: '76.59',
    rows: [
      { label: 'No reference', value: 56.27 },
      { label: 'Raw diff', value: 69.5 },
      { label: 'Hermes Skill', value: 64.3 },
      { label: 'DevSkill', value: 76.59, featured: true },
    ],
  },
]

export const artifacts = [
  {
    title: 'DevSkill Dataset',
    url: 'https://github.com/DevSkill27/DevSkill/releases/download/dataset-v1/devskill-dataset.zip',
    release: 'Dataset v1',
    icon: FileText,
  },
]

export const datasetContents = [
  {
    label: 'Reconstructible benchmark',
    value: '63 tasks · 21 clusters',
    detail:
      'Several related but non-identical tasks per cluster, drawn from six production repositories in Go, TypeScript, Java, Kotlin, Groovy, and Python. Each task includes a prompt, developer reference patch, task-specific rubric, and the commit and setup patch needed to recreate its starting state.',
  },
  {
    label: 'Process evidence',
    value: 'Traces + Task Skills',
    detail:
      'Sanitized, timestamped IDE and browser events capture file navigation, code edits, terminal commands and outputs, and page visits. Source tasks also include process-oriented Skills describing localization, constraints, implementation order, validation, failures, and recovery actions.',
  },
  {
    label: 'Paired-transfer results',
    value: '336 agent runs',
    detail:
      'Forty-two source–target transfers are evaluated across two models and four conditions: no reference, raw diff, DevSkill, and Hermes Skill. Released patches, token and API-time usage, executability, functional scores, architecture, security, and style measures support reanalysis.',
  },
  {
    label: 'Longitudinal study',
    value: '32 sequential tasks',
    detail:
      'A chronological Electron, React, and TypeScript application history records task prompts, developer-completed transitions, optional no-reference and Skill-guided runs, action traces, and snapshots of a Skill Pool that evolves to 15 active Skills.',
  },
]
