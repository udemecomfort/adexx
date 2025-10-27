import React from 'react'
import imgbig1 from "../assets/womaninfo.png"
import imgbig2 from "../assets/maninfo.png"
import firstellipse from "../assets/ellipseInfo1.png"
import secondellipse from "../assets/ellipseinfo2.png"

const InfoDS = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center px-5 md:px-20 py-5 gap-8'>
            <div className=''>
                <div className='relative flex justify-center mb-140 md:mb-0 '>
                    <img src={imgbig2} alt="" className='w-[550px]' />
                    <div className='absolute bg-[#FA1D04] text-white py-10 px-4 h-[650px] w-[500px] top-70 flex flex-col'>
                        <div>
                            <img src={firstellipse} alt="" className='absolute bottom-137' />
                            <h1 className='text-2xl font-semibold mb-2 mt-15'>Expert Guidance</h1>
                            <p className='mb-7'>Benefit from proven teaching techniques tailored to your needs,
                                whether you’re a beginner or brushing up on your skills for the
                                next road test..</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold mb-2'>Prepare for Road Tests</h1>
                            <p className='mb-7'>Master the skills needed to excel in ICBC’s Class 7 (“N” license)
                                and Class 5 (full license) road tests. Our lessons are structured
                                to build confidence and ensure you’re test-ready.</p>
                        </div>
                          <div>
                            <h1 className='text-2xl font-semibold mb-2'> Convenient Pick-Up and Drop-Off</h1>
                            <p className='mb-6'>

                                Save time with pick-up and drop-off services from your home,
                                school, or work—making lessons stress-free and accessible.
                                We work around your schedule. Choose from a variety of lesson
                                times to fit your busy life, including evenings and weekends..</p>
                        </div>
                       
                    </div>
                </div>

            </div>
            <div className=''>
                <div className='relative flex justify-center '>
                    <img src={imgbig1} alt="" className='w-[550px]' />
                    <div className='absolute bg-[#FA1D04] text-white py-10 px-4 h-[500px] w-[500px] top-70 flex flex-col'>
                        <div>
                            <img src={firstellipse} alt="" className='absolute bottom-100' />
                            <h1 className='text-2xl font-semibold mb-2 mt-15'>Expert Guidance</h1>
                            <p className='mb-7'>Benefit from proven teaching techniques tailored to your needs,
                                whether you’re a beginner or brushing up on your skills for the
                                next road test..</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold mb-2'>Prepare for Road Tests</h1>
                            <p className='mb-6'>Master the skills needed to excel in ICBC’s Class 7 (“N” license)
                                and Class 5 (full license) road tests. Our lessons are structured
                                to build confidence and ensure you’re test-ready.</p>
                        </div>
                      
                    </div>
                </div>

            </div>



        </div>
    )
}

export default InfoDS