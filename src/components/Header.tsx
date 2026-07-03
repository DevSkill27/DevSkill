import { useState } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import { navigation } from '../data/siteData'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navigation.map((item) => item.href.slice(1))

export function Header() {
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-100 bg-white/95 text-ink backdrop-blur-xl">
      <div className="page-shell flex h-15 items-center justify-between">
        <a
          href="#top"
          className="focus-ring flex items-center gap-2.5 rounded-sm"
          aria-label="DevSkill home"
        >
          <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="" className="h-7 w-7" />
          <span className="font-display text-base font-700 tracking-[-0.03em]">
            DevSkill
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-3.5 py-2 text-[12px] font-600 transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-cobalt'
                    : 'text-ink/58 hover:text-cobalt'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <a
          href="#artifacts"
          className="focus-ring hidden items-center gap-2 rounded-md border border-blue-200 px-3.5 py-2 text-[12px] font-600 text-cobalt transition-colors hover:bg-blue-50 sm:flex"
        >
          View artifacts
          <FileText size={14} />
        </a>

        <button
          type="button"
          className="focus-ring grid h-9 w-9 place-items-center rounded-md border border-blue-200 text-cobalt lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-blue-100 bg-white px-5 py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring flex items-center justify-between border-b border-blue-50 py-3 text-sm font-600 text-ink/72 last:border-b-0"
            >
              {item.label}
              <span className="font-mono text-[10px] text-cobalt/50">
                {item.href.slice(1, 3).toUpperCase()}
              </span>
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
