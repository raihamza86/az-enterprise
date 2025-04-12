import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "Software Engineer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/about/ct1.png"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Product Manager",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "/about/ct2.png"
    },
    {
        id: 3,
        name: "Mark Wilson",
        position: "UX Designer",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/about/ct3.png"
    },
    {
        id: 4,
        name: "Romain Regine",
        position: "UX Designer",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/about/ct4.jpg"
    },
];

function TestimonialCards() {
    return (
        <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-4 mb-6">
                <button className="testimonial-prev px-4 py-2 bg-[#e6e9f9] hover:bg-[#317EFE] text-[#317EFE] hover:text-white rounded-full hover:cursor-pointer"><FaArrowLeft /></button>
                <button className="testimonial-next p-4 bg-[#e6e9f9] hover:bg-[#317EFE] text-[#317EFE] hover:text-white rounded-full hover:cursor-pointer"><FaArrowRight /></button>
            </div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: '.testimonial-prev',
                    nextEl: '.testimonial-next',
                }}
                loop={true}
                className="w-full"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="h-full flex flex-col justify-between border border-transparent hover:border-blue-500 hover:shadow-2xl transition-all duration-300 bg-white rounded-xl p-6 hover:cursor-pointer">
                            {/* Star Rating */}
                            {/* <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <BsStarFill key={i} className="text-yellow-400 text-md" />
                                ))}
                            </div> */}

                            {/* Description */}
                            <p className="text-gray-600 flex-grow leading-relaxed mb-6">
                                {testimonial.description}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default TestimonialCards;
