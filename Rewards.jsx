import { useEffect, useRef, useState } from 'react'

const prizes = [
  { icon: '✈', label: 'Return flights', sub: 'Business class draws' },
  { icon: '🎵', label: 'Concert tickets', sub: 'Front row access' },
  { icon: '🏨', label: 'Luxury stays', sub: '5-star hotel nights' },
  { icon: '🎫', label: 'Exclusive events', sub: 'Members-only access' },
]

export default function Rewards() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [countdown, setCountdown] = useState({ days: 18, hours: 7, mins: 42 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Live-ish countdown tick
  useEffect(() => {
    const t = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, mins } = prev
        mins -= 1
        if (mins < 0) { mins = 59; hours -= 1 }
        if (hours < 0) { hours = 23; days -= 1 }
        if (days < 0) { days = 0; hours = 0; mins = 0 }
        return { days, hours, mins }
      })
    }, 60000)
    return () => clearInterval(t)
  }, [])

  const pad = n => String(n).padStart(2, '0')

  return (
    <section id="rewards" className="relative py-32 px-6" style={{ background: '#080c14' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: visual ticket */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(-32px)',
              transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            {/* Ticket card */}
            <div
              className="relative"
              style={{
                background: 'linear-gradient(135deg, #111d33 0%, #0d1526 100%)',
                border: '1px solid rgba(201,169,110,0.35)',
                borderRadius: '8px',
                padding: '40px',
                overflow: 'hidden',
              }}
            >
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 20px)',
                }}
              />

              {/* Tear line */}
              <div
                className="absolute top-1/2 left-0 right-0 flex items-center"
                style={{ transform: 'translateY(-50%)' }}
              >
                <div style={{ width: '20px', height: '20px', background: '#080c14', borderRadius: '50%', marginLeft: '-10px', flexShrink: 0 }} />
                <div style={{ flex: 1, borderTop: '2px dashed rgba(201,169,110,0.2)' }} />
                <div style={{ width: '20px', height: '20px', background: '#080c14', borderRadius: '50%', marginRight: '-10px', flexShrink: 0 }} />
              </div>

              {/* Top half */}
              <div className="relative pb-10 mb-6">
                <p className="section-label mb-3">Atlas Club</p>
                <h3 className="font-display text-white mb-1" style={{ fontSize: '32px', fontWeight: 300 }}>
                  Monthly Giveaway
                </h3>
                <p style={{ color: '#8897b2', fontSize: '13px' }}>May 2025 Draw</p>

                {/* Prize highlight */}
                <div
                  className="mt-6 p-4"
                  style={{
                    background: 'rgba(201,169,110,0.06)',
                    border: '1px solid rgba(201,169,110,0.2)',
                    borderRadius: '4px',
                  }}
                >
                  <p style={{ color: '#C9A96E', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '6px' }}>
                    This month's prize
                  </p>
                  <p className="font-display text-white" style={{ fontSize: '22px', fontWeight: 300 }}>
                    2× Business Class Flights
                  </p>
                  <p style={{ color: '#8897b2', fontSize: '12px', marginTop: '4px' }}>Return · Any destination · Atlas partners</p>
                </div>
              </div>

              {/* Bottom half */}
              <div className="relative pt-6">
                {/* Countdown */}
                <p style={{ color: '#8897b2', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Draw in
                </p>
                <div className="flex gap-4">
                  {[
                    { val: pad(countdown.days), label: 'Days' },
                    { val: pad(countdown.hours), label: 'Hours' },
                    { val: pad(countdown.mins), label: 'Mins' },
                  ].map(({ val, label }) => (
                    <div key={label} className="text-center">
                      <p className="font-display" style={{ fontSize: '36px', color: '#C9A96E', fontWeight: 300, lineHeight: 1 }}>
                        {val}
                      </p>
                      <p style={{ fontSize: '10px', color: '#8897b2', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Stub */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p style={{ fontSize: '10px', color: '#8897b2', letterSpacing: '0.12em', marginBottom: '2px' }}>ADMIT</p>
                    <p style={{ color: '#C9A96E', fontSize: '13px', fontWeight: 500 }}>Active members only</p>
                  </div>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.4">
                    <circle cx="24" cy="24" r="22" stroke="#C9A96E" strokeWidth="0.5"/>
                    <circle cx="24" cy="24" r="14" stroke="#C9A96E" strokeWidth="0.5"/>
                    <circle cx="24" cy="24" r="4" fill="#C9A96E" opacity="0.6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(32px)',
              transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s',
            }}
          >
            <p className="section-label mb-5">Rewards</p>
            <h2
              className="font-display mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: '#fff', lineHeight: 1.1 }}
            >
              Win extraordinary<br />
              <span className="italic" style={{ color: '#C9A96E' }}>experiences.</span>
            </h2>
            <p style={{ color: '#8897b2', fontSize: '15px', lineHeight: 1.8, fontWeight: 300, marginBottom: '32px' }}>
              Every active membership earns monthly entries into our exclusive giveaway draws.
              The more you invest in your membership, the more chances you have to win.
            </p>

            {/* Entry table */}
            <div
              className="mb-8"
              style={{ border: '1px solid rgba(201,169,110,0.15)', borderRadius: '4px', overflow: 'hidden' }}
            >
              {[
                { name: 'Explorer', price: '$9', entries: 5, color: '#8897b2' },
                { name: 'Voyager', price: '$19', entries: 20, color: '#C9A96E', highlight: true },
                { name: 'Elite', price: '$30', entries: 50, color: '#E8CC99' },
              ].map((t, i) => (
                <div
                  key={t.name}
                  className="flex items-center justify-between px-5 py-4"
                  style={{
                    background: t.highlight ? 'rgba(201,169,110,0.06)' : 'transparent',
                    borderTop: i > 0 ? '1px solid rgba(201,169,110,0.08)' : 'none',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: '13px', color: t.color, fontWeight: 500, minWidth: '68px' }}>{t.name}</span>
                    <span style={{ fontSize: '12px', color: '#8897b2' }}>{t.price}/mo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {Array.from({ length: Math.min(t.entries, 5) }).map((_, j) => (
                        <div key={j} style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.color, opacity: 0.7 }} />
                      ))}
                      {t.entries > 5 && <span style={{ fontSize: '11px', color: t.color, marginLeft: '2px' }}>+{t.entries - 5}</span>}
                    </div>
                    <span style={{ fontSize: '13px', color: t.color, fontWeight: 500, minWidth: '80px', textAlign: 'right' }}>
                      {t.entries} entries
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Prize types */}
            <div className="grid grid-cols-2 gap-3">
              {prizes.map(p => (
                <div
                  key={p.label}
                  className="flex items-center gap-3 px-4 py-3"
                  style={{ background: 'rgba(13,21,38,0.6)', border: '1px solid rgba(30,45,74,0.8)', borderRadius: '4px' }}
                >
                  <span style={{ fontSize: '20px' }}>{p.icon}</span>
                  <div>
                    <p style={{ fontSize: '13px', color: '#c2cde0', fontWeight: 500, marginBottom: '1px' }}>{p.label}</p>
                    <p style={{ fontSize: '11px', color: '#8897b2' }}>{p.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
