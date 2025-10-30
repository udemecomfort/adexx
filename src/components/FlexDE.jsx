import React from "react";
import { ImCheckmark } from "react-icons/im";
import { motion } from "framer-motion"; // 👈 Import Framer Motion
import Image1 from "../assets/FlexImage1.png";
import Image2 from "../assets/FlexImage2.png";
import Image3 from "../assets/FlexImge3.png";
import FlexDEProps from "./FlexDEProps";

const FlexDE = () => {
  const firstServices = [
    "Airport transportation in your own vehicle",
    "Wedding guest transport services",
    "Corporate events and fundraisers",
    "Winery, pub, party, or hospital transportation",
    "Any time you can’t or don’t want to drive",
  ];

  const secondServices = [
    "Personal chauffeur services",
    "Assistance for elderly or disabled",
    "Reliable backup when your regular driver is unavailable",
    "Temporary replacement for your usual driver",
    "Long-distance travel in your own vehicle",
  ];

  const thirdServices = [
    "Vehicle relocations within or between provinces",
    "Transport to car dealerships",
    "Delivery to auto-repair shops",
    "Home-to-work vehicle transfers",
  ];

  return (
    <div>
      {/* Section Intro */}
      <motion.div
        className="px-4 md:px-10 lg:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center bg-gray-100 mx-auto text-[18px] md:text-[20px] lg:text-[23px] mt-[60px] md:mt-[120px] mb-[30px] font-semibold rounded-2xl py-6 md:py-10 max-w-[900px]">
          <p className="max-w-[640px] mx-auto pb-6 md:pb-9 px-4 leading-relaxed">
            Planning a night out? Don’t let a DUI ruin your evening — choose our
            designated driver service for a safe, stress-free ride home.
          </p>

          <p className="max-w-[640px] mx-auto pb-6 md:pb-2 px-4 leading-relaxed">
            With reliable, professional drivers available 24/7, you can enjoy
            your night without the risk or worry of getting behind the wheel.
            We’ll get both you and your vehicle home surely.
          </p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {["Safe", "Convenient", "Always Available"].map((text, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ImCheckmark className="text-[#fa1d04] text-[20px] md:text-[22px]" />
                <span className="text-[20px] md:text-[24px]">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="space-y-12 px-6 md:px-10 lg:px-20 py-10 md:flex items-center justify-between md:space-y-0 md:space-x-6"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
        viewport={{ once: true }}
      >
        {[ 
          {
            items: firstServices,
            image: Image1,
            title: "Designated Driver",
            heading:
              "We provide professional drivers to ensure you and your vehicle arrive home safely.",
          },
          {
            items: secondServices,
            image: Image2,
            title: "Driver for Hire",
            heading: "Need a personal driver for any reason? We’ve got you covered.",
          },
          {
            items: thirdServices,
            image: Image3,
            title: "Vehicle Relocation",
            heading:
              "We’ll move your vehicle from one location to another without you needing to be present, saving you time and hassle.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.4 }}
            viewport={{ once: true }}
          >
            <FlexDEProps {...card} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FlexDE;
