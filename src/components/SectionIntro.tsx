import type { ReactNode } from 'react'

type SectionIntroProps = {
  index: string
  label: string
  title: ReactNode
  description?: string
  inverted?: boolean
}

export function SectionIntro({
  index,
  label,
  title,
  description,
  inverted = false,
}: SectionIntroProps) {
  return (
    <div className="grid gap-4 border-b border-blue-100 pb-7 lg:grid-cols-[0.38fr_1fr] lg:gap-10">
      <div className="flex items-start gap-3 pt-1">
        <span
          className={`font-mono text-xs ${
            inverted ? 'text-blue-200' : 'text-ink/38'
          }`}
        >
          {index}
        </span>
        <span
          className={`eyebrow ${
            inverted ? 'text-blue-200' : 'text-cobalt'
          }`}
        >
          {label}
        </span>
      </div>
      <div>
        <h2
          className={`section-title max-w-4xl ${
            inverted ? '!text-white' : ''
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 max-w-3xl text-base leading-7 ${
              inverted ? 'text-white/72' : 'text-ink/62'
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
