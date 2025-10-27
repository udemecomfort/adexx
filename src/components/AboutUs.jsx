import React from "react";
import orange from "../assets/orange-bg.png";

const AboutUs = () => {
  return (
    <section className="relative">
      {/* Background section */}
      <div className="relative bg-[#FA1D04] h-[30vh] md:h-[33vh] flex items-center justify-center">
        {/* Background image */}
        <img
          src={orange}
          alt="Orange Rays"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay (optional slight tint for better text visibility) */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Centered text container */}
        <div className="relative z-10 text-center px-2 flex flex-col items-center justify-center mt-10 md:mt-20">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-black">Us</span>
          </h2>
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
           We are Your partner in driving solutions 
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
