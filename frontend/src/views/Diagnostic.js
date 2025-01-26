import { Header } from '../components/diagnostic/Header';
import { Form as DiagnosticForm } from "../components/diagnostic/Form";
import { CallToAction } from "../components/diagnostic/CallToAction";
import { Testimonials } from "../components/testimonial/Testimonials";

export const Diagnostic = () => {
    return (
        <section className="diagnostic">
            <Header />
            <DiagnosticForm />
            <section className="call-to-action">
                <CallToAction />
            </section>
            <Testimonials />
        </section>
    );
};
