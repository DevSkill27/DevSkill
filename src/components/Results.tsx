import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  GitMerge,
  Search,
} from 'lucide-react'
import { benchmarkRepositories, modelResults } from '../data/siteData'
import { SectionIntro } from './SectionIntro'

function ResultChart({
  result,
}: {
  result: (typeof modelResults)[number]
}) {
  const axisMin = 50
  const axisMax = 85
  const bestScore = Math.max(...result.rows.map((row) => row.value))

  return (
    <article className="soft-card overflow-hidden">
      <div className="flex items-start justify-between border-b border-blue-100 px-5 py-4 sm:px-6">
        <div>
          <p className="eyebrow text-ink/34">Agent backbone</p>
          <h3 className="mt-1.5 font-mono text-sm font-600 text-ink">
            {result.model}
          </h3>
        </div>
        <div className="text-right">
          <strong className="font-display text-3xl tracking-[-0.05em] text-cobalt">
            {result.score}
          </strong>
          <span className="ml-1 font-mono text-[9px] uppercase text-ink/36">
            Func. %
          </span>
        </div>
      </div>

      <div className="space-y-4 px-5 py-6 sm:px-6">
        {result.rows.map((row) => {
          const relativeGain = ((bestScore - row.value) / row.value) * 100
          const width = ((row.value - axisMin) / (axisMax - axisMin)) * 100

          return (
            <div key={row.label}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <span
                  className={`text-xs ${
                    row.featured ? 'font-700 text-ink' : 'font-500 text-ink/52'
                  }`}
                >
                  {row.label}
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px]">
                  {!row.featured && (
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 font-600 text-cobalt">
                      DevSkill ↑ {relativeGain.toFixed(1)}%
                    </span>
                  )}
                  <span className="text-ink/42">{row.value.toFixed(2)}</span>
                </span>
              </div>
              <div className="relative h-2 overflow-hidden rounded-full bg-ink/[0.065]">
                <div
                  className={`h-full rounded-full ${
                    row.featured ? 'bg-cobalt' : 'bg-ink/24'
                  }`}
                  style={{ width: `${Math.max(0, Math.min(100, width))}%` }}
                />
              </div>
            </div>
          )
        })}

        <div className="flex justify-between border-t border-ink/[0.06] pt-2 font-mono text-[9px] text-ink/32">
          <span>{axisMin}</span>
          <span>{axisMax} func. %</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-blue-100 bg-blue-50 px-5 py-3 sm:px-6">
        <span className="text-[11px] text-ink/44">Best executable rate</span>
        <strong className="font-mono text-xs text-ink">{result.executable}</strong>
      </div>
    </article>
  )
}

export function Results() {
  return (
    <section id="results" className="section-pad bg-white">
      <div className="page-shell">
        <SectionIntro
          index="03"
          label="Evaluation"
          title={
            <>
              Guidance transfers.
              <br className="hidden sm:block" /> Across models and tasks.
            </>
          }
          description="We evaluate DevSkill on 42 source–target pairs drawn from 63 developer-completed tasks in six public repositories, with strict controls against direct solution reuse."
        />

        <div className="mt-9 grid border border-blue-100 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['63', 'developer-completed tasks'],
            ['42', 'source–target pairs'],
            ['6', 'public repositories'],
            ['2', 'agent backbones'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-b border-blue-100 bg-blue-50/50 p-5 last:border-b-0 sm:border-r lg:border-b-0"
            >
              <strong className="font-display text-3xl font-600 tracking-[-0.04em] text-cobalt">
                {value}
              </strong>
              <span className="mt-3 block text-xs leading-5 text-ink/46">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {modelResults.map((result) => (
            <ResultChart key={result.model} result={result} />
          ))}
        </div>

        <p className="mt-4 text-right font-mono text-[9px] uppercase tracking-[0.12em] text-ink/32">
          Functional correctness · higher is better
        </p>

        <div className="mt-10 grid overflow-hidden border border-blue-200 bg-blue-50/50 text-ink lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 sm:p-8">
            <p className="eyebrow text-cobalt">RQ1 · Paired task transfer</p>
            <h3 className="mt-4 max-w-xl font-display text-2xl font-600 leading-tight tracking-[-0.035em]">
              Highest functional and executable scores under both backbones.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-ink/56">
              Relative functional-score gains reach 33.5–36.1% over no
              reference, 10.2–14.8% over raw diffs, and 7.5–19.1% over Hermes
              Skills.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['+36.1%', 'vs. no reference'],
                ['+14.8%', 'vs. raw diff'],
                ['+19.1%', 'vs. Hermes'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-l-2 border-cobalt bg-white p-3"
                >
                  <strong className="font-display text-xl text-cobalt">{value}</strong>
                  <span className="mt-1 block text-[10px] text-ink/40">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-blue-200 bg-white p-6 sm:p-8 lg:border-l lg:border-t-0">
            <p className="eyebrow text-cobalt">RQ2 · Skill Pool evolution</p>
            <div className="mt-7 space-y-6">
              {[
                {
                  icon: Search,
                  value: '23 / 28',
                  label: 'later tasks covered after retrieval becomes available',
                },
                {
                  icon: ArrowUpRight,
                  value: '+6.96',
                  label: 'mean functional-score points on covered tasks',
                },
                {
                  icon: GitMerge,
                  value: '27 → 15',
                  label: 'cumulative additions consolidated into active Skills',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.value} className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded bg-blue-50 text-cobalt">
                      <Icon size={16} />
                    </span>
                    <span>
                      <strong className="block font-display text-2xl tracking-[-0.04em]">
                        {item.value}
                      </strong>
                      <span className="mt-1 block text-xs leading-5 text-ink/46">
                        {item.label}
                      </span>
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-cobalt">Benchmark scope</p>
              <h3 className="mt-3 font-display text-2xl font-600 tracking-[-0.035em]">
                Diverse systems. Reproducible environments.
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-ink/42">
              <CheckCircle2 size={15} className="text-cobalt" />
              21 task clusters · 3 developers
            </div>
          </div>

          <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {benchmarkRepositories.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${repo.name} on GitHub`}
                className="focus-ring group flex items-center justify-between border border-blue-100 bg-white px-4 py-3 transition-colors hover:border-cobalt hover:bg-blue-50/50"
              >
                <span>
                  <strong className="flex items-center gap-2 text-sm">
                    {repo.name}
                    <ExternalLink
                      size={13}
                      className="text-ink/28 transition-colors group-hover:text-cobalt"
                    />
                  </strong>
                  <span className="mt-1 block text-[10px] text-ink/38">
                    {repo.type}
                  </span>
                </span>
                <span className="rounded-full bg-ink/[0.055] px-3 py-1 font-mono text-[9px] text-ink/52">
                  {repo.language}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
