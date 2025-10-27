import React from "react";
import SectionProps from "../Components/SectionProps";
import men from "../assets/Rectangle 6.png";
import car from "../assets/Rectangle 15.png";

const Section = () => {
  const text1 = [
    "Party, Pub, Wine tasting Pick up and Drop-off",
    " Driver for Hire Service",
    "Vehicle Relocation within and out of Province",
    "Vehicle Transport to and from Dealership and ",
    " auto Repair Shops",
  ];

  const text2 = [
    "Expert Guidance",
    "Prepare for Road Tests",
    "Convenient Pick-Up and Drop-Off",
    "Defensive Driving Techniques",
    "Modern Training Vehicles",
  ];

  return (
    <div>
      <SectionProps
        image={men}
        overlayText="DESIGNATED DRIVER"
        textContent={text1}
        reverse={false}
        primaryButtonText="Request a Booking"
        secondaryButtonText="View More"
      />

      <SectionProps
        image={car}
        overlayText="DRIVING SCHOOL"
        textContent={text2}
        reverse={true}
        primaryButtonText="Apply Now"
        secondaryButtonText="View More"
        customTextClass="text-right"
      />
    </div>
  );
};

export default Section;
