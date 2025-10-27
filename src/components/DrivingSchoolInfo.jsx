// src/components/DrivingSchoolInfo.js
import React from "react";
import imageLesson from "../assets/Rectangle 93.png"; 
import imageStudent from "../assets/Rectangle 93.png";

const DrivingSchoolInfo = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ===== Top Section: Two Service Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Card */}
          <div className="bg-red-600 rounded-lg shadow-xl overflow-hidden flex flex-col">
            <img 
              src={imageLesson} 
              alt="Driving instructor guiding a student" 
              className="w-full h-64 object-cover" 
            />
            <div className="p-6 md:p-8 text-white flex-grow">
              <h3 className="text-2xl font-bold mb-3">Expert Guidance</h3>
              <p className="mb-6 text-sm opacity-90">
                Learn with proven teaching techniques tailored to your needs — 
                whether you're a beginner or brushing up for your next road test.
              </p>

              <h3 className="text-2xl font-bold mb-3">Prepare for Road Tests</h3>
              <p className="mb-6 text-sm opacity-90">
                Master the skills needed to excel in ICBC's Class 7 ("L" license) 
                and Class 5 (full license) road tests. Our lessons are structured 
                to build confidence and ensure you're test-ready.
              </p>

              <h3 className="text-2xl font-bold mb-3">Convenient Pick-Up and Drop-Off</h3>
              <p className="text-sm opacity-90">
                Save time with pick-up and drop-off services from your school or work — 
                making lessons stress-free and accessible. We work around your schedule 
                with flexible times, including evenings and weekends.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-red-600 rounded-lg shadow-xl overflow-hidden flex flex-col">
            <img 
              src={imageStudent} 
              alt="Happy student giving thumbs up in a car" 
              className="w-full h-64 object-cover" 
            />
            <div className="p-6 md:p-8 text-white flex-grow">
              <h3 className="text-2xl font-bold mb-3">Defensive Driving Techniques</h3>
              <p className="mb-6 text-sm opacity-90">
                Learn to drive safely and confidently with a focus on proactive, 
                defensive techniques that keep you and others safe on the road.
              </p>

              <h3 className="text-2xl font-bold mb-3">Modern Training Vehicles</h3>
              <p className="text-sm opacity-90">
                Practice in clean, well-maintained, dual-controlled vehicles 
                for a safe and comfortable learning experience.
              </p>
            </div>
          </div>

        </div>
        {/* ===== End of Top Section ===== */}

        {/* ===== Middle Slogan ===== */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 my-16">
          Your License, Your Freedom — Let's Make It Happen!
        </h2>

        {/* ===== Bottom Info Boxes ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="border border-gray-300 rounded-lg p-6">
            <h4 className="font-semibold text-gray-700 mb-3 text-lg">Prepare for Road Tests</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Class 7 ("L" license)</li>
              <li>Class 5 (full license)</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-lg p-6">
            <h4 className="font-semibold text-gray-700 mb-3 text-lg">Language</h4>
            <p className="text-sm text-gray-600">English</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-6">
            <h4 className="font-semibold text-gray-700 mb-3 text-lg">Lesson Hours</h4>
            <p className="text-sm text-gray-600">
              Available 7 AM - 7 PM, any day of the week
            </p>
          </div>

          <div className="border border-gray-300 rounded-lg p-6">
            <h4 className="font-semibold text-gray-700 mb-3 text-lg">Friendly Instructors</h4>
            <p className="text-sm text-gray-600">
              Learn from a diverse team of experienced, patient, and approachable 
              instructors committed to making driving accessible and supporting 
              your success every step of the way.
            </p>
          </div>
        </div>
        {/* ===== End of Bottom Section ===== */}

      </div>
    </div>
  );
};

export default DrivingSchoolInfo;
