import React from 'react';
import Pricing from './Pricing';
import img1 from '../assets/PricingDS.png';

const PricingProps = () => {
  const packages = [
    {
      img: img1,
      price: '$100',
      title: 'Basic Package',
      duration: '1.5 Hours',
      description:
        'Ideal for drivers needing a quick skill check, confidence boost, or instructor evaluation. Can be upgraded to a full package. Includes:',
      features: [
        '1.5 hours of in-car instruction',
        'Pickup and drop-off within service area',
        'Targeted coaching (parking, merging, intersections)',
        'Flexible scheduling',
      ],
    },
    {
      img: img1,
      price: '$250',
      title: 'Starter Package',
      duration: '3 Hours',
      description:
        'Perfect for beginners who want to build confidence behind the wheel with structured lessons.',
      features: [
        '3 hours of in-car instruction',
        'Progress tracking and feedback',
        'Flexible lesson times',
        'Instructor support materials',
      ],
    },
    {
      img: img1,
      price: '$450',
      title: 'Intermediate Package',
      duration: '5 Hours',
      description:
        'Designed for those preparing for their driving test or looking to refine advanced techniques.',
      features: [
        '5 hours of in-car instruction',
        'Test simulation and evaluation',
        'Route familiarity training',
        'Advanced maneuver practice',
      ],
    },
    {
      img: img1,
      price: '$700',
      title: 'Advanced Package',
      duration: '8 Hours',
      description:
        'Comprehensive course to perfect all driving skills for test readiness and confidence.',
      features: [
        '8 hours of in-car training',
        'Full course materials included',
        'Flexible weekday and weekend classes',
        'Mock test evaluation',
      ],
    },
    {
      img: img1,
      price: '$900',
      title: 'Pro Package',
      duration: '10 Hours',
      description:
        'The ultimate driver training experience with personalized coaching and full test prep.',
      features: [
        '10 hours of in-car training',
        'Advanced defensive driving',
        'Unlimited feedback sessions',
        'Priority scheduling',
      ],
    },
  ];

  return (
    <div className="text-center mb-16">
      <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm mb-3">
        Pricing Policy
      </button>
      <h2 className="text-3xl font-bold mb-2">
        <span className="text-black">››››</span> Affordable Services{" "}
        <span className="text-black">‹‹‹‹</span>
      </h2>
      <p className="text-lg font-semibold mb-6">
        Professional Driving Instruction in Metro Vancouver & the Okanagan
      </p>

      <p className="text-black max-w-4xl mx-auto text-[18px] leading-relaxed mb-12">
        At ADEX Driving School, we offer tailored instruction packages designed for new,
        returning, and test-ready drivers. All sessions include pickup and drop-off within
        our service areas and are delivered by experienced, ICBC-compliant instructors.
        Flexible scheduling is available, including evenings and weekends.
      </p>

      <div className="flex flex-wrap justify-center gap-12">
        {packages.map((pkg, index) => (
          <Pricing key={index} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default PricingProps;
