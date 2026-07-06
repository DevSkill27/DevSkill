export function Footer() {
  return (
    <footer className="border-t border-blue-200 bg-blue-100 py-10 text-ink sm:py-12">
      <div className="page-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}icon.svg`}
            alt=""
            className="h-7 w-7 rounded bg-white"
          />
          <span className="font-display text-sm font-700">DevSkill</span>
        </div>
        <div className="max-w-2xl space-y-2 text-[10px] leading-5 text-ink/48 sm:text-right">
          <p className="m-0">
            Coding is More Than Code: Learning Task-Solution Guidance from
            Developer Behavior to Teach Coding Agents
          </p>
          <p className="m-0">
            © 2026 DevSkill. Dataset licensed under{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-sm underline decoration-ink/25 underline-offset-2 hover:text-cobalt"
            >
              CC BY 4.0
            </a>
            . Third-party materials remain subject to their original licenses.
          </p>
        </div>
      </div>
    </footer>
  )
}
