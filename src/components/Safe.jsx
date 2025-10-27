import React from 'react'
import orange from "../assets/orange-bg.png"
import car from "../assets/Car-Adex.png"
import white from "../assets/ADEX LOGO WHITE.png"


const Safe = () => {
    return (
        <div className="relative h-[50vh] md:h-[80vh] bg-[#fa1d04]">
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${orange})` }}
                aria-hidden="true"
            />
            <div className="flex">
                <div>
                    
                <h1 className="text-[80px] md:text-[50px] font-bold text-black px-18 pt-10 md:pt-20">
                    Easy safe Ride. <br /><span className="text-white">Upgrade your driving <br /> skills.</span>
                </h1>
                <img src={white} alt="" className='px-18 w-[400px]' />
                </div>

                
                <img
                    src={car}
                    alt="Car"
                    className="absolute bottom-0 right-0 w-[50vh] md:w-[80vh]"
                />

            </div>

        </div>
    )
}

export default Safe
