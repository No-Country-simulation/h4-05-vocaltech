import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
    return (
        <section className="container py-5">
            <h2 className="display-7 fw-bolder text-center pb-5">Nuestros Servicios</h2>
            <div className="row">
                <div className="col-md-6 pe-md-4">
                    <div className="card mb-4 border-0">
                        <img src="./images/emprendedores.jpg" className="rounded d-md-none" 
                            alt="Emprendedores" />
                        <div className="card-body px-0 pb-0 pt-md-0 pb-md-5">
                            <h4 className="fw-bolder display-8">Para Emprendedores</h4>
                            <p className="lead mb-3">Lleva tu idea al siguiente nivel</p>
                            <p className="mb-3">
                                Si eres emprendedor, te ayudamos a transformar tu visión en realidad. 
                                Con servicios de coaching en liderazgo y desarrollo de productos (MVPs), 
                                obtendrás las claves necesarias para dar el salto que tu proyecto necesita.
                            </p>
                            <p className="pb-4 fw-bold">¿Deseas saber cómo ayudamos a los emprendedores 
                                como tú?
                            </p>
                            <Link to="/emprendedor">
                                <button
                                    type="button"
                                    className="btn btn-outline-dark rounded-pill btn-width-services">
                                    <FontAwesomeIcon className="me-1" icon={faLightbulb} /> Descubrir más
                                </button>
                            </Link>
                        </div>
                        <img src="./images/empresas.jpg" className="rounded d-none d-md-block" alt="Empresas" />
                    </div>
                </div>
                <div className="col-md-6 pt-4 pt-md-0 ps-md-4">
                    <div className="card mb-4 border-0">
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
                            <p className="pb-4 fw-bold">¿Quieres conocer cómo potenciamos a las empresas?</p>
                            <Link to="/empresa">
                                <button
                                    type="button"
                                    className="btn btn-outline-dark rounded-pill btn-width-services">
                                        <FontAwesomeIcon className="me-1" icon={faBuilding} /> Descubrir más
                                </button>
                            </Link>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


/* 
<p className="fw-bold mb-1">Beneficios:</p>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item list-group-item-action">
                            Workshops en liderazgo y comunicación para equipos.
                        </li>
                        <li className="list-group-item list-group-item-action">
                            Identificación y desarrollo de talento a través de simulaciones.
                        </li>
                        <li className="list-group-item list-group-item-action">
                            Programas de reskilling y upskilling para mejorar habilidades.
                        </li>
                        <li className="list-group-item list-group-item-action">
                            Creación de estrategias para fortalecer la cultura empresarial.
                        </li>
                    </ul>
                    <p className="pb-4"><strong>Descubre cómo potenciamos a las empresas</strong></p>







                    <p className="fw-bold mb-1">Beneficios:</p>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item list-group-item-action">
                            Desarrollo de MVPs funcionales en 5 semanas.{" "}
                        </li>
                        <li className="list-group-item list-group-item-action">
                            Entrenamiento en pitch para conectar con inversores.{" "}
                        </li>
                        <li className="list-group-item list-group-item-action">
                            Validación de ideas y modelos de negocio.{" "}
                        </li>
                        <li className="list-group-item list-group-item-action">
                            Estrategias de comunicación efectiva para ventas.{" "}
                        </li>
                    </ul>

*/