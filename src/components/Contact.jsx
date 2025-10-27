import React from "react";


const Contact = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold mb-2">
          <span className="text-black">»»» </span>Contact Us
          <span className="text-gray-700"> «««</span>
        </h3>
        <p className="text-[17px] text-black max-w-lg mx-auto">
          Fill out this form to request a callback. Our team will be in touch to
          confirm the details and arrange payment to secure your booking.
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Type of Service */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Type of service</label>
          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]">
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
          <label className="block text-gray-600 text-sm mb-1">Pickup Location</label>
          <input
            type="text"
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Drop-off Location */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Drop-off Location</label>
          <input
            type="text"
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
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
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-start">
          <button
            type="submit"
            className="bg-[#FA1D04] text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
          >
            Request a Callback
          </button>
        </div>
      </form>

      {/* Bottom Red Section */}
      
    </div>
  );
};

export default Contact;
