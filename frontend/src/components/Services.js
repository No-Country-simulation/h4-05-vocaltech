import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
    return (
        <section id="services" className="services container py-5">
            <h2 className="display-7 fw-bolder text-center pb-5">Nuestros Servicios</h2>
            <div className="row">
                <div className="col-md-6 pe-md-4">
                    <div className="card mb-4 border-0 bg-transparent">
                        <img src="./images/emprendedores.jpg" className="rounded d-md-none" 
                            alt="Emprendedores" />
                        <div className="card-body px-0 pb-0 pt-md-0 pb-md-5">
                            <h4 className="fw-bolder display-8 mb-1">Para Emprendedores</h4>
                            <p className="lead mb-3">Lleva tu idea al siguiente nivel</p>
                            <p className="mb-3">
                                Si eres emprendedor, te ayudamos a transformar tu visión en realidad. 
                                Con servicios de coaching en liderazgo y desarrollo de productos (MVPs), 
                                obtendrás las claves necesarias para dar el salto que tu proyecto necesita.
                            </p>
                            <p className="pb-4 fw-bold strong">¿Deseas saber cómo ayudamos a los emprendedores 
                                como tú?
                            </p>
                            <div className="text-center">
                                <Link to="/emprendedor">
                                    <button
                                        type="button"
                                        className="btn rounded-pill btn-personalized">
                                        <FontAwesomeIcon className="me-1" icon={faLightbulb} /> Descubrir más
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <img src="./images/empresas.jpg" className="rounded d-none d-md-block" alt="Empresas" />
                    </div>
                </div>
                <div className="col-md-6 pt-4 pt-md-0 ps-md-4">
                    <div className="card mb-4 border-0 bg-transparent">
                        <img src="./images/empresas.jpg" className="rounded d-md-none" alt="Empresas" />
                        <img src="./images/emprendedores.jpg" className="rounded d-none d-md-block" 
                            alt="Emprendedores" />
                        <div className="card-body px-0 pb-0 pt-md-4">
                            <h4 className="fw-bolder display-8 mb-1">Para Empresas</h4>
                            <p className="lead mb-3">Potencia tu equipo con soluciones personalizadas</p>
                            <p className="mb-3">
                                Descubre servicios diseñados para impulsar la comunicación, liderazgo y 
                                gestión del talento en tu empresa. Desde workshops especializados hasta 
                                asesoría estratégica, ofrecemos herramientas prácticas para que tu 
                                organización crezca con éxito.
                            </p>
                            <p className="pb-4 fw-bold strong">¿Quieres conocer cómo potenciamos a las empresas?</p>
                            <div className="text-center">
                                <Link to="/empresa">
                                    <button
                                        type="button"
                                        className="btn rounded-pill btn-personalized">
                                            <FontAwesomeIcon className="me-1" icon={faBuilding} /> Descubrir más
                                    </button>
                                </Link>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
