import { Database, Layers3, SearchCheck } from 'lucide-react'
import overviewFigure from '../assets/overview.png'
import { skillFields, traceSources } from '../data/siteData'
import { SectionIntro } from './SectionIntro'

const stages = [
  {
    title: 'Collect and compress',
    detail:
      'Align multi-source events and select a low-loss or compact trace view.',
    icon: Database,
  },
  {
    title: 'Construct and qualify',
    detail:
      'Mine successful and failed paths, bind evidence, and apply quality gates.',
    icon: Layers3,
  },
  {
    title: 'Retrieve and evolve',
    detail:
      'Inject compatible Skills and maintain the repository-level Skill Pool.',
    icon: SearchCheck,
  },
]

export function AcademicApproach() {
  return (
    <section id="approach" className="section-pad bg-blue-50/60">
      <div className="page-shell">
        <SectionIntro
          index="02"
          label="Approach"
          title="From developer behavior to reusable Task Skills."
          description="DevSkill organizes collection, Skill construction, and repository-level reuse into a single evidence-grounded lifecycle."
        />

        <div className="mt-9 grid border border-blue-200 bg-white lg:grid-cols-3">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <article
                key={stage.title}
                className="border-b border-blue-100 p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded bg-blue-50 text-cobalt">
                    <Icon size={17} />
                  </span>
                  <span className="font-mono text-[10px] text-cobalt/50">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-sm font-700 text-ink">{stage.title}</h3>
                <p className="mb-0 mt-2 text-xs leading-5 text-ink/54">
                  {stage.detail}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-cobalt">Behavior sources</p>
            <h3 className="mt-3 text-xl font-650 tracking-[-0.025em] text-ink">
              Four complementary evidence streams
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink/56">
              Records retain provenance to repository files, commands, pages,
              documents, and agent sessions.
            </p>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-blue-100">
            {traceSources.map((source) => {
              const Icon = source.icon
              return (
                <div
                  key={source.name}
                  className="flex items-center gap-3 border-b border-r border-blue-100 bg-white p-4"
                >
                  <Icon size={16} className="shrink-0 text-cobalt" />
                  <span>
                    <strong className="block text-xs text-ink">{source.name}</strong>
                    <span className="mt-0.5 block text-[10px] leading-4 text-ink/42">
                      {source.detail}
                    </span>
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <figure className="mt-10 border border-blue-200 bg-white">
          <div className="flex items-center justify-between border-b border-blue-100 px-5 py-3">
            <figcaption>
              <span className="eyebrow text-cobalt">Figure 1</span>
              <span className="ml-3 text-xs text-ink/48">
                Overview of the DevSkill lifecycle
              </span>
            </figcaption>
            <span className="font-mono text-[9px] uppercase tracking-wider text-ink/34">
              Method overview
            </span>
          </div>
          <div className="p-4 sm:p-6">
            <img
              src={overviewFigure}
              width="2560"
              height="1570"
              alt="DevSkill system overview: multi-source developer actions are compressed, mined into Task Skills, quality checked, and integrated into an evolving Skill Pool for retrieval by coding agents."
              className="block h-auto w-full object-contain"
              style={{ aspectRatio: '2560 / 1570' }}
            />
          </div>
        </figure>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="eyebrow text-cobalt">Task Skill schema</p>
            <h3 className="mt-3 text-xl font-650 tracking-[-0.025em]">
              Seven fields preserve guidance and its boundary.
            </h3>
          </div>
          <ol className="m-0 grid list-none grid-cols-2 gap-px overflow-hidden border border-blue-100 bg-blue-100 p-0 sm:grid-cols-4">
            {skillFields.map((field, index) => (
              <li key={field} className="min-h-18 bg-white p-3">
                <span className="font-mono text-[9px] text-cobalt/50">
                  0{index + 1}
                </span>
                <strong className="mt-2 block text-[11px] text-ink">{field}</strong>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
