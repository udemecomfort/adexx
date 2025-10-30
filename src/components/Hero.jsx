import React from "react";
import { motion } from "framer-motion";
import fill from "../assets/Hero-fill.png";
import manHero from "../assets/Man-hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden mt-[5px] md:mt-[90px]">
      {/* Background fill */}
      <motion.img
        src={fill}
        alt="Background decorative"
        className="w-full h-[70vh] md:h-[90vh] mt-[80px] md:mt-0 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:pl-20 gap-6 sm:gap-10">

        {/* Text Section */}
        <motion.div
          className="max-w-[700px] text-center md:text-left space-y-6 md:space-y-8 px-2"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-[60px] font-bold text-black leading-tight">
            Your Partner in Driving Solutions.
          </h1>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/contact">
              <button className="bg-[#fa1d04] text-sm sm:text-base md:text-[18px] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-white hover:text-[#fa1d04] transition">
                Request a Booking
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Parallelogram Image Section */}
        <motion.div
          className="parallelogram relative flex justify-center items-center w-full sm:w-[500px] md:w-[850px] h-[50vh] sm:h-[60vh] md:h-[90vh] overflow-hidden"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img
            src={manHero}
            alt="Man standing by driving solutions"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute top-0 right-0 w-[40px] sm:w-[70px] md:w-[90px] h-full bg-gradient-to-l from-black/30 to-transparent"
            style={{ transform: "skewX(-30deg)" }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
