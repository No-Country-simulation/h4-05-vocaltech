import { Header } from "../components/entrepreneur/Header";
import { Services } from "../components/entrepreneur/Services";
import { CallToAction } from "../components/entrepreneur/CallToAction";
import { Testimonials } from "../components/testimonial/Testimonials";
import "../styles/header.css";
import "../styles/callToAction.css";

export const Entrepreneur = () => (
    <section className="entrepreneur">
        <section className="entrepreneur-header px-0 pt-0 pb-xl-0">
            <Header />
        </section>
        <Services />
        <section className="call-to-action">
            <CallToAction />
        </section>
        <Testimonials />
    </section>
);
