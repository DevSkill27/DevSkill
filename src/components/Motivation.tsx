import { ArrowRight, Check, X } from 'lucide-react'
import { SectionIntro } from './SectionIntro'

const missingSignals = [
  'Why these files were selected',
  'Which hypotheses were rejected',
  'How failures redirected the solution',
  'What evidence validated the final state',
]

export function Motivation() {
  return (
    <section id="motivation" className="section-pad bg-paper">
      <div className="page-shell">
        <SectionIntro
          index="01"
          label="Motivation"
          title={
            <>
              A patch is a receipt,
              <br className="hidden sm:block" /> not a route.
            </>
          }
          description="Code artifacts preserve the endpoint of development. For a coding agent entering an unfamiliar repository, the missing path is often the knowledge that determines whether the task succeeds."
        />

        <div className="mt-10 grid overflow-hidden rounded-lg border border-blue-200 bg-white lg:grid-cols-2">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink/36">Final diff</span>
              <span className="rounded bg-blue-50 px-3 py-1 font-mono text-[9px] font-600 uppercase tracking-wider text-cobalt">
                Outcome only
              </span>
            </div>
            <div className="mt-8 overflow-hidden rounded-xl border border-ink/8 bg-[#fafafa] font-mono text-[11px] leading-6">
              <div className="border-b border-ink/8 bg-ink/[0.035] px-4 py-2.5 text-ink/38">
                router/tree.go
              </div>
              <div className="px-4 py-4">
                <p className="m-0 text-ink/30">@@ -187,6 +187,14 @@</p>
                <p className="m-0 bg-blue-50 text-cobalt">
                  + func findWildcard(path string) ...
                </p>
                <p className="m-0 bg-blue-50 text-cobalt">
                  + func (n *node) addRoute(...) ...
                </p>
                <p className="m-0 text-ink/30">...</p>
                <p className="m-0 bg-slate-100 text-ink/45">
                  - return nil
                </p>
                <p className="m-0 bg-blue-50 text-cobalt">
                  + return value
                </p>
              </div>
            </div>

            <ul className="mt-7 space-y-3 p-0">
              {missingSignals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-center gap-3 text-sm text-ink/54"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-cobalt">
                    <X size={11} />
                  </span>
                  {signal}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden border-t border-blue-200 bg-blue-50 p-6 text-ink sm:p-8 lg:border-l lg:border-t-0">
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-cobalt">Task-solution guidance</span>
                <span className="rounded border border-blue-200 bg-white px-3 py-1 font-mono text-[9px] font-600 uppercase tracking-wider text-cobalt">
                  Process knowledge
                </span>
              </div>

              <blockquote className="mt-9 font-display text-3xl font-500 leading-tight tracking-[-0.04em] sm:text-4xl">
                “How a developer turned ambiguity into a validated solution
                path.”
              </blockquote>

              <div className="mt-9 space-y-3">
                {[
                  'Repository-specific localization strategy',
                  'Dependency-aware sequence of changes',
                  'Recognizable failure signals and recovery',
                  'Validation commands with explicit coverage',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-blue-100 py-3 text-sm text-ink/68"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cobalt text-white">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cobalt/65">
                Observe
                <ArrowRight size={13} />
                Distill
                <ArrowRight size={13} />
                Transfer
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          {[
            ['Mislocalization', 'The agent searches broadly without a proven starting point.'],
            ['Context cost', 'The repository path must be rediscovered at task time.'],
            ['Shallow validation', 'A plausible patch is mistaken for a verified solution.'],
          ].map(([title, copy], index) => (
            <div key={title} className="border-t border-ink/14 pt-5">
              <span className="font-mono text-[10px] text-cobalt">0{index + 1}</span>
              <h3 className="mt-3 text-sm font-700 text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/52">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
