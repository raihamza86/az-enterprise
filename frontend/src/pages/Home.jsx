import AboutUs from "../components/home/AboutUs";
import Hero from "../components/home/Hero";
import NewsLetter from "../components/home/NewsLetter";
import Services from "../components/home/Services";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <AboutUs />
            <NewsLetter />
        </>
    );
}

export default Home;