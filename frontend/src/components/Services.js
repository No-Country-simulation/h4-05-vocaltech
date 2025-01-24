import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
    return (
        <section className="container py-5">
            <h2 className="display-7 fw-bolder text-center pb-5">Nuestros servicios</h2>
            <div className="row mb-4">
                <div className="col-xl-6 pe-lg-5 pe-xl-0">
                    <h4 className="fw-bolder display-8 mb-3">Empresas</h4>
                    <p className="mb-3">
                        Fortalece tus equipos, lidera con confianza y transforma tu cultura
                        empresarial. Descubre cómo nuestros workshops y herramientas
                        innovadoras pueden llevar a tu empresa al siguiente nivel.
                    </p>
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
                    <div className="text-center pb-5 mb-md-3 mb-xl-4">
                        <button
                            type="button"
                            className="btn btn-outline-dark rounded-pill btn-width">
                            <FontAwesomeIcon className="me-2" icon={faBriefcase} /> Descubrir
                        </button>
                    </div>
                </div>
                <div className="col-md-6 pb-4">
                    <img
                        src="./images/empresas.jpg"
                        alt="empresas"
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-6">
                    <img
                        src="./images/emprendedores.jpg"
                        alt="empresas"
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-xl-6  pe-lg-5 pe-xl-0">
                    <h4 className="fw-bolder display-8 pt-4 mb-3">Emprendedores</h4>
                    <p className="mb-3">
                        Transforma tu visión en un proyecto exitoso con nuestro
                        acompañamiento. Desde el desarrollo de tu MVP hasta mejorar tu
                        pitch, estamos aquí para ayudarte.
                    </p>
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
                    <p className="pb-4"><strong>Descubre cómo ayudadamos a los emprendedores</strong></p>
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn btn-outline-dark rounded-pill btn-width">
                            <FontAwesomeIcon className="me-2" icon={faHouseLaptop} /> Descubrir
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
