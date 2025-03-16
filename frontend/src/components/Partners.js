import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Partners = () => {
    return (
        <section className="partners container py-5">
            <div className="col-lg-7 mx-lg-auto">
                <p className="small-subtitle text-lightgray lead text-center pt-5 mt-2 pt-lg-4">NOSOTROS</p>
                <h2 className="subtitle text-black display-2 fw-bolder text-center pb-5">
                    Juntos, impulsamos tu crecimiento
                </h2>
            </div>
            <div className="row mb-4">
                <div className="col-lg-5 text-center">
                    <img src="./images/woman.png" alt="Mujer" className="woman-img" />
                </div>
                <div className="col-lg-7 position-relative">
                    <div className="pt-5 pt-lg-0 col-md-7 mx-md-auto me-lg-0 col-lg-9">
                        <img src="./images/blue-arrow.png" alt="Icono flecha azul" className="d-none d-md-block
                            position-absolute start-0" width={200} />
                        <div className="d-flex align-items-center p-3 p-lg-4 rounded-4 shadow-md gap-4 opacity-60">
                            <img src="./images/icon-voz-logo.png" width={70} height="70px" alt="Vos y tu Voz icono" />
                            <span>
                                <p className="text-black lead fw-bold mb-2">Vos y tu Voz</p>
                                <p className="mb-0">Más de 20 años ayudando a mejorar la 
                                    comunicación, liderazgo y presentaciones a través de la voz.
                                </p>
                            </span>
                            
                        </div> 
                    </div>
                    <div className="pt-5 col-md-9 mx-md-auto me-lg-0 col-lg-12 position-relative block-partner">
                        <div className="p-3 p-lg-4 bg-white rounded-4 shadow-md gap-4 text-center text-xl-start d-xl-flex">
                            <img src="./images/vocaltech-logo.png" width={150} height={25} alt="Vocaltech logo" />
                            <span>
                                <p className="text-black lead fw-bold mb-2 mt-3 mt-xl-0">Alianza</p>
                                <p className="lead">Combinamos la experiencia de ambos mundos para brindar 
                                    soluciones integrales y personalizadas.
                                </p>
                                <Link to="/">
                                    <button
                                        type="button"
                                        className="btn btn-general btn-lightblue-personalized px-3 py-2 fw-bold text-white">
                                        Descubre más sobre Vocaltech 
                                        <FontAwesomeIcon icon={faArrowRight} className="d-none d-md-inline ms-2" /> 
                                    </button>
                                </Link>
                            </span>
                        </div> 
                    </div>
                    <div className="pt-5 col-md-7 mx-md-auto me-lg-0 col-lg-9">
                        <img src="./images/purple-arrow.png" alt="Icono flecha morada" className="d-none d-md-block
                            position-absolute start-0" width={200} />
                        <div className="d-flex align-items-center p-3 p-lg-4 rounded-4 shadow-md gap-4 opacity-60">
                            <img src="./images/icon-no-country-logo.png" width={70} height="70px" alt="No Country icono" />
                            <span>
                                <p className="text-black lead fw-bold mb-2">No-Country</p>
                                <p className="mb-0">Especialistas en MVPs, reskilling y upskilling para 
                                    crear soluciones innovadoras y equipos preparados para el mercado actual.
                                </p>
                            </span>
                            
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    );
};
