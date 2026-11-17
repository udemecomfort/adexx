import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LuArrowRight, LuCar, LuGraduationCap } from "react-icons/lu";

// TO CHANGE THE PHOTO: save a bright, close-up photo in src/assets
// (e.g. instructor + student in the car, or a driver handing back keys)
// and change this path, e.g. "../assets/home-hero.webp"
import HERO_IMAGE from "../assets/Man-hero.png";

/* ============================================================
   EASY SETTINGS: change colours / text / links here only
   ============================================================ */
const ACCENT = "#fa1d04";        // brand colour (buttons, highlights)
const ACCENT_HOVER = "#c71500";  // darker shade shown on hover
const BG = "#0b0b0b";            // hero background
const SURFACE = "#161616";       // card background

const HEADLINE_TOP = "Your Partner in";
const HEADLINE_ACCENT = "Driving Solutions.";
const DESCRIPTION =
  "Professional designated drivers and certified driving instruction, across the Okanagan Valley, Metro Vancouver, Kelowna and Lake Country.";

const CTA_TEXT = "Request a Booking";
const CTA_LINK = "/Contact";
const SECOND_TEXT = "View Our Services";
const SECOND_LINK = "#services";  // add id="services" to your services section

// The two service cards under the hero
const SERVICES = [
  {
    icon: LuCar,
    title: "Designated Driving",
    area: "Okanagan Valley & Metro Vancouver",
    text: "A professional, insured driver gets you and your own car home safely.",
    to: "/Designated-Driver",
  },
  {
    icon: LuGraduationCap,
    title: "Driving School",
    area: "Kelowna & Lake Country",
    text: "Patient instructors and ICBC road test preparation, from first lesson to test day.",
    to: "/Driving-School",
  },
];
/* ============================================================ */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: "easeOut" },
});

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden pt-[90px] md:pt-[100px]"
      style={{
        "--accent": ACCENT,
        "--accent-hover": ACCENT_HOVER,
        "--surface": SURFACE,
        backgroundColor: BG,
      }}
    >
      {/* Soft glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: ACCENT }}
      />

      {/* ===== Main hero ===== */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 md:py-16 lg:grid-cols-2 lg:gap-14 lg:px-10">
        {/* Headline */}
        <motion.div {...fadeUp(0.1)}>
          <h1 className="text-[40px] font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {HEADLINE_TOP}{" "}
            <span className="text-[var(--accent)]">{HEADLINE_ACCENT}</span>
          </h1>
        </motion.div>

        {/* Photo + description + buttons */}
        <motion.div {...fadeUp(0.3)} className="lg:pl-4">
          <img
            src={HERO_IMAGE}
            alt="Professional driver and driving instructor with a client"
            fetchPriority="high"
            className="h-[240px] w-full rounded-2xl object-cover shadow-2xl sm:h-[340px] lg:h-[360px]"
          />

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base">
            {DESCRIPTION}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to={CTA_LINK}
              className="group inline-flex min-h-[52px] items-stretch overflow-hidden rounded-md bg-[var(--accent)] font-bold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span className="flex flex-1 items-center justify-center px-6">
                {CTA_TEXT}
              </span>
              <span className="flex w-14 items-center justify-center border-l border-white/30">
                <LuArrowRight
                  className="text-xl transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>

            <a
              href={SECOND_LINK}
              className="group inline-flex min-h-[52px] items-stretch overflow-hidden rounded-md border border-white/40 font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              <span className="flex flex-1 items-center justify-center px-6">
                {SECOND_TEXT}
              </span>
              <span className="flex w-14 items-center justify-center border-l border-white/30">
                <LuArrowRight
                  className="text-xl transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* ===== Two equal service cards ===== */}
      <div id="services" className="relative z-10 mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, area, text, to }, i) => (
            <motion.div key={title} {...fadeUp(0.5 + i * 0.15)}>
              <Link
                to={to}
                className="group flex h-full items-start gap-5 rounded-2xl border border-white/10 bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
                  <Icon className="text-3xl" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block text-xl font-bold text-white">
                    {title}
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold text-[var(--accent)]">
                    {area}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-gray-400">
                    {text}
                  </span>
                </span>
                <LuArrowRight
                  className="mt-1 shrink-0 text-2xl text-white transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;