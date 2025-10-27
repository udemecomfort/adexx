import React from 'react'
import Map from '../assets/Map.png'


const MapDS = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center  my-10 px-4 md:px-20 gap-6 md:gap-29'>
                <img src={Map} alt="Map" className='' />
                <div className='flex flex-col'>
                    <h1 className='font-semibold text-[20px] mb-4 '>Areas We Serve for <br />Driving Instruction</h1>
                <p className='text-[20px] mb-4'>Metro Vancouver:</p>
                <ul>
                    <li className='text-[20px] list-disc pl-4'>Surrey</li>
                    <li  className='text-[20px] list-disc pl-4'>Langley</li>
                    <li  className='text-[20px] list-disc pl-4'>White Rock</li>
                    <li  className='text-[20px] list-disc pl-4'>Maple Rigde</li>
                    <li  className='text-[20px] list-disc pl-4'>Pitt Meadows</li>

                </ul>
                <p  className='text-[20px] mb-4'>Okanagan Region</p>
                <ul>
                    <li  className='text-[20px] list-disc pl-4'>Kelowna</li>
                    <li  className='text-[20px] list-disc pl-4'>West Kelowna</li>
                    <li  className='text-[20px] list-disc pl-4'>Lake Country</li>
                </ul>
                </div>
                
            </div>


        </div>
    )
}

export default MapDS