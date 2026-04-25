import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Choose your membership',
    body: 'Pick from Explorer, Voyager, or Elite. Each tier unlocks more giveaway entries, perks, and access.',
  },
  {
    num: '02',
    title: 'Enter monthly giveaways',
    body: 'Every active member earns entries each month. Concert tickets, flights, experiences — drawn live.',
  },
  {
    num: '03',
    title: 'Book flights & get your itinerary',
    body: "Search real-time flights through the club. We handle everything — flights, hotels, and a full PDF itinerary in your inbox.",
  },
]

export default function HowItWorks() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="relative py-32 px-6" style={{ background: '#080c14' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={el => refs.current[0] = el}
          className="reveal mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="section-label mb-4">The process</p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, lineHeight: 1.1, color: '#fff' }}
            >
              Beautifully simple.<br />
              <span className="italic" style={{ color: '#C9A96E' }}>Meticulously curated.</span>
            </h2>
          </div>
          <p style={{ color: '#8897b2', maxWidth: '320px', fontSize: '15px', lineHeight: 1.7, fontWeight: 300 }}>
            Atlas Club strips away the chaos of travel planning. Three steps from signup to take-off.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={el => refs.current[i + 1] = el}
              className="reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Connecting line (desktop) */}
              <div className="flex items-center mb-8">
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{
                    border: '1px solid rgba(201,169,110,0.3)',
                    borderRadius: '50%',
                    color: '#C9A96E',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '20px',
                    fontWeight: 300,
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block flex-1 h-px ml-4"
                    style={{ background: 'linear-gradient(90deg, rgba(201,169,110,0.3), transparent)' }}
                  />
                )}
              </div>

              <div
                className="pb-12 pr-8"
                style={{ borderTop: '1px solid rgba(201,169,110,0.12)', paddingTop: '28px' }}
              >
                <h3
                  className="font-display mb-4"
                  style={{ fontSize: '24px', fontWeight: 400, color: '#fff', lineHeight: 1.2 }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#8897b2', fontSize: '14px', lineHeight: 1.8, fontWeight: 300 }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}