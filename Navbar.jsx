import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['How it works', 'Membership', 'Rewards', 'Book a trip']
  const hrefs = ['#how-it-works', '#membership', '#rewards', '#booking']

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(8,12,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,0.12)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-18 py-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-7 h-7 relative">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="13" stroke="#C9A96E" strokeWidth="1"/>
              <path d="M14 4 L14 24 M4 14 L24 14" stroke="#C9A96E" strokeWidth="0.5" opacity="0.5"/>
              <circle cx="14" cy="14" r="3" fill="#C9A96E" opacity="0.8"/>
              <path d="M14 4 Q20 9 20 14 Q20 19 14 24 Q8 19 8 14 Q8 9 14 4Z" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.4"/>
            </svg>
          </div>
          <span className="font-display text-xl tracking-widest text-white" style={{ letterSpacing: '0.25em' }}>
            ATLAS
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link, i) => (
            <a
              key={link}
              href={hrefs[i]}
              className="text-xs tracking-widest transition-colors duration-200"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.14em',
                color: '#8897b2',
                textTransform: 'uppercase',
                fontSize: '11px',
              }}
              onMouseEnter={e => e.target.style.color = '#C9A96E'}
              onMouseLeave={e => e.target.style.color = '#8897b2'}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#membership" className="btn-gold text-xs" style={{ padding: '10px 24px', fontSize: '11px', letterSpacing: '0.12em' }}>
            Join Atlas
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px transition-all duration-300" style={{ background: menuOpen ? '#C9A96E' : '#8897b2', transform: menuOpen ? 'rotate(45deg) translate(2px, 3px)' : '' }} />
          <span className="block w-5 h-px transition-all duration-300" style={{ background: menuOpen ? 'transparent' : '#8897b2', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-300" style={{ background: menuOpen ? '#C9A96E' : '#8897b2', transform: menuOpen ? 'rotate(-45deg) translate(2px, -3px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          background: 'rgba(8,12,20,0.97)',
          borderTop: menuOpen ? '1px solid rgba(201,169,110,0.1)' : 'none',
        }}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {links.map((link, i) => (
            <a
              key={link}
              href={hrefs[i]}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#8897b2', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              {link}
            </a>
          ))}
          <a href="#membership" className="btn-gold inline-block text-center" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>
            Join Atlas
          </a>
        </nav>
      </div>
    </header>
  )
}
