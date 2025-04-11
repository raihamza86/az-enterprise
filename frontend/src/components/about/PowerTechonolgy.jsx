import React from 'react';
import { TiTick } from "react-icons/ti";
import { IoIosPlay } from "react-icons/io";
import { FiVideoOff } from "react-icons/fi";

// 👉 Dummy data for bullet points
const bulletPoints = [
  'Seamless Solutions & Digital',
  'Experience the difference',
  'Opening doors to your future',
  'The Art of Tech, Perfected',
];

// 👉 Dummy data for feature cards
const features = [
  {
    title: 'Professional',
    desc: 'professional Engineers play',
    image: '/about/pt3.png',
  },
  {
    title: 'DataSense',
    desc: 'professional Engineers play',
    image: '/about/pt4.png',
  },
];

const PowerTechonolgy = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 md:mt-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm text-blue-600 font-semibold uppercase mb-2">About Us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            We're Leading The <br className="hidden md:block" />
            Power Of Technology
          </h2>
          <p className="text-gray-600 text-md font-normal mt-4 max-w-2xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra, nostra mattis hendrerit proin mollis pretium facilisi in ligula
          </p>

          {/* Bullet Points Mapped */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm text-[#364153]">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <TiTick className="text-white w-5 h-5 bg-blue-500 p-1 rounded-full" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className='border border-t mt-10 text-gray-200'></div>

          {/* Feature Cards Mapped */}
          <div className="grid grid-cols-2 gap-4 mt-7">
            {features.map((feature, index) => (
              <div key={index} className="py-6 px-4 hover:shadow-md transition">
                <div className="flex flex-col items-start gap-2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-18 h-18 transform transition-transform duration-500 ease-in-out hover:rotate-360"
                  />
                  <h3 className="text-blue-500 text-lg text-start font-semibold">{feature.title}</h3>
                  <p className="text-gray-500 text-start text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Top Image with Play Button */}
          <div className="relative overflow-hidden rounded-xl w-[80%] mx-auto">
            <img
              src="/about/pt1.jpg"
              alt="Tech Leader"
              className="w-full h-auto object-cover rounded-lg"
            />
            <button className="group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full text-white z-20">
              <div className="absolute inset-0 z-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out bg-gradient-to-b from-blue-300 to-blue-200"></div>
              <IoIosPlay className="relative z-10 text-3xl text-white group-hover:animate-spin-slow" />
            </button>
          </div>

          {/* Bottom Image with Label */}
          <div className="relative mt-6 rounded-xl overflow-hidden md:ml-6">
            <img
              src="/about/pt2.jpg"
              alt="Daily Activity"
              className="w-[85%] h-auto object-cover rounded-lg mx-auto translate-x-4"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 text-sm text-gray-700 px-4 py-3 rounded-lg shadow flex items-center">
              <FiVideoOff className="mr-2 text-2xl text-blue-500" />
              <div>
                <strong>Daily Activity</strong><br />
                <span className="text-gray-500 text-xs">Lorem in Japan</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PowerTechonolgy;
