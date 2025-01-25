import { Header } from "../components/company/Header";
import { Services } from "../components/company/Services";
import { CallToAction } from "../components/company/CallToAction";
import { Testimonials } from "../components/testimonial/Testimonials";

export const Company = () => (
    <section className="company overflow-hidden">
        <section className="company-header px-0 pt-0 pb-xl-0">
            <Header />
        </section>
        <Services />
        <section className="call-to-action">
            <CallToAction />
        </section>
        <Testimonials />
    </section>
);
