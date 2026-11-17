import React from "react";
import { Link } from "react-router-dom";
import {
  LuPhoneCall,
  LuShieldCheck,
  LuCar,
  LuMapPin,
  LuArrowRight,
  LuArrowUpRight,
} from "react-icons/lu";

// TO CHANGE THE IMAGE: save your new photo in src/assets and change this path,
// e.g. "../assets/driving-school-hero.webp" (use a bright, close-up photo)
import HERO from "../assets/DS Home.png";

/* ============================================================
   EASY SETTINGS: change colours / text / links here only
   ============================================================ */
const ACCENT = "#FA1D04";        // main brand colour
const ACCENT_HOVER = "#c71500";  // darker shade shown on hover
const INK = "#1f1a17";           // dark text colour
const PAGE_BG = "#fffaf8";       // soft off-white page background

const PHONE_DISPLAY = "604-671-7055";
const PHONE_HREF = "tel:+16046717055";

const CTA_TEXT = "Request a Booking";
const CTA_LINK = "/Contact";     // page the main button opens

// Card on top of the photo
const OFFER_TITLE = "Evenings & weekends too";
const OFFER_TEXT = "Flexible lessons from 7 AM to 7 PM, any day of the week.";

// Turn on once the client confirms the free trial details
const SHOW_TRIAL = false;
const TRIAL_TITLE = "Free Trial Class";
const TRIAL_TEXT = "New students: meet your instructor and try a lesson on us.";
/* ============================================================ */

const highlights = [
  { icon: LuShieldCheck, text: "ICBC Class 7 & Class 5 road test preparation" },
  { icon: LuCar, text: "Modern dual-controlled training vehicles" },
  { icon: LuMapPin, text: "Pick-up and drop-off from home, school or work" },
];

const HomeDS = () => {
  const cardTitle = SHOW_TRIAL ? TRIAL_TITLE : OFFER_TITLE;
  const cardText = SHOW_TRIAL ? TRIAL_TEXT : OFFER_TEXT;

  return (
    <section
      className="pt-[90px]"
      style={{
        "--accent": ACCENT,
        "--accent-hover": ACCENT_HOVER,
        "--ink": INK,
        backgroundColor: PAGE_BG,
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-8 md:py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-10">
        {/* ===== Photo card with offer overlay ===== */}
        <div className="relative order-2 overflow-hidden rounded-3xl shadow-xl lg:order-1">
          <img
            src={HERO}
            alt="Driving lesson with an ADEX instructor"
            fetchPriority="high"
            className="h-[340px] w-full object-cover sm:h-[460px] lg:h-full lg:min-h-[620px]"
          />

          <div className="absolute bottom-4 left-4 right-4 max-w-sm rounded-3xl bg-white/85 p-5 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto">
            <p className="text-xl font-bold text-[var(--ink)]">{cardTitle}</p>
            <p className="mt-1 text-sm leading-snug text-gray-700">{cardText}</p>
            <Link
              to={CTA_LINK}
              aria-label={CTA_TEXT}
              className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <LuArrowUpRight className="text-xl" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* ===== Text ===== */}
        <div className="order-1 flex flex-col justify-between gap-10 lg:order-2 lg:text-right">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
              <LuShieldCheck className="text-base" aria-hidden="true" />
              ADEX Driving School
            </span>

            <h1 className="mt-5 text-[40px] font-extrabold leading-[1.02] tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
              Learn to drive with{" "}
              <span className="text-[var(--accent)]">confidence.</span>
            </h1>
          </div>

          <div>
            <p className="max-w-md text-base leading-relaxed text-gray-600 sm:text-lg lg:ml-auto">
              Patient instructors, modern cars, and flexible lessons. We&rsquo;ll
              get you ready for your ICBC road test.
            </p>

            {/* Pill-style actions */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to={CTA_LINK}
                className="group flex min-h-[60px] items-center justify-between rounded-full border border-gray-200 bg-white py-2 pl-7 pr-2 text-base font-semibold text-[var(--ink)] shadow-sm transition-shadow hover:shadow-md"
              >
                {CTA_TEXT}
                <span className="flex h-11 w-16 items-center justify-center rounded-full bg-[var(--accent)] text-white transition-colors group-hover:bg-[var(--accent-hover)]">
                  <LuArrowRight className="text-xl" aria-hidden="true" />
                </span>
              </Link>

              <a
                href={PHONE_HREF}
                className="group flex min-h-[60px] items-center justify-between rounded-full border border-gray-200 bg-white py-2 pl-7 pr-2 text-base font-semibold text-[var(--ink)] shadow-sm transition-shadow hover:shadow-md"
              >
                Call {PHONE_DISPLAY}
                <span className="flex h-11 w-16 items-center justify-center rounded-full bg-[var(--ink)] text-white">
                  <LuPhoneCall className="text-xl" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Highlight cards ===== */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-8 lg:px-10">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                <Icon className="text-2xl" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium leading-snug text-[var(--ink)] sm:text-[15px]">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeDS;