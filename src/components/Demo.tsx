import { useState } from 'react'
import { Play, Sparkles } from 'lucide-react'
import { demoSteps } from '../data/siteData'
import { SectionIntro } from './SectionIntro'

export function Demo() {
  const [activeStep, setActiveStep] = useState(0)
  const step = demoSteps[activeStep]
  const Icon = step.icon

  return (
    <section id="demo" className="section-pad bg-paper">
      <div className="page-shell">
        <SectionIntro
          index="04"
          label="Demo"
          title={
            <>
              One workflow.
              <br className="hidden sm:block" /> Three moments of leverage.
            </>
          }
          description="This interactive preview illustrates the DevSkill workflow. A full research demo video and product captures will be added with the public artifact release."
        />

        <div className="mt-9 overflow-hidden border border-blue-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/8 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded bg-cobalt text-white">
                <Sparkles size={15} />
              </span>
              <span>
                <strong className="block text-xs">Workflow preview</strong>
                <span className="block text-[9px] text-ink/36">
                  Representative interface · not experiment footage
                </span>
              </span>
            </div>
            <span className="flex items-center gap-2 rounded bg-blue-50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-cobalt/70">
              <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
              Demo video pending
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="border-b border-blue-100 p-4 sm:p-5 lg:border-b-0 lg:border-r">
              <div className="space-y-2">
                {demoSteps.map((item, index) => {
                  const StepIcon = item.icon
                  const active = index === activeStep
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`focus-ring w-full border-b border-blue-100 p-3.5 text-left transition-colors ${
                        active
                          ? 'bg-blue-50 text-cobalt'
                          : 'bg-transparent text-ink hover:bg-blue-50/50'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`grid h-9 w-9 place-items-center rounded-lg ${
                            active ? 'bg-cobalt text-white' : 'bg-blue-50 text-cobalt'
                          }`}
                        >
                          <StepIcon size={16} />
                        </span>
                        <span>
                          <span
                            className={`font-mono text-[9px] uppercase tracking-wider ${
                              active ? 'text-cobalt' : 'text-ink/32'
                            }`}
                          >
                            Step {item.id}
                          </span>
                          <strong className="mt-0.5 block text-sm">{item.label}</strong>
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="min-h-[430px] bg-blue-50/50 p-5 sm:p-7">
              <div className="mx-auto max-w-2xl">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="eyebrow text-cobalt">{step.label}</p>
                    <h3 className="mt-4 max-w-lg font-display text-3xl font-600 leading-tight tracking-[-0.04em]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-ink/52">
                      {step.description}
                    </p>
                  </div>
                  <span className="hidden h-11 w-11 shrink-0 place-items-center rounded bg-cobalt text-white sm:grid">
                    <Icon size={20} />
                  </span>
                </div>

                <div className="mt-7 overflow-hidden rounded-md border border-blue-900 bg-[#102a56]">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-blue-300" />
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="font-mono text-[9px] text-white/30">
                      devskill://workflow/{step.id}
                    </span>
                  </div>
                  <div className="space-y-0 px-4 py-5 font-mono sm:px-6 sm:py-7">
                    {step.terminal.map(([time, source, message], index) => (
                      <div
                        key={`${step.id}-${time}`}
                        className="grid grid-cols-[54px_58px_1fr] gap-2 border-b border-white/6 py-3 text-[10px] last:border-b-0 sm:grid-cols-[68px_70px_1fr] sm:text-[11px]"
                      >
                        <span className="text-white/24">{time}</span>
                        <span className="text-blue-300">{source}</span>
                        <span className="truncate text-white/66">{message}</span>
                        {index === step.terminal.length - 1 && (
                          <span className="col-start-3 mt-1 h-1 w-20 overflow-hidden rounded-full bg-white/8">
                            <span className="block h-full w-4/5 bg-blue-400" />
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-[10px] text-ink/36">
                  <Play size={12} fill="currentColor" />
                  Select a stage to inspect its representative output.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
