import {
  Bot,
  Braces,
  FileText,
  Globe2,
  MessagesSquare,
  MonitorUp,
} from 'lucide-react'

export const navigation = [
  { label: 'Motivation', href: '#motivation' },
  { label: 'Approach', href: '#approach' },
  { label: 'Results', href: '#results' },
  { label: 'Demo', href: '#demo' },
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

export const demoSteps = [
  {
    id: '01',
    label: 'Collect',
    title: 'Observe the work, not just the patch.',
    description:
      'Local collectors align repository actions, consulted material, terminal outcomes, and agent sessions into one trace.',
    icon: MonitorUp,
    terminal: [
      ['09:41:06', 'IDE', 'navigate → router/tree.go'],
      ['09:43:18', 'TERM', 'go test ./... → duplicate method'],
      ['09:47:51', 'AGENT', 'hypothesis revised'],
      ['09:54:12', 'IDE', 'save → router/tree.go'],
    ],
  },
  {
    id: '02',
    label: 'Distill',
    title: 'Turn evidence into executable guidance.',
    description:
      'The Skill + CLI workflow mines dependency order, failed paths, recovery actions, and concrete validation boundaries.',
    icon: Bot,
    terminal: [
      ['FIELD', 'intent', 'radix-tree routing tasks'],
      ['HAPPY', 'order', 'helpers → insertion → lookup'],
      ['UNHAPPY', 'signal', 'undefined helper / narrow test'],
      ['CHECK', 'scope', 'focused tree tests passed'],
    ],
  },
  {
    id: '03',
    label: 'Reuse',
    title: 'Retrieve guidance only when it fits.',
    description:
      'Compatible Skills are injected into a new task; the pool then merges, updates, or removes guidance as the repository evolves.',
    icon: MessagesSquare,
    terminal: [
      ['QUERY', 'task', 'add related route behavior'],
      ['MATCH', 'skill', 'radix-tree-routing · 0.91'],
      ['INJECT', 'count', '1 compatible Task Skill'],
      ['RESULT', 'status', 'tests pass · pool updated'],
    ],
  },
]

export const artifacts = [
  {
    title: 'Method & CLI',
    detail: 'Skill generation, retrieval, and pool maintenance.',
    icon: Braces,
  },
  {
    title: 'Collection System',
    detail: 'IDE, browser, Office, and agent trace collectors.',
    icon: MonitorUp,
  },
  {
    title: 'Experimental Data',
    detail: 'Tasks, rubrics, traces, Skills, and evaluation outputs.',
    icon: FileText,
  },
]
