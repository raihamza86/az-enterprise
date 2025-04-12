import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative h-96 flex justify-center items-center">
      {/* Background Image */}
      <img
        src="/about/abouthero.png"
        alt="Visa Consultancy & Travel Solutions"
        className="w-full h-96 object-cover"
        loading="lazy"
      />

      {/* Semi-transparent Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A0D7FE]/70 to-[#F6FBFF]/70 flex flex-col justify-center items-center text-center px-4">
        <p className="text-[#14203A] text-2xl md:text-5xl font-semibold mb-2">Team Details</p>
        <h1 className="flex items-center gap-2 text-[#14203A] text-sm md:text-lg font-medium leading-tight max-w-xl mt-3">
          Home <IoIosArrowForward className="text-[#14203A]" /> <span className='text-[#317efe]'>Team Details</span>
        </h1>
      </div>
    </div>
  )
}

export default Hero;
