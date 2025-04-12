import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-[#101828] text-white pt-10 py-2 relative overflow-hidden">
            {/* Background Image */}
            <img src="/footer-bg.png" alt="Background" className="absolute top-0 left-0 h-full opacity-100" />

            {/* Top Social Section */}
            <div className="px-2  md:px-15 lg:px-20">
                <div className="flex md:flex-row flex-col md:justify-between items-start md:items-center  pb-6 border-b  border-gray-700 md:gap-0 gap-4 ">
                    <img src="/footer-logo.png" alt="logo" />
                    <div className="flex gap-3 max-md:gap-6 items-center">
                        <span className="text-white text-lg me-1 max-md:me-0  text-nowrap">Follow us:</span>
                        <div className="bg-gray-700 cursor-pointer p-1.5 rounded-full group hover:bg-[#ECF300] transition-all duration-700 ease-in-out">
                            <FaFacebookF className="rounded-full text-white group-hover:text-black transition-all duration-300 ease-in-out transform" />
                        </div>
                        <div className="bg-gray-700 cursor-pointer p-1.5 rounded-full group hover:bg-[#ECF300] transition-all duration-700 ease-in-out">
                            <FaTwitter className="rounded-full text-white group-hover:text-black transition-all duration-300 ease-in-out transform" />
                        </div>
                        <div className="bg-gray-700 cursor-pointer p-1.5 rounded-full group hover:bg-[#ECF300] transition-all duration-700 ease-in-out">
                            <FaLinkedinIn className="rounded-full text-white group-hover:text-black transition-all duration-300 ease-in-out transform" />
                        </div>
                        <div className="bg-gray-700 cursor-pointer p-1.5 rounded-full group hover:bg-[#ECF300] transition-all duration-700 ease-in-out">
                            <FaYoutube className="rounded-full text-white group-hover:text-black transition-all duration-300 ease-in-out transform hover:shadow-md" />
                        </div>



                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 max-md:gap-x-2  ps-18 max-md:px-2 lg:px-20 lg:py-20 py-10 border-b border-gray-700 ">

                {/* Recent Blog */}
                <div className="flex flex-col  gap-6  ">
                    <h2 className="text-2xl font-bold mb-5">Recent Blog</h2>

                    {/* Blog 1 */}
                    <div className="flex items-start gap-3  group relative max-md:block ">
                        <div className="rounded-2xl overflow-hidden my-auto w-18 ">
                            <img src="/home/blog-1.jpg" alt="blog1"
                                className="w-18 h-18 object-cover rounded-2xl my-auto transition-transform duration-500 ease-in-out group-hover:scale-120 " />
                        </div>
                        <div className=" space-y-1">
                            <p className="text-sm mb-2 max-md:mt-2">January 11, 2023</p>
                            <p className="font-semibold cursor-pointer relative"> How To Impact Robot </p>
                            <p className="font-semibold cursor-pointer relative"> AI In The Future </p>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="flex items-start gap-3  group relative max-md:hidden ">
                        <div className="rounded-2xl overflow-hidden my-auto w-18 ">
                            <img src="/home/blog-2.jpg" alt="blog1"
                                className="w-18 h-18 object-cover rounded-2xl my-auto transition-transform duration-500 ease-in-out group-hover:scale-120" />
                        </div>
                        <div className=" space-y-1">
                            <p className="text-sm mb-2">January 11, 2023</p>
                            <p className="font-semibold cursor-pointer relative"> Elevate Your Business </p>
                            <p className="font-semibold cursor-pointer relative"> With IT Expertise </p>
                        </div>
                    </div>

                </div>


                {/* Our Services */}
                <div className="lg:ms-20">
                    <h2 className="text-2xl font-bold mb-5 lg:mb-7">Our Services</h2>
                    <ul className="space-y-2 lg:text-lg md:text-lg">
                        <li className="cursor-pointer">&rsaquo; Web Development</li>
                        <li className="cursor-pointer">&rsaquo; Database Security</li>
                        <li className="cursor-pointer">&rsaquo; App Development</li>
                        <li className="cursor-pointer">&rsaquo; SEO Optimize</li>
                        <li className="cursor-pointer">&rsaquo; Product Design</li>
                        <li className="cursor-pointer">&rsaquo; Digital Marketing</li>
                    </ul>
                </div>

                {/* Get Free Link */}
                <div className="lg:ms-10">
                    <h2 className="text-2xl font-bold mb-5 lg:mb-7">Get Free Link</h2>
                    <ul className="space-y-2 lg:text-lg md:text-lg">
                        <li className="cursor-pointer">&rsaquo; Our Services</li>
                        <li className="cursor-pointer">&rsaquo; Service Details</li>
                        <li className="cursor-pointer">&rsaquo; About Us</li>
                        <li className="cursor-pointer">&rsaquo; Our Team</li>
                        <li className="cursor-pointer">&rsaquo; Our Portfolio</li>
                        <li className="cursor-pointer">&rsaquo; Contact Us</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="">
                    <h2 className="text-2xl font-bold mb-5 lg:mb-7">Newsletter</h2>
                    <p className=" mb-6 lg:text-lg md:text-lg">Lorem Ipsum is simply is dumi omy is text dummy text.</p>
                    <div className="flex items-center bg-[#101828] border md:w-70 max-md:w-full border-gray-500 rounded-full overflow-hidden px-4 relative">
                        <input
                            type="email"
                            placeholder="Email here"
                            className="bg-transparent outline-none text-white py-3 flex-1 max-w-xm "
                        />
                        <button className="bg-[#ECF300] text-black p-3 rounded-full transition-all translate rotate-330 duration-600 ease-in-out hover:bg-[#101828] hover:text-white cursor-pointer absolute right-3">
                            <IoMdSend />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center text-lg max-md:text-sm text-white py-4 lg:px-20 px-6 z-10 relative text-nowrap">
                <p>© Ekobyte 2025 | All Rights Reserved</p>
                <div className="flex gap-5 mt-3 md:mt-0">
                    <a className="cursor-pointer" href="#">Terms & Condition</a>
                    <a className="cursor-pointer" href="#">Privacy Policy</a>
                    <a className="cursor-pointer" href="#">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
