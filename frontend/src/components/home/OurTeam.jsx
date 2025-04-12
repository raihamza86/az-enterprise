import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const teamMembers = [
    { id: 1, name: 'John Doe', role: 'UI/UX Designer', img: '/home/team-1.jpg' },
    { id: 2, name: 'Jane Smith', role: 'Frontend Developer', img: '/home/team-2.jpg' },
    { id: 3, name: 'Mike Ross', role: 'Backend Engineer', img: '/home/team-3.jpg' },
    { id: 4, name: 'Emily Davis', role: 'Product Manager', img: '/home/team-2.jpg' },
];

function OurTeam() {
    return (
        <div className="my-8 px-4 md:px-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
                <span className="text-[#317EFE] font-semibold whitespace-nowrap">OUR TEAM MEMBER</span>
                <div className="h-px bg-[#317EFE] w-12 md:w-16"></div>
            </div>
            <h2 className="text-start my-6 md:text-5xl font-bold leading-tight">
                Meet Our Experienced <br />
                Professional IT Employees
            </h2>

            {/* Carousel Navigation Buttons */}
            <div className="flex justify-end gap-4 mb-4">
                <button className="team-prev px-4 py-2 bg-[#e6e9f9] hover:bg-[#317EFE] text-[#317EFE] hover:text-white rounded-full hover:cursor-pointer"><FaArrowLeft /></button>
                <button className="team-next p-4 bg-[#e6e9f9] hover:bg-[#317EFE] text-[#317EFE] hover:text-white rounded-full hover:cursor-pointer"><FaArrowRight /></button>
            </div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation={{
                    prevEl: '.team-prev',
                    nextEl: '.team-next',
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="w-full"
            >
                {teamMembers.map((member) => (
                    <SwiperSlide key={member.id}>
                        <div className="bg-white shadow-md rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="relative overflow-hidden">
                                <img src={member.img} alt={member.name} className="w-full h-72 object-cover" />
                                <div className="absolute inset-0 bg-[#317efeb8] flex flex-col gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                    {/* Slide-in Text */}
                                    <div className="transform translate-y-8 group-hover:translate-y-0 transition duration-500 text-center">
                                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                        <p className="text-sm text-gray-200">{member.role}</p>
                                    </div>

                                    {/* Social Icons */}
                                    <div className="flex gap-3 transform translate-y-12 group-hover:translate-y-0 transition duration-500 delay-100">
                                        <Link to="#" className="bg-white p-2 rounded-full hover:bg-[#317EFE] hover:text-white text-[#317EFE] transition">
                                            <FaFacebookF />
                                        </Link>
                                        <Link to="#" className="bg-white p-2 rounded-full hover:bg-[#317EFE] hover:text-white text-[#317EFE] transition">
                                            <FaTwitter />
                                        </Link>
                                        <Link to="#" className="bg-white p-2 rounded-full hover:bg-[#317EFE] hover:text-white text-[#317EFE] transition">
                                            <FaLinkedinIn />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default OurTeam;
