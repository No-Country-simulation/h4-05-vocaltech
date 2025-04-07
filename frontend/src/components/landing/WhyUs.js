import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const WhyUs = () => {
    return (
        <section className="container py-5 text-white">
            <div className="row pb-5 mb-lg-4">
                <div className="col-md-7">
                    <span className="fs-6 badge rounded-pill">
                        <FontAwesomeIcon icon={faBuilding} className="me-1" /> Empresas
                    </span>
                    <h2 className="subtitle display-2 fw-bolder py-3">
                        Soluciones IT para Empresas Innovadoras
                    </h2>
                    <p className="lead">Identificamos tus necesidades en áreas clave 
                        como comunicación, liderazgo y desarrollo de skills, brindando soluciones prácticas 
                        y acceso a talento validado.
                    </p>
                    <div className="d-flex flex-wrap py-3 gap-2 gap-md-5">
                        <div className="col-md-5">
                            <h2 className="subtitle display-2 fw-bolder pb-2 text-gold-gradient">
                                +15
                            </h2>
                            <p>Empresas ya están generando resultados positivos 
                                con Vocaltech.
                            </p>
                        </div>
                        <div className="col-md-5">
                            <h2 className="subtitle display-2 fw-bolder pb-2 text-gold-gradient">
                                +1.000
                            </h2>
                            <p>Talleres impartidos en empresas líderes de todo LATAM.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap flex-lg-nowrap gap-3 gap-lg-0 pb-4 pb-md-0">
                        <Link to="/">
                            <button
                                type="button"
                                className="btn btn-general text-white btn-lightblue-personalized px-3 py-2 fw-bold">
                                Diagnosticar mi empresa 
                            </button>
                        </Link>
                        <Link to="/">
                            <button
                                type="button"
                                className="btn ms-lg-3 text-white">
                                Más información
                                <FontAwesomeIcon icon={faArrowRight} className="ms-2" /> 
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-5">
                    <video className="video rounded-5 w-100 h-100" autoPlay loop muted>
                        <source src="./videos/video-1.mp4" type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>
                </div>
            </div>
            <div className="row pt-3 pt-md-5">
                <div className="col-md-5 d-none d-md-block">
                    <video className="video rounded-5 w-100 h-100" autoPlay loop muted>
                        <source src="./videos/video-2.mp4" type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>
                </div>
                <div className="col-md-7">
                    <span className="fs-6 badge rounded-pill">
                        <FontAwesomeIcon icon={faBuilding} className="me-1" /> Emprendedores
                    </span>
                    <h2 className="subtitle display-2 fw-bolder py-3">
                        Impulsa tu proyecto ahora
                    </h2>
                    <p className="lead">Como emprendedor, accede a herramientas y recursos 
                        diseñados para potenciar tu crecimiento. Completa el diagnóstico gratis y recibe 
                        una propuesta personalizada adaptada a tus necesidades.
                    </p>
                    <div className="d-flex flex-wrap py-3 gap-2 gap-md-5">
                        <div className="col-md-5">
                            <h2 className="subtitle display-2 fw-bolder pb-2 text-gold-gradient">
                                95%
                            </h2>
                            <p>De nuestros clientes emprendedores recomiendan el servicio.</p>
                        </div>
                        <div className="col-md-5">
                            <h2 className="subtitle display-2 fw-bolder pb-2 text-gold-gradient">
                                75%
                            </h2>
                            <p>De las startups lograron atraer inversores en el primer trimestre.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap flex-lg-nowrap gap-3 gap-lg-0 pb-4 pb-md-0">
                        <Link to="/">
                            <button
                                type="button"
                                className="btn btn-general text-white btn-lightblue-personalized px-3 py-2 fw-bold">
                                Diagnosticar mi emprendimiento 
                            </button>
                        </Link>
                        <Link to="/">
                            <button
                                type="button"
                                className="btn ms-lg-3 text-white">
                                Más información
                                <FontAwesomeIcon icon={faArrowRight} className="ms-2" /> 
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="d-md-none">
                    <video className="video rounded-5 w-100 h-100" autoPlay loop muted>
                        <source src="./videos/video-2.mp4" type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>
                </div>
            </div>
        </section>
    );
};
