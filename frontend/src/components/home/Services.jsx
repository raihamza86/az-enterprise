import ServicesCards from "./ServicesCards";

const Services = () => {
    return (
        <div className="my-8">
            <div className="flex items-center gap-4 justify-center">
                <div className="h-px bg-[#317EFE] w-12 md:w-20"></div>
                <span className="text-[#317EFE] font-semibold whitespace-nowrap">Latest service</span>
                <div className="h-px bg-[#317EFE] w-12 md:w-20"></div>

            </div>
            <h2 className="text-center my-6 md:text-5xl">Explore Our Best Premium  <br />  Quality Service</h2>

            <div className="md:px-12">
                <ServicesCards />
            </div>

        </div>
    );
};

export default Services;