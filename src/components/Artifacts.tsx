import { ArrowUpRight, Download } from 'lucide-react'
import { artifacts, datasetContents } from '../data/siteData'
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
          description="A process-rich research artifact for studying how coding knowledge transfers between related repository-level tasks—not just a collection of final patches."
        />

        <div className="mt-9 grid border-l border-t border-blue-200 md:grid-cols-2">
          {datasetContents.map((item) => (
            <article
              key={item.label}
              className="border-b border-r border-blue-200 bg-white p-5 sm:p-6"
            >
              <span className="eyebrow text-cobalt">{item.label}</span>
              <p className="mt-3 font-display text-2xl font-600 tracking-[-0.03em] text-ink">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-ink/58">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4">
          {artifacts.map((artifact) => {
            const Icon = artifact.icon
            return (
              <article
                key={artifact.title}
                className="flex flex-col gap-5 border border-blue-200 bg-white p-5 text-ink sm:flex-row sm:items-center sm:p-6"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded bg-blue-50 text-cobalt">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <span className="eyebrow text-cobalt">{artifact.release}</span>
                  <h3 className="mt-2 font-display text-xl font-600 tracking-[-0.03em]">
                    {artifact.title}
                  </h3>
                </div>
                <a
                  href={artifact.url}
                  aria-label={`Download ${artifact.title}`}
                  className="focus-ring inline-flex w-fit items-center gap-2 rounded-md bg-cobalt px-4 py-2.5 text-xs font-700 text-white shadow-sm transition-colors hover:bg-blue-700 sm:ml-auto"
                >
                  Download dataset
                  <Download size={14} />
                </a>
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
