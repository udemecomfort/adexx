import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const location = useLocation();
  const form = useRef();
  const [status, setStatus] = useState("");

  // ✅ Step 1: Define dynamic options based on the page
  let serviceOptions = [];
  if (location.pathname === "/Designated-Driver") {
    serviceOptions = [
      { value: "driving", label: "Designated Driver/Personal Driver" },
      { value: "pickup", label: "Driver for Hire" },
    ];
  } else if (location.pathname === "/Driving-School") {
    serviceOptions = [
      { value: "smart", label: "Start Smart Package- $810 (15 hrs/ 10 Sesseions)" },
      { value: "brush", label: "Brush-Up Package- $630 (10.5 hrs/ 7 Sesseions)" },
      { value: "test", label: "Test Ready Package - $270 (4.5 hrs/ 3 Sesseions)" },
      { value: "basic", label: "Basic Session- $810 (1.5 hrs/ 1 Sesseions)" },
    ];
  } else {
    // Default options for Contact page or other pages
    serviceOptions = [
      { value: "driving", label: "Designated Driver/Personal Driver" },
      { value: "pickup", label: "Driver for Hire" },
    ];
  }

  // ✅ Step 2: Send email function
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Send message to Adeniyi
    emailjs
      .sendForm(
        "service_0pulqwa",       // Replace with your EmailJS service ID
        "template_hx70b1q",      // Replace with your main template ID
        form.current,
        "wwzhi74eikxhrBvJE"     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          e.target.reset();

          // Auto-reply to user
          emailjs
            .send(
              "service_0pulqwa",
              "template_h8zurqe", // Auto-reply template ID
              {
                user_email: form.current.user_email.value,
                first_name: form.current.first_name.value,
              },
              "wwzhi74eikxhrBvJE"
            )
            .then(
              (res) => console.log("Auto-reply sent!", res.text),
              (err) => console.error("Auto-reply failed", err.text)
            );
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

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
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        {/* First Name */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Type of Service */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Type of Service</label>
          <select
            name="service_type"
            required
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          >
            <option value="">Select</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div></div>

        {/* Pickup Location */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Pickup Location</label>
          <input
            type="text"
            name="pickup"
            placeholder="Address"
            required
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Drop-off Location */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Drop-off Location</label>
          <input
            type="text"
            name="dropoff"
            placeholder="Address"
            required
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-gray-600 text-sm mb-1">Special instructions or requests</label>
          <textarea
            rows="3"
            name="user_message"
            placeholder="Your message"
            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-start">
          <button
            type="submit"
            className="cursor-pointer bg-[#FA1D04] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:bg-red-600 transition"
          >
            Request a Callback
          </button>
        </div>
      </form>

      {/* Status message */}
      {status && (
        <p className="text-center mt-6 text-gray-700 font-medium">{status}</p>
      )}
    </div>
  );
};

export default Contact;
