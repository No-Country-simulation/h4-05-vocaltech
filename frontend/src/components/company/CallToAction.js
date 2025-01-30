import { Link } from "react-router-dom";

export const CallToAction = () => {
    return (
        <section className="container py-5 my-5 text-center text-md-start">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="digital-lines-top"></div>
            <div className="row align-items-center">
                <div className="col-md-6 pe-lg-5 d-md-none">
                    <h2 className="display-5 pb-4 fw-bolder">¿Listo para alinear tu equipo y fortalecer 
                        tu liderazgo?
                    </h2>
                    <p className="fw-bold pb-4">¿Te cuesta transmitir tu visión y lograr que tu 
                        equipo esté alineado con los objetivos de la empresa?
                    </p>
                </div>
                <div className="col-md-6 pe-md-5">
                    <p className="lead pb-5">Completa el diagnóstico y recibe una hoja de ruta personalizada 
                        para potenciar tu comunicación, fortalecer tu liderazgo y desarrollar tu organización 
                        con el mejor talento validado.</p>
                    <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3">
                        <Link to="/diagnostico" className="w-100 zindex">
                            <button type="button" className="btn btn-dark rounded-pill 
                                btn-personalized btn-call-to-action w-100">
                            ¡Hazlo AHORA!
                            </button>
                        </Link>
                        <Link to="/agendar-cita" className="w-100 zindex">
                            <button type="button" className="btn btn-dark rounded-pill 
                                btn-personalized btn-call-to-action w-100">
                                Agenda una cita
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 px-md-0 d-none d-md-block ps-lg-2">
                    <h2 className="display-5 pb-4 fw-bolder">¿Listo para alinear tu equipo y fortalecer 
                        tu liderazgo?
                    </h2>
                    <p className="fw-bold pb-4">¿Te cuesta transmitir tu visión y lograr que tu equipo 
                        esté alineado con los objetivos de la empresa?
                    </p>
                </div>
            </div>
            <div className="digital-lines-bottom"></div>
        </section>
    );
};
