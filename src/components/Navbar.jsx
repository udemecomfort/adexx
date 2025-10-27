import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { HiMenuAlt3 } from "react-icons/hi";

import Logo from "../assets/ADEX LOGO.png";
import logomob from "../assets/ADEX LOGO WHITE.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-0 left-0 w-full bg-white shadow-md z-50 pl-[60px] pr-[20px] justify-between items-center h-[90px]">
        <div className="flex items-center gap-27">
          <img src={Logo} alt="Logo" className="w-[100px]" />
          <ul className="flex gap-8 text-gray-800 font-semibold">
            <li className="cursor-pointer hover:text-red-600 transition">Home</li>
            <li className="cursor-pointer hover:text-red-600 transition">Designated Driver</li>
            <li className="cursor-pointer hover:text-red-600 transition">Driving School</li>
            <li className="cursor-pointer hover:text-red-600 transition">FAQs</li>
          </ul>
        </div>
        <div
          className="w-[240px] h-[90px] shadow-md bg-black px-4 flex flex-col items-center justify-center text-center"
          style={{ transform: "skewX(-19deg)" }}
        >
          <p className="text-white text-[12px] mb-1 flex justify-center">Call to Questions</p>
          <div className="flex items-center gap-2 skew-x-[19deg]">
            <LuPhoneCall className="text-[#fa1d04] h-5" />
            <p className="text-white font-bold text-[23px]">604-671-7055</p>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`md:hidden border border-gray-300 shadow-lg ${isOpen ? 'bg-[#fa1d04]' : 'bg-white'}   flex flex-col`}>


        <div
          className={`flex justify-between items-center px-10 pt-6 pb-6 fixed top-0 left-0 bg-white z-20 w-full ${
            isOpen ? "bg-[#fa1d04]" : "bg-white"
          }`}
        >
          <img src={isOpen ? logomob : Logo} alt="Logo" className="w-[100px]" />
          {!isOpen ? (
            <HiMenuAlt3
              className="text-[#fa1d04] text-4xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <IoCloseCircleOutline
              className="text-white text-4xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Mobile menu - only show when open */}
        {isOpen && (
          <>
            <ul className="flex flex-col text-white mt-8 mb-6 space-y-6 font-semibold">
              <li
                className="px-10 py-3 rounded"
                style={{ backgroundImage: "linear-gradient(to right, #c71500, #fa1d04)", backgroundSize: "400px 100%", backgroundRepeat: "no-repeat", }}
                onClick={closeMenu}
              >
                Home
              </li>
              <li className="px-10 py-3" onClick={closeMenu}>
                Designated Driver
              </li>
              <li className="px-10 py-3" onClick={closeMenu}>
                Driving School
              </li>
              <li className="px-10 py-3" onClick={closeMenu}>
                FAQs
              </li>
            </ul>

            <div className="px-10 ">
              <button className="bg-white text-[#fa1d04] py-3 px-9 rounded-2xl font-semibold">
                Request a Booking
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );

};

export default Navbar;
