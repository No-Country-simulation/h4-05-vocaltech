import { Header } from "../components/company/Header";
import { Services } from "../components/company/Services";
import { Testimonials } from "../components/testimonial/Testimonials";

export const Company = () => (
    <section className="company">
        <section className="company-header px-0 pt-0 pb-xl-0">
            <Header />
        </section>
        <Services />
        <section className="bg-warning p-5 text-center">
            <button className="btn btn-primary">Diagnóstico</button>
        </section>
        <Testimonials />
    </section>
);
