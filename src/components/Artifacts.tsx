import { ArrowUpRight, Download } from 'lucide-react'
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
              DevSkill dataset.
              <br className="hidden sm:block" /> Available for download.
            </>
          }
          description="The research artifact accompanying the paper provides 63 reproducible repository-level tasks in 21 clusters across six open-source projects."
        />

        <div className="mt-9 grid gap-4">
          {artifacts.map((artifact) => {
            const Icon = artifact.icon
            return (
              <article
                key={artifact.title}
                className="flex min-h-48 flex-col border border-blue-200 bg-white p-5 text-ink sm:p-6"
              >
                <div className="flex items-start">
                  <span className="grid h-10 w-10 place-items-center rounded bg-blue-50 text-cobalt">
                    <Icon size={18} />
                  </span>
                </div>
                <div className="mt-auto pt-7">
                  <span className="eyebrow text-cobalt">{artifact.release}</span>
                  <h3 className="mt-2 font-display text-xl font-600 tracking-[-0.03em]">
                    {artifact.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/48">
                    {artifact.detail}
                  </p>
                  <a
                    href={artifact.url}
                    aria-label={`Download ${artifact.title}`}
                    className="focus-ring mt-5 inline-flex w-fit items-center gap-2 rounded-md bg-cobalt px-4 py-2.5 text-xs font-700 text-white shadow-sm transition-colors hover:bg-blue-700"
                  >
                    Download dataset
                    <Download size={14} />
                  </a>
                </div>
              </article>
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
