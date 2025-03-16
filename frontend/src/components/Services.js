import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSearch, faTrophy, faMicrophone } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
    return (
        <section className="services container py-5">
            <div className="col-lg-7 mx-lg-auto">
                <p className="small-subtitle text-lightgray lead text-center">SERVICIOS</p>
                <h2 className="subtitle text-black display-2 fw-bolder text-center pb-5">
                    Cómo podemos ayudarte a crecer
                </h2>
            </div>
            <div className="row">
                <div className="d-flex justify-content-end pe-0 mb-3">
                    <Link to="/">
                        <button
                            type="button"
                            className="btn text-black py-0">
                            Explora todas las opciones que tenemos para ti 
                            <FontAwesomeIcon icon={faArrowRight} className="ms-2" /> 
                        </button>
                    </Link>
                </div>
                <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
                    <div className="border shadow-md rounded-3 p-4 px-md-5 bg-special-gray h-100">
                        <FontAwesomeIcon icon={faSearch} className="fs-3 icon-services" />
                        <h3 className="text-black fw-semibold fs-3 pt-2">
                            Diagnósticos Personalizados
                        </h3>
                        <p className="subtitle-card-services py-2">
                            IDENTIFICAR NECESIDADES
                        </p>
                        <p>Identificamos tus necesidades y diseñamos un plan a medida que se alinea a tus 
                            necesidades con estrategias efectivas para maximizar tu impacto.
                        </p>
                    </div>
                </div>
                <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
                    <div className="border shadow-md rounded-3 p-4 px-md-5 bg-special-gray h-100">
                        <FontAwesomeIcon icon={faTrophy} className="fs-3 icon-services" />
                        <h3 className="text-black fw-semibold fs-3 pt-2">
                            Soluciones Integrales
                        </h3>
                        <p className="subtitle-card-services py-2">
                            IDEAS QUE TRANSFORMAN
                        </p>
                        <p>Te ayudamos a superar desafíos específicos de tu negocio o proyecto. 
                            Comunicación, liderazgo, desarrollar un MVP funcional, acceder a talento TI 
                            validado, y mucho más.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="border shadow-md rounded-3 p-4 px-md-5 bg-special-gray h-100">
                        <FontAwesomeIcon icon={faMicrophone} className="fs-3 icon-services" />
                        <h3 className="text-black fw-semibold fs-3 pt-2">
                            Estrategias de Comunicación
                        </h3>
                        <p className="subtitle-card-services py-2">
                            CONECTA DE MANERA AUTÉNTICA
                        </p>
                        <p>Transforma la manera en que hablas con tu equipo, tus clientes y el mundo. 
                            Te ayudamos a transmitir tus ideas con claridad, confianza y autenticidad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
