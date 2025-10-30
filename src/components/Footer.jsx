import React from 'react'
import { Link } from 'react-router-dom' // ✅ should be react-router-dom
import ADEX from "../assets/ADEX LOGO WHITE.png"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquarePhone } from "react-icons/fa6";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { LuPhoneCall } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Logo + Social icons */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8">
          <div className="max-w-xl text-center md:text-left">
            <img src={ADEX} alt="ADEX Logo" className="h-10 mx-auto md:mx-0" />
            <p className="text-sm sm:text-base mt-3 text-gray-400">
              ADEX is your trusted local provider serving Vancouver, BC and the
              Lower Mainland for professional driving instruction and reliable
              designated driver services.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end items-center gap-5 text-2xl">
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
            <a href="tel:+1604671705" className="hover:text-[#fa1d04] transition">
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

        <hr className="border-gray-700 my-6" />

        {/* Routes + Contact Info */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
          <div className="text-center md:text-left">
            <ul className="space-y-2">
              {[
                { name: "Home", to: "/" },
                { name: "Designated Driver", to: "/designated-driver" },
                { name: "Driving School", to: "/driving-school" },
                { name: "FAQs", to: "/faqs" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="text-gray-400 text-base sm:text-lg hover:text-[#fa1d04] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right space-y-2">
            <div className="flex justify-center md:justify-end items-center gap-2 text-base sm:text-lg text-gray-400">
              <SiGmail className="text-[#fa1d04]" />
              <a
                href="mailto:adexlogisticsltd@gmail.com"
                className="hover:text-white transition"
              >
                adexlogisticsltd@gmail.com
              </a>
            </div>
            <div className="flex justify-center md:justify-end items-center gap-2 text-base sm:text-lg text-gray-400">
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
            <div className="flex justify-center md:justify-end items-center gap-2 text-base sm:text-lg text-gray-400">
              <LuPhoneCall className="text-[#fa1d04]" />
              <a href="tel:+1604671705" className="hover:text-white transition">
                +1 (604) 671-705
              </a>
            </div>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-3 mb-6">
          <Link
            to="/contact"
            className="flex items-center cursor-pointer hover:text-[#fa1d04] transition-colors"
          >
            <p className="text-sm sm:text-base font-medium bg-[#fa1d04] px-4 py-2 rounded-full text-white">
              Contact Us
            </p>
            <div className="bg-[#fa1d04] p-2 rounded-full flex items-center justify-center text-white ml-2">
              <GoArrowUpRight size={18} />
            </div>
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="text-center md:text-left text-gray-400 text-sm sm:text-base">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.instagram.com/jeff.thedesigner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fa1d04] hover:underline hover:text-red-600 transition"
            >
              jeff.thedesigner
            </a>
            . All rights reserved.
          </p>
          <p className="mt-1 cursor-pointer hover:text-[#fa1d04] transition">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
