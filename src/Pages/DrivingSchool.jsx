import React from 'react'
import Navbar from '../components/Navbar'
import HomeDS from '../components/HomeDS'
import InfoDS from '../components/InfoDS'
import WhyChooseAdex from '../components/WhyChooseAdex'
import MapDS from '../components/MapDS'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import LicenseSection from '../components/LicenseSection'


const DrivingSchool = () => {
  return (
    <div>
      <Navbar />
      <HomeDS />
      <InfoDS />
      <LicenseSection />
      <WhyChooseAdex />
      <MapDS />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default DrivingSchool