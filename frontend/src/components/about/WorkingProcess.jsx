import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Generate Ideas',
    image: '/about/wk1.png',
    description: "Corporate restructuring refers to the process of reorganizing a new company's venues out.",
  },
  {
    id: 2,
    title: 'Market Research',
    image: '/about/wk2.png',
    description: "Corporate restructuring refers to the process of reorganizing a new company's venues out.",
  },
  {
    id: 3,
    title: 'Product Create',
    image: '/about/wk3.png',
    description: "Corporate restructuring refers to the process of reorganizing a new company's venues out.",
  },
];

const WorkingProcess = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#317EFE]">Work Process</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-2"></div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#14203A] mt-3 mx-auto  w-[70%] lg:w-[40%]">
            Our Working Process How We Do
          </h1>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative group overflow-hidden rounded-xl p-6 transition-all duration-500 bg-[#131A2A] hover:bg-gradient-to-t hover:from-blue-900 hover:to-[#131a2a] cursor-pointer"
            >
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-12 h-12 object-contain transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-white mt-6 text-sm sm:text-base">{step.description}</p>
              <div className="absolute top-4 left-4 text-4xl font-bold text-blue-400 opacity-10 group-hover:opacity-20 transition-all duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
