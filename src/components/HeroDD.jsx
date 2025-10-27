import React from 'react'
import orange from "../assets/orange-bg.png"
import img from "../assets/d image.png"
const HeroDD = () => {
  return (
    <div>
          <div>
            <img src={img} alt=""  className='w-full'/>
          </div>
              <div className="relative">
                 
                  <div className="bg-[#fa1d04] h-[33vh] relative">
                      <img
                          src={orange}
                          alt="Orange Rays"
                          className="w-full h-full object-cover"
                      />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-6  text-center w-[90%] md:w-[40%]">
                          <h2 className="text-white text-3xl  font-semibold">Designated Driver</h2>
                          <h5 className='text-white text-2xl'>Metro Vancouver & Okanagan’s Trusted
                              Designated Driving Services</h5>
                          <p className='text-white text-[17px]'>Ready to book a ride? Discover how our professional
                              drivers can help - safe, convenient, and just a click away</p>
                      </div>
                  </div>
              </div>
    </div>
  )
}

export default HeroDD