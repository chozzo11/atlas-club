import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  // Subtle particle / star field canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2,
      alpha: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.3 + 0.05,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.alpha += Math.sin(Date.now() * s.speed * 0.001) * 0.005
        s.alpha = Math.max(0.05, Math.min(0.7, s.alpha))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 169, 110, ${s.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #0d1a30 0%, #080c14 70%)' }}
    >
      {/* Star field */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />

      {/* Subtle globe lines background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none" opacity="0.07">
          <circle cx="350" cy="350" r="300" stroke="#C9A96E" strokeWidth="1"/>
          <circle cx="350" cy="350" r="200" stroke="#C9A96E" strokeWidth="0.5"/>
          <circle cx="350" cy="350" r="100" stroke="#C9A96E" strokeWidth="0.5"/>
          <line x1="50" y1="350" x2="650" y2="350" stroke="#C9A96E" strokeWidth="0.5"/>
          <line x1="350" y1="50" x2="350" y2="650" stroke="#C9A96E" strokeWidth="0.5"/>
          <ellipse cx="350" cy="350" rx="300" ry="100" stroke="#C9A96E" strokeWidth="0.5"/>
          <ellipse cx="350" cy="350" rx="300" ry="180" stroke="#C9A96E" strokeWidth="0.5"/>
          <ellipse cx="350" cy="350" rx="100" ry="300" stroke="#C9A96E" strokeWidth="0.5"/>
          <ellipse cx="350" cy="350" rx="180" ry="300" stroke="#C9A96E" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(201,169,110,0.08) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <p className="section-label animate-fade-up mb-8">Exclusive travel membership</p>

        <h1
          className="font-display animate-fade-up delay-100 mb-6"
          style={{ fontSize: 'clamp(52px, 8vw, 96px)', lineHeight: 1.0, letterSpacing: '-0.01em', fontWeight: 300 }}
        >
          <span className="text-white">The world is</span>
          <br />
          <span className="text-gold-shimmer italic">yours to claim.</span>
        </h1>

        <p
          className="animate-fade-up delay-200 max-w-xl mx-auto mb-12"
          style={{ color: '#8897b2', fontSize: '16px', lineHeight: 1.75, fontWeight: 300 }}
        >
          Atlas Club is a members-only travel concierge. Flight bookings, curated itineraries,
          and monthly giveaways — all in one elegant membership.
        </p>

        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#membership" className="btn-gold">
            Choose your tier
          </a>
          <a href="#how-it-works" className="btn-outline">
            How it works
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-400 mt-20 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
          {[
            { num: '3', label: 'Membership tiers' },
            { num: '180+', label: 'Destinations' },
            { num: 'Monthly', label: 'Giveaway draws' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl mb-1" style={{ color: '#C9A96E', fontWeight: 300 }}>{num}</p>
              <p style={{ color: '#8897b2', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 rule-gold" />

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-500"
        style={{ color: '#8897b2' }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <div className="w-px h-8 relative overflow-hidden" style={{ background: 'rgba(201,169,110,0.2)' }}>
          <div
            className="absolute top-0 w-full h-4"
            style={{
              background: 'linear-gradient(to bottom, #C9A96E, transparent)',
              animation: 'scrollLine 1.8s ease-in-out infinite',
            }}
          />
        </div>
        <style>{`
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(300%); }
          }
        `}</style>
      </div>
    </section>
  )
}
