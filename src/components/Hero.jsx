import React from "react";
import fill from "../assets/Hero-fill.png";
import manHero from "../assets/Man-hero.png";

const Hero = () => {
  return (
    <section className="relative md:h-[90vh] mt-[90px]">
      <div className="relative">
        <img src={fill} alt="Background decorative" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between  md:pl-20 top-0">
          <div className="max-w-[700px] text-center md:text-left space-y-10">
            <h1 className="text-[30px] md:text-[70px] font-bold text-black mb-4">
              Your Partner in Driving Solutions.
            </h1>
            <button className="bg-[#fa1d04] text-[20px] text-white mt-20 px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#fa1d04] transition">
              Request a Booking
            </button>
          </div>
          <div className="parallelogram w-[750px] h-full overflow-hidden relative" >
            <img
              src={manHero}
              alt="Man standing by driving solutions"
              className=" w-full h-full object-cover"
            />
            <div className="absolute top-0 w-[40px] h-[190px] shadow-md bg-black px-4 flex flex-col items-center justify-center text-center" style={{ transform: "skewX(-19deg)" }}>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
