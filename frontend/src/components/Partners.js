export const Partners = () => {
    return (
        <section id="partners" className="container partners py-5">
            <h2 className="display-7 fw-bolder text-center pb-5">Nuestra alianza</h2>
            <div className="row mb-4">
                <div className="col-xl-10 text-xl-center mx-lg-auto">
                    <p className="lead pb-3"><strong className="fw-bold">Vos y Tu Voz </strong> y <strong className="fw-bold"> No Country </strong> han formado una alianza estratégica 
                        con un objetivo claro: transformar el talento humano y la innovación tecnológica en 
                        los pilares del éxito empresarial.
                    </p> 
                    <p className="pb-3">Desde el acompañamiento a emprendedores en las primeras etapas 
                        de sus proyectos hasta el fortalecimiento de equipos de liderazgo en grandes empresas, 
                        <strong> nuestra colaboración ofrece soluciones personalizadas y de alto impacto</strong>. 
                    </p>
                    <p className="pb-5">Ya seas un emprendedor buscando inversores o una empresa
                        interesada en desarrollar su equipo, nuestra alianza te brindará las herramientas 
                        necesarias para <strong>alcanzar el éxito</strong>.
                    </p>
                </div>
                <div className="text-center">
                    <div className="row align-items-center gap-5 gap-md-0">
                        <div className="col-md-5 col-lg-4 col-xl-3 mx-auto me-lg-0">  
                            <img
                                src="./images/logo-voz.png"
                                className="img-fluid w-50"
                                alt="Vos y tu Voz logo"
                            
                            />
                        </div>
                        <div className="col-md-6 col-lg-5 col-xl-4 mx-auto pe-md-5 ms-lg-0"> 
                            <img
                                src="./images/logo-no-country.png"
                                className="img-fluid"
                                alt="No Country logo"
                            />
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
};
