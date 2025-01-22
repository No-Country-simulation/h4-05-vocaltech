import { Testimonials } from "../components/testimonial/Testimonials";

export const Company = () => (
    <section className="company">
        <h1 className="text-center">Empresa</h1>
        <section className="container pb-5">
            <h3 className="pt-5 pb-3">Servicios</h3>
            <ul>
                <li>Workshops y coaching de comunicación y liderazgo para equipos de trabajo</li>
                <li>Búsqueda y selección de talento a través de la observación de comportamiento 
                    mediante simulaciones laborales</li>
            </ul>
        </section>
        <section className="bg-warning p-5 text-center">
            <button className="btn btn-primary">Diagnóstico</button>
        </section>
        <Testimonials />
    </section>
);
