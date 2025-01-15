export const Company = () => (
    <div className="container-fluid p-0">
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
