import { Testimonials } from "../components/testimonial/Testimonials";

export const Entrepreneur = () => (
    <section className="entrepreneur">
        <h1 className="text-center">Emprendedor</h1>
        <section className="container pb-5">
            <h3 className="pt-5 pb-3">Servicios</h3>
            <ul>
                <li>Coaching de comunicación y liderazgo</li>
                <li>Desarrollo de MVPs de alta fidelidad en 5 semanas</li>
            </ul>
        </section>
        <section className="bg-warning p-5 text-center">
            <button className="btn btn-primary">Diagnóstico</button>
        </section>
        <Testimonials />
    </section>
);
