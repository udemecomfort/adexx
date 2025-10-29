import React from "react";
import fill from "../assets/Hero-fill.png";
import manHero from "../assets/Man-hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden mt-[5px] md:mt-[90px]">
      {/* Background fill */}
      <img
        src={fill}
        alt="Background decorative"
        className="w-full h-auto md:h-[90vh]"
      />

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:pl-20 gap-10">
        
        {/* Text Section */}
        <div className="max-w-[700px] text-center md:text-left space-y-8">
          <h1 className="text-[28px] sm:text-[36px] md:text-[60px] lg:text-[70px] font-bold text-black leading-tight">
            Your Partner in Driving Solutions.
          </h1>
          <button className="bg-[#fa1d04] text-[18px] sm:text-[20px] text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#fa1d04] transition">
            Request a Booking
          </button>
        </div>

        {/* Parallelogram Image Section */}
        <div className="parallelogram relative w-full w-[350px] md:w-[850px] h-[300px] sm:h-[400px] md:h-[90vh] overflow-hidden flex justify-center items-center">
          <img
            src={manHero}
            alt="Man standing by driving solutions"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute top-0 right-0 w-[30px] sm:w-[40px] h-[120px] sm:h-[160px] md:h-[190px] bg-black"
            style={{ transform: "skewX(-30deg)" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
