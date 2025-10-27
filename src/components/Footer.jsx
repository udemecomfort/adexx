import React from 'react'
import ADEX from "../assets/ADEX LOGO WHITE.png"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { LuPhoneCall } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";




const Footer = () => {
    return (
        <div className="bg-black text-white py-4">
            <div className="max-w-8xl mx-auto px-22">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
                    <div className="max-w-xl">
                        <img src={ADEX} alt="ADEX Logo" className="h-10" />
                        <p className="text-[16px] mt-2 md:w-[410px]">
                            ADEX is your trusted local provider serving Vancouver, BC and the
                            Lower Mainland for professional driving instruction and reliable
                            designated driver services.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-2xl">
                        <FaFacebook className="text-[#FFFFFF]  cursor-pointer" />
                        <FaSquareInstagram className="text-[#FFFFFF]  cursor-pointer" />
                        <FaSquarePhone className="text-[#FFFFFF]  cursor-pointer" />
                        <SiGmail className="text-[#FFFFFF]  cursor-pointer" />
                    </div>
                </div>

                <hr className="px-5 border-gray-600 border-1 my-2" />


                <div className='flex flex-col md:flex-row  items-start md:items-center md:gap-180 mb-1'>
                    <div>
                        <ul className="text-gray-800 font-semibold">
                            <li className="cursor-pointer text-gray-500 text-[23px]">Home</li>
                            <li className="cursor-pointer  text-gray-500 text-[23px]">Designated Driver</li>
                            <li className="cursor-pointer text-gray-500 text-[23px]">Driving School</li>
                            <li className="cursor-pointer text-gray-500 text-[23px]">FAQs</li>
                        </ul>
                    </div>
                    <div>
                        <div className='flex items-center gap-2 py-1 text-[23px] text-gray-500'> <SiGmail className="text-[#fa1d04]  cursor-pointer" />
                            <span>adexlogisticsltd@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-2 py-1 text-[23px] text-gray-500'><SiWhatsapp className="text-[#fa1d04]  cursor-pointer" />
                            <span>+1 (604) 671-705</span>
                        </div>
                        <div className='flex items-center gap-2 py-1 text-[23px] text-gray-500'> <LuPhoneCall className="text-[#fa1d04]  cursor-pointer" />
                            <span>+1 (604) 671-705</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer hover:text-[#fa1d04] transition-colors">
                    <p className="text-[18px] font-medium bg-[#fa1d04] p-2 rounded-full">Contact Us</p>
                    <div className="bg-[#fa1d04] p-2 rounded-full flex items-center justify-center text-white">
                        <GoArrowUpRight size={18} />
                    </div>
                </div>
                <div>
                    <p className="text-[18px] ">
                        &copy; {new Date().getFullYear()} jeff.thedesigner. All rights reserved.
                        <br />
                        <span>Privacy Policy</span>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer