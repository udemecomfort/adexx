import React from 'react'
import BG from "../assets/DS Home.png"
const HomeDS = () => {
  return (
    <div>
        <img src={BG} alt="Driving school Home" className="w-full  h-auto object-cover"/>
        <div className='relative h-[24vh] bg-[#FA1D04] flex items-center justify-center'>
            <h1 className='text-white text-center text-[45px] font-medium'>Driving School</h1>
        </div>
    </div>
  )
}

export default HomeDS