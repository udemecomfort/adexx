import React from 'react'
import car from "../assets/CarContact.png";

const DownContact = () => {
  return (
   <div className="mt-20 bg-[#FA1D04] mx-[80px] rounded-t-[90px] p-10 flex flex-col md:flex-row justify-between items-center text-white">
        <p className="text-lg font-medium max-w-lg leading-relaxed">
          ADEX is a trusted local provider, proudly serving Metro Vancouver and
          the Okanagan region with professional driving instruction and reliable
          designated driving services.
        </p>
        <img
          src={car}
          alt="Car"
          className="w-[280px] md:w-[320px] mt-8 md:mt-0"
        />
      </div>
  )
}

export default DownContact