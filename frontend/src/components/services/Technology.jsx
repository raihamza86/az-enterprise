import React from "react";
import img1 from './../../../public/serv1.jpg'
import img2 from './../../../public/serv2.jpg'
import img3 from './../../../public/serv3.jpg'
import img4 from './../../../public/serv4.jpg'
import img5 from './../../../public/serv5.jpg'
import img6 from './../../../public/serv6.jpg'


const ServiceData = [
  {
    id: 1,
    img: img1,
    title: "Web Optimize",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
  {
    id: 2,
    img: img2,
    title: "Tech Support Pro",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
  {
    id: 3,
    img: img3,
    title: "Web Optimize",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
  {
    id: 4,
    img: img4,
    title: "Web Optimize",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
  {
    id: 5,
    img: img5,
    title: "Tech Support Pro",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
  {
    id: 6,
    img: img6,
    title: "Web Optimize",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
];

const Technology = () => {
  return (
    <div className="w-[90vw] max-w-7xl mx-auto py-10 px-4 sm:px-8 lg:py-20">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-blue-600">
          <div className="w-[40vw] sm:w-[5vw] border-b-2 border-blue-600"></div>
          <span className="text-lg sm:text-xl font-semibold text-center">
            Latest Service
          </span>
          <div className="w-[40vw] sm:w-[5vw] border-b-2 border-blue-600"></div>
        </div>

        <div className="flex justify-center">
          <h1 className="text-2xl w-[50vw] sm:text-xl md:text-5xl text-center mt-6 font-semibold leading-tight">
            Where Technology Meets Excellence
          </h1>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3">
        {ServiceData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
          >
            <img
              className="w-full h-52 object-cover"
              src={item.img}
              alt={item.title}
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <button className="text-blue-600 font-semibold cursor-pointer hover:underline">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
