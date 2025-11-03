import React from 'react'
import car from "../assets/CarContact.png";

const DownContact = () => {
  return (
   <div className="mt-20 bg-[#FA1D04] mx-[10px] md:mx-[80px] md:rounded-t-[90px]  rounded-t-[70px] p-10 flex flex-col md:flex-row justify-between items-center text-white">
        <p className="md:text-[25px] font-medium max-w-lg leading-relaxed  md:px-6 md:px-5 text-[15px]">
          ADEX is a trusted local provider, proudly serving Metro Vancouver and
          the Okanagan region with professional driving instruction and reliable
          designated driving services.
        </p>
        <img
          src={car}
          alt="Car"
          className="w-[280px] md:w-[320px] mt-2 md:mt-0"
        />
      </div>
  )
}

export default DownContact

