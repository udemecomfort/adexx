import React from "react";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion"; // 👈 Import Framer Motion
import eventImg from "../assets/event.png";

const CorporateEvent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl overflow-hidden p-6 md:p-10 my-10 gap-8">
      {/* Left Text Section */}
      <motion.div
        className="md:w-1/2 text-left space-y-5"
        initial={{ opacity: 0, x: -50 }} // Start hidden and slightly left
        whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to position
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Animates only once when in view
      >
        <h2 className="text-[#FA1D04] font-semibold text-lg">
          Corporate Event Transportation You Can Trust
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At Adex Designated Driving Services, we provide reliable, professional
          pickup and drop-off services tailored for corporate events of all
          sizes. Whether you're organizing a charity fundraiser, golf tournament,
          or a company staff party, our experienced team ensures your guests and
          employees get home safely.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By reducing the risk of impaired driving, our services allow everyone
          to enjoy the event responsibly — with complete peace of mind.
        </p>

        {/* Check list */}
        <motion.ul
          className="space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            "Fully vetted, professional drivers",
            "Discreet and punctual service",
            "Available for one-time events or ongoing corporate needs",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaCheck className="text-[#FA1D04]" size={20} />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <p className="text-gray-700 leading-relaxed">
          Partner with Adex for safe, seamless transportation at your next event.
          <br />
          Book now or contact us to learn more about our corporate packages.
        </p>

        <motion.button
          className="bg-[#FA1D04] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-[#d81703] transition-all duration-300"
          whileHover={{ scale: 1.05 }} // Subtle zoom on hover
          whileTap={{ scale: 0.95 }} // Slight shrink on click
        >
          Request a Booking
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 80 }} // Start hidden and from the right
        whileInView={{ opacity: 1, x: 0 }} // Fade in smoothly
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={eventImg}
          alt="Corporate Event"
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default CorporateEvent;
