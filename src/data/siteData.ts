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
    detail:
      'Spanning Echo, Excalidraw, Gin, JavaParser, Spring Boot, and SymPy, the dataset includes task prompts, reference patches, evaluation rubrics, sanitized developer behavior traces, process-oriented Task Skills, 336 coding-agent runs from 42 paired transfers, and a 32-task longitudinal study of Skill Pool evolution. Tasks are reconstructible from recorded upstream commits and setup patches. Local Office access records and agent conversation logs are excluded for privacy.',
    url: 'https://github.com/DevSkill27/DevSkill/releases/download/dataset-v1/devskill-dataset.zip',
    release: 'Dataset v1',
    icon: FileText,
  },
]
