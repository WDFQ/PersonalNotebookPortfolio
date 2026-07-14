import { useEffect, useState } from 'react'
import { profile } from '../data/cv'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 bg-paper/95 backdrop-blur-sm transition-shadow ${
        scrolled ? 'border-b-2 border-ink shadow-paper-sm' : ''
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="group flex items-baseline gap-1 font-display text-2xl font-extrabold text-navy-deep"
        >
          {/* handwritten-style monogram */}
          <span className="inline-block transition-transform duration-300 group-hover:-rotate-6">
            J
          </span>
          <span className="inline-block transition-transform duration-300 group-hover:rotate-6">
            J
          </span>
          <span className="text-red">.</span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-7 sm:flex">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="squiggle-link text-sm font-bold uppercase tracking-[0.15em] text-ink hover:text-navy"
              >
                <span aria-hidden="true" className="mr-1 text-red">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile menu button */}
        <button
          type="button"
          className="rounded-scrap-sm border-2 border-ink bg-card px-3 py-2 text-sm font-bold uppercase tracking-widest shadow-paper-sm transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close ✕' : 'Menu ☰'}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <ul
          id="mobile-menu"
          className="border-t-2 border-dashed border-ink/30 bg-paper px-5 pb-5 pt-2 sm:hidden"
        >
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-rule py-3 font-bold uppercase tracking-[0.15em] text-ink"
              >
                <span aria-hidden="true" className="mr-2 text-red">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3 text-sm text-pencil">✎ {profile.location}</li>
        </ul>
      )}
    </header>
  )
}
