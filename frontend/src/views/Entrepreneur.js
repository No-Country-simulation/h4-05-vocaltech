import { Header } from "../components/entrepreneur/Header";
import { Services } from "../components/entrepreneur/Services";
import { Testimonials } from "../components/testimonial/Testimonials";
import { Process } from "../components/entrepreneur/Process";
import { Clients } from "../components/entrepreneur/Clients";
import "../styles/header.css";
import "../styles/process.css";

export const Entrepreneur = () => (
    <section className="entrepreneur">
        <section className=" px-0 pt-0 pb-xl-0" style={{ backgroundImage: "url(./images/bg-header.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "bottom", height: "auto" }}>
            <Header />
        </section>
        <Services />
        <Testimonials />
        <section className="bg-process">
            <Process />
        </section>
        <Clients />
    </section>
);
