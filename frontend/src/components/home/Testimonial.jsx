import React from 'react'
import TestimonialCards from "./TestinomialCards";
import IncrementSection from './IncrementSection';

function Testimonial() {
    return (
        <div className='my-8 md:px-8 p-4'>
            <div className="flex items-center gap-4 justify-start">
                <span className="text-[#317EFE] font-semibold whitespace-nowrap">TESTIMONIAL</span>
                <div className="h-px bg-[#317EFE] w-12 md:w-20"></div>

            </div>
            <h2 className="text-start my-6 md:text-5xl">Our Client's Review  <br />  About Us</h2>

            <div className="relative">
                <div
                    className="absolute inset-0 z-0"
                    aria-hidden="true"
                ></div>
                <div
                    className="relative z-10 md:px-12 p-4 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/home/testimonial-bg.png')`,
                    }}
                >
                    <TestimonialCards />
                    <IncrementSection />
                </div>
            </div>

        </div>
    )
}

export default Testimonial