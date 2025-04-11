import { FaGreaterThan } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
      className="w-full relative h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://media.is58/photo/growth-business-finance-revenue.webp?a=1&b=1&s=612x612&w=0&k=20&c=gM7B3PkVB1OkDJB_6WYW78hHIoMBbRmZsqZOEB-Buxk=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className=" relative flex flex-col gap-5  p-5 rounded-lg ">
        <h1 className="text-5xl font-bold">Services</h1>
        <p className="flex gap-3 items-center text-gray-700 text-xl">
          <span className="text-3xl">Home</span>
          <FaGreaterThan />
          <span className="font-bold text-yellow-700 text-3xl">Services</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
