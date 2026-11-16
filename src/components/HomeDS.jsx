import React from "react";
import { Link } from "react-router-dom";
import {
  LuPhoneCall,
  LuShieldCheck,
  LuCar,
  LuMapPin,
  LuArrowRight,
} from "react-icons/lu";

// TO CHANGE THE IMAGE: save your new photo in src/assets and change this path,
// e.g. "../assets/driving-school-hero.jpg"
import HERO from "../assets/DS Home.png";

const PHONE_DISPLAY = "604-671-7055";
const PHONE_HREF = "tel:+16046717055";

const highlights = [
  { icon: LuShieldCheck, text: "ICBC Class 7 & Class 5 road test preparation" },
  { icon: LuCar, text: "Modern dual-controlled training vehicles" },
  { icon: LuMapPin, text: "Pick-up and drop-off from home, school or work" },
];

const HomeDS = () => {
  return (
    <section className="pt-[90px]">
      {/*
        Desktop (lg+): the photo fills the full width and height of the hero,
        with the text on top of it.
        Mobile / tablet: the photo is full width on top and the text sits right
        below it, so the text never covers the picture.
      */}
      <div className="lg:relative lg:isolate lg:flex lg:min-h-[680px] lg:flex-col lg:overflow-hidden">
        {/* Full-width photo */}
        <img
          src={HERO}
          alt="Driving lesson with an ADEX instructor"
          fetchPriority="high"
          className="block h-[270px] w-full object-cover sm:h-[380px] lg:absolute lg:inset-0 lg:-z-20 lg:h-full"
        />

        {/* Desktop tint: dark on the text side, clear on the right */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black/85 via-black/50 to-black/5 lg:block"
        />

        {/* Text + highlights (red panel on mobile, transparent on desktop) */}
        <div className="bg-gradient-to-b from-[#FA1D04] to-[#a30d00] lg:flex lg:flex-1 lg:flex-col lg:bg-none">
          <div className="mx-auto w-full max-w-7xl px-5 pb-8 pt-9 sm:px-8 sm:pt-12 lg:flex lg:flex-1 lg:items-center lg:px-10 lg:pb-16 lg:pt-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                <LuShieldCheck className="text-base" aria-hidden="true" />
                ADEX Driving School
              </span>

              <h1 className="mt-5 text-[34px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Learn to drive with confidence.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
                Patient instructors, modern cars, and flexible lessons,
                including evenings and weekends. We&rsquo;ll get you ready for
                your ICBC road test.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  to="/Contact"
                  className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-[#FA1D04] shadow-lg transition-all hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FA1D04] sm:text-lg lg:bg-[#FA1D04] lg:text-white lg:shadow-[#FA1D04]/40 lg:hover:bg-[#c71500]"
                >
                  Request a Booking
                  <LuArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#FA1D04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-lg"
                >
                  <LuPhoneCall className="text-xl" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Highlights: frosted bar along the bottom of the photo on desktop */}
          <div className="border-t border-white/25 lg:bg-black/40 lg:backdrop-blur-md">
            <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/20 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
              {highlights.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 py-4 sm:px-6 sm:py-6 sm:first:pl-0 sm:last:pr-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon className="text-2xl" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-white sm:text-[15px] lg:text-base">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDS;