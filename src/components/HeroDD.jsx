import React from "react";
import { motion } from "framer-motion"; // 👈 Import Framer Motion
import orange from "../assets/orange-bg.png";
import img from "../assets/d image.png";

const HeroDD = () => {
  return (
    <div>
      {/* Top Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // start faded and slightly up
        animate={{ opacity: 1, y: 0 }} // fade in and drop into place
        transition={{ duration: 1, ease: "easeOut" }} // smooth transition
      >
        <img src={img} alt="" className="w-full" />
      </motion.div>

      {/* Orange Background with Text */}
      <div className="relative">
        <motion.div
          className="bg-[#fa1d04] h-[33vh] relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src={orange}
            alt="Orange Rays"
            className="w-full h-full object-cover"
          />

          {/* Text Content */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 text-center w-[90%] md:w-[40%]"
            initial={{ opacity: 0, y: 40 }} // start below and hidden
            animate={{ opacity: 1, y: 0 }} // fade and slide up
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-white text-3xl font-semibold mb-2">
              Designated Driver
            </h2>
            <h5 className="text-white text-2xl mb-3">
              Metro Vancouver & Okanagan’s Trusted Designated Driving Services
            </h5>
            <p className="text-white text-[17px]">
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
