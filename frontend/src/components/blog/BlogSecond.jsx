import React, { useState } from "react";
import { LuFiles } from "react-icons/lu";
import { PiClock } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import BlogThird from "./BlogThird";

const BlogSecond = () => {
  const images = ["./blog/blog3.jpg", "./blog/blog1.jpg", "./blog/blog2.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const ImgFromLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const ImgFromRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const BlogFirstArray = [
    {
      id: 1,
      img: "./blog/blog1.jpg",
      title: "Empowering businesses through technology",
      icon1: <LuFiles className="text-blue-400" />,
      icontitle: "Web Design",
      icon2: <PiClock className="text-blue-400" />,
      icontitle: "March 03, 2023",
      icon3: <TiMessages className="text-blue-400" />,
      icontitle: "04 Comments",
      passage:
        "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum.",
    },
    {
      id: 2,
      img: "./blog/blog2.jpg",
      title: "Creating A Business Plan For Your Digital Agency",
      icon1: <LuFiles className="text-blue-400" />,
      icontitle: "Web Design",
      icon2: <PiClock className="text-blue-400" />,
      icontitle: "March 03, 2023",
      icon3: <TiMessages className="text-blue-400" />,
      icontitle: "04 Comments",
      passage:
        "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum.",
    },
    {
      id: 3,
      img: "./blog/blog3.jpg",
      title: "Driving efficiency through cutting technology",
      icon1: <LuFiles className="text-blue-400" />,
      icontitle: "Web Design",
      icon2: <PiClock className="text-blue-400" />,
      icontitle: "March 03, 2023",
      icon3: <TiMessages className="text-blue-400" />,
      icontitle: "04 Comments",
      passage:
        "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum.",
    },
    {
      id: 4,
      img: "./blog/blog4.jpg",
      title: "Driving efficiency through cutting technology",
      icon1: <LuFiles className="text-blue-400" />,
      icontitle: "Web Design",
      icon2: <PiClock className="text-blue-400" />,
      icontitle: "March 03, 2023",
      icon3: <TiMessages className="text-blue-400" />,
      icontitle: "04 Comments",
      passage:
        "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum.",
    },
    {
      id: 5,
      img: "./blog/blog5.jpg",
      title: "Driving efficiency through cutting technology",
      icon1: <LuFiles className="text-blue-400" />,
      icontitle: "Web Design",
      icon2: <PiClock className="text-blue-400" />,
      icontitle: "March 03, 2023",
      icon3: <TiMessages className="text-blue-400" />,
      icontitle: "04 Comments",
      passage:
        "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum.",
    },
  ];

  return (
    <div className="w-[90vw] min-h-screen  border mx-auto flex flex-col lg:flex-row">
      {/* first seciton  */}
      <div className="lg:w-[70%] border mt-10 p-5">
        <div className="w-full rounded-xl">
          <img className="w-full rounded-xl " src="./blog/blog1.jpg" alt="" />
          <div className="flex flex-col p-10 gap-4">
            <h1 className="text-4xl font-semibold max-w-xl md:max-w-xl ">
              Empowering businesses through technology
            </h1>
            <div className="flex  flex-col gap-3 sm:flex-row max-w-lg justify-between text-gray-700 ">
              <div className="flex items-center  gap-2 text-xl">
                <LuFiles className="text-blue-400" />

                <span>Web Design</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <PiClock className="text-blue-400" />

                <span>March 03, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <TiMessages className="text-blue-400" />

                <span>04 Comments</span>
              </div>
            </div>
            <p className="text-xl text-gray-600">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
              viverra laoreet augue mattis fermentum. Aliquam eros justo,
              posuere loborti viverra laoreet matti ullamcorper posuere viverra
              .Aliquam eros justo, posuere lobortis, viverra laoreet augue
              mattis fermentum.
            </p>
            <div className="flex flex-col  sm:flex-row justify-start  sm:justify-between items-center">
              <button className=" px-10 py-3 bg-blue-500 hover:bg-blue-300 cursor-pointer rounded-full text-white text-xl">
                Learn More
              </button>
              <div className=" gap-5 items-center justify-center flex text-lg font-semibold ">
                <div className="flex justify-center ">
                  <button className="hover:text-blue-500 cursor-pointer">
                    SHARE
                  </button>
                </div>
                <div className="flex gap-3 mt-4 items-center">
                  <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-500 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end  */}
        <div className="w-full relative rounded-xl">
          <div className="absolute sm:top-30 top-10 left-30 sm:left-90">
            <div className="relative w-fit h-fit p-3 bg-white rounded-full overflow-hidden">
              {/* Outer glow animation (continuous pulsing) */}
              <span className="absolute inset-0 rounded-full bg-white opacity-30 blur-2xl animate-ping z-0" />
              <span className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-xl animate-ping z-0" />
              <span className="absolute inset-0 rounded-full bg-blue-500 opacity-10 blur-xl z-0" />

              {/* Play Button */}
              <p className="relative z-10 p-6 sm:p-7 md:p-8 bg-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                <FaPlay className="text-blue-500 text-2xl" />
              </p>
            </div>
          </div>

          <img className="w-full rounded-xl " src="./blog/blog2.jpg" alt="" />
          <div className="flex flex-col p-10 gap-4">
            <h1 className="text-4xl font-semibold md:max-w-xl ">
              Empowering businesses through technology
            </h1>
            <div className="flex  flex-col gap-3 sm:flex-row max-w-lg justify-between text-gray-700 ">
              <div className="flex items-center  gap-2 text-xl">
                <LuFiles className="text-blue-400" />

                <span>Web Design</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <PiClock className="text-blue-400" />

                <span>March 03, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <TiMessages className="text-blue-400" />

                <span>04 Comments</span>
              </div>
            </div>
            <p className="text-xl text-gray-600">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
              viverra laoreet augue mattis fermentum. Aliquam eros justo,
              posuere loborti viverra laoreet matti ullamcorper posuere viverra
              .Aliquam eros justo, posuere lobortis, viverra laoreet augue
              mattis fermentum.
            </p>
            <div className="flex flex-col  sm:flex-row justify-start  sm:justify-between items-center">
              <button className=" px-10 py-3 bg-blue-500 hover:bg-blue-300 cursor-pointer rounded-full text-white text-xl">
                Learn More
              </button>
              <div className=" gap-5 items-center justify-center flex text-lg font-semibold ">
                <div className="flex justify-center ">
                  <button className="hover:text-blue-500 cursor-pointer">
                    SHARE
                  </button>
                </div>
                <div className="flex gap-3 mt-4 items-center">
                  <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-500 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end  */}

        <div className="w-full relative rounded-xl overflow-hidden">
          <div
            className="absolute top-10 left-10 sm:top-40 sm:left-10 p-5 bg-white rounded-full hover:text-white cursor-pointer hover:bg-blue-600 transition"
            onClick={ImgFromLeft}
          >
            <LuMoveLeft className="text-xl" />
          </div>

          <div
            className="absolute top-10 right-10 sm:top-40 sm:right-10 p-5 bg-white rounded-full hover:text-white cursor-pointer hover:bg-blue-600 transition"
            onClick={ImgFromRight}
          >
            <LuMoveRight className="text-xl" />
          </div>

          {/* Image carousel */}
          <img
            src={images[currentIndex]}
            alt="carousel"
            className="w-full rounded-xl transition-all duration-500"
          />

          <div className="flex flex-col p-10 gap-4">
            <h1 className="text-4xl font-semibold md:max-w-xl">
              Empowering businesses through technology
            </h1>
            <div className="flex  flex-col gap-3 sm:flex-row max-w-lg justify-between text-gray-700 ">
              <div className="flex items-center  gap-2 text-xl">
                <LuFiles className="text-blue-400" />

                <span>Web Design</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <PiClock className="text-blue-400" />

                <span>March 03, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <TiMessages className="text-blue-400" />

                <span>04 Comments</span>
              </div>
            </div>

            <p className="text-xl text-gray-600">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis,
              viverra laoreet augue mattis fermentum.
            </p>

            <div className="flex flex-col  sm:flex-row justify-start  sm:justify-between items-center">
              <button className=" px-10 py-3 bg-blue-500 hover:bg-blue-300 cursor-pointer rounded-full text-white text-xl">
                Learn More
              </button>
              <div className=" gap-5 items-center justify-center flex text-lg font-semibold ">
                <div className="flex justify-center ">
                  <button className="hover:text-blue-500 cursor-pointer">
                    SHARE
                  </button>
                </div>
                <div className="flex gap-3 mt-4 items-center">
                  <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-500 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end  */}
        <div className="w-full rounded-xl">
          <img
            className="w-full rounded-xl "
            src="./blog/blog1.jpg"
            alt="grass"
          />
          <div className="flex flex-col p-10 gap-4">
            <h1 className="text-4xl font-semibold md:max-w-xl ">
              Empowering businesses through technology
            </h1>
            <div className="flex  flex-col gap-3 sm:flex-row max-w-lg justify-between text-gray-700 ">
              <div className="flex items-center  gap-2 text-xl">
                <LuFiles className="text-blue-400" />

                <span>Web Design</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <PiClock className="text-blue-400" />

                <span>March 03, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <TiMessages className="text-blue-400" />

                <span>04 Comments</span>
              </div>
            </div>
            <p className="text-xl text-gray-600">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
              viverra laoreet augue mattis fermentum. Aliquam eros justo,
              posuere loborti viverra laoreet matti ullamcorper posuere viverra
              .Aliquam eros justo, posuere lobortis, viverra laoreet augue
              mattis fermentum.
            </p>
            <div className="flex flex-col  sm:flex-row justify-start  sm:justify-between items-center">
              <button className=" px-10 py-3 bg-blue-500 hover:bg-blue-300 cursor-pointer rounded-full text-white text-xl">
                Learn More
              </button>
              <div className=" gap-5 items-center justify-center flex text-lg font-semibold ">
                <div className="flex justify-center ">
                  <button className="hover:text-blue-500 cursor-pointer">
                    SHARE
                  </button>
                </div>
                <div className="flex gap-3 mt-4 items-center">
                  <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-500 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end  */}
        <div className="w-full rounded-xl">
          <img className="w-full rounded-xl " src="./blog/blog3.jpg" alt="" />
          <div className="flex flex-col p-10 gap-4">
            <h1 className="text-4xl font-semibold md:max-w-xl ">
              Empowering businesses through technology
            </h1>
            <div className="flex  flex-col gap-3 sm:flex-row max-w-lg justify-between text-gray-700 ">
              <div className="flex items-center  gap-2 text-xl">
                <LuFiles className="text-blue-400" />

                <span>Web Design</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <PiClock className="text-blue-400" />

                <span>March 03, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <TiMessages className="text-blue-400" />

                <span>04 Comments</span>
              </div>
            </div>
            <p className="text-xl text-gray-600">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
              viverra laoreet augue mattis fermentum. Aliquam eros justo,
              posuere loborti viverra laoreet matti ullamcorper posuere viverra
              .Aliquam eros justo, posuere lobortis, viverra laoreet augue
              mattis fermentum.
            </p>
            <div className="flex flex-col  sm:flex-row justify-start  sm:justify-between items-center">
              <button className=" px-10 py-3 bg-blue-500 hover:bg-blue-300 cursor-pointer rounded-full text-white text-xl">
                Learn More
              </button>
              <div className=" gap-5 items-center justify-center flex text-lg font-semibold ">
                <div className="flex justify-center ">
                  <button className="hover:text-blue-500 cursor-pointer">
                    SHARE
                  </button>
                </div>
                <div className="flex gap-3 mt-4 items-center">
                  <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-500 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end  */}
      </div>

      {/* second section  */}
      <div className="w-[30%] mt-10 p-5">
        <BlogThird />
      </div>
    </div>
  );
};

export default BlogSecond;
