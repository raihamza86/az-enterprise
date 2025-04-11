import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

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

const ClientTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = testimonials.slice(currentIndex, currentIndex + 2);

  const handleNext = () => {
    if (currentIndex + 2 < testimonials.length) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-3xl font-bold text-blue-500 text-center md:text-start">Testimonial</h3>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 gap-4">
            <h2 className="text-3xl md:text-5xl text-center md:text-start font-bold text-gray-800  px-4 py-2 rounded-md md:w-[40%]">
              Our Client's Review About Us
            </h2>
            <div className="flex gap-6 text-gray-600">
              <FaArrowLeft
                onClick={handlePrev}
                className={`text-2xl cursor-pointer hover:text-blue-500 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
              />
              <FaArrowRight
                onClick={handleNext}
                className={`text-2xl cursor-pointer hover:text-blue-500 ${currentIndex + 2 >= testimonials.length ? 'opacity-30 cursor-not-allowed' : ''}`}
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
          {visibleCards.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <BsStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
                <AiOutlineUser className="text-2xl text-gray-400" />
              </div>
              <div className="mt-4">
                <p className="text-xl font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
                <p className="mt-4 text-gray-600">{testimonial.description}</p>
              </div>
              <div className="mt-4 flex justify-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
