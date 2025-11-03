import React from "react";
import { motion } from "framer-motion";
import orange from "../assets/orange-bg.png";

const ContactPage = () => {
  return (
    <section className="relative mt-[90px]">
      {/* Background section */}
      <div className="relative bg-[#FA1D04] h-[25vh] sm:h-[40vh] md:h-[25vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={orange}
          alt="Orange Rays"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay tint */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Centered Animated Text */}
        <motion.div
          className="relative z-10 text-center flex flex-col items-center justify-center h-full w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-black">Us</span>
          </motion.h2>

          <motion.p
            className="text-white text-base sm:text-lg md:text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            We are your partner in driving solutions
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
