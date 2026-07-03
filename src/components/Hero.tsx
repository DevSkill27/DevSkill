import { ArrowDown, ArrowUpRight, FileCode2, Route, ScanSearch } from 'lucide-react'

const processSignals = [
  {
    icon: ScanSearch,
    label: 'Localize',
    detail: 'Evidence narrows the repository search space',
  },
  {
    icon: Route,
    label: 'Decide',
    detail: 'Successful and failed paths expose rationale',
  },
  {
    icon: FileCode2,
    label: 'Validate',
    detail: 'Checks retain the boundary of what was proven',
  },
]

export function Hero() {
  return (
    <section
      id="top"
      className="noise relative min-h-[880px] overflow-hidden bg-ink pt-17 text-white"
    >
      <div className="paper-grid absolute inset-0 opacity-20" />
      <div className="absolute -right-32 top-42 h-96 w-96 rounded-full bg-cobalt/22 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-lime/8 blur-3xl" />

      <div className="page-shell relative z-10 grid min-h-[810px] items-center gap-16 py-18 lg:grid-cols-[1.28fr_0.72fr] lg:py-24">
        <div className="max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-lime/34 bg-lime/9 px-3.5 py-1.5 font-mono text-[10px] font-600 uppercase tracking-[0.16em] text-lime">
              ICSE Research
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/38">
              Agentic software engineering
            </span>
          </div>

          <h1 className="font-display text-[clamp(3.7rem,8.4vw,7.65rem)] font-600 leading-[0.88] tracking-[-0.075em]">
            Coding is
            <br />
            more than <span className="text-lime">code.</span>
          </h1>

          <p className="mt-9 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl sm:leading-9">
            Learning task-solution guidance from developer behavior to teach
            coding agents how to navigate, decide, recover, and validate—not
            merely imitate a final patch.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#approach"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-700 text-ink transition-transform hover:-translate-y-0.5"
            >
              Explore the approach
              <ArrowDown size={16} />
            </a>
            <a
              href="#results"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/18 px-6 py-3.5 text-sm font-700 text-white transition-colors hover:border-white/40"
            >
              See the evidence
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-5 rotate-3 rounded-[2rem] border border-lime/18" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/14 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="eyebrow text-white/34">What the diff omits</p>
                <p className="mt-1.5 text-sm font-600 text-white/88">
                  The development path
                </p>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ff766e]" />
                <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
                <span className="h-2 w-2 rounded-full bg-lime" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {processSignals.map((signal, index) => {
                const Icon = signal.icon
                return (
                  <div
                    key={signal.label}
                    className="grid grid-cols-[36px_1fr_auto] items-center gap-3 rounded-xl border border-white/8 bg-white/[0.045] p-3.5"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/8 text-lime">
                      <Icon size={16} />
                    </span>
                    <span>
                      <strong className="block text-xs text-white">
                        {signal.label}
                      </strong>
                      <span className="mt-0.5 block text-[10px] leading-4 text-white/42">
                        {signal.detail}
                      </span>
                    </span>
                    <span className="font-mono text-[9px] text-white/24">
                      0{index + 1}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-lime p-4 text-ink">
              <span>
                <span className="eyebrow block !text-[9px]">Distilled as</span>
                <strong className="mt-1 block text-sm">Reusable Task Skill</strong>
              </span>
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden border-y border-white/10 bg-white/[0.035] py-3.5">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {[
                'Developer behavior',
                'Evidence binding',
                'Failure recovery',
                'Task transfer',
                'Skill evolution',
              ].map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center whitespace-nowrap px-7 font-mono text-[10px] uppercase tracking-[0.18em] text-white/36"
                >
                  {item}
                  <span className="ml-14 h-1.5 w-1.5 rounded-full bg-lime" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
