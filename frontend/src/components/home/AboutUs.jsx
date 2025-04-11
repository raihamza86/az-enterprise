import { IoCheckmarkOutline } from "react-icons/io5";

const AboutUs = () => {
    return (
        <div className="w-full bg-[#f9f4f1] flex flex-col lg:flex-row items-center justify-between py-8 md:gap-0">
            {/* Left Content */}
            <div className="max-w-xl space-y-6 md:px-16 px-6">
                <h2 className="text-[#317EFE] text-lg font-semibold">ABOUT US</h2>
                <h1 className="text-4xl md:text-5xl text-[#14203A] leading-tight">
                    We're leading The Power Of Technology
                </h1>
                <p className="text-gray-700">
                    It is a long established fact that a reader will be distracted by the design readable content of a page when looking at its layout. Lorem Ipsum is simply dummy text of the printing.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex flex-row items-center gap-2">
                        <p className="text-[#317EFE]"><IoCheckmarkOutline size={30} /></p>
                        <p className="text-[#335371]">Best IT Solutions &<br />Service</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <p className="text-[#317EFE]"><IoCheckmarkOutline size={30} /></p>
                        <p className="text-[#335371]">24 Hour's<br />Customer Service</p>

                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <p className="text-[#317EFE]"><IoCheckmarkOutline size={30} /></p>
                        <p className="text-[#335371]">Always Latest<br />Technology</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <p className="text-[#317EFE]"><IoCheckmarkOutline size={30} /></p>
                        <p className="text-[#335371]">World Best<br />Service</p>
                    </div>
                </div>
            </div>

            {/* Right Visuals */}
            <div className="relative w-full md:w-1/2 h-[400px] md:h-screen overflow-hidden mt-10 md:mt-0 flex items-center justify-center">
                {/* Main Foreground Image */}
                <div className="z-10">
                    <img src="/home/img.jpg" alt="main" className="max-w-full rounded-t-full" />
                </div>

                {/* Rotating Image beside main image */}
                <div className="absolute top-1/4 right-[-20px] transform -translate-y-1/2">
                    <img
                        src="/home/rotate.png"
                        alt="rotating"
                        className="w-32 h-32 animate-spin-slow"
                    />
                </div>

                <div className="bg-[#E7F914] z-15 absolute bottom-0 left-[40px] transform -translate-y-1/2 w-40 h-32 flex flex-col items-center justify-center shadow-lg animate-bounce-slow" style={{ clipPath: "polygon(9% 0, 96% 1%, 100% 100%, 0% 100%)" }}>
                    <div>
                        <h1 className="text-3xl font-bold text-black">12 Year's</h1>
                    </div>
                    <h6 className="text-center text-sm text-black font-medium">
                        years of experiences <br /> in this industry
                    </h6>
                </div>


            </div>
        </div >
    );
};

export default AboutUs;
