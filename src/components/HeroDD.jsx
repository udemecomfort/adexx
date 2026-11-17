import React from "react";
import { motion } from "framer-motion";
import img from "../assets/d image.png"; // swap for a bright, close-up photo

/* ============================================================
   EASY SETTINGS: change colours / text / links here only
   ============================================================ */
const ACCENT = "#fa1d04";        // main brand colour (buttons, highlights)
const ACCENT_HOVER = "#d41802";  // darker shade shown on hover
const SOFT_BG = "#fff5f3";       // light tint behind the hero

const CTA_TEXT = "Request a Booking";
const CTA_LINK = "#contact";     // add id="contact" to your contact form wrapper
const SECOND_TEXT = "See How It Works";
const SECOND_LINK = "#how-it-works"; // add id="how-it-works" to that section
/* ============================================================ */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: "easeOut" },
});

const HeroDD = () => {
  return (
    <section
      className="w-full overflow-hidden pt-24 md:pt-28"
      style={{ backgroundColor: SOFT_BG }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* ===== Text ===== */}
        <div className="text-center md:text-left">
          <motion.p
            {...fadeUp(0.1)}
            className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-4"
            style={{ backgroundColor: ACCENT }}
          >
            Adex Designated Driving Services
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            Enjoy the night.{" "}
            <span style={{ color: ACCENT }}>We'll get you home.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 max-w-xl mx-auto md:mx-0"
          >
            A professional, insured driver takes you and your own vehicle home,
            and you walk through your door safely. You never have to choose
            between a good time and a safe ride.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.55)}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
          >
            <a
              href={CTA_LINK}
              className="px-6 py-3 rounded-md text-white font-semibold text-center shadow-md transition-colors"
              style={{ backgroundColor: ACCENT }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
            >
              {CTA_TEXT}
            </a>
            <a
              href={SECOND_LINK}
              className="px-6 py-3 rounded-md font-semibold text-center border-2 transition-colors hover:bg-white"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              {SECOND_TEXT}
            </a>
          </motion.div>

          <motion.p
            {...fadeUp(0.7)}
            className="mt-5 text-sm sm:text-base font-medium text-gray-800"
          >
            Serving the Okanagan Valley and Metro Vancouver.
          </motion.p>
        </div>

        {/* ===== Image ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div
            className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl"
            style={{ backgroundColor: ACCENT, opacity: 0.15 }}
          />
          <img
            src={img}
            alt="Professional designated driver getting you and your car home safely"
            className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* ===== Trust strip ===== */}
      <div style={{ backgroundColor: ACCENT }}>
        <ul className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-white text-center text-sm sm:text-base font-medium">
          <li>Professional, insured drivers</li>
          <li>Punctual and discreet</li>
          <li>Your own vehicle, driven with care</li>
        </ul>
      </div>
    </section>
  );
};

export default HeroDD;