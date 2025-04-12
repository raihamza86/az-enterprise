import AboutUs from "../components/home/AboutUs";
import Hero from "../components/home/Hero";
import LatestBlog from "../components/home/LatestBlog";
import NewsLetter from "../components/home/NewsLetter";
import OurTeam from "../components/home/OurTeam";
import PortFolios from "../components/home/PortFolios";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";
import WorkProcess from "../components/home/WorkProcess";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <AboutUs />
            <NewsLetter />
            <PortFolios />
            <OurTeam />
            <WorkProcess />
            <Testimonial />
            <LatestBlog />
        </>
    );
}

export default Home;