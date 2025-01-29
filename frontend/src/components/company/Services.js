export const Services = () => {
    return (
        <section className="services container py-5">
            <h2 className="display-7 fw-bolder text-center pb-5">Nuestros Servicios</h2>
            <div className="row">
                <div className="col-md-6 pe-md-4">
                    <div className="card mb-4 border-0 bg-transparent">
                        <img src="./images/empresas.jpg" className="rounded d-md-none" alt="" />
                        <div className="card-body px-0 pb-0 pt-md-0 pb-md-5">
                            <h5 className="card-title fw-bold">Workshops y coaching de comunicación y 
                                liderazgo para equipos de trabajo</h5>
                            <p className="card-text pt-2 pb-2">Ofrecemos workshops y sesiones de coaching en 
                                comunicación y liderazgo, diseñados para fortalecer el rendimiento de equipos 
                                de trabajo. A través de estas sesiones, trabajamos en mejorar la cultura 
                                empresarial, potenciando la colaboración, la resolución de conflictos y 
                                el liderazgo efectivo. Además, enfocamos en el reskilling y upskilling de 
                                los miembros del equipo, asegurando que estén siempre preparados para 
                                enfrentar nuevos desafíos y evolucionar junto con las necesidades del negocio. 
                            </p>
                            <p className="pb-4"><strong>Ideal para empresas que buscan maximizar el 
                                talento y mejorar su desempeño colectivo</strong>.</p>
                            <div className="text-center">
                                <button className="btn btn-outline-dark rounded-pill btn-personalized" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#1" aria-expanded="false" 
                                    aria-controls="1">
                                    Conocer opciones
                                </button>
                            </div>
                            <div className="collapse mt-4" id="1">
                                <ol className="list-group-numbered">
                                    <li className="list-group-item border-0 pb-3">Comunicación y liderazgo</li>
                                    <li className="list-group-item border-0 pb-3">Cultura empresarial</li>
                                    <li className="list-group-item border-0">Reskilling - Upskilling</li>
                                </ol>
                            </div>
                        </div>
                        <img src="./images/empresas.jpg" className="rounded d-none d-md-block" alt="" />
                    </div>
                </div>
                <div className="col-md-6 pt-4 pt-md-0 ps-md-4">
                    <div className="card mb-4 border-0 bg-transparent">
                        <img src="./images/empresas.jpg" className="rounded" alt="" />
                        <div className="card-body px-0 pb-0 pt-md-4">
                            <h5 className="card-title fw-bold">Búsqueda y selección de talento</h5>
                            <p className="card-text pt-2 pb-2">Nuestro servicio de búsqueda y selección de 
                                talento se basa en la observación del comportamiento a través de simulaciones 
                                laborales. <strong>Evaluamos a los candidatos en escenarios reales, generando evidencia
                                concreta de su desempeño, habilidades y adaptabilidad en el entorno laboral</strong>. 
                                Este enfoque permite una contratación más precisa y efectiva, asegurando que 
                                el nuevo talento no solo cumpla con los requisitos técnicos, sino que también 
                                se ajuste a la cultura y dinámicas del equipo. 
                            </p>
                            <p className="pb-4"><strong>Ideal para empresas que buscan 
                                un proceso de selección más riguroso y confiable</strong>.</p>
                            <div className="text-center">
                                <button className="btn btn-outline-dark rounded-pill btn-personalized" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#2" aria-expanded="false" 
                                    aria-controls="2">
                                    Conocer opciones
                                </button>
                            </div>
                            <div className="collapse mt-4" id="2">
                                <ol className="list-group-numbered">
                                    <li className="list-group-item border-0 pb-3">Evidencia de comportamientos</li>
                                    <li className="list-group-item border-0">Contratación de nuevo talento</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
