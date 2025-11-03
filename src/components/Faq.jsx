import React from "react";
import { motion } from "framer-motion";
import FAQCard from "./FAQCard";

const Faq = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15, 
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="py-16 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
    >
      {/* Header Section */}
      <motion.div
        className="max-w-[800px] text-center mb-10"
        variants={containerVariants}
      >
        <motion.p
          className="text-[16px] font-semibold mb-4 py-2 px-5 rounded-xl text-black bg-gray-100 shadow-md inline-block"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          FAQs
        </motion.p>

        <motion.h2
          className="md:text-3xl text-2xl font-bold mb-4"
          variants={containerVariants}
        >
          Still Curious about <span className="text-[#fa1d04]">Adex?</span> <br /> Let's Unpack the Core
        </motion.h2>

        <motion.p
          className="text-[15px] md:px-0 px-5 md:text-[20px] font-[400] text-gray-700 leading-relaxed max-w-[900px] mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          ADEX is your trusted local provider serving Vancouver, BC and the Lower Mainland for professional driving
          instruction and reliable designated driver services. Our certified driving school offers tailored lessons for
          new drivers (N and L), including complete training packages and road test preparation. We also serve businesses
          with corporate driver training programs. In addition, our designated driver service ensures you and your vehicle
          get home safely—perfect for events, vehicle relocations, or errands. At ADEX, safety, convenience, and
          professionalism are at the heart of everything we do.
        </motion.p>
      </motion.div>

      {/* FAQ Cards Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 px-[40px] md:px-[70px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            title: "How does the Designated Driver service work?",
            description:
              "Our designated drivers arrive at your pickup location, drive you safely to your destination in your own vehicle, and ensure you get home securely. Whether it’s after a night out, a special event, or for vehicle relocation, we handle the driving so you don’t have to.",
          },
          {
            title: "Do I need to book in advance, or can I request a driver on short notice?",
            description:
              "We recommend booking in advance to secure availability, especially during peak times like weekends and holidays. However, we do accept last-minute requests, and we’ll do our best to accommodate your needs.",
          },
          {
            title: "Can I book a designated driver for multiple stops?",
            description:
              "Yes! Whether you need to pick up friends, drop someone off, or make multiple stops along the way, we can accommodate your request. Just let us know your itinerary when booking.",
          },
          {
            title: "Are your drivers insured and licensed?",
            description:
              "Absolutely. All our designated drivers are fully licensed, experienced, and vetted for professionalism and safety. Your vehicle and personal safety are our top priorities.",
          },
          {
            title: "Are your designated drivers licensed?",
            description:
              "Yes! All our designated drivers are fully licensed, highly experienced, and carefully vetted to ensure the highest standards of professionalism and safety. Your vehicle and your safety are our top priorities.",
          },
        ].map((faq, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FAQCard title={faq.title} description={faq.description} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Faq;
