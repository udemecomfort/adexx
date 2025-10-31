import React from "react";
import img from "../assets/PricingDS.png";
import { FaCar, FaClock, FaRoad, FaStar, FaCheck } from "react-icons/fa";

const packages = [
  {
    title: "Basic Package",
    hours: "1.5 Hours",
    circleContent: "$100" ,
    heading: "Ideal for: Drivers needing a quick skill check, confidence boost, or instructor evaluation. Can be upgraded to a full package. Includes:",
    desc: [
      "1.5 hours of in-car instruction",
      "Pickup and drop-off within service area",
      "Targeted coaching on specific concerns (e.g., parking, merging, intersections)",
      "Flexible scheduling",
    ],
  },
  {
    title: "Test-Ready Package",
    hours: "4.5 Hours",
    circleContent: "$270",
    heading: "Ideal for: Students preparing for their ICBC road test.A final polish before the big day.Includes:",
    desc: [
      "3 focused, intensive in-car lessons",
      "Pickup and drop-off within service area",
      "Emphasis on ICBC test expectations and evaluation criteria",
      "Maneuvering practice and rule-based review",
      "Mock road test with instructor feedback",
      "Optional car rental for test day",
      "Priority scheduling for students with upcoming test dates",
    ],
  },
  {
    title: "Road Test Car Rental",
    hours: "",
    circleContent: <FaCar className="text-[#FA1D04] text-2xl sm:text-3xl" />,
    heading: "All vehicles are ICBC-approved and meet test-day standards.Pickup and drop-off at the ICBC testing center included if requested.",
    desc: [
      "Car Rental Only $100",
      "Car Rental + 1-Hour Warm-Up Lesson $200",
    ],
  },
  {
    title: "Brush-Up Package",
    hours: "10.5 Hours",
    circleContent: "$630" ,
    heading: "Ideal for: Drivers with prior experience or returning after a long break. Perfect for Canadian road rule updates, or skill-focused refreshers.Includes:",
    desc: [
      "10.5 hours of in-car instruction",
      "Pickup and drop-off within service area",
      "Initial skills assessment to identify focus areas",
      "Review of road rules and driving techniques",
      "In-depth practice of vehicle control and maneuvering",
      "Mock test session with performance feedback",
      "Road test preparation and support",
      "Resource sharing and learning materials",
      "Flexible scheduling available",
    ],
  },
  {
    title: "Start Smart Package",
    hours: "15 Hours",
    circleContent: "$810",
    heading: "Ideal for: Beginners with no prior driving experience or access to a practice vehicle.Designed to build confidence and road awareness from day one.Includes:",
    desc: [
      "15 hours of in-car instruction",
      "Pickup and drop-off within service area",
      "Basic road rules and traffic safety education",
      "Defensive driving strategies",
      "Core driving and parking techniques",
      "Mock road test",
      "Road test preparation and support",
      "Progress checklist and personalized feedback after each session",
      "Resource sharing to enhance learning",
      "Flexible lesson scheduling (including evenings/weekends)",
    ],
  },
];

const PackageCard = ({ pkg }) => (
  <div className="flex flex-col px-0 md:px-10 mb-6 md:mb-12 w-full max-w-[500px]">
    <div className="relative w-full">
      <img src={img} alt="" className="w-full h-auto" />

      {/* Circle on top */}
      <div className="absolute top-0 left-1/2 text-[#FA1D04] text-2xl sm:text-xl font-semibold transform -translate-x-1/2 -translate-y-1/2
                      h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 rounded-full bg-white flex items-center justify-center z-10">
        {pkg.circleContent}
      </div>

      {/* Text centered on image */}
      <h1 className="absolute text-center font-semibold text-[18px] sm:text-[22px] md:text-[25px] text-white
                     top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
        {pkg.title} {pkg.hours && <><br /> {pkg.hours}</>}
      </h1>
    </div>

    {/* Description */}
    <div className="flex flex-col gap-4 sm:gap-6 mt-6 px-2 sm:px-10">
      <h1 className="text-[16px] sm:text-[20px] font-medium">
        {pkg.heading}
      </h1>
      <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-[16px] sm:text-[20px]">
        {pkg.desc.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>

    {/* Button */}
    <div className="text-center mt-4 sm:mt-6">
      <button className="bg-[#FA1D04] text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-md hover:bg-[#d81703] hover:shadow-lg transition-all duration-300 inline-block">
        Get Started
      </button>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="px-4 sm:px-6 md:px-0">
      {/* Header */}
      <div className="text-center mb-12">
        <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm mb-3">
          Pricing Policy
        </button>
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-black">››››</span> Affordable Services{" "}
          <span className="text-black">‹‹‹‹</span>
        </h2>
        <p className="text-lg font-semibold mb-2">
          Professional Driving Instruction in Metro Vancouver & the Okanagan
        </p>
        <p className="text-black max-w-4xl mx-auto text-[20px] sm:text-[22px] md:text-[23px] leading-relaxed">
          At ADEX Driving School, we offer tailored instruction packages designed for new,
          returning, and test-ready drivers. All sessions include pickup and drop-off within
          our service areas and are delivered by experienced, ICBC-compliant instructors.
          Flexible scheduling is available, including evenings and weekends.
        </p>
      </div>

      {/* Top 3 Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {packages.slice(0, 3).map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} />
        ))}
      </div>

      {/* Bottom 2 Packages */}
      <div className="flex flex-col sm:flex-row justify-center gap-10 mt-10">
        {packages.slice(3).map((pkg, index) => (
          <div key={index} className="flex-1 max-w-[500px]">
            <PackageCard pkg={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
