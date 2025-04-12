import React, { useEffect, useRef, useState } from 'react';

const statsData = [
    {
        id: 1,
        title: 'Winning award',
        count: 106,
        suffix: '+',
        image: '/about/ai1.png',
    },
    {
        id: 2,
        title: 'Happy Clients',
        count: 106,
        suffix: 'k+',
        image: '/about/ai2.png',
    },
    {
        id: 3,
        title: 'Complete project',
        count: 265,
        suffix: '+',
        image: '/about/ai3.png',
    },
    {
        id: 4,
        title: 'Client review',
        count: 212,
        suffix: '+',
        image: '/about/ai4.png',
    },
];

const StatCard = ({ title, count, suffix, image }) => {
    const ref = useRef();
    const [currentCount, setCurrentCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const end = count;
                    const duration = 1000;
                    const increment = end / (duration / 20);

                    const counter = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCurrentCount(end);
                            clearInterval(counter);
                        } else {
                            setCurrentCount(Math.ceil(start));
                        }
                    }, 20);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [count, hasAnimated]);

    return (
        <div
            ref={ref}
            className="p-6 flex flex-col items-center justify-center gap-4 group w-full perspective-1000"
        >
            <img
                src={image}
                alt={title}
                className="md:h-20 md:w-20 bg-[#317EFE] text-white rounded-full p-4 transition-transform duration-700 transform group-hover:rotate-y-180"
                style={{
                    transformStyle: 'preserve-3d',
                }}
            />

            <div className="flex flex-col items-center gap-1">
                <div className="text-[#335371] md:text-lg">
                    {title}
                </div>
                <div className="text-2xl sm:text-5xl text-[#14203A]">
                    {currentCount}
                    {suffix}
                </div>
            </div>
        </div>

    );
};

const IncrementSection = () => {
    return (
        <div className="bg-transparent max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 md:rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {statsData.map((stat) => (
                    <StatCard
                        key={stat.id}
                        title={stat.title}
                        count={stat.count}
                        suffix={stat.suffix}
                        image={stat.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default IncrementSection;
