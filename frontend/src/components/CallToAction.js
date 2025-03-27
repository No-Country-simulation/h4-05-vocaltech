import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const CallToAction = () => {
    return (
        <section className="container py-5 mb-5">
            <img src="./images/square.png" alt="Cuadrado" width={300} 
                className="position-absolute start-0 bottom-0" style={{ zIndex: "-1" }} />
            <img src="./images/square.png" alt="Cuadrado" width={400} 
                className="position-absolute end-0 top-0" style={{ zIndex: "-1", transform: "rotate(180deg)" }} />
            <div className="col-lg-10 mx-lg-auto text-center">
                <h2 className="subtitle text-black display-2 fw-bolder">
                    VocalTech le pone voz y tecnología a tu proyecto
                </h2>
                <p className="pt-3 pb-2 lead">Empieza hoy mismo: soluciones para emprendedores y empresas.</p>
                <Link to="/">
                    <button
                        type="button"
                        className="btn btn-general btn-header btn-multicolor-personalized px-3 
                        py-2 fw-bold text-white">
                        Obtener Diagnóstico ahora 
                        <FontAwesomeIcon icon={faArrowRight} className="d-none d-md-inline ms-2" /> 
                    </button>
                </Link>
            </div>
        </section>
    );
};
