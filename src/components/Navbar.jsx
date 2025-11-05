import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";

import Logo from "../assets/ADEX LOGO.png";
import logomob from "../assets/ADEX LOGO WHITE.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const activeLink =
    "text-white bg-[#fa1d04] py-[10px] px-[15px] font-semibold text-[20px] border-b-2 rounded-xl  transition";
  const normalLink = "hover:text-[#fa1d04] transition font-semibold text-[20px] ";

  return (
    <nav>
      {/* Desktop Navbar */}
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

      {/* Mobile Navbar */}
      <div
        className={`md:hidden border border-gray-300 shadow-lg ${isOpen ? "bg-[#fa1d04]" : "bg-white"
          } flex flex-col`}
      >
        <div
          className={`flex justify-between items-center px-10 pt-6 pb-6 fixed top-0 left-0 z-20 w-full ${isOpen ? "bg-[#fa1d04]" : "bg-white"
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

        {/* Mobile menu */}
        {isOpen && (
          <>
            <ul className="flex flex-col text-white mt-8 mb-6 space-y-6 font-semibold pt-[80px]">
              <li onClick={closeMenu}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#c71500] block px-10 py-3 rounded"
                      : "block px-10 py-3"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li onClick={closeMenu}>
                <NavLink
                  to="/Designated-Driver"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#c71500] block px-10 py-3 rounded"
                      : "block px-10 py-3"
                  }
                >
                  Designated Driver
                </NavLink>
              </li>
              <li onClick={closeMenu}>
                <NavLink
                  to="/Driving-School"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#c71500] block px-10 py-3 rounded"
                      : "block px-10 py-3"
                  }
                >
                  Driving School
                </NavLink>
              </li>
              <li onClick={closeMenu}>
                <NavLink
                  to="/FAQs"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#c71500] block px-10 py-3 rounded"
                      : "block px-10 py-3"
                  }
                >
                  FAQs
                </NavLink>
              </li>
            </ul>
            <Link to="/Contact" >
              <div className="px-10 pb-6">
                <button className="bg-white text-[#fa1d04] py-3 px-9 rounded-2xl font-semibold">
                  Request a Booking
                </button>
              </div>
            </Link>

          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
