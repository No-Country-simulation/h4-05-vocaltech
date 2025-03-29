export const WhoWeAre = () => {
    return (
        <section className="who-we-are container py-5 my-3 mt-xl-5">
            <div className="row d-xl-flex justify-content-xl-between">
                <div className="col-md-7 col-xl-6 pe-xl-0 pe-md-5">
                    <h2 className="subtitle text-black display-2 fw-bolder pb-3">
                        Quiénes somos
                    </h2>
                    <p className="">Somos una plataforma que une lo mejor de la comunicación y 
                        la tecnología para ofrecer soluciones integrales a emprendedores y empresas. 
                        Nuestro enfoque está basado en el diagnóstico personalizado y el acompañamiento 
                        estratégico para ayudar a nuestros clientes a alcanzar sus objetivos.
                    </p>
                    <p className="">Creemos que el verdadero crecimiento empresarial y emprendedor nace de 
                        la combinación perfecta entre las habilidades humanas y las soluciones estratégicas. 
                        Nuestra misión es ser el socio clave de empresas y emprendedores que buscan no solo 
                        adaptarse a los cambios, sino liderarlos.
                    </p>
                </div>
                <div className="col-md-5">
                    <img src="/images/meeting.png" alt="Reunión" 
                        className="img-fluid object-fit-cover rounded-4 h-100" />
                </div>
            </div>
        </section>
    );
};
