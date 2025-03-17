import { Header } from "../components/entrepreneur/Header";
import { Services } from "../components/entrepreneur/Services";
import { Testimonials } from "../components/testimonial/Testimonials";
import "../styles/header.css";
import "../styles/callToAction.css";

export const Entrepreneur = () => (
    <section className="entrepreneur">
        <section className=" px-0 pt-0 pb-xl-0" style={{backgroundImage: "url(./images/bg-header.png)", backgroundSize: "120%", backgroundRepeat: "no-repeat", backgroundPosition: "bottom"}}>
            <Header />
        </section>
        <Services />
        <Testimonials />
    </section>
);
