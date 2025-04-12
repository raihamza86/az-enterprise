import { GrLinkNext } from "react-icons/gr";

const NewsLetter = () => {
    return (
        <div className="my-8 md:px-12 px-4">
            <div className="bg-[#317EFE] my-8 rounded-4xl p-8 flex flex-col gap-8">
                <h2 className="md:text-5xl text-[25px] text-white">Subscribe To Our Newsletter</h2>
                <p className="md:text-2xl text-[15px] text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                <div className="flex md:flex-row flex-col items-center w-full gap-4">
                    <input type="email" name="email" placeholder="Your email here" className="rounded-4xl bg-white md:py-4 md:px-8 px-6 py-2 w-full md:w-[50%] hover:cursor-pointer" />
                    <button className="bg-[#E7F914] md:py-4 md:px-16 px-6 py-2 rounded-full md:text-xl flex items-center gap-2 w-full md:w-[45%] hover:cursor-pointer">Submit <GrLinkNext /></button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;