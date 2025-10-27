import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutUs/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default About