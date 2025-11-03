import React from "react";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import eventImg from "../assets/event.png";
import { Link } from "react-router-dom";

const CorporateEvent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl overflow-hidden px-4 sm:px-6 md:px-10 py-8 md:py-12 my-10 gap-10 bg-white">
      {/* Left Text Section */}
      <motion.div
        className="w-full md:w-1/2 text-left space-y-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[#FA1D04] font-semibold text-xl sm:text-2xl md:text-3xl leading-tight">
          Corporate Event Transportation You Can Trust
        </h2>

        <p className="text-gray-700 text-[15px] sm:text-[16px] leading-relaxed">
          At Adex Designated Driving Services, we provide reliable, professional
          pickup and drop-off services tailored for corporate events of all sizes.
          Whether you're organizing a charity fundraiser, golf tournament, or a
          company staff party, our experienced team ensures your guests and
          employees get home safely.
        </p>

        <p className="text-gray-700 text-[15px] sm:text-[16px] leading-relaxed">
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
              className="flex items-start sm:items-center gap-2 text-[15px] sm:text-[16px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaCheck className="text-[#FA1D04] flex-shrink-0 mt-1 sm:mt-0" size={18} />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <p className="text-gray-700 text-[15px] sm:text-[16px] leading-relaxed">
          Partner with Adex for safe, seamless transportation at your next event.
          <br />
          Book now or contact us to learn more about our corporate packages.
        </p>
          <Link to="/contact">
             <motion.button
          className="bg-[#FA1D04] text-white text-[15px] sm:text-[16px] font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-md shadow-md hover:bg-[#d81703] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Booking
        </motion.button>
          </Link>
       
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={eventImg}
          alt="Corporate Event"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default CorporateEvent;
