import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <section className="container py-5 overflow-hidden">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
                    <h1 className="display-5 fw-bolder">Impulsa tu emprendimiento</h1>
                    <p className="lead py-4">Lleva tus ideas al siguiente nivel con nuestros 
                        servicios y descubre herramientas y estrategias personalizadas para tu negocio
                    </p>
                    <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3">
                        <Link to="/diagnostico" className="w-100">
                            <button type="button" className="btn btn-dark rounded-pill btn-personalized w-100">
                                Solicitar diagnóstico
                            </button>
                        </Link>
                        <Link to="/agendar-cita" className="w-100">
                            <button type="button" className="btn btn-dark rounded-pill btn-personalized w-100">
                                Agendar una cita
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <div className="img-wrapper position-relative">
                        <img
                            src="./images/emprendedor.jpg"
                            className="img-fluid rounded-circle shadow-lg img-entrepreneur"
                            alt="Emprendedor"
                        />
                        <div className="circle-bg position-absolute"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
