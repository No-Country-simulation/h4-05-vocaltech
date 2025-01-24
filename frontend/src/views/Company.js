import { Services } from "../components/company/Services";
import { Testimonials } from "../components/testimonial/Testimonials";

export const Company = () => (
    <section className="company">
        <h1 className="text-center">Empresa</h1>
        <Services />
        <section className="bg-warning p-5 text-center">
            <button className="btn btn-primary">Diagnóstico</button>
        </section>
        <Testimonials />
    </section>
);
