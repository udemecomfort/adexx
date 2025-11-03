import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/infods4.png";
import img2 from "../assets/info3.png";

const WhyChooseAdex = () => {
  const cards = [
    {
      num: "0.1",
      title: "Expert Guidance You Can Trust",
      desc: "Our certified instructors combine years of experience with patience and professionalism to make every learner feel confident and supported.",
    },
    {
      num: "0.2",
      title: "Modern, Dual-Control Training Vehicles",
      desc: "We use the latest, well-maintained vehicles with dual controls for maximum safety and peace of mind.",
    },
    {
      num: "0.3",
      title: "Free Pick-Up & Drop-Off On Your Schedule",
      desc: "We work with your busy schedule — offering free pick-up and drop-off within our service areas.",
    },
    {
      num: "0.4",
      title: "Friendly, Certified Instructors",
      desc: "Our certified instructors are patient, approachable, and supportive — creating a stress-free learning experience.",
    },
    {
      num: "0.5",
      title: "Defensive Driving That Keeps You Safe",
      desc: "We teach beyond the test — helping you handle real-world driving situations confidently and responsibly.",
    },
    {
      num: "0.6",
      title: "Flexible Scheduling That Fits Your Lifestyle",
      desc: "Morning, evening, or weekend lessons — we offer flexible options to help you succeed on your own time.",
    },
    {
      num: "0.7",
      title: "Practical Lessons That Build Confidence",
      desc: "We prepare you for more than exams — we build habits that keep you safe in all road conditions.",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-20 text-center">
      {/* ABOUT BUTTON */}
      <motion.button
        className="bg-gray-200 text-gray-800 px-5 py-2 rounded-full mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.button>

      {/* HEADING */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Why Choose <span className="text-red-600">Adex</span> Driving School?
      </motion.h2>

      {/* PARAGRAPHS */}
      <motion.div
        className="max-w-3xl mx-auto text-gray-700 space-y-4 text-[15px] leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>
          At Adex Driving School, our mission is simple: to empower individuals
          with the skills, knowledge, and confidence to drive safely and
          responsibly.
        </p>
        <p>
          We believe learning to drive is more than just passing a test — it’s
          about building lifelong habits that promote safety, responsibility,
          and self-assurance on the road.
        </p>
        <p>
          Our approach combines professionalism, patience, and personalized
          instruction in a supportive environment where every student feels
          valued and respected. Whether you're just starting out or returning to
          driving after a break, we’re here to guide you with care and
          expertise.
        </p>
        <p>
          With certified instructors, modern dual-control vehicles, and a
          commitment to excellence, we help our students become thoughtful,
          defensive drivers — ready for the road ahead.
        </p>
        <p className="font-semibold">
          At Adex, we don’t just teach driving. We build confident drivers for
          life.
        </p>
      </motion.div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 gap-y-0 mt-0 justify-items-center text-left">
  {cards.map((item, index) => (
    <motion.div
      key={index}
      className="max-w-[300px] rounded-2xl p-6 transition-all duration-300"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-red-600 text-[40px] font-bold mb-2">{item.num}</h3>
      <h4 className="font-semibold mb-2">{item.title}</h4>
      <p className="text-gray-600 text-sm">{item.desc}</p>
    </motion.div>
  ))}
</div>


      {/* BOTTOM IMAGES */}
      <motion.div
        className="flex justify-center gap-8 mt-5 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <img src={img1} alt="L sign" className="object-contain w-[200px] md:w-[250px]" />
        <img src={img2} alt="Green N sign" className="object-contain w-[200px] md:w-[250px]" />
      </motion.div>
    </section>
  );
};

export default WhyChooseAdex;
