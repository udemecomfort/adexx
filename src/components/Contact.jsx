import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  return (
    <div className="bg-white py-10 px-4 sm:px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        {location.pathname !== "/contact" && (
          <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
            <span className="text-black">»»» </span>Contact Us
            <span className="text-gray-700"> «««</span>
          </h3>
        )}

        <p className="text-[15px] sm:text-[17px] text-black max-w-md sm:max-w-lg mx-auto leading-relaxed">
          Fill out this form to request a callback. Our team will be in touch to
          confirm the details and arrange payment to secure your booking.
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* First Name */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Type of Service */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Type of Service
          </label>
          <select className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]">
            <option value="">Select</option>
            <option value="driving">Driving Service</option>
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>

        {/* Empty space for alignment */}
        <div></div>

        {/* Pickup Location */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Pickup Location
          </label>
          <input
            type="text"
            placeholder="Address"
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Drop-off Location */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Drop-off Location
          </label>
          <input
            type="text"
            placeholder="Address"
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-gray-600 text-sm mb-1">
            Special instructions or requests
          </label>
          <textarea
            rows="3"
            placeholder="Your message"
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-start">
          <button
            type="submit"
            className="bg-[#FA1D04] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:bg-red-600 transition"
          >
            Request a Callback
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
