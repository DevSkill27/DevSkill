import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { artifacts } from '../data/siteData'
import { SectionIntro } from './SectionIntro'

export function Artifacts() {
  return (
    <section id="artifacts" className="section-pad bg-blue-50/60">
      <div className="page-shell">
        <SectionIntro
          index="05"
          label="Data availability"
          title={
            <>
              Experimental data.
              <br className="hidden sm:block" /> Preparing for release.
            </>
          }
          description="The experimental dataset used in this study will be released soon."
        />

        <div className="mt-9 grid gap-4">
          {artifacts.map((artifact) => {
            const Icon = artifact.icon
            return (
              <a
                key={artifact.title}
                href=""
                onClick={(event) => event.preventDefault()}
                aria-label={`${artifact.title} — coming soon`}
                className="focus-ring group flex min-h-48 flex-col border border-blue-200 bg-white p-5 text-ink transition-colors hover:border-cobalt sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded bg-blue-50 text-cobalt">
                    <Icon size={18} />
                  </span>
                  <ExternalLink
                    size={17}
                    className="text-ink/28 transition-colors group-hover:text-ink"
                  />
                </div>
                <div className="mt-auto pt-7">
                  <span className="eyebrow text-cobalt">Coming soon</span>
                  <h3 className="mt-2 font-display text-xl font-600 tracking-[-0.03em]">
                    {artifact.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/48">
                    {artifact.detail}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="mt-9 flex justify-end">
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/18 px-5 py-3 text-xs font-700 text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Back to the top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
