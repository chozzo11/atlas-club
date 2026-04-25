import Navbar from './Navbar'
import Hero from './Hero'
import Tiers from './Tiers'
import Rewards from './Rewards'
import HowItWorks from './HowItWorks'
import FlightBooking from './FlightBooking'
import Footer from './Footer'

export default function App() {
  return (
    <main className="bg-[#080c14] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Tiers />
      <Rewards />
      <FlightBooking />
      <Footer />
    </main>
  )
}
