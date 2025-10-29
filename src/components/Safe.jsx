import React from "react";
import { motion } from "framer-motion";
import orange from "../assets/orange-bg.png";
import car from "../assets/Car-Adex.png";
import white from "../assets/ADEX LOGO WHITE.png";

const Safe = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] bg-[#fa1d04] overflow-hidden">
      
      <motion.div
        className="absolute inset-0 bg-center bg-cover opacity-90"
        style={{ backgroundImage: `url(${orange})` }}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative flex flex-col md:flex-row items-start justify-between px-6 md:px-16 py-10 md:py-20 gap-10">
        
        <motion.div
          className="z-10 text-left w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-[40px] md:text-[50px] lg:text-[60px] font-bold text-black leading-tight mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Easy Safe Ride. <br />
            <span className="text-white">
              Upgrade your driving <br /> skills.
            </span>
          </motion.h1>

          {/* White Logo with pulse and fade animation */}
          <motion.img
            src={white}
            alt="Adex Logo White"
            className="w-[200px] sm:w-[280px] md:w-[380px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* 🚗 Right Car Image with smooth float effect */}
        <motion.div
          className="z-10 relative flex justify-end w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={car}
            alt="Car"
            className="w-[280px] sm:w-[400px] md:w-[600px] lg:w-[700px] object-contain"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -10, 0], 
              transition: { 
                repeat: Infinity, 
                duration: 3.5, 
                ease: "easeInOut" 
              } 
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Safe;
