import { Link } from "react-router-dom";

export const CallToAction = () => {
    return (
        <section className="container py-5 my-5 text-center text-md-start">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="digital-lines-top"></div>
            <div className="row align-items-center">
                <div className="col-md-6 pe-lg-5">
                    <h2 className="display-5 pb-4 fw-bolder">¿Listo para impulsar tu pitch y conectar 
                        con inversores?
                    </h2>
                    <p className="fw-bold pb-4">¿Te cuesta comunicar tu propuesta de valor y conectar con 
                        inversores o clientes clave?
                    </p>
                </div>
                <div className="col-md-6">
                    <p className="lead pb-5">Completa el diagnóstico y recibe una hoja de ruta personalizada 
                        para mejorar tu pitch, validar tu negocio y construir tu MVP.
                    </p>
                    <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3">
                        <Link to="/diagnostico" className="w-100 zindex">
                            <button type="button" className="btn btn-dark rounded-pill 
                                btn-personalized btn-call-to-action w-50">
                            ¡Hazlo AHORA!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="digital-lines-bottom"></div>
        </section>
    );
};
