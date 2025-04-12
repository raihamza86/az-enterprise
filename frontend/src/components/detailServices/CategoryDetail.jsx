import React from "react";
import { useLocation } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi";

const CategoryDetail = () => {
  const location = useLocation();
  const { img, title, desc } = location.state || {};


  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row justify-between items-start gap-10 mt-20 px-6 md:px-10">
      {/* Sidebar */}
      <div className="w-full md:w-[30%] bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Categories</h1>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="border-b border-gray-300 pb-2 hover:text-blue-600 cursor-pointer transition">Installation Accessories</li>
          <li className="border-b border-gray-300 pb-2 hover:text-blue-600 cursor-pointer transition">Business Advice</li>
          <li className="border-b border-gray-300 pb-2 hover:text-blue-600 cursor-pointer transition">Stock Market</li>
          <li className="border-b border-gray-300 pb-2 hover:text-blue-600 cursor-pointer transition">Regular Start</li>
          <li className="border-b border-gray-300 pb-2 hover:text-blue-600 cursor-pointer transition">Finance & Banking</li>
          <li className="border-b border-gray-300 pb-2 hover:text-blue-600 cursor-pointer transition">Started with Projects</li>
          <li className="border-b border-gray-300 pb-2 hover:text-blue-600 cursor-pointer transition">Corporate Standup</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-[70%] space-y-10">
        <img
          className="w-full rounded-3xl object-cover h-64 sm:h-80 md:h-[30rem] shadow-md"
          src={img || "/services/default.jpg"}
          alt={title}
        />
        <div>
          <h1 className="text-3xl font-bold text-rose-700 mb-4">{title}</h1>
          <p className="text-rose-500 text-lg">{desc}</p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="p-3 rounded-full bg-blue-600">
              <CiSettings className="text-3xl text-white" />
            </span>
            <h2 className="text-3xl font-semibold text-blue-600">
              Product Development
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Aliquam eros justo, posuere loborti viverra laoreet mattis ullamcorper...
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex gap-4 items-center">
          <span className="p-3 rounded-full bg-blue-600 shrink-0">
            <HiOutlineLightBulb className="text-3xl text-white" />
          </span>
          <div className="flex flex-col gap-4 text-gray-600 text-base md:text-lg">
            <p>We are starting some laoreet...</p>
            <p>Here is the biggest loborti vivea...</p>
            <p>Starting some laoreetmat ullamcorper...</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-700">Service All Details</h3>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper...
          </p>
          <div className="text-gray-700 space-y-2 text-base md:text-lg">
            <p>1. Aliquam eros justo, posuere loborti robart that</p>
            <p>2. Fermentum ullamcorper viverra laoreet</p>
            <p>3. Lobortis, viverra laoreet augue attis hrculies</p>
            <p>4. Aliquam eros justo, posuere loborti robart that</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
