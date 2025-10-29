import React from "react";
import { motion } from "framer-motion";

const SectionProps = ({
  image,
  overlayText = "",
  textContent,
  reverse = false,
  showButtons = true,
  primaryButtonText = "Request a Booking",
  secondaryButtonText = "View More",
  customTextClass = "", // e.g., "text-right items-end md:text-right md:items-end"
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-20 px-6 md:px-20 py-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* 🖼️ Image Section */}
      <motion.div
        className="relative flex w-full md:w-1/2"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={image} alt="Section visual" className="w-full h-auto" />

        {overlayText && (
          <motion.p
            className="absolute bg-[#fa1d04] py-3 px-10 text-white text-[16px] font-semibold rounded-tl-[55px] rounded-br-[55px] shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {overlayText}
          </motion.p>
        )}
      </motion.div>

      {/* ✍️ Text + Buttons Section */}
      <motion.div
        className={`w-full md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center ${customTextClass}`}
        initial={{ opacity: 0, x: reverse ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* 📝 Text */}
        {Array.isArray(textContent) ? (
          <div className="space-y-2 text-[18px] md:text-[22px] font-medium">
            {textContent.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        ) : (
          <motion.p
            className="whitespace-pre-line text-[18px] md:text-[22px] font-medium leading-relaxed mb-6 max-w-[470px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {textContent}
          </motion.p>
        )}

        {/* 🎯 Buttons */}
        {showButtons && (
          <motion.div
            className={`flex flex-wrap gap-4 mt-6 ${
              customTextClass.includes("text-right") ? "justify-end" : "justify-start"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#fa1d04] py-2 px-8 text-white text-[17px] font-semibold rounded-3xl"
            >
              {primaryButtonText}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 text-black px-6 py-2 text-[17px] font-semibold rounded-3xl"
            >
              {secondaryButtonText}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default SectionProps;
