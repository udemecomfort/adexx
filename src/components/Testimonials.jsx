import React from "react";
import { motion } from "framer-motion";
import TestimonialsProps from "./TestimonialsProps";

const Testimonials = () => {
  const data = [
    {
      rating: 5,
      text: "ADEX saved the day! After a night out, I needed a safe ride home with my car. The driver was professional, arrived quickly, and got me home safely. Highly recommended!",
      name: "Sarah M.",
    },
    {
      rating: 5,
      text: "I needed my car taken to the mechanic while I was at work. Adex DD handled everything smoothly, and I didn’t have to miss a day of work. Excellent service!",
      name: "James L.",
    },
    {
      rating: 5,
      text: "As a wedding planner, I always recommend Adex DD to my clients. Their designated drivers ensure guests get home safely, making events stress-free.",
      name: "Emily R.",
    },
    {
      rating: 5,
      text: "I booked a driver to take my elderly parents to a family event. The service was outstanding—safe, courteous, and punctual. I will definitely use ADEX again!",
      name: "Linda C.",
    },
    {
      rating: 5,
      text: "Had a last-minute work trip and needed my car transported to another city. ADEX handled everything perfectly, and my car arrived on time. Fantastic service!",
      name: "David P.",
    },
    {
      rating: 5,
      text: "I needed someone to drive my car home after a medical procedure. The driver was courteous and professional, making sure I got home safely and comfortably. Truly a lifesaver!",
      name: "Tom W.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <motion.div
      className="bg-gray-100 py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Heading Section */}
      <motion.div
        className="flex flex-col items-center text-center gap-2 mb-12"
        variants={itemVariants}
      >
        <h5 className="text-lg font-medium bg-gray-300 text-black py-1 px-5 rounded-xl">
          Testimonies
        </h5>
        <h1 className="text-3xl md:text-5xl font-semibold max-w-xl leading-snug">
          What are people saying about{" "}
          <span className="text-[#FA1D04]">Adex?</span>
        </h1>
      </motion.div>

      {/* Testimonials Layout */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col gap-10"
        variants={containerVariants}
      >
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-6">
          {data.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className={index === 1 ? "md:-mt-8" : ""}
              variants={itemVariants}
            >
              <TestimonialsProps {...item} />
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-6">
          {data.slice(3).map((item, index) => (
            <motion.div
              key={index + 3}
              className={index === 1 ? "md:mt-8" : ""}
              variants={itemVariants}
            >
              <TestimonialsProps {...item} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
