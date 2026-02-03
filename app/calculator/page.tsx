import React from 'react'
import Navbar from '../components/Navbar'
import FirstSection from '../components/Calculator/FirstSection'
import EMICalculator from '../components/Calculator/EMICalculator'
import InfoSection from '../components/Calculator/InfoSection'
import Footer from '../components/Footer'
const Index = () => {
  return (
    <div>
        <Navbar />
        {/* <FirstSection /> */}
        <EMICalculator />
        <InfoSection />
        <Footer />
    </div>
  )
}

export default Index