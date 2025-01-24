import { Services } from "../components/entrepreneur/Services";
import { Testimonials } from "../components/testimonial/Testimonials";

export const Entrepreneur = () => (
    <section className="entrepreneur">
        <h1 className="text-center">Emprendedor</h1>
        <Services />
       <section className="bg-warning p-5 text-center">
            <button className="btn btn-primary">Diagnóstico</button>
        </section>
        <Testimonials />
    </section>
);
