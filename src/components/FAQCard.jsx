import React from "react";

const FAQCard = ({ title, description }) => {
  return (
    <div className="px-1 py-1 w-full max-w-[530px] mx-auto border border-gray-300 rounded-xl ">
      <div className="p-5 rounded-lg ">
        <h6 className="text-[18px] font-semibold text-gray-800 mb-2">{title}</h6>
        <p className="text-[18px] text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FAQCard;
