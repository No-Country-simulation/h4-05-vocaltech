import { Header } from "../components/aboutus/Header";
import { WhoWeAre } from "../components/aboutus/WhoWeAre";
import { Partners } from "../components/aboutus/Partners";
import { Services } from "../components/aboutus/Services";
import { CallToAction } from "../components/aboutus/CallToAction";

export const AboutUs = () => {
    return (
        <>
            <Header /> 
            <WhoWeAre /> 
            <section className="partners-about-us py-5 bg-white">
                <Partners />
            </section> 
            <Services /> 
            <section className="call-to-action py-5 bg-white">
                <CallToAction />
            </section> 
        </>
    );
};
