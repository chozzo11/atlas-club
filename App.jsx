import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tiers from './components/Tiers'
import Rewards from './components/Rewards'
import HowItWorks from './components/HowItWorks'
import FlightBooking from './components/FlightBooking'
import Footer from './components/Footer'

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
