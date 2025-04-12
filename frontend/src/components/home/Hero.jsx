const Hero = () => {
    return (
        <div className="w-full bg-gradient-to-b from-[#A0D7FE] to-[#F6FBFF] flex flex-col md:flex-row items-center justify-between pt-28">
            {/* Left Content */}
            <div className="max-w-xl space-y-6 md:px-16 px-6">
                <h2 className="text-[#317EFE] text-lg font-semibold">Smart Solutions</h2>
                <h1 className="text-4xl md:text-5xl text-[#14203A] leading-tight">
                    We're The Best Tech Leading Company
                </h1>
                <p className="text-gray-700">
                    We have been operating for over a decade providing top-notch solutions in the digital
                    landscape.
                </p>
                <div className="flex items-center gap-6">
                    <button className="bg-[#317EFE] rounded-full md:px-8 md:py-4 p-2 text-white hover:cursor-pointer font-bold">Read More</button>
                    <p className=""><span className="text-[#335371]"> NEED HELP</span><br />
                        <span className="font-semibold">(208) 555-0112</span></p>
                </div>
            </div>

            {/* Right Visuals */}
            <div className="relative w-full md:w-1/2 h-[400px] md:h-screen overflow-hidden mt-10 md:mt-0">
                {/* Background SVG */}
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: "url('/home/img.svg')" }}
                ></div>

                {/* Foreground JPG on the right */}
                {/* <div className="absolute right-0 bottom-10">
                    <img src="/home/img.jpg" alt="not found" className="max-w-full w-80" />
                </div> */}

                {/* Rotating circular text */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-48 h-48 flex items-center justify-center bg-white rounded-full">
                    <div className="absolute animate-spin-slow w-full h-full flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 200 200">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                                    fill="none"
                                />
                            </defs>
                            <text fill="#1f2937" fontSize="18" fontWeight="bold">
                                <textPath href="#circlePath" startOffset="0%">
                                    Award Winning Digital Agency • Award Winning Digital Agency •
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* Center icon */}
                    <img src="/home/icon.png" alt="icon" className="w-24 z-10" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
