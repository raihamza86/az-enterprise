import React, { useEffect, useRef, useState } from 'react';

const statsData = [
  {
    id: 1,
    title: 'Winning award',
    count: 2,
    suffix: '+',
    image: '/about/ai1.png',
  },
  {
    id: 2,
    title: 'Happy Clients',
    count: 10,
    suffix: 'k',
    image: '/about/ai2.png',
  },
  {
    id: 3,
    title: 'Projects Done',
    count: 5,
    suffix: '+',
    image: '/about/ai3.png',
  },
  {
    id: 4,
    title: 'Team Members',
    count: 4,
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
      className="p-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 text-center md:text-left group"
    >
      <img
        src={image}
        alt={title}
        className="w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-500 group-hover:rotate-[360deg]"
      />

      <div className="flex flex-col justify-center w-full">
        <div className="text-base sm:text-xl text-white font-medium">
          {title}
        </div>
        <div className="text-4xl sm:text-5xl font-bold text-[#E7F914] mt-1">
          {currentCount}
          {suffix}
        </div>
      </div>
    </div>
  );
};

const AboutIncrease = () => {
  return (
    <div className="bg-[#131A2A] max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 md:rounded-lg">
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

export default AboutIncrease;
