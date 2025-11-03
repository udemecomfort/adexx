import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsProps = ({ rating, text, name }) => {
    return (
        <div className=" border border-gray-400 rounded-2xl p-6 w-[270px] md:[360px] text-left transition duration-300">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
                <p className="text-[15px] font-semibold">{rating}.0</p>
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
            </div>
            <hr className="border-t-2 border-gray-400 mb-3" />
            {/* Testimonial text */}
            <p className="text-gray-700 text-[18px] leading-relaxed mb-4 italic">
                “{text}”
            </p>

            {/* Divider line */}


            {/* Name */}
            <p className="text-[18px] font-medium text-gray-800">{name}</p>
        </div>
    );
};

export default TestimonialsProps;
