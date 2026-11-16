import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_0pulqwa";
const MAIN_TEMPLATE_ID = "template_hx70b1q";
const AUTOREPLY_TEMPLATE_ID = "template_h8zurqe";
const PUBLIC_KEY = "wwzhi74eikxhrBvJE";

const DEBUG = true;

const inputClass =
  "w-full p-2.5 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA1D04]";

const Contact = () => {
  const location = useLocation();
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [sending, setSending] = useState(false);

  
  let serviceOptions = [];
  if (location.pathname === "/Designated-Driver") {
    serviceOptions = ["Designated Driver/Personal Driver", "Driver for Hire"];
  } else if (location.pathname === "/Driving-School") {
    serviceOptions = [
      "Start Smart Package - $810 (15 hrs / 10 Sessions)",
      "Brush-Up Package - $630 (10.5 hrs / 7 Sessions)",
      "Test Ready Package - $270 (4.5 hrs / 3 Sessions)",
      "Basic Session - $810 (1.5 hrs / 1 Session)", // double-check this price
    ];
  } else {
    serviceOptions = ["Driving School", "Designated Driver"];
  }

  // Pickup/drop-off only make sense for driver services
  const needsLocations = location.pathname !== "/Driving-School";

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setIsError(false);
    setStatus("Sending...");

    // Save values BEFORE resetting the form
    const userEmail = form.current.user_email.value;
    const firstName = form.current.first_name.value;

    try {
      // 1. Email to the business
      const res = await emailjs.sendForm(
        SERVICE_ID,
        MAIN_TEMPLATE_ID,
        form.current,
        { publicKey: PUBLIC_KEY }
      );
      console.log("Main email sent:", res.status, res.text);

      form.current.reset();
      setStatus("Message sent successfully!");

      // 2. Auto-reply to the customer
      try {
        const reply = await emailjs.send(
          SERVICE_ID,
          AUTOREPLY_TEMPLATE_ID,
          { user_email: userEmail, first_name: firstName },
          { publicKey: PUBLIC_KEY }
        );
        console.log("Auto-reply sent:", reply.status, reply.text);
      } catch (err) {
        console.error("Auto-reply failed:", err?.status, err?.text || err);
      }
    } catch (err) {
      console.error("Send failed:", err);
      setIsError(true);

      if (DEBUG) {
        const code = err?.status ?? "no status";
        const reason = err?.text || err?.message || "Unknown error";
        setStatus(`Failed (${code}): ${reason}`);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } finally {
      setSending(false);
    }
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
            className={inputClass}
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
            className={inputClass}
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
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className={inputClass}
          />
        </div>

        {/* Type of Service */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Type of Service</label>
          <select name="service_type" required className={inputClass}>
            <option value="">Select</option>
            {serviceOptions.map((label) => (
              <option key={label} value={label}>
                {label}
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
            required={needsLocations}
            className={inputClass}
          />
        </div>

        {/* Drop-off Location */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Drop-off Location</label>
          <input
            type="text"
            name="dropoff"
            placeholder="Address"
            required={needsLocations}
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-gray-600 text-sm mb-1">
            Special instructions or requests
          </label>
          <textarea
            rows="3"
            name="user_message"
            placeholder="Your message"
            className={inputClass}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-start">
          <button
            type="submit"
            disabled={sending}
            className="cursor-pointer bg-[#FA1D04] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:bg-red-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Request a Callback"}
          </button>
        </div>
      </form>

      {/* Status message */}
      {status && (
        <p
          className={`text-center mt-6 font-medium ${
            isError ? "text-red-600" : "text-gray-700"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default Contact;