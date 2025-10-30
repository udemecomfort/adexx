import React from "react";
import orange from "../assets/orange-bg.png";

const AboutUs = () => {
  return (
    <section className="relative">
      <div className="relative bg-[#FA1D04] h-[45vh] sm:h-[55vh] md:h-[33vh] flex items-center justify-center overflow-hidden">
        {/* Orange Rays Background */}
        <img
          src={orange}
          alt="Orange Rays"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center mt-12 sm:mt-16 md:mt-20">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
            About <span className="text-black">Us</span>
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-[500px] sm:max-w-[700px]">
            We are your partner in driving solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
