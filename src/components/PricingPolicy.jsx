import React from "react";
import { FaTimes } from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import { RiTrafficLightLine } from "react-icons/ri";
import { FcCancel } from "react-icons/fc";
import { MdOutlineChangeCircle } from "react-icons/md";
import { motion } from "framer-motion"; // 👈 import Framer Motion
import { Link } from "react-router-dom"; // 👈 import Framer Motion

const PricingPolicy = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 lg:px-40 text-gray-800 overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm mb-3"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Pricing Policy
        </motion.button>

        <h2 className="text-3xl font-bold mb-2">
          <span className="text-black">››››</span> Affordable Services{" "}
          <span className="text-black">‹‹‹‹</span>
        </h2>

        <motion.p
          className="text-lg font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Professional Drivers. Transparent Rates. Reliable Service.
        </motion.p>

        <motion.p
          className="text-black max-w-3xl mx-auto text-[20px] leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          At ADEX, we specialize exclusively in designated driving services —
          safely driving you in your own vehicle when you're unable to do so
          yourself. Whether after a night out, for medical reasons, or simply
          for peace of mind, our trained drivers ensure that you and your
          vehicle arrive safely at your destination.
        </motion.p>

        <motion.p
          className="text-black max-w-2xl mx-auto text-[20px] mt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Below is our current rate structure and service policy. We’re
          committed to fair, transparent pricing with no hidden fees.
        </motion.p>
      </motion.div>

      {/* Pricing Section */}
      <div className="flex flex-col md:flex-row md:divide-x md:divide-gray-400 md:gap-10">
        {/* Left Column */}
        <motion.div
          className="md:w-1/2 md:pr-8 mb-10 md:mb-0 font-medium"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[20px] font-bold mb-4">Service Rate</h3>
          <p className="mb-2">
            <strong>Base Pickup Fee:</strong> $25
          </p>
          <p className="mb-2">
            <strong>Per Kilometer (one-way trip):</strong> $2.50
          </p>
          <p className="mb-4">
            <strong>Minimum Distance Charge:</strong> 10 km
          </p>

          <p className="text-sm italic text-black mb-9">
            › All trips are calculated from the pickup location to the final
            destination
          </p>

          <div className="mb-6">
            <p className="flex items-center text-black text-[21px] font-semibold mb-2">
              <LuClock4 className="text-red-500 mr-3" /> Wait Time Policy
            </p>
            <p className="text-[20px] text-gray-700 leading-relaxed">
              First 5 minutes: Free <br />
              After 5 minutes: $2 per minute <br />› If wait time at pickup is
              unused, up to <br /> 5 minutes may be applied to a stop during the
              trip. After that, $2/minute applies.
            </p>
          </div>

          <div>
            <p className="flex items-center text-black text-[20px] font-semibold mb-2">
              <RiTrafficLightLine className="mr-3" /> Rush Hour Surcharge
            </p>
            <p className="text-[20px] text-gray-700 leading-relaxed">
              An additional $40 surcharge applies during <br />
              peak traffic periods:
              <br />
              Morning: 5:00 AM – 9:30 AM <br />
              Evening: 3:30 PM – 7:00 PM
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[20px] font-bold mb-4 flex items-center">
            <MdOutlineChangeCircle className="mr-2 text-red-500 text-4xl" />{" "}
            Change & Cancellation Policy
          </h3>

          <div className="mb-6">
            <p className="flex items-center text-black font-medium mb-2 text-[20px]">
              <LuClock4 className="text-red-500 mr-3 text-3xl" /> Changes to
              Pickup Time or Location
            </p>
            <p className="text-[20px] text-black leading-relaxed">
              Less than 1-hour notice: $30 change fee
            </p>
          </div>

          <div className="mb-6">
            <p className="flex items-center text-black text-[23px] font-medium">
              <FaTimes className="mr-2 text-red-500 text-2xl" /> Cancellations
            </p>
            <p className="text-[18px] text-black leading-relaxed font-medium mt-2">
              <strong>Pre-Booked (City-Based) Rides:</strong> <br />
              Cancel 1 hour or more before pickup: No charge <br />
              Cancel less than 1 hour before pickup: $50 or more, depending on
              time and location <br />
              <strong>ASAP (On-Demand) Rides:</strong> <br />
              Cancel within 10 minutes of booking: No charge <br />
              Cancel after 10 minutes: 50% of total ride cost
            </p>
          </div>

          <div>
            <p className="flex items-center text-black text-[20px] font-semibold mb-2">
              <FcCancel className="mr-2 text-3xl" />
              No-Show Policy
            </p>
            <p className="text-[18px] text-black leading-relaxed italic">
              If the driver arrives at the pickup location and the rider is not
              present or reachable, the full ride amount will be charged as a
              no-show fee.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-lg font-medium mb-3">
          Book Your Designated Driver Today!
        </p>
        <Link to="/contact">
           <motion.button
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Request a Booking
        </motion.button>
        </Link>
       
        <p className="text-gray-500 text-sm mt-3 italic">
          Serving: Metro Vancouver and the Okanagan Region
        </p>
      </motion.div>
    </div>
  );
};

export default PricingPolicy;
