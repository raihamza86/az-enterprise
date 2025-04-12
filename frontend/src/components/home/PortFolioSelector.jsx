import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";

const btns = ['All', 'Web', 'Mobile', 'Desktop', 'UI/UX'];

const imgs = [
    { id: 1, img: '/home/img-1.jpg', category: 'Web' },
    { id: 2, img: '/home/img-2.jpg', category: 'Mobile' },
    { id: 3, img: '/home/img-3.jpg', category: 'Desktop' },
    { id: 4, img: '/home/img-4.jpg', category: 'UI/UX' },
    { id: 5, img: '/home/img-5.jpg', category: 'Web' },
    { id: 6, img: '/home/img-6.jpg', category: 'Mobile' },
];

function PortFolioSelector() {
    const [active, setActive] = useState('All');

    const filteredImgs = active === 'All'
        ? imgs
        : imgs.filter(img => img.category === active);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Filter Buttons */}
            <div className="flex items-center flex-wrap gap-4 justify-center mb-8">
                {btns.map(name => (
                    <button
                        key={name}
                        onClick={() => setActive(name)}
                        className={`px-6 py-2 rounded-full text-sm md:text-lg font-medium border transition-all duration-300 hover:cursor-pointer
                            ${active === name ? 'bg-blue-600 text-white border-blue-600' : 'text-[#335371] border-[#E1E1E1] hover:bg-blue-50'}`}
                    >
                        {name}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredImgs.map(({ id, img }) => (
                        <motion.div
                            key={id}
                            className="relative group overflow-hidden rounded-xl shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src={img}
                                alt={`portfolio-${id}`}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#317efeb8] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white m-4 rounded-2xl">
                                <button className="p-4 rounded-full border border-[#E7F914] bg-[#E7F914] hover:bg-blue-600 hover:border-blue-600 hover:text-white text-black transition hover:cursor-pointer">
                                    <MdArrowOutward size={20} />
                                </button>
                            </div>
                        </motion.div>

                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default PortFolioSelector;
