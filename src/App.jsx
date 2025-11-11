import React from 'react'
import Home from './Pages/Home'
import DesignatedDriver from './Pages/DesignatedDriver'
import DrivingSchool from './Pages/DrivingSchool'
import About from './Pages/About'
import ContactUS from './Pages/ContactUS'
import FAQs from './Pages/FAQs'
import { Route, Routes } from 'react-router'
import { Fa0 } from 'react-icons/fa6'
import ScrollToTop from './components/ScrolltoTop'
const App = () => {
    return (
        <div>
            <ScrollToTop/>
            <Routes>
            
                <Route path='/' element={<Home />} />
                <Route path='/Designated-Driver' element={<DesignatedDriver />} />
                <Route path='/Driving-School' element={<DrivingSchool />} />
                <Route path='/FAQs' element={<About />} />
                <Route path='/Contact' element={<ContactUS />} />
            </Routes>
        </div>
    )
}

export default App