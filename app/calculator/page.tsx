import React from 'react'
import Navbar from '../components/Navbar'
import FirstSection from '../components/Calculator/FirstSection'
import EMICalculator from '../components/Calculator/EMICalculator'
import InfoSection from '../components/Calculator/InfoSection'
import Footer from '../components/Footer'

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Two Wheeler Loan EMI Calculator - Calculate Bike Loan EMI | Manba Finance',
  description: 'Manba Finance two-wheeler loan EMI calculator ensures smart financing decisions. Calculate your bike loan EMI instantly for a hassle-free experience.',
}
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