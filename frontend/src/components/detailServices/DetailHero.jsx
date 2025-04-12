import { FaGreaterThan } from "react-icons/fa6";

const DetailHero = () => {
  return (
    <div
      className="w-full relative h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "url('./services/bgGraph.png')",
        backgroundSize: "bg-cover ",
        backgroundPosition: "center",
      }}
    >
        <div className="absolute inset-0 bg-blue-700 opacity-30"></div>
      <div className=" relative flex flex-col gap-5  p-5 rounded-lg ">
        <h1 className="text-5xl font-bold">Services Details</h1>
        <p className="flex gap-3 items-center text-gray-700 text-xl">
          <span className="text-3xl">Home</span>
          <FaGreaterThan />
          <span className="font-bold text-yellow-700 text-3xl">Services Details</span>
        </p>
      </div>
    </div>
  );
};

export default DetailHero;
