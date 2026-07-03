import { ArrowDown, Database, FileText } from 'lucide-react'

export function AcademicHero() {
  return (
    <section id="top" className="border-b border-blue-100 bg-white pt-15">
      <div className="page-shell py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow text-cobalt">
            Research paper · Agentic software engineering
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-650 leading-[1.02] tracking-[-0.055em] text-ink">
            Coding is More Than Code
          </h1>
          <p className="mx-auto mt-5 max-w-4xl font-display text-xl leading-8 text-ink/64 sm:text-2xl">
            Learning Task-Solution Guidance from Developer Behavior to Teach
            Coding Agents
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/42">
            <span>Anonymous authors</span>
            <span className="h-1 w-1 rounded-full bg-blue-300" />
            <span>ICSE submission</span>
            <span className="h-1 w-1 rounded-full bg-blue-300" />
            <span>63 tasks · 6 repositories</span>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-ink/68">
            DevSkill learns reusable, evidence-grounded guidance from how
            developers navigate repositories, make decisions, recover from
            failures, and validate solutions—not only from the code they leave
            behind.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#approach"
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 text-sm font-650 text-white hover:bg-blue-700"
            >
              Read the approach
              <ArrowDown size={15} />
            </a>
            <a
              href="#artifacts"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-blue-200 px-5 py-3 text-sm font-650 text-cobalt hover:bg-blue-50"
            >
              Research artifacts
              <Database size={15} />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl border-y border-blue-100 sm:grid-cols-[0.34fr_1fr]">
          <div className="border-b border-blue-100 bg-blue-50 p-5 sm:border-b-0 sm:border-r sm:p-6">
            <div className="flex items-center gap-2 text-cobalt">
              <FileText size={16} />
              <span className="eyebrow">Abstract</span>
            </div>
          </div>
          <div className="p-5 sm:p-6">
            <p className="m-0 text-sm leading-7 text-ink/68">
              Code shows the result of coding, but not the process behind it.
              Final diffs reveal which files changed, but rarely explain how
              developers turned a vague requirement into a validated
              repository-level solution — leaving coding agents powerful
              operators yet weak task solvers. We propose DevSkill, a
              framework that learns reusable process knowledge from
              developer behavior traces and represents it as evidence-grounded
              Task Skills maintained in a repository-level Skill Pool.
              Evaluation on a paired-task benchmark drawn from six public
              repositories shows that DevSkill improves
              executable rate and functional score across agent backbones,
              indicating that developer-derived process knowledge is a
              practical lever for teaching coding agents to solve complex
              programming tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
