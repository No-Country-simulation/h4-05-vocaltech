import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <section className="landing-header px-3 pb-4 pb-lg-5 px-md-4">
            <div className="container pt-5 text-center">
                <div className="row pt-5 mt-5 px-3 px-md-4">
                    <span className="d-flex align-items-center border p-2 rounded-4 gap-2 span-top-header 
                        mx-auto w-auto mt-lg-4">
                        <FontAwesomeIcon icon={faBolt} className="fs-5 text-special-gray" />
                        <p className="mb-0 fw-semibold text-special-gray">Nuevo : ¡Herramienta de 
                            diagnóstico personalizado!
                        </p>
                    </span> 
                    <h1 className="display-1 mt-4 fw-bold text-white title-header">
                        VocalTech le pone voz y tecnología a tu proyecto
                    </h1>
                    <p className="span-bottom-header mt-3 lead fw-semibold px-0 text-special-gray">
                        Impulsa tu crecimiento con soluciones a medida
                    </p>
                    <div className="d-flex flex-wrap flex-md-nowrap justify-content-center gap-3 mt-3 
                        px-0 col-lg-9 col-xl-7 mx-auto">
                        <Link to="/" className="w-100">
                            <button
                                type="button"
                                className="btn btn-general btn-dark-personalized px-3 py-2 fw-bold text-white">
                                Soluciones para emprendedores 
                                <FontAwesomeIcon icon={faArrowRight} className="d-none d-md-inline ms-2" />
                            </button>
                        </Link>
                        <Link to="/diagnostico" className="w-100">
                            <button
                                type="button"
                                className="btn btn-general btn-multicolor-personalized px-3 py-2 fw-bold text-white">
                                Potencia tu empresa ahora 
                                <FontAwesomeIcon icon={faArrowRight} className="d-none d-md-inline ms-2" /> 
                            </button>
                        </Link>
                    </div>
                    <span className="d-md-flex align-items-center px-3 pb-4 pb-lg-5 justify-content-center mt-5">
                        <p className="fw-semibold text-special-gray lead mb-md-0 pe-md-2">Powered by</p>
                        <img src="./images/logos/light-no-country-logo.png" width={130} height={25} alt="No Country logo" />
                        <p className="fw-semibold text-special-gray mb-0 px-md-2">&</p>
                        <img src="./images/logos/voz-logo.png" width={50} alt="Vos y tu voz logo" />
                    </span>
                </div>
            </div>
            <div className="container-fluid section-bottom-header d-flex align-items-center py-3">
                <div className="scrolling bg-transparent text-white">
                    <img src="./images/start.png" width={30} height={30} alt="Estrella" className="mx-3" />
                    <h3 className="fw-bold">Llega más lejos</h3> 
                    <img src="./images/start.png" width={30} height={30} alt="Estrella" className="mx-3" />
                    <h3 className="fw-bold">Conecta</h3> 
                    <img src="./images/start.png" width={30} height={30} alt="Estrella" className="mx-3" />
                    <h3 className="fw-bold">Talento</h3> 
                    <img src="./images/start.png" width={30} height={30} alt="Estrella" className="mx-3" />
                    <h3 className="fw-bold">Lidera</h3> 
                    <img src="./images/start.png" width={30} height={30} alt="Estrella" className="mx-3" />
                    <h3 className="fw-bold">Tecnología</h3> 
                    <img src="./images/start.png" width={30} height={30} alt="Estrella" className="mx-3" />
                    <h3 className="fw-bold">Persuade con tu voz</h3> 
                    <img src="./images/start.png" width={30} height={30} alt="Estrella" className="mx-3" />
                    <h3 className="fw-bold">Transforma</h3> 
                    <img src="./images/start.png" width={30} height={30} alt="Estrella" className="mx-3" />
                    <h3 className="fw-bold">Voces que inspiran</h3> 
                    <img src="./images/start.png" width={30} height={30} alt="Estrella" className="mx-3" />
                </div>
            </div>
        </section>
    );
};
