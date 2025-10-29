import React from "react";
import { motion } from "framer-motion"; // 👈 For animation
import orange from "../assets/orange-bg.png";
import car from "../assets/Car-Adex.png";
import white from "../assets/ADEX LOGO WHITE.png";

const Safe = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] bg-[#fa1d04] overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-90"
        style={{ backgroundImage: `url(${orange})` }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-start justify-between px-6 md:px-16 py-10 md:py-20 gap-10">
        
        {/* Left Text and Logo */}
        <motion.div
          className="z-10 text-left w-full md:w-1/2"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-[42px] md:text-[50px] lg:text-[60px] font-bold text-black leading-tight mb-6">
            Easy Safe Ride. <br />
            <span className="text-white">
              Upgrade your driving <br /> skills.
            </span>
          </h1>

          <motion.img
            src={white}
            alt="Adex Logo White"
            className="w-[200px] sm:w-[280px] md:w-[380px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </motion.div>

        {/* Right Car Image */}
        <motion.div
          className="z-10 relative flex justify-end w-full md:w-1/2"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={car}
            alt="Car"
            className="w-[280px] sm:w-[400px] md:w-[600px] lg:w-[700px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Safe;
