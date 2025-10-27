import React from "react";

const SectionProps = ({
  image,
  overlayText = "",
  textContent,
  reverse = false,
  showButtons = true,
  primaryButtonText = "Request a Booking",
  secondaryButtonText = "View More",
  customTextClass = "", // allows right-alignment or extra styling
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-20 px-6 md:px-20 py-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image with overlay text */}
      <div className="relative flex w-full md:w-1/2">
        <img src={image} alt="Section visual" className="w-full h-auto" />
        {overlayText && (
          <p className="absolute  bg-[#fa1d04] py-3 px-10 text-white text-[16px] font-semibold rounded-tl-[55px] rounded-br-[55px] shadow-lg">
            {overlayText}
          </p>
        )}
      </div>

      {/* Text Content and Buttons */}
      <div className={`w-full md:w-1/2 mt-8 md:mt-0 md:${customTextClass}`}>
        {/* Handle array or string */}
        {Array.isArray(textContent) ? (
          <div
            className={`space-y-2 text-[18px] md:text-[22px] font-medium `}
          >
            {textContent.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        ) : (
          <p
            className={`whitespace-pre-line text-[18px] md:text-[22px] font-medium leading-relaxed mb-6 max-w-[470px] ${customTextClass}`}
          >
            {textContent}
          </p>
        )}

        {/* Buttons */}
        {showButtons && (
          <div className="{`flex flex-wrap gap-4 mt-6  ${customTextClass} `}">
            <button className="bg-[#fa1d04] py-2 px-8 text-white text-[17px] font-semibold rounded-3xl">
              {primaryButtonText}
            </button>
            <button className="bg-gray-100 text-black px-6 py-2 text-[17px] font-semibold rounded-3xl">
              {secondaryButtonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionProps;
