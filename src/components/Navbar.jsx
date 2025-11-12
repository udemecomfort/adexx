import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";

import Logo from "../assets/ADEX LOGO.png";
import logomob from "../assets/ADEX LOGO WHITE.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const activeLink =
    "text-white bg-[#c71500] py-[8px] px-[12px] font-semibold text-[16px] md:text-[20px] rounded-xl transition";
  const normalLink =
    "hover:text-[#c71500] transition font-semibold text-[16px] md:text-[20px]";

  return (
    <nav>
      {/* ===== Desktop Navbar ===== */}
      <div className="hidden md:flex fixed top-0 left-0 w-full bg-white shadow-md z-50 pl-[60px] pr-[20px] justify-between items-center h-[90px]">
        <div className="flex items-center gap-30">
          <img src={Logo} alt="Logo" className="w-[100px]" />
          <ul className="flex gap-16 text-gray-800 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Designated-Driver"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                Designated Driver
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Driving-School"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                Driving School
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FAQs"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                FAQs
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          className="hidden md:block w-[340px] h-[90px] shadow-md bg-black px-4 flex flex-col items-center justify-center text-center"
          style={{ transform: "skewX(-25deg)" }}
        >
          <p className="text-white text-[19px] mb-1 flex justify-center">
            Call to Questions
          </p>
          <div className="flex items-center gap-2 skew-x-[19deg]">
            <LuPhoneCall className="text-[#fa1d04] h-10 text-[29px]" />
            <p className="text-white font-bold text-[29px]">604-671-7055</p>
          </div>
        </div>
      </div>

      {/* ===== Mobile Navbar ===== */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50">
        {/* Top bar (Logo + Hamburger) */}
        <div
          className={`flex justify-between items-center px-8 py-5 w-full transition-all duration-500 ${
            isOpen
              ? "bg-gradient-to-r from-[#fa1d04] via-[#d81200] to-[#870a00]"
              : "bg-white"
          }`}
        >
          <img
            src={isOpen ? logomob : Logo}
            alt="Logo"
            className="w-[100px] transition-transform duration-500"
          />
          {!isOpen && (
            <HiMenuAlt3
              className="text-[#fa1d04] text-4xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* ===== Slide-in Mobile Menu ===== */}
        <div
          className={`fixed top-0 left-0 h-screen w-[80%] bg-gradient-to-b from-[#fa1d04] via-[#d81200] to-[#870a00] text-white transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } flex flex-col justify-start shadow-2xl z-50`}
        >
          {/* Logo + Close Button */}
          <div className="flex justify-between items-center px-8 pt-6">
            <img src={logomob} alt="Logo" className="w-[100px]" />
            <IoCloseCircleOutline
              className="text-white text-4xl cursor-pointer hover:rotate-90 transition-transform duration-500"
              onClick={closeMenu}
            />
          </div>

          {/* Links */}
          <ul className="flex flex-col space-y-4 font-semibold px-10 mt-4">
            {[
              { to: "/", label: "Home" },
              { to: "/Designated-Driver", label: "Designated Driver" },
              { to: "/Driving-School", label: "Driving School" },
              { to: "/FAQs", label: "FAQs" },
            ].map((link) => (
              <li key={link.to} onClick={closeMenu}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#c71500] block px-4 py-2 rounded text-sm md:text-[20px]"
                      : "block px-4 py-2 text-sm md:text-[20px]"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="px-10 mt-4 mb-10">
            <Link to="/Contact" onClick={closeMenu}>
              <button className="bg-white text-[#fa1d04] py-2 px-6 text-[14px] md:text-[18px] rounded-2xl font-semibold w-full hover:bg-gray-100 transition">
                Request a Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
