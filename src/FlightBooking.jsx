import { useState, useRef, useEffect } from 'react'

const SAMPLE_RESULTS = [
  { airline: 'Emirates', from: 'SYD', to: 'DXB', dep: '22:15', arr: '06:40+1', dur: '14h 25m', stops: 'Direct', price: 1840, logo: 'EK' },
  { airline: 'Qatar Airways', from: 'SYD', to: 'DOH', dep: '16:00', arr: '05:25+1', dur: '15h 25m', stops: 'Direct', price: 1710, logo: 'QR' },
  { airline: 'Singapore Air', from: 'SYD', to: 'SIN', dep: '11:30', arr: '17:05', dur: '8h 35m', stops: 'Direct', price: 960, logo: 'SQ' },
]

export default function FlightBooking() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [from, setFrom] = useState('Sydney (SYD)')
  const [to, setTo] = useState('London (LHR)')
  const [date, setDate] = useState('2025-06-15')
  const [searched, setSearched] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSearch = () => setSearched(true)

  return (
    <section id="booking" className="relative py-32 px-6" style={{ background: '#0a0f1c' }}>
      <div className="rule-gold mb-0" />
      <div className="max-w-5xl mx-auto mt-16" ref={ref}>
        {/* Header */}
        <div
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.7s ease',
          }}
        >
          <p className="section-label mb-5">Book a trip</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 300, color: '#fff', lineHeight: 1.1 }}>
            Search. Book.<br />
            <span className="italic" style={{ color: '#C9A96E' }}>Arrive in style.</span>
          </h2>
          <p style={{ color: '#8897b2', marginTop: '16px', fontSize: '15px', fontWeight: 300 }}>
            Members search real-time flights. We handle the rest — including your full itinerary PDF.
          </p>
        </div>

        {/* Search box */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(32px)',
            transition: 'all 0.7s ease 0.1s',
            background: 'rgba(13,21,38,0.8)',
            border: '1px solid rgba(201,169,110,0.2)',
            borderRadius: '6px',
            padding: '28px 32px',
            marginBottom: '20px',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* From */}
            <div className="md:col-span-1">
              <label style={{ fontSize: '10px', color: '#8897b2', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>From</label>
              <input
                value={from}
                onChange={e => setFrom(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(8,12,20,0.6)',
                  border: '1px solid rgba(30,45,74,0.8)',
                  borderRadius: '3px',
                  padding: '10px 14px',
                  color: '#fff',
                  fontSize: '14px',
                  fontFamily: 'DM Sans, sans-serif',
                  outline: 'none',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(201,169,110,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(30,45,74,0.8)'}
              />
            </div>

            {/* To */}
            <div className="md:col-span-1">
              <label style={{ fontSize: '10px', color: '#8897b2', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>To</label>
              <input
                value={to}
                onChange={e => setTo(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(8,12,20,0.6)',
                  border: '1px solid rgba(30,45,74,0.8)',
                  borderRadius: '3px',
                  padding: '10px 14px',
                  color: '#fff',
                  fontSize: '14px',
                  fontFamily: 'DM Sans, sans-serif',
                  outline: 'none',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(201,169,110,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(30,45,74,0.8)'}
              />
            </div>

            {/* Date */}
            <div className="md:col-span-1">
              <label style={{ fontSize: '10px', color: '#8897b2', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Depart</label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(8,12,20,0.6)',
                  border: '1px solid rgba(30,45,74,0.8)',
                  borderRadius: '3px',
                  padding: '10px 14px',
                  color: '#fff',
                  fontSize: '14px',
                  fontFamily: 'DM Sans, sans-serif',
                  outline: 'none',
                  colorScheme: 'dark',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(201,169,110,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(30,45,74,0.8)'}
              />
            </div>

            {/* Search btn */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="btn-gold w-full"
                style={{ padding: '11px 20px', width: '100%' }}
              >
                Search flights
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {searched && (
          <div style={{ opacity: 1, animation: 'fadeUp 0.5s ease both' }}>
            <p style={{ color: '#8897b2', fontSize: '12px', marginBottom: '12px', letterSpacing: '0.08em' }}>
              3 results · Members see exclusive pricing
            </p>
            <div className="flex flex-col gap-3">
              {SAMPLE_RESULTS.map((r, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(i)}
                  style={{
                    background: selected === i ? 'rgba(201,169,110,0.06)' : 'rgba(13,21,38,0.7)',
                    border: selected === i ? '1px solid rgba(201,169,110,0.4)' : '1px solid rgba(30,45,74,0.8)',
                    borderRadius: '4px',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr 1fr',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  {/* Airline */}
                  <div className="flex items-center gap-3">
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '6px',
                      background: 'rgba(201,169,110,0.1)',
                      border: '1px solid rgba(201,169,110,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', color: '#C9A96E', fontWeight: 600, letterSpacing: '0.05em',
                    }}>
                      {r.logo}
                    </div>
                    <div>
                      <p style={{ fontSize: '13px', color: '#fff', fontWeight: 500 }}>{r.airline}</p>
                      <p style={{ fontSize: '11px', color: '#8897b2' }}>{r.stops}</p>
                    </div>
                  </div>

                  {/* Route */}
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p style={{ fontSize: '18px', color: '#fff', fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>{r.dep}</p>
                      <p style={{ fontSize: '11px', color: '#8897b2' }}>{r.from}</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <p style={{ fontSize: '10px', color: '#8897b2', letterSpacing: '0.1em' }}>{r.dur}</p>
                      <div style={{ width: '100%', height: '1px', background: 'rgba(201,169,110,0.2)', position: 'relative' }}>
                        <div style={{ position: 'absolute', right: 0, top: '-3px', width: '6px', height: '6px', borderRadius: '50%', background: '#C9A96E', opacity: 0.6 }} />
                      </div>
                    </div>
                    <div className="text-center">
                      <p style={{ fontSize: '18px', color: '#fff', fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>{r.arr}</p>
                      <p style={{ fontSize: '11px', color: '#8897b2' }}>{r.to}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p style={{ fontSize: '22px', color: '#C9A96E', fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
                      ${r.price.toLocaleString()}
                    </p>
                    <p style={{ fontSize: '11px', color: '#8897b2' }}>per person</p>
                    {selected === i && (
                      <button className="btn-gold mt-2" style={{ padding: '7px 16px', fontSize: '11px' }}>
                        Book this
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Itinerary note */}
            <div
              className="mt-6 flex items-center gap-4 px-5 py-4"
              style={{
                background: 'rgba(201,169,110,0.04)',
                border: '1px solid rgba(201,169,110,0.15)',
                borderRadius: '4px',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1" style={{ flexShrink: 0 }}>
                <rect x="4" y="3" width="16" height="18" rx="2"/>
                <path d="M8 8h8M8 12h8M8 16h4"/>
              </svg>
              <p style={{ fontSize: '13px', color: '#8897b2', lineHeight: 1.6, fontWeight: 300 }}>
                On booking, we generate your complete PDF itinerary — flights, hotel suggestions, transfers, local tips, and emergency contacts — delivered to your inbox instantly.
              </p>
            </div>
          </div>
        )}

        {!searched && (
          <p className="text-center mt-4" style={{ color: '#8897b2', fontSize: '12px' }}>
            Preview of the member booking experience · Live prices via Duffel API
          </p>
        )}
      </div>
    </section>
  )
}