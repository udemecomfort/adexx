import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { HiMenuAlt3 } from "react-icons/hi";

import Logo from "../assets/ADEX LOGO.png";
import logomob from "../assets/ADEX LOGO WHITE.png";

const PHONE_DISPLAY = "604-671-7055";
const PHONE_HREF = "tel:+16046717055";

const links = [
  { to: "/", label: "Home" },
  { to: "/Designated-Driver", label: "Designated Driver" },
  { to: "/Driving-School", label: "Driving School" },
  { to: "/FAQs", label: "FAQs" },
];

// Same padding in both states so links don't shift when they become active
const desktopBase =
  "px-3 py-2 rounded-xl font-semibold text-base xl:text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa1d04]";
const desktopActive = `${desktopBase} text-white bg-[#c71500]`;
const desktopNormal = `${desktopBase} text-gray-800 hover:text-[#c71500]`;

const mobileBase =
  "block rounded-lg px-4 py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";
const mobileActive = `${mobileBase} bg-black/25 text-white`;
const mobileNormal = `${mobileBase} text-white/90 hover:bg-white/10`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // While the mobile menu is open: Esc closes it, page scroll is locked,
  // and it closes automatically if the window grows to desktop size.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setIsOpen(false);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  return (
    <header>
      {/* ===== Desktop Navbar (lg and up) ===== */}
      <nav
        aria-label="Main"
        className="hidden lg:flex fixed top-0 left-0 z-50 h-[90px] w-full items-center justify-between bg-white pl-10 pr-5 shadow-md xl:pl-[60px]"
      >
        <div className="flex items-center gap-8 xl:gap-14">
          <Link to="/" aria-label="ADEX home">
            <img src={Logo} alt="ADEX logo" className="w-[100px]" />
          </Link>

          <ul className="flex items-center gap-2 xl:gap-6">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? desktopActive : desktopNormal
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Skewed call block: the box is skewed, the content is skewed back so text stays straight */}
        <a
          href={PHONE_HREF}
          aria-label={`Call us at ${PHONE_DISPLAY}`}
          className="flex h-[90px] w-[270px] items-center justify-center bg-black shadow-md transition-colors hover:bg-neutral-900 xl:w-[340px]"
          style={{ transform: "skewX(-25deg)" }}
        >
          <div
            className="flex flex-col items-center"
            style={{ transform: "skewX(25deg)" }}
          >
            <p className="mb-1 text-base text-white xl:text-[19px]">
              Questions? Call us
            </p>
            <div className="flex items-center gap-2">
              <LuPhoneCall className="text-2xl text-[#fa1d04] xl:text-[29px]" />
              <span className="text-2xl font-bold text-white xl:text-[29px]">
                {PHONE_DISPLAY}
              </span>
            </div>
          </div>
        </a>
      </nav>

      {/* ===== Mobile / Tablet Navbar (below lg) ===== */}
      <div className="lg:hidden">
        {/* Top bar */}
        <div className="fixed top-0 left-0 z-50 flex h-[90px] w-full items-center justify-between bg-white px-6 shadow-md">
          <Link to="/" aria-label="ADEX home">
            <img src={Logo} alt="ADEX logo" className="w-[100px]" />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              aria-label={`Call us at ${PHONE_DISPLAY}`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fa1d04] text-white transition-colors hover:bg-[#c71500]"
            >
              <LuPhoneCall className="text-xl" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-md text-[#fa1d04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa1d04]"
            >
              <HiMenuAlt3 className="text-4xl" />
            </button>
          </div>
        </div>

        {/* Backdrop */}
        <div
          aria-hidden="true"
          onClick={closeMenu}
          className={`fixed inset-0 z-[55] bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        {/* Slide-in drawer */}
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          aria-hidden={!isOpen}
          className={`fixed inset-y-0 left-0 z-[60] flex w-[80%] max-w-[340px] flex-col bg-gradient-to-b from-[#fa1d04] via-[#d81200] to-[#870a00] text-white shadow-2xl transition-[transform,visibility] duration-300 ease-in-out ${
            isOpen ? "visible translate-x-0" : "invisible -translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <Link to="/" onClick={closeMenu} aria-label="ADEX home">
              <img src={logomob} alt="ADEX logo" className="w-[100px]" />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="rounded-full text-white transition-transform duration-300 hover:rotate-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <IoCloseCircleOutline className="text-4xl" />
            </button>
          </div>

          <ul className="mt-6 space-y-1 px-4">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? mobileActive : mobileNormal
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3 px-6 pb-8">
            <Link
              to="/Contact"
              onClick={closeMenu}
              className="block w-full rounded-2xl bg-white py-3 text-center text-base font-semibold text-[#fa1d04] transition-colors hover:bg-gray-100"
            >
              Request a Booking
            </Link>
            <a
              href={PHONE_HREF}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/60 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <LuPhoneCall className="text-xl" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;