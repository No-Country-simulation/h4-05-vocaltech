export const Entrepreneur = () => (
    <div className="container-fluid p-0">
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
        <section className="container">
            <h3 className="pt-5 pb-3">Testimonios</h3>
            <div className="w-25 bg-secondary">
                <p>Maria</p>
                <p>Esto es el texto de un testimonio</p>
            </div>
        </section>  
        <section className="container pb-5">
            <h3 className="pt-5 pb-3">Contacto</h3>
        </section>   
    </div>
);
