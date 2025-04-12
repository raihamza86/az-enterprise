import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Optional: clear form
    // setFormData({ email: "", phone: "", message: "" });
  };

  return (
    <div className="w-full bg-white px-4 md:px-20 py-10 flex flex-col md:flex-row justify-between items-start gap-10 md:mt-16">
      {/* Left Side: Get A Quote Form */}
      <div className="bg-[#F9F4F1] rounded-xl w-full md:w-[70%] p-6 md:p-16 shadow-sm">
        <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6">Get A Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-4 md:mt-12">
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your Message here*"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-yellow-400 hover:text-black text-white cursor-pointer text-sm font-medium px-6 py-4 rounded-full transition-all"
          >
            Send Now
          </button>
        </form>
      </div>

      {/* Right Side: Get In Touch Info */}
      <div className="w-full md:w-[40%] text-gray-800 md:mt-10">
        <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed font-semibold">
          It is a long established fact that a reader will distro bioiiy desig the rea dablea content
        </p>

        <div className="space-y-5 text-xl">
          <div className="flex items-start gap-3">
            <div className="bg-[#F9F4F1] p-4 rounded-full">
              <FiMapPin className="text-4xl text-blue-500" />
            </div>
            <div>
              <strong>Location</strong>
              <p className="text-gray-500">Dhaka 102, utl 1216, road 45 house</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-[#F9F4F1] p-4 rounded-full">
              <FiPhone className="text-4xl text-blue-500" />
            </div>
            <div>
              <strong>Call Us</strong>
              <p className="text-gray-500">+88 0123456789</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-[#F9F4F1] p-4 rounded-full">
              <FiMail className="text-4xl text-blue-500" />
            </div>
            <div>
              <strong>E-Mail</strong>
              <p className="text-gray-500">Ekobyte@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8 text-xl text-gray-600">
          <div className="bg-[#F9F4F1] p-3 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white">
            <FaFacebookF />
          </div>
          <div className="bg-[#F9F4F1] p-3 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white">
            <FaTwitter />
          </div>
          <div className="bg-[#F9F4F1] p-3 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white">
            <FaLinkedinIn />
          </div>
          <div className="bg-[#F9F4F1] p-3 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white">
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
