import React from "react";

const LicenseSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 text-center mt-[395px] md:mt-[465px]">
      <h2 className="text-3xl md:text-3xl font-bold mb-10">
        Your License, Your Freedom—<br className="md:hidden" />
        Let’s Make <br className="hidden md:block" />it Happen!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-semibold mb-3">Prepare for Road Tests</h3>
          <ul className="list-disc list-inside text-left text-gray-700 text-[15px]">
            <li>Class 7 (“N” license)</li>
            <li>Class 5 (full license)</li>
          </ul>
        </div>
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-semibold mb-3">Language</h3>
          <ul className="list-disc list-inside text-left text-gray-700 text-[15px]">
            <li>English</li>
          </ul>
        </div> 
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-semibold mb-3">Lesson Hours</h3>
          <ul className="list-disc list-inside text-left text-gray-700 text-[15px]">
            <li>Available 7 AM – 7 PM, any day of the week</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-semibold mb-3">Friendly Instructors</h3>
          <ul className="list-disc list-inside text-left text-gray-700 text-[15px] leading-relaxed">
            <li>
              Learn from a diverse team of experienced, patient, and approachable
              instructors who are committed to making learning accessible and supporting
              your success every step of the way.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LicenseSection;
