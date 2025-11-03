import React from 'react'
import imgbig1 from "../assets/womaninfo.png"
import imgbig2 from "../assets/maninfo.png"
import firstellipse from "../assets/ellipseInfo1.png"
import secondellipse from "../assets/ellipseinfo2.png"

const InfoDS = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center md:justify-around items-start px-4 sm:px-6 md:px-20 py-6 gap-12 w-full md:text-left">

            {/* Right Card */}
            <div className="w-full md:w-auto flex justify-center mb-[600px] md:mb-[700px] lg:mb-0">


                <div className="relative w-full max-w-[550px] ">
                    <img
                        src={imgbig2}
                        alt=""
                        className="w-full h-auto object-cover"
                    />

                    <div className="absolute bg-[#FA1D04] text-white py-6 px-4 w-full max-w-[500px] top-[calc(100%-1%)] sm:top-[calc(100%-160px)] lg:top-[calc(100%-60px)] left-1/2 transform -translate-x-1/2 flex flex-col space-y-6">


                        <div className="relative">
                            <img src={secondellipse} alt="" className='absolute -top-17 sm:-top-21 left-6 w-20 md:w-24' />
                            <h1 className='text-2xl font-semibold mb-2 mt-4'>Expert Guidance</h1>
                            <p className='mb-4 text-sm '>
                                Benefit from proven teaching techniques tailored to your needs,
                                whether you’re a beginner or brushing up on your skills for the
                                next road test..
                            </p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold mb-2'>Prepare for Road Tests</h1>
                            <p className='mb-4 text-sm'>
                                Master the skills needed to excel in ICBC’s Class 7 (“N” license)
                                and Class 5 (full license) road tests. Our lessons are structured
                                to build confidence and ensure you’re test-ready.
                            </p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold mb-2'>Convenient Pick-Up and Drop-Off</h1>
                            <p className='mb-4 text-sm sm:text-base'>
                                Save time with pick-up and drop-off services from your home,
                                school, or work—making lessons stress-free and accessible.
                                We work around your schedule. Choose from a variety of lesson
                                times to fit your busy life, including evenings and weekends.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Left Card */}
            <div className='w-full md:w-auto flex justify-center'>
                <div className='relative w-full max-w-[550px]'>
                    <img src={imgbig1} alt="" className='w-full h-auto object-cover' />
                    <div className="absolute bg-[#FA1D04] text-white py-6 px-4 w-full max-w-[500px] top-[calc(100%-1%)] sm:top-[calc(100%-160px)] lg:top-[calc(100%-60px)] left-1/2 transform -translate-x-1/2 flex flex-col space-y-6">

                        <div className="relative">
                            <img src={firstellipse} alt="" className='absolute -top-17 sm:-top-21 left-6 w-20 md:w-24' />
                            <h1 className='text-2xl font-semibold mb-2 mt-4'>Defensive Driving Techniques</h1>
                            <p className='mb-4 text-sm sm:text-base'>
                                Learn to drive safely and confidently with a focus
                                on defensive driving techniques that keep you and
                                others safe on the road.
                            </p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold mb-2'>Modern Training Vehicles</h1>
                            <p className='mb-4 text-sm sm:text-base'>
                                Practice in clean, well-maintained, dual-controlled
                                vehicles for a safe and comfortable learning experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoDS
