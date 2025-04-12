import React from 'react';
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaComments, FaArrowRight } from "react-icons/fa6";

const blogs = [
    {
        id: 1,
        title: "Top 10 AI Intelligence Agency Provider",
        author: "Admin",
        comments: 5,
        image: "/home/blog-1.jpg",
        date: "Apr 12, 2025"
    },
    {
        id: 2,
        title: "Top 10 AI Intelligence Agency Provider",
        author: "Admin",
        comments: 5,
        image: "/home/blog-2.jpg",
        date: "Apr 10, 2025"
    },
    {
        id: 3,
        title: "Top 10 AI Intelligence Agency Provider",
        author: "Admin",
        comments: 5,
        image: "/home/blog-3.jpg",
        date: "Apr 08, 2025"
    },
];

function LatestBlogCards() {
    return (
        <div className="mt-28 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={blog.image}
                                alt="blog"
                                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105 p-2 rounded-2xl"
                            />

                            {/* Date Overlay */}
                            <div className="absolute top-4 right-4 bg-[#317efe] text-[#fff] px-3 py-1 rounded-md text-sm font-semibold shadow">
                                {blog.date}
                            </div>
                        </div>

                        <div className="px-5 py-4 flex flex-col gap-3">
                            <div className="flex items-center justify-between text-sm text-[#4b6782]">
                                <p className="flex items-center gap-2">
                                    <FaUser className="text-[#0d6efd]" /> By {blog.author}
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaComments className="text-[#0d6efd]" /> Comments ({blog.comments.toString().padStart(2, '0')})
                                </p>
                            </div>

                            <h2 className="text-[#14203a] text-lg font-semibold line-clamp-2">
                                {blog.title}
                            </h2>
                            <Link to={"/"}>
                                <button className="flex items-center gap-2 text-[#14203a] font-medium group-hover:text-[#0d6efd] transition-colors duration-300 hover:cursor-pointer">
                                    Read More
                                    <FaArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestBlogCards;
