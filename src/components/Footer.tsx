export function Footer() {
  return (
    <footer className="border-t border-blue-200 bg-blue-100 py-7 text-ink">
      <div className="page-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}icon.svg`}
            alt=""
            className="h-7 w-7 rounded bg-white"
          />
          <span className="font-display text-sm font-700">DevSkill</span>
        </div>
        <p className="m-0 max-w-lg text-[10px] leading-5 text-ink/45 sm:text-right">
          Coding is More Than Code: Learning Task-Solution Guidance from
          Developer Behavior to Teach Coding Agents
        </p>
      </div>
    </footer>
  )
}
