import React from "react";
import TestimonialsProps from "./TestimonialsProps";

const Testimonials = () => {
  const data = [
    {
      rating: 5,
      text: "ADEX saved the day! After a night out, I needed a safe ride home with my car. The driver was professional, arrived quickly, and got me home safely. Highly recommended!",
      name: "Sarah M.",
    },
    {
      rating: 5,
      text: "I needed my car taken to the mechanic while I was at work. Adex DD handled everything smoothly, and I didn’t have to miss a day of work. Excellent service!",
      name: "James L.",
    },
    {
      rating: 5,
      text: "As a wedding planner, I always recommend Adex DD to my clients. Their designated drivers ensure guests get home safely, making events stress-free.",
      name: "Emily R.",
    },
    {
      rating: 5,
      text: "I booked a driver to take my elderly parents to a family event. The service was outstanding—safe, courteous, and punctual. I will definitely use ADEX again!",
      name: "Linda C.",
    },
    {
      rating: 5,
      text: "Had a last-minute work trip and needed my car transported to another city. ADEX handled everything perfectly, and my car arrived on time. Fantastic service!",
      name: "David P.",
    },
    {
      rating: 5,
      text: "I needed someone to drive my car home after a medical procedure. The driver was courteous and professional, making sure I got home safely and comfortably. Truly a lifesaver!",
      name: "Tom W.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center gap-2 mb-12">
        <h5 className="text-lg font-medium bg-gray-300 text-black py-1 px-5 rounded-xl">
          Testimonies
        </h5>
        <h1 className="text-3xl md:text-5xl font-semibold max-w-xl leading-snug">
          What are people saying about{" "}
          <span className="text-[#FA1D04]">Adex?</span>
        </h1>
      </div>

      {/* Testimonials Layout (Staggered) */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-6">
          <div><TestimonialsProps {...data[0]} /></div>
          <div className="md:-mt-8"><TestimonialsProps {...data[1]} /></div> {/* middle box slightly up */}
          <div><TestimonialsProps {...data[2]} /></div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-6">
          <div><TestimonialsProps {...data[3]} /></div>
          <div className="md:mt-8"><TestimonialsProps {...data[4]} /></div> {/* middle box slightly down */}
          <div><TestimonialsProps {...data[5]} /></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
