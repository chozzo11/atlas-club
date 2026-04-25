import { useEffect, useRef, useState } from 'react'

const TIERS = [
  {
    id: 'explorer',
    name: 'Explorer',
    price: 9,
    tagline: 'Begin your journey',
    color: '#8897b2',
    entries: 5,
    perks: [
      '5 monthly giveaway entries',
      'Flight search access',
      'Basic itinerary builder',
      'Member newsletter',
      'Standard support',
    ],
    featured: false,
  },
  {
    id: 'voyager',
    name: 'Voyager',
    price: 19,
    tagline: 'The sweet spot',
    color: '#C9A96E',
    entries: 20,
    perks: [
      '20 monthly giveaway entries',
      'Priority flight booking',
      'Full PDF itineraries',
      'Hotel recommendations',
      'Priority support',
      'Early access to drops',
    ],
    featured: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 30,
    tagline: 'Uncompromising access',
    color: '#E8CC99',
    entries: 50,
    perks: [
      '50 monthly giveaway entries',
      'Concierge booking service',
      'Full bespoke itineraries',
      'Lounge access partnerships',
      'Dedicated travel advisor',
      'Exclusive member events',
      'First-class upgrade alerts',
    ],
    featured: false,
  },
]

function CheckIcon({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
      <circle cx="7" cy="7" r="6.5" stroke={color} strokeOpacity="0.4"/>
      <path d="M4 7l2 2 4-4" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Tiers() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="membership" className="relative py-32 px-6" style={{ background: '#0a0f1c' }}>
      {/* Top rule */}
      <div className="rule-gold mb-0" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20" style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.7s ease' }}>
          <p className="section-label mb-5">Membership</p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: '#fff', lineHeight: 1.1 }}
          >
            Select your tier
          </h2>
          <p style={{ color: '#8897b2', marginTop: '16px', fontSize: '15px', fontWeight: 300 }}>
            All plans include monthly giveaway entries and full flight booking.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((tier, i) => (
            <div
              key={tier.id}
              onMouseEnter={() => setHovered(tier.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? tier.featured ? 'translateY(-8px)' : 'translateY(0)'
                  : 'translateY(32px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.3s ease`,
                background: tier.featured
                  ? 'linear-gradient(160deg, #111d33 0%, #0d1526 100%)'
                  : 'rgba(13, 21, 38, 0.5)',
                border: tier.featured
                  ? '1px solid #C9A96E'
                  : hovered === tier.id
                    ? '1px solid rgba(201,169,110,0.3)'
                    : '1px solid rgba(30, 45, 74, 0.8)',
                borderRadius: '4px',
                padding: '36px 32px',
                position: 'relative',
                cursor: 'default',
                boxShadow: tier.featured
                  ? '0 0 60px rgba(201,169,110,0.08)'
                  : hovered === tier.id
                    ? '0 8px 40px rgba(0,0,0,0.3)'
                    : 'none',
              }}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div
                  className="absolute -top-px left-1/2 -translate-x-1/2 px-5 py-1"
                  style={{
                    background: '#C9A96E',
                    color: '#080c14',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    borderRadius: '0 0 4px 4px',
                  }}
                >
                  Most popular
                </div>
              )}

              {/* Tier name */}
              <p
                className="font-display mb-1"
                style={{ fontSize: '13px', letterSpacing: '0.22em', textTransform: 'uppercase', color: tier.color }}
              >
                {tier.name}
              </p>
              <p style={{ color: '#8897b2', fontSize: '13px', marginBottom: '28px', fontWeight: 300 }}>
                {tier.tagline}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span
                  className="font-display"
                  style={{ fontSize: '52px', fontWeight: 300, lineHeight: 1, color: '#fff' }}
                >
                  ${tier.price}
                </span>
                <span style={{ color: '#8897b2', fontSize: '13px', marginBottom: '10px' }}>/mo</span>
              </div>

              {/* Entries callout */}
              <div
                className="mb-8 px-3 py-2 inline-flex items-center gap-2"
                style={{
                  background: `rgba(${tier.featured ? '201,169,110' : '136,151,178'},0.08)`,
                  border: `1px solid rgba(${tier.featured ? '201,169,110' : '136,151,178'},0.2)`,
                  borderRadius: '2px',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L7.1 4.4H11L8 6.5 9.1 10 6 7.8 2.9 10 4 6.5 1 4.4H5Z" fill={tier.color} opacity="0.8"/>
                </svg>
                <span style={{ fontSize: '12px', color: tier.color, fontWeight: 500 }}>
                  {tier.entries} monthly giveaway entries
                </span>
              </div>

              {/* Divider */}
              <div className="mb-6" style={{ height: '1px', background: 'rgba(201,169,110,0.1)' }} />

              {/* Perks */}
              <ul className="flex flex-col gap-3 mb-10">
                {tier.perks.map(perk => (
                  <li key={perk} className="flex items-start gap-3">
                    <CheckIcon color={tier.color} />
                    <span style={{ fontSize: '13px', color: '#c2cde0', lineHeight: 1.5, fontWeight: 300 }}>{perk}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {tier.featured ? (
                <button className="btn-gold w-full" style={{ width: '100%', textAlign: 'center' }}>
                  Join as Voyager
                </button>
              ) : (
                <button className="btn-outline w-full" style={{ width: '100%', textAlign: 'center', borderColor: `rgba(${tier.id === 'elite' ? '201,169,110' : '136,151,178'},0.4)`, color: tier.color }}>
                  Join as {tier.name}
                </button>
              )}

              <p style={{ textAlign: 'center', color: '#8897b2', fontSize: '11px', marginTop: '12px' }}>
                Cancel anytime · No hidden fees
              </p>
            </div>
          ))}
        </div>

        {/* Compare note */}
        <p className="text-center mt-12" style={{ color: '#8897b2', fontSize: '13px' }}>
          All prices in USD · Billed monthly · Secure checkout via Stripe
        </p>
      </div>

      <div className="rule-gold mt-0 mt-16" />
    </section>
  )
}