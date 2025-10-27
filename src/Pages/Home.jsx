import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Safe from '../components/Safe'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Section/>
        <Safe/>
        <Faq/>
        <Footer/>
    </div> 
  )
}

export default Home