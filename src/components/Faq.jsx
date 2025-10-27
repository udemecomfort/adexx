import React from "react";
import FAQCard from "./FAQCard";

const Faq = () => {
  return (
    <div className="py-16  flex flex-col items-center">
      
      <div className="max-w-[800px] text-center mb-10">
        <p className="text-[16px] font-semibold mb-4 py-2 px-5 rounded-xl text-black bg-gray-100 shadow-md inline-block">
          FAQs
        </p>
        <h2 className="text-3xl font-bold mb-4">
          Still Curious about <span className="text-[#fa1d04]">Adex</span>? <br /> Let's Unpack the Core
        </h2>
        <p className="text-[25px] font-[400] text-gray-700 leading-relaxed max-w-[900px] mx-auto">
          ADEX is your trusted local provider serving Vancouver, BC and the Lower Mainland for professional driving
          instruction and reliable designated driver services. Our certified driving school offers tailored lessons for
          new drivers (N and L), including complete training packages and road test preparation. We also serve businesses
          with corporate driver training programs. In addition, our designated driver service ensures you and your vehicle
          get home safely—perfect for events, vehicle relocations, or errands. At ADEX, safety, convenience, and
          professionalism are at the heart of everything we do.
        </p>
      </div>

      {/* FAQ Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 px-[70px]">
        <FAQCard
          title="How does the Designated Driver service work?"
          description="Our designated drivers arrive at your pickup location, drive you safely to your destination in your own vehicle, and ensure you get home securely. Whether it’s after a night out, a special event, or for vehicle relocation, we handle the driving so you don’t have to."
        />
        <FAQCard
          title="Do I need to book in advance, or can I request a driver on short notice?"
          description="We recommend booking in advance to secure availability, especially during peak times like weekends and holidays. However, we do accept last-minute requests, and we’ll do our best to accommodate your needs."
        />
        <FAQCard
          title="Can I book a designated driver for multiple stops?"
          description="Yes! Whether you need to pick up friends, drop someone off, or make multiple stops along the way, we can accommodate your request. Just let us know your itinerary when booking."
        />
        <FAQCard
          title="Are your drivers insured and licensed?"
          description="Absolutely. All our designated drivers are fully licensed, experienced, and vetted for professionalism and safety. Your vehicle and personal safety are our top priorities."
        />
        <FAQCard
          title="Are your designated drivers licensed?"
          description="Yes! All our designated drivers are fully licensed, highly experienced, and carefully vetted to ensure the highest standards of professionalism and safety. Your vehicle and your safety are our top priorities."
        />
      </div>
    </div>
  );
};

export default Faq;
