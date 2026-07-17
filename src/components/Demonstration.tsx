import {
  Braces,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  GitBranch,
  GitFork,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { SectionIntro } from './SectionIntro'

type DetailPanelProps = {
  index: string
  eyebrow: string
  title: string
  summary: string
  children: ReactNode
}

function DetailPanel({
  index,
  eyebrow,
  title,
  summary,
  children,
}: DetailPanelProps) {
  return (
    <details className="group overflow-hidden rounded-xl border border-blue-200 bg-white shadow-sm transition-shadow open:shadow-lg open:shadow-blue-950/5">
      <summary className="focus-ring flex cursor-pointer list-none items-center gap-4 px-5 py-5 marker:hidden sm:px-6 [&::-webkit-details-marker]:hidden">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-mono text-xs font-600 text-cobalt">
          {index}
        </span>
        <span className="min-w-0 flex-1">
          <span className="eyebrow block text-cobalt">{eyebrow}</span>
          <span className="mt-1 block font-display text-lg font-650 tracking-[-0.02em] text-ink sm:text-xl">
            {title}
          </span>
          <span className="mt-1 block text-sm leading-6 text-ink/55">
            {summary}
          </span>
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-200 text-cobalt transition-transform duration-200 group-open:rotate-180">
          <ChevronDown size={17} aria-hidden="true" />
        </span>
      </summary>
      <div className="border-t border-blue-100 px-5 py-6 sm:px-6 sm:py-7">
        {children}
      </div>
    </details>
  )
}

const skillFields = [
  {
    index: '01',
    title: 'Intent',
    icon: Sparkles,
    content:
      'Implement or extend a compressed radix-tree HTTP router in Go: register static, named-parameter, and catch-all routes while preserving node priority and detecting conflicts. The guidance assumes an existing tree structure; it is not for designing a router from scratch.',
  },
  {
    index: '02',
    title: 'Preconditions',
    icon: Braces,
    content:
      'The repository already provides a node model, handler types, route-registration entry points, helper functions, and focused tree tests. Public router APIs and the node layout should remain unchanged.',
  },
  {
    index: '03',
    title: 'Happy Solution',
    icon: GitBranch,
    content:
      'Read the complete stub set and call sites first. Implement leaf helpers before their consumers: reorder children by priority, parse wildcard segments, insert routes with longest-common-prefix splitting, then verify lookup compatibility. Keep static children before the wildcard fallback and reject duplicate or conflicting registrations.',
  },
  {
    index: '04',
    title: 'Unhappy Solution',
    icon: CircleAlert,
    content:
      'A method placed in the wrong stub slot caused both a duplicate addRoute declaration and a missing insertChild method. Recover by matching every implementation to its existing signature, searching all call sites, and compiling before testing. Remove only imports that remain genuinely unused.',
  },
  {
    index: '05',
    title: 'Guidance',
    icon: Route,
    content:
      'Locate the node type and registration stubs by symbol search rather than assuming line numbers. Reuse existing helpers and panic-message conventions. Keep edits scoped to the tree implementation and use finite test timeouts to expose accidental infinite traversal loops.',
  },
  {
    index: '06',
    title: 'Validation',
    icon: ShieldCheck,
    content:
      'First run go build ./... for duplicate declarations, undefined methods, and unused imports. Then run focused tree tests covering insertion, lookup, wildcard conflicts, and duplicate paths. Finally broaden to the complete TestTree set; the source trace did not establish every radix-tree edge case.',
  },
  {
    index: '07',
    title: 'Evidence',
    icon: Search,
    content:
      'tree.go supplies the implementation and dependency evidence; tree_test.go supplies expected behavior. Terminal records bind the guidance to observed build failures and passing focused tests. Unrelated agent sessions were excluded from the evidence set.',
  },
]

export function Demonstration() {
  return (
    <section id="demonstration" className="section-pad bg-paper">
      <div className="page-shell">
        <SectionIntro
          index="04"
          label="Demonstration"
          title={
            <>
              DevSkill,
              <br className="hidden sm:block" /> from traces to reusable guidance.
            </>
          }
          description="Watch the end-to-end system collect developer activity, distill practical experience into a Task Skill, and reuse that guidance in a new task. Then explore a real Skill distilled from the Gin repository."
        />

        <div className="mt-9 overflow-hidden rounded-xl border-2 border-blue-200 bg-blue-100 p-2 shadow-lg shadow-blue-900/10 sm:p-2.5">
          <video
            className="block h-auto w-full rounded-lg bg-[#102a56]"
            controls
            playsInline
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}media/devskill-poster.jpg`}
            aria-label="DevSkill end-to-end demonstration"
          >
            <source
              src={`${import.meta.env.BASE_URL}media/devskill.mp4`}
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </div>

        <div className="mt-14 border-t border-blue-100 pt-10">
          <div className="mb-7 grid gap-3 lg:grid-cols-[0.38fr_1fr] lg:gap-10">
            <div className="flex items-start gap-3 pt-1">
              <span className="font-mono text-xs text-ink/38">CASE</span>
              <span className="eyebrow text-cobalt">Task Skill example</span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-650 tracking-[-0.03em] text-ink sm:text-3xl">
                Reconstructing a radix-tree router from developer experience.
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-ink/62">
                Open each layer to move from repository context to the source
                task and its evidence-grounded, reusable solution.
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            <DetailPanel
              index="01"
              eyebrow="Repository"
              title="Gin · Go web framework"
              summary="A high-performance HTTP framework whose router is built on a compressed radix tree."
            >
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0d1b2a] text-white">
                      <GitFork size={21} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-xl font-650 text-ink">
                        gin-gonic/gin
                      </p>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink/45">
                        Go · Web framework · HTTP routing
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-ink/68 sm:text-base">
                    Gin maps request paths to handler chains using a compressed
                    radix tree. Its routing core must balance compact prefix
                    storage, fast lookup, parameter extraction, wildcard
                    semantics, and deterministic child priority without changing
                    the framework’s public API.
                  </p>
                </div>
                <a
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 px-4 py-2.5 text-sm font-600 text-cobalt transition-colors hover:bg-blue-50"
                  href="https://github.com/gin-gonic/gin"
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository
                  <GitFork size={15} aria-hidden="true" />
                </a>
              </div>
            </DetailPanel>

            <DetailPanel
              index="02"
              eyebrow="Source task"
              title="Implement route registration and node splitting"
              summary="Restore correct insertion for static paths, parameters, catch-alls, and shared prefixes."
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                <div>
                  <p className="font-mono text-xs font-600 uppercase tracking-[0.15em] text-cobalt">
                    Task requirement
                  </p>
                  <p className="mt-3 text-base leading-7 text-ink/72">
                    Implement HTTP route registration on Gin’s radix tree.
                    Static segments, named parameters, and catch-all wildcards
                    must be inserted correctly. Shared prefixes split existing
                    nodes instead of duplicating paths, while conflicting
                    wildcard patterns are rejected.
                  </p>
                </div>
                <ul className="m-0 grid list-none gap-2 p-0" aria-label="Task constraints">
                  {[
                    'Preserve priority ordering among sibling nodes',
                    'Keep existing parameter and helper types compiling',
                    'Do not change unrelated routing behavior',
                  ].map((constraint) => (
                    <li
                      key={constraint}
                      className="flex gap-3 rounded-lg bg-blue-50 px-4 py-3 text-sm leading-6 text-ink/68"
                    >
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-cobalt"
                        size={16}
                        aria-hidden="true"
                      />
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>
            </DetailPanel>

            <DetailPanel
              index="03"
              eyebrow="Task Skill"
              title="Implement radix-tree routing"
              summary="Seven structured fields turn the source trace into actionable and auditable guidance."
            >
              <div className="rounded-xl bg-[#102a56] p-5 text-white sm:p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] font-600 uppercase tracking-[0.16em] text-blue-200">
                  <TerminalSquare size={15} aria-hidden="true" />
                  Reusable implementation path
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ['01', 'Inspect stubs'],
                    ['02', 'Build helpers'],
                    ['03', 'Insert & split'],
                    ['04', 'Build → test'],
                  ].map(([step, label], position) => (
                    <div
                      key={step}
                      className="relative rounded-lg border border-white/14 bg-white/7 px-4 py-3"
                    >
                      <span className="font-mono text-[10px] text-blue-200">
                        STEP {step}
                      </span>
                      <p className="mt-1 text-sm font-600">{label}</p>
                      {position < 3 && (
                        <span className="absolute -right-2.5 top-1/2 z-1 hidden -translate-y-1/2 text-blue-200 lg:block">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-2">
                {skillFields.map(({ index, title, icon: Icon, content }) => (
                  <article
                    key={title}
                    className={`rounded-xl border p-5 ${
                      title === 'Unhappy Solution'
                        ? 'border-amber-200 bg-amber-50/70'
                        : title === 'Happy Solution'
                          ? 'border-blue-300 bg-blue-50/70'
                          : 'border-blue-100 bg-[#fbfdff]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-cobalt shadow-sm">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="font-mono text-[10px] text-ink/38">
                        {index}
                      </span>
                      <h4 className="font-display text-base font-650 text-ink">
                        {title}
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-ink/66">
                      {content}
                    </p>
                  </article>
                ))}
              </div>

            </DetailPanel>
          </div>
        </div>
      </div>
    </section>
  )
}
