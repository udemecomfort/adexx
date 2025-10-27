import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const FlexDEProps = ({ items = [], image, title, heading }) => {
  return (
    <div className="relative bg-gray-100 w-full md:w-[340px] h-[75vh] text-[13px] font-semibold rounded-[40px] overflow-hidden shadow-md px-5 py-6 pt-16 flex flex-col justify-between">
      {/* Title */}
      <h2 className="text-[18px] absolute top-0 left-0 bg-[#fa1d04] text-white inline-block rounded-tl-[40px] rounded-br-[50px] py-3 px-4">
        {title}
      </h2>

      {/* Heading */}
      <div>
        <p className="text-[14px] leading-relaxed text-gray-800 mb-4 w-[90%] m-auto text-center">
          {heading}
        </p>

        {/* List of services */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <VscDebugBreakpointLog className="text-[#fa1d04] text-lg mt-1" />
              <p className="text-[13px] leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="mt-4">
        <img
          src={image}
          alt={title}
          className="rounded-2xl w-full h-[160px] object-cover"
        />
      </div>
    </div>
  );
};

export default FlexDEProps;
