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
        className="w-full h-[50vh] md:h-[90vh] mt-[80px] md:mt-0 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Content container */}
      <div
        className="absolute inset-0 flex flex-row items-center justify-between 
                   px-4 sm:px-8 md:px-20 gap-3 sm:gap-8"
      >
        {/* Text Section */}
       <motion.div
  className="flex-1 text-left space-y-4 sm:space-y-6"
  initial={{ x: -80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <h1
    className="text-[22px] sm:text-[32px] md:text-[50px] font-bold text-black leading-tight 
               w-full max-w-[300px] sm:max-w-[500px] md:max-w-[650px]"
  >
    Your Partner in Driving Solutions.
  </h1>

  <motion.div whileHover={{ scale: 1.05 }}>
    <Link to="/contact">
      <button
        className="bg-[#fa1d04] text-[12px] sm:text-[15px] md:text-[18px] text-white 
                   px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold 
                   hover:bg-white hover:text-[#fa1d04] transition"
      >
        Request a Booking
      </button>
    </Link>
  </motion.div>
</motion.div>



        {/* Image Section */}
        <motion.div
          className="parallelogram relative flex justify-center items-center 
                     flex-1 min-w-[160px] max-w-[320px] sm:max-w-[360px] md:max-w-[850px]
                     h-[45vh] sm:h-[55vh] md:h-[90vh] overflow-visible"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img
            src={manHero}
            alt="Man standing by driving solutions"
            className="w-full h-full object-contain md:object-cover scale-110 sm:scale-100 md:hidden"
          />
          <div
            className="absolute top-0 right-0 w-[25px] sm:w-[50px] md:w-[90px] h-full 
                       bg-gradient-to-l from-black/30 to-transparent"
            style={{ transform: 'skewX(-30deg)' }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
