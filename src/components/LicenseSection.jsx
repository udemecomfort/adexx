import React from "react";
import { motion } from "framer-motion";

const LicenseSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="py-12 px-5 sm:px-8 md:px-16 text-center mt-[380px] md:mt-[450px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 leading-snug"
        variants={cardVariants}
      >
        Your License, Your Freedom—
        <br className="md:hidden" />
        Let’s Make <br className="hidden md:block" /> it Happen!
      </motion.h2>

      {/* Card Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center"
        variants={containerVariants}
      >
        {/* Card 1 */}
        <motion.div
          className="border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.03] bg-white transition-all duration-300"
          variants={cardVariants}
        >
          <h3 className="text-lg font-semibold mb-3 text-[#fa1d04]">Prepare for Road Tests</h3>
          <ul className="list-disc list-inside text-left text-gray-700 text-[15px]">
            <li>Class 7 (“N” license)</li>
            <li>Class 5 (full license)</li>
          </ul>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.03] bg-white transition-all duration-300"
          variants={cardVariants}
        >
          <h3 className="text-lg font-semibold mb-3 text-[#fa1d04]">Language</h3>
          <ul className="list-disc list-inside text-left text-gray-700 text-[15px]">
            <li>English</li>
          </ul>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.03] bg-white transition-all duration-300"
          variants={cardVariants}
        >
          <h3 className="text-lg font-semibold mb-3 text-[#fa1d04]">Lesson Hours</h3>
          <ul className="list-disc list-inside text-left text-gray-700 text-[15px]">
            <li>Available 7 AM – 7 PM, any day of the week</li>
          </ul>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.03] bg-white transition-all duration-300"
          variants={cardVariants}
        >
          <h3 className="text-lg font-semibold mb-3 text-[#fa1d04]">Friendly Instructors</h3>
          <ul className="list-disc list-inside text-left text-gray-700 text-[15px] leading-relaxed">
            <li>
              Learn from a diverse team of experienced, patient, and approachable
              instructors who make learning easy and fun.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LicenseSection;
