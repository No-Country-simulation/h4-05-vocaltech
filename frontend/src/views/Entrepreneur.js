import { Header } from "../components/entrepreneur/Header";
import { Services } from "../components/entrepreneur/Services";
import { Testimonials } from "../components/testimonial/Testimonials";

export const Entrepreneur = () => (
    <section className="entrepreneur">
        <section className="entrepreneur-header px-0 pt-0 pb-xl-0">
            <Header />
        </section>
        <Services />
       <section className="bg-warning p-5 text-center">
            <button className="btn btn-primary">Diagnóstico</button>
        </section>
        <Testimonials />
    </section>
);
