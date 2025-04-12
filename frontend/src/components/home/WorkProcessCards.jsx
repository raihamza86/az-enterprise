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

function WorkProcessCards() {
    return (
        <div>
            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className="relative group overflow-hidden rounded-xl p-6 min-h-[320px] flex flex-col justify-between transition-all duration-500 bg-[#131A2A] hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-600/30 cursor-pointer"
                    >
                        {/* Animated Overlay */}
                        <div className="absolute inset-0 bg-[#317efeb8] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none z-0" />

                        {/* Background Step Number */}
                        <div className="absolute top-4 left-4 text-5xl text-white opacity-100 group-hover:opacity-20 transition-all duration-300 z-0">
                            {String(index + 1).padStart(2, '0')}
                        </div>

                        {/* Content */}
                        <div className="z-10 relative">
                            <div className="flex items-center gap-4 mt-16">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-12 h-12 object-contain transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
                                />
                                <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
                            </div>
                            <p className="text-white mt-6 text-sm sm:text-base transition-all duration-500 group-hover:translate-y-[-4px]">
                                {step.description}
                            </p>
                        </div>

                        {/* Optional bottom hover accent */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkProcessCards;
