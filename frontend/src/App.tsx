import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './component/LandingPage'
import HowItWorks from './component/HowITWork'
import FeaturesSection from './component/FeacturePage'
import TestimonialsSection from './component/TestimonialSection'
import CTASection from './component/CallToAction'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <HowItWorks/>
    <FeaturesSection/>
    <TestimonialsSection/>
    <CTASection/>
     </>
  )
}

export default App
