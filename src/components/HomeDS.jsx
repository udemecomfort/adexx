import React from 'react'
import BG from "../assets/DS Home.png"
const HomeDS = () => {
  return (
    <div className='pt-15 md:mt-0 sm:mt-0'>
        <img src={BG} alt="Driving school Home" className="w-full  h-auto object-cover"/>
        <div className='relative md:h-[24vh] h-[16vh] bg-[#FA1D04] flex items-center justify-center'>
            <h1 className='text-white text-center md:text-[45px] text-[30px] font-medium'>Driving School</h1>
        </div>
    </div>
  )
}

export default HomeDS