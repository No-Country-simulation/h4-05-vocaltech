export const Partners = () => {
    return (
        <section className="container">
            <div className="col-lg-12 mx-lg-auto">
                <p className="small-subtitle text-lightgray lead text-center mt-2 pt-lg-4">
                    NO-COUNTRY + VOS Y TU VOZ
                </p>
                <h2 className="subtitle text-black display-2 fw-bolder text-center pb-3">
                    La Alianza
                </h2>
                <p className="lead text-md-center">VocalTech nace de la unión entre No Country, referente en talento 
                    digital y desarrollo tecnológico, y Vos y Tu Voz, expertos en comunicación y liderazgo. 
                    Esta alianza combina tecnología e innovación con entrenamiento vocal y estratégico, 
                    creando soluciones integrales para emprendedores y empresas.
                </p>
            </div>
            <div className="row pt-5 mt-lg-5">
                <div className="col-lg-5 pb-3 pb-lg-0">
                    <h2 className="text-black fw-bolder pb-3">
                        Unimos Fortalezas: Transformamos Negocios
                    </h2>
                    <p className="lead">
                        Expertos en comunicación y tecnología trabajando por tu éxito.
                    </p>
                </div>
                <div className="col-lg-7 d-flex flex-wrap justify-content-center justify-content-lg-end gap-4">
                    <img src="/images/partner-2.png" alt="Ines" 
                        className="img-fluid object-fit-cover rounded-4" 
                        style={{ width: '150px', height: '150px' }} />
                    <img src="/images/team.png" alt="Equipo" 
                        className="img-fluid object-fit-cover rounded-4" 
                        style={{ width: '150px', height: '150px' }} />
                    <img src="/images/partner-1.png" alt="Leandro" 
                        className="img-fluid object-fit-cover rounded-4" 
                        style={{ width: '150px', height: '150px' }} />
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-12 d-flex flex-wrap">
                    <div className="col-md-3">
                        <h2 className="subtitle display-2 fw-bolder pb-2 text-multicolor-gradient">
                            +15
                        </h2>
                        <p>Presencia en Paises</p>
                    </div>
                    <div className="col-md-3">
                        <h2 className="subtitle display-2 fw-bolder pb-2 text-multicolor-gradient">
                            +5.000
                        </h2>
                        <p>Talentos IT Validados</p>
                    </div>
                    <div className="col-md-3">
                        <h2 className="subtitle display-2 fw-bolder pb-2 text-multicolor-gradient">
                            +20
                        </h2>
                        <p>Roles Tech</p>
                    </div>
                    <div className="col-md-3">
                        <h2 className="subtitle display-2 fw-bolder pb-2 text-multicolor-gradient">
                            +1.000
                        </h2>
                        <p>Talleres impartidos</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
