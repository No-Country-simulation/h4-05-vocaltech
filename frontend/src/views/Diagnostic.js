import { Header } from '../components/diagnostic/Header';
import { Form as DiagnosticForm } from "../components/diagnostic/Form";
import { Testimonials } from "../components/testimonial/Testimonials";

export const Diagnostic = () => {
    return (
        <section className="diagnostic">
            <Header />
            <DiagnosticForm />
            <Testimonials />
        </section>
    );
};
