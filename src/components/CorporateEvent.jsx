import React from "react";
import { FaCheck } from "react-icons/fa6";

import eventImg from "../assets/event.png";

const CorporateEvent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl overflow-hidden p-6 md:p-10 my-10 gap-8">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-left space-y-5">
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
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <FaCheck  className="text-[#FA1D04]" size={20} />
            <span>Fully vetted, professional drivers</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck  className="text-[#FA1D04]" size={20} />
            <span>Discreet and punctual service</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck  className="text-[#FA1D04]" size={20} />
            <span>Available for one-time events or ongoing corporate needs</span>
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Partner with Adex for safe, seamless transportation at your next event.
          <br />
          Book now or contact us to learn more about our corporate packages.
        </p>

        <button className="bg-[#FA1D04] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-[#d81703] transition-all duration-300">
          Request a Booking
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2">
        <img
          src={eventImg}
          alt="Corporate Event"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default CorporateEvent;
