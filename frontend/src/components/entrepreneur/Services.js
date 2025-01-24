export const Services = () => {
    return (
        <section className="container py-5">
            <h2 className="display-7 fw-bolder text-center pb-5">Servicios</h2>
            <div className="row">
                <div className="col-md-6 pe-md-4">
                    <div className="card mb-4 border-0">
                        <img src="./images/emprendedores.jpg" className="rounded d-md-none" alt="" />
                        <div className="card-body px-0 pb-0 pt-md-0 pb-md-5">
                            <h5 className="card-title fw-bold">Coaching de comunicación y liderazgo</h5>
                            <p className="card-text pt-2 pb-2">Este servicio te ofrece las herramientas 
                                esenciales para mejorar tus habilidades de comunicación y liderazgo. 
                                Aprenderás a captar la atención de inversores, realizar presentaciones 
                                impactantes y dominar la comunicación efectiva en ventas. Ideal para 
                                emprendedores que desean influir con confianza y lograr resultados. 
                            </p>
                            <p className="pb-4">Desarrolla la habilidad de inspirar a otros y <strong>lograr tus objetivos 
                                personales y profesionales</strong> con mayor impacto.</p>
                            <div className="text-center">
                                <button className="btn btn-outline-dark rounded-pill btn-width-services" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#1" aria-expanded="false" 
                                    aria-controls="1">
                                    Conocer opciones
                                </button>
                            </div>
                            <div className="collapse mt-4" id="1">
                                <ol className="list-group-numbered">
                                    <li className="list-group-item border-0 pb-3">Levantamiento de capital</li>
                                    <li className="list-group-item border-0 pb-3">Pitch a inversores</li>
                                    <li className="list-group-item border-0">Comunicación efectiva para ventas</li>
                                </ol>
                            </div>
                        </div>
                        <img src="./images/emprendedores.jpg" className="rounded d-none d-md-block" alt="" />
                    </div>
                </div>
                <div className="col-md-6 pt-4 pt-md-0 ps-md-4">
                    <div className="card mb-4 border-0">
                        <img src="./images/emprendedores.jpg" className="rounded" alt="" />
                        <div className="card-body px-0 pb-0 pt-md-4">
                            <h5 className="card-title fw-bold">Desarrollo de MVPs</h5>
                            <p className="card-text pt-2 pb-2">Este servicio te guía en el desarrollo de tu MVP 
                                (Producto Mínimo Viable), permitiéndote validar tu idea de negocio rápidamente 
                                con un producto funcional. <strong>En solo 5 semanas, creamos un MVP de alta fidelidad, 
                                listo para ser probado por usuarios reales</strong>.</p>
                            <p className="pb-4">Ideal para emprendedores 
                                que buscan llevar su idea al siguiente nivel y obtener feedback clave 
                                antes de una inversión mayor.</p>
                            <div className="text-center">
                                <button className="btn btn-outline-dark rounded-pill btn-width-services" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#2" aria-expanded="false" 
                                    aria-controls="2">
                                    Conocer opciones
                                </button>
                            </div>
                            <div className="collapse mt-3" id="2">
                                <ol className="list-group-numbered">
                                    <li className="list-group-item border-0">MVPs de alta fidelidad en 5 semanas</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
