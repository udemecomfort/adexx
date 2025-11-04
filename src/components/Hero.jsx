import React from "react";
import { motion } from "framer-motion";
import fill from "../assets/Hero-fill.png";
import manHero from "../assets/Man-hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden mt-11 md:mt-0">

      {/* ✅ Background fill (fixed & behind content) */}
      <motion.img
        src={fill}
        alt="Background decorative"
        className="absolute inset-0 w-full h-[40vh] md:h-[100vh] object-cover z-0"
        style={{}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* ✅ Content container (on top of background) */}
      <div
        className="relative z-10 flex items-center justify-between 
                   pl-3 sm:px-8 md:px-20 gap-0 sm:gap-8  md:text-left md:mt-[60px] h-[50vh] md:h-[90vh]"
      >
        {/* Text Section */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start space-y-0 sm:space-y-6"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1
            className="text-[13px] md:text-[50px] md:pt-0 pt-2 font-bold text-black leading-relaxed 
                       w-full max-w-[320px] sm:max-w-[500px] md:max-w-[650px]"
          >
            Your Partner in Driving Solutions.
          </h1>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/Contact">
              <button
                className="bg-[#fa1d04] text-white font-bold px-4 sm:px-6 py-2 sm:py-3 
               rounded-lg hover:bg-white hover:text-[#fa1d04] 
               text-[10px] sm:text-[16px] md:text-[18px] 
               text-left sm:text-center w-full sm:w-auto transition"
              >
                Request a Booking
              </button>
            </Link>

          </motion.div>
        </motion.div>

        {/* ✅ Image Section (moved down on small screens) */}
        <motion.div
          className="parallelogram relative flex justify-center items-center 
                     flex-1 min-w-[180px] max-w-[420px] sm:max-w-[420px] md:max-w-[850px]
                     h-[45vh] sm:h-[55vh] md:h-[90vh] overflow-visible"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img
            src={manHero}
            alt="Man standing by driving solutions"
            className="w-full h-full object-contain md:object-cover scale-127 sm:scale-100 mt-[4px] sm:mt-0"
          />
          <div
            className="absolute top-0 right-0 w-[15px] sm:w-[50px] md:w-[90px] h-full 
                       bg-gradient-to-l from-white/30 to-transparent"
            style={{ transform: 'skewX(-30deg)' }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
