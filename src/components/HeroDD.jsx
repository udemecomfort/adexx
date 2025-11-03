import React from "react";
import { motion } from "framer-motion";
import orange from "../assets/orange-bg.png";
import img from "../assets/d image.png";

const HeroDD = () => {
  return (
    <div className="w-full overflow-hidden pt-0 md:pt-20">
      {/* ===== Top Hero Image ===== */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <img
          src={img}
          alt="Designated Driver Service"
          className="w-full h-[45vh] sm:h-[60vh] md:h-[80vh] mt-20 md:mt-0 object-cover"
        />
      </motion.div>

      {/* ===== Orange Section ===== */}
      <div className="relative">
        <motion.div
          className="bg-[#fa1d04] relative overflow-hidden flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Orange background image */}
          <img
            src={orange}
            alt="Orange Rays"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />

          {/* ===== Text Overlay ===== */}
          <motion.div
            className="relative z-10 text-center text-white px-4 sm:px-6 py-10 sm:py-16 max-w-[90%] sm:max-w-[80%] md:max-w-[60%]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-snug">
              Designated Driver
            </h2>
            <h5 className="text-lg sm:text-xl md:text-2xl mb-4 leading-relaxed">
              Metro Vancouver & Okanagan’s Trusted Designated Driving Services
            </h5>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Ready to book a ride? Discover how our professional drivers can
              help — safe, convenient, and just a click away.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroDD;
