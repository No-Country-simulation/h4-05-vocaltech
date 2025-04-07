import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <section className="company-header px-3 pb-5 px-md-4">
            <div className="container py-5 mb-lg-3 text-center">
                <div className="row pt-5 mt-5 px-3 px-md-4">
                    <span className="fs-6 badge rounded-pill w-auto mx-auto">
                        <FontAwesomeIcon icon={faBuilding} className="me-1" /> Empresas
                    </span>
                    <h1 className="display-1 mt-4 fw-bold text-white title-header">
                        Lidera con <span className="text-gold-gradient">claridad</span>, 
                        transforma con <span className="text-gold-gradient">tecnología</span>
                    </h1>
                    <p className="span-bottom-header mt-3 lead fw-semibold px-0 text-special-gray">
                        Optimiza la comunicación interna, fortalece tu liderazgo y encuentra talento 
                        validado para impulsar tu crecimiento.
                    </p>
                    <div className="d-flex flex-wrap flex-md-nowrap justify-content-center gap-3 mt-3 
                        px-0 col-lg-9 col-xl-7 mx-auto">
                        <Link to="/" className="w-100">
                            <button
                                type="button"
                                className="btn btn-general btn-dark-personalized px-3 py-2 fw-bold text-white">
                                Agendar reunión con un experto 
                                <FontAwesomeIcon icon={faArrowRight} className="d-none d-md-inline ms-2" />
                            </button>
                        </Link>
                        <Link to="/diagnostico" className="w-100">
                            <button
                                type="button"
                                className="btn btn-general btn-multicolor-personalized px-3 py-2 fw-bold text-white">
                                Diagnosticar mi empresa
                                <FontAwesomeIcon icon={faArrowRight} className="d-none d-md-inline ms-2" /> 
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
