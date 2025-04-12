import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdFileCopy } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const BlogThird = () => {
  const recentPostData = [
    {
      id: 1,
      img: "./blog/blog1.jpg",
      title: "Elevate Your Business With IT Expertise",
      icon: <MdFileCopy className="text-blue-500" />,
      icontext: "Web Design",
    },
    {
      id: 2,
      img: "./blog/blog4.jpg",
      title: "Innovative IT Solutions for Growth",
      icon: <MdFileCopy className="text-blue-500" />,
      icontext: "Marketing",
    },
    {
      id: 3,
      img: "./blog/blog5.jpg",
      title: "Smart Tech for Smart Business",
      icon: <MdFileCopy className="text-blue-500" />,
      icontext: "Development",
    },
  ];

  const tags = [
    "All Project", "Interior", "Architecture", "Graphics", "Star Shape", "Startup"
  ];

  const gallery = [
    "serv1.jpg", "serv2.jpg", "serv3.jpg", "serv4.jpg", "serv5.jpg", "serv6.jpg"
  ];

  return (
    <div className="space-y-12 text-gray-800">
      {/* Search */}
      <div className="w-full">
        <h2 className="text-2xl font-bold">Search</h2>
        <div className="flex items-center mt-4 border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition">
          <input
            type="text"
            placeholder="Type and Search"
            className="flex-grow outline-none bg-transparent px-2 text-sm"
          />
          <IoSearchOutline className="text-2xl text-blue-600 cursor-pointer" />
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        <div className="space-y-4">
          {recentPostData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-3 rounded-lg border hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt="Recent Post"
                className="w-28 h-20 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
              <div>
                <h3 className="text-base font-semibold hover:text-blue-600 cursor-pointer">
                  {item.title}
                </h3>
                <p className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  {item.icon}
                  <span>{item.icontext}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border border-blue-100 p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Categories</h2>
        <ul className="space-y-3">
          {[
            ["Installation Accessories", 1],
            ["Business Advice", 8],
            ["Stock Market", 3],
            ["Regular Start", 5],
            ["Finance & Banking", 1],
            ["Started with Projects", 3],
            ["Corporate Standup", 5],
          ].map(([label, count]) => (
            <li key={label} className="flex justify-between items-center border-b pb-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
              <div className="flex items-center gap-2">
                <IoIosArrowForward />
                <span>{label}</span>
              </div>
              <span className="text-gray-500">({count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-sm text-gray-700 border rounded-full hover:bg-blue-100 hover:text-blue-600 transition cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((img, idx) => (
            <img
              key={idx}
              src={`./services/${img}`}
              alt="gallery"
              className="w-full h-24 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, i) => (
            <div
              key={i}
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-yellow-500 transition cursor-pointer"
            >
              <Icon className="text-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogThird;
