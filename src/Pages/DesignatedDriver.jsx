import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FlexDE from '../components/FlexDe'
import PricingPolicy from '../components/PricingPolicy'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import HeroDD from '../components/HeroDD'
import CorporateEvent from '../components/CorporateEvent'

const DesignatedDriver = () => {
    return (
        <div>
            <Navbar />
            <HeroDD/>
            <FlexDE />
            <CorporateEvent/>
            <PricingPolicy />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default DesignatedDriver