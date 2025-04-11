import { GrLinkNext } from "react-icons/gr";

const cards = [
    {
        id: 1,
        bg: "#fff3f3",
        title: "Web Development",
        icon: "/home/icon-1.png",
        paragraph: "Corporate restructuring refers to the process of reorganizing a man's company's workflows.",
    },
    {
        id: 2,
        bg: "#e8fbff",
        title: "App Development",
        icon: "/home/icon-2.png",
        paragraph: "Corporate restructuring refers to the process of reorganizing a man's company's workflows.",
    },
    {
        id: 3,
        bg: "#f9f8da",
        title: "Database Security",
        icon: "/home/icon-3.png",
        paragraph: "Corporate restructuring refers to the process of reorganizing a man's company's workflows.",
    },
    {
        id: 4,
        bg: "#f9f8da",
        title: "SEO Optimize",
        icon: "/home/icon-4.png",
        paragraph: "Corporate restructuring refers to the process of reorganizing a man's company's workflows.",
    },
    {
        id: 5,
        bg: "#fff3f3",
        title: "Digital Marketing",
        icon: "/home/icon-5.png",
        paragraph: "Corporate restructuring refers to the process of reorganizing a man's company's workflows.",
    },
    {
        id: 6,
        bg: "#e8fbff",
        title: "Product Design",
        icon: "/home/icon-6.png",
        paragraph: "Corporate restructuring refers to the process of reorganizing a man's company's workflows.",
    },
];

const ServicesCards = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="group rounded-xl flex flex-col items-center justify-between gap-4 p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                        style={{ backgroundColor: card.bg }}
                    >
                        {/* Icon */}
                        <div className="relative w-20 h-20 flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-4 before:border-dashed before:border-[#317EFE] before:scale-110 group-hover:before:rotate-180 before:transition-transform before:duration-700">
                            <img
                                src={card.icon}
                                alt={card.title}
                                className="w-12 h-12 object-contain z-10 "
                            />
                        </div>


                        {/* Title */}
                        <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#317EFE] transition-colors duration-300 cursor-pointer">
                            {card.title}
                        </h2>

                        {/* Line */}
                        <div className="h-[2px] bg-[#317EFE] w-12 md:w-20"></div>

                        {/* Paragraph */}
                        <p className="text-[#335371] text-sm">
                            {card.paragraph}
                        </p>

                        {/* Button */}
                        <button className="mt-2 flex items-center gap-2 border border-[#317EFE] px-5 py-2 rounded-full text-[#317EFE] group-hover:bg-[#317EFE] group-hover:text-white transition duration-300 hover:cursor-pointer">
                            Read More <GrLinkNext size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesCards;
