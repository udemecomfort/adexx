import React from "react";
import { motion } from "framer-motion";
import orange from "../assets/orange-bg.png";

const ContactPage = () => {
  return (
    <section className="relative">
      {/* Background section */}
      <div className="relative bg-[#FA1D04] h-[35vh] my-auto sm:h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={orange}
          alt="Orange Rays"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay tint for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Text Container */}
        <motion.div
          className="relative z-10 text-center px-3 sm:px-4 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-black">Us</span>
          </motion.h2>

          <motion.p
            className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-md sm:max-w-lg mx-auto"
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
