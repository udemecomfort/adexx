import React from 'react'
import { Link } from 'react-router'   // ✅ Since you said you installed react-router (not react-router-dom)
import ADEX from "../assets/ADEX LOGO WHITE.png"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquarePhone } from "react-icons/fa6";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { LuPhoneCall } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
    return (
        <div className="bg-black text-white py-4">
            <div className="max-w-8xl mx-auto px-22">

                {/* Logo + Social icons */}
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
                    <div className="max-w-xl">
                        <img src={ADEX} alt="ADEX Logo" className="h-10" />
                        <p className="text-[16px] mt-2 md:w-[410px]">
                            ADEX is your trusted local provider serving Vancouver, BC and the
                            Lower Mainland for professional driving instruction and reliable
                            designated driver services.
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4 text-2xl">
                        <a
                            href="https://www.facebook.com/profile.php?id=61573474127882&mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#fa1d04] transition"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com/adexdrivingsolutions?igsh=MXdkOHpwY3BwNTRkNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#fa1d04] transition"
                        >
                            <FaSquareInstagram />
                        </a>
                        <a
                            href="tel:+1604671705"
                            className="hover:text-[#fa1d04] transition"
                        >
                            <FaSquarePhone />
                        </a>
                        <a
                            href="mailto:adexlogisticsltd@gmail.com"
                            className="hover:text-[#fa1d04] transition"
                        >
                            <SiGmail />
                        </a>
                    </div>
                </div>

                <hr className="px-5 border-gray-600 border-1 my-2" />

                {/* Routes + Contact Info */}
                <div className='flex flex-col md:flex-row items-start md:items-center md:gap-180 mb-1'>
                    <div>
                        <ul className="text-gray-800 font-semibold space-y-2">
                            <li>
                                <Link to="/" className="text-gray-500 text-[23px] hover:text-[#fa1d04] transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/designated-driver" className="text-gray-500 text-[23px] hover:text-[#fa1d04] transition">
                                    Designated Driver
                                </Link>
                            </li>
                            <li>
                                <Link to="/driving-school" className="text-gray-500 text-[23px] hover:text-[#fa1d04] transition">
                                    Driving School
                                </Link>
                            </li>
                            <li>
                                <Link to="/faqs" className="text-gray-500 text-[23px] hover:text-[#fa1d04] transition">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className='flex items-center gap-2 py-1 text-[23px] text-gray-500'>
                            <SiGmail className="text-[#fa1d04]" />
                            <a href="mailto:adexlogisticsltd@gmail.com" className="hover:text-white transition">
                                adexlogisticsltd@gmail.com
                            </a>
                        </div>
                        <div className='flex items-center gap-2 py-1 text-[23px] text-gray-500'>
                            <SiWhatsapp className="text-[#fa1d04]" />
                            <a
                                href="https://wa.me/1604671705"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition"
                            >
                                +1 (604) 671-705
                            </a>
                        </div>
                        <div className='flex items-center gap-2 py-1 text-[23px] text-gray-500'>
                            <LuPhoneCall className="text-[#fa1d04]" />
                            <a href="tel:+1604671705" className="hover:text-white transition">
                                +1 (604) 671-705
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Us Button */}
                <Link
                    to="/contact"
                    className="flex items-center cursor-pointer hover:text-[#fa1d04] transition-colors"
                >
                    <p className="text-[18px] font-medium bg-[#fa1d04] p-2 rounded-full text-white">
                        Contact Us
                    </p>
                    <div className="bg-[#fa1d04] p-2 rounded-full flex items-center justify-center text-white ml-2">
                        <GoArrowUpRight size={18} />
                    </div>
                </Link>


                {/* Footer Bottom */}
                <div>
                    <p className="text-[18px] mt-3">
                        &copy; {new Date().getFullYear()}{" "}
                        <a
                            href="https://www.instagram.com/jeff.thedesigner" // 👈 change to the real link if needed
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#fa1d04] hover:underline hover:text-red-600 transition"
                        >
                            jeff.thedesigner
                        </a>
                        . All rights reserved.
                        <br />
                        <span className="cursor-pointer hover:text-[#fa1d04] transition">
                            Privacy Policy
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer
