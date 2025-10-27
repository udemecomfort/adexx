import React from 'react'
import img from "../assets/PricingDS.png"
const Pricing = () => {
    return (
        <div>
            <div className="text-center mb-12">
                <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm mb-3">
                    Pricing Policy
                </button>
                <h2 className="text-3xl font-bold mb-2">
                    <span className="text-black">››››</span> Affordable Services{" "}
                    <span className="text-black">‹‹‹‹</span>
                </h2>
                <p className="text-lg font-semibold mb-2">
                    Professional Driving Instruction in Metro Vancouver & the Okanagan  </p>


                <p className="text-black max-w-4xl mx-auto text-[23px] leading-relaxed">
                    At ADEX Driving School, we offer tailored instruction packages designed for new,
                    returning, and test-ready drivers. All sessions include pickup and drop-off within
                    our service areas and are delivered by experienced, ICBC-compliant instructors.
                    Flexible scheduling is available, including evenings and weekends.
                </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center  mx-25'>
                <div className='flex flex-col px-0 md:px-10 mb-6 md:mb-12 '>
                    <div className='relative'>
                        <img src={img} alt="" className='' />
                        <h1 className='absolute font-semibold text-[25px] text-white top-27 left-39 text-center '>Basic Package <br /> 1.5 Hours</h1>
                        <div className='h-30 w-30 rounded-full bg-white absolute bottom-80 left-45 font  text-white'>
                            <p className='text-[25px] font-semibold text-[#FA1D04] absolute top-15 left-8'>$100 </p>
                        </div>
                    </div>
                    <div className='w-[500px] flex flex-col  px-10 md:px-20 py-10 gap-6'>
                        <h1 className='w-[300px text-[20px]'>Ideal for: Drivers needing a quick skill check, confidence boost, or instructor evaluation. Can be upgraded to a full package. Includes:</h1>
                        <ul className='list-disc pl-4'>
                            <li className='text-[20px]'>1.5 hours of in-car instruction</li>
                            <li className='text-[20px]'>Pickup and drop-off within service area</li>
                            <li className='text-[20px]'>Targeted coaching on specific concerns (e.g., parking, merging, intersections)</li>
                            <li className='text-[20px]'>Flexible scheduling</li>
                        </ul>
                    </div>
                    <div className="text-center mt-6">
                        <button className="bg-[#FA1D04] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#d81703] hover:shadow-lg transition-all duration-300 inline-block">
                            Get Started
                        </button>
                    </div>


                </div>
                <div className='flex flex-col px-0 md:px-10 mb-6 md:mb-12  '>
                    <div className='relative'>
                        <img src={img} alt="" className='' />
                        <h1 className='absolute font-semibold text-[25px] text-white top-27 left-37 text-center '>Test-Ready Package <br /> 4.5 Hours</h1>
                        <div className='h-30 w-30 rounded-full bg-white absolute bottom-80 left-45 font  text-white'>
                            <p className='text-[25px] font-semibold text-[#FA1D04] absolute top-15 left-8'>$100 </p>
                        </div>
                    </div>
                    <div className='w-[500px] flex flex-col  px-10 md:px-20 py-10 gap-6'>
                        <h1 className='w-[300px text-[20px]'>Ideal for: Students preparing for their ICBC road test.
                            A final polish before the big day.
                            Includes:</h1>
                        <ul className='list-disc pl-4'>
                            <li className='text-[20px]'>3 focused, intensive in-car lessons</li>
                            <li className='text-[20px]'>Pickup and drop-off within service area</li>
                            <li className='text-[20px]'>Emphasis on ICBC test expectations and evaluation criteria</li>
                            <li className='text-[20px]'>Maneuvering practice and rule-based review</li>
                            <li className='text-[20px]'>Mock road test with instructor feedback</li>
                            <li className='text-[20px]'>Optional car rental for test day</li>
                            <li className='text-[20px]'>Priority scheduling for students with upcoming test dates</li>
                        </ul>
                    </div>
                    <div className="text-center mt-6">
                        <button className="bg-[#FA1D04] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#d81703] hover:shadow-lg transition-all duration-300 inline-block">
                            Get Started
                        </button>
                    </div>

                </div>
                <div className='flex flex-col px-0 md:px-10 mb-6 md:mb-12  '>
                    <div className='relative'>
                        <img src={img} alt="" className='' />
                        <h1 className='absolute font-semibold text-[25px] text-white top-27 left-40 text-center '>Road Test Car <br /> Rental</h1>
                        <div className='h-30 w-30 rounded-full bg-white absolute bottom-80 left-45 font  text-white'>
                            <p className='text-[25px] font-semibold text-[#FA1D04] absolute top-15 left-8'>$100 </p>
                        </div>
                    </div>
                    <div className='w-[500px] flex flex-col  px-10 md:px-20 py-10 gap-6'>
                        <ul className='list-disc pl-4'>
                            <li className='text-[20px]'>Car Rental Only	$100</li>
                            <li className='text-[20px]'>Car Rental + 1-Hour Warm-Up Lesson	$200</li>
                        </ul>
                        <h1 className='w-[300px text-[20px]'>All vehicles are ICBC-approved and meet test-day standards.
                            Pickup and drop-off at the ICBC testing center included if requested.</h1>

                    </div>
                    <div className="text-center mt-6">
                        <button className="bg-[#FA1D04] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#d81703] hover:shadow-lg transition-all duration-300 inline-block">
                            Get Started
                        </button>
                    </div>

                </div>
                <div className='flex flex-col w-full items-center md:col-span-3 md:flex md:flex-row md:justify-center md:gap-10'>
                    <div className='flex flex-col px-0 md:px-10 mb-6 md:mb-12  '>
                        <div className='relative'>
                            <img src={img} alt="" className='' />
                            <h1 className='absolute font-semibold text-[25px] text-white top-27 left-36 text-center '>Brush-Up Package <br /> 10.5 Hour</h1>
                            <div className='h-30 w-30 rounded-full bg-white absolute bottom-80 left-45 font  text-white'>
                                <p className='text-[25px] font-semibold text-[#FA1D04] absolute top-15 left-8'>$100 </p>
                            </div>
                        </div>
                        <div className='w-[500px] flex flex-col  px-10 md:px-20 py-10 gap-6'>
                            <h1 className='w-[300px text-[20px]'>Ideal for: Drivers with prior experience or returning after a long break. Perfect for Canadian road rule updates, or skill-focused refreshers.
                                Includes:</h1>
                            <ul className='list-disc pl-4'>
                                <li className='text-[20px]'>10.5 hours of in-car instruction</li>
                                <li className='text-[20px]'>Pickup and drop-off within service area</li>
                                <li className='text-[20px]'>Initial skills assessment to identify focus areas</li>
                                <li className='text-[20px]'>Review of road rules and driving techniques</li>
                                <li className='text-[20px]'>In-depth practice of vehicle control and maneuvering</li>
                                <li className='text-[20px]'>Mock test session with performance feedback</li>
                                <li className='text-[20px]'>Road test preparation and support</li>
                                <li className='text-[20px]'>Resource sharing and learning materials</li>
                                <li className='text-[20px]'>Flexible scheduling available</li>
                            </ul>
                        </div>
                        <div className="text-center mt-6">
                            <button className="bg-[#FA1D04] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#d81703] hover:shadow-lg transition-all duration-300 inline-block">
                                Get Started
                            </button>
                        </div>

                    </div>
                    <div className='flex flex-col px-0 md:px-10 mb-6 md:mb-29  '>
                        <div className='relative'>
                            <img src={img} alt="" className='' />
                            <h1 className='absolute font-semibold text-[25px] text-white top-27 left-35 text-center '>Start Smart Package <br /> 15 Hours</h1>
                            <div className='h-30 w-30 rounded-full bg-white absolute bottom-80 left-45 font  text-white'>
                                <p className='text-[25px] font-semibold text-[#FA1D04] absolute top-15 left-8'>$100 </p>
                            </div>
                        </div>
                        <div className='w-[500px] flex flex-col  px-10 md:px-20 py-10 gap-6'>
                            <h1 className='w-[300px text-[20px]'>Ideal for: Beginners with no prior driving experience or access to a practice vehicle.
                                Designed to build confidence and road awareness from day one.
                                Includes:</h1>
                            <ul className='list-disc pl-4'>
                                <li className='text-[20px]'>15 hours of in-car instruction</li>
                                <li className='text-[20px]'>Pickup and drop-off within service area</li>
                                <li className='text-[20px]'>Basic road rules and traffic safety education</li>
                                <li className='text-[20px]'>Defensive driving strategies</li>
                                <li className='text-[20px]'>Core driving and parking techniques</li>
                                <li className='text-[20px]'>Mock road test</li>
                                <li className='text-[20px]'>Road test preparation and support</li>
                                <li className='text-[20px]'>Progress checklist and personalized feedback after each session</li>
                                <li className='text-[20px]'>Resource sharing to enhance learning</li>
                                <li className='text-[20px]'>Flexible lesson scheduling (including evenings/weekends)</li>
                            </ul>
                        </div>
                        <div className="text-center mt-6">
                            <button className="bg-[#FA1D04] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#d81703] hover:shadow-lg transition-all duration-300 inline-block">
                                Get Started
                            </button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Pricing