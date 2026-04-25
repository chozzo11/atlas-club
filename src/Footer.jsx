export default function Footer() {
  const links = {
    Membership: ['Explorer', 'Voyager', 'Elite', 'Compare plans'],
    Company: ['About Atlas', 'How it works', 'Contact', 'Press'],
    Legal: ['Terms of service', 'Privacy policy', 'Cookie policy'],
  }

  return (
    <footer style={{ background: '#060912', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 28 28" fill="none" width="24" height="24">
                <circle cx="14" cy="14" r="13" stroke="#C9A96E" strokeWidth="1"/>
                <circle cx="14" cy="14" r="3" fill="#C9A96E" opacity="0.8"/>
                <path d="M14 4 Q20 9 20 14 Q20 19 14 24 Q8 19 8 14 Q8 9 14 4Z" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.4"/>
              </svg>
              <span className="font-display text-white" style={{ letterSpacing: '0.25em', fontSize: '16px' }}>ATLAS</span>
            </div>
            <p style={{ color: '#8897b2', fontSize: '13px', lineHeight: 1.7, maxWidth: '200px', fontWeight: 300 }}>
              A members-only travel club for those who believe the journey matters as much as the destination.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p style={{ fontSize: '10px', color: '#C9A96E', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ color: '#8897b2', fontSize: '13px', fontWeight: 300, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#C9A96E'}
                      onMouseLeave={e => e.target.style.color = '#8897b2'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(30,45,74,0.6)' }}
        >
          <p style={{ color: '#8897b2', fontSize: '12px', fontWeight: 300 }}>
            © 2025 Atlas Club · All rights reserved
          </p>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="2" stroke="#8897b2" strokeWidth="0.8"/><path d="M1 6h14" stroke="#8897b2" strokeWidth="0.8"/></svg>
            <p style={{ color: '#8897b2', fontSize: '12px', fontWeight: 300 }}>
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}