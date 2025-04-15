import { Link } from "react-router-dom"
import { ScrollToTop } from "../ScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faCalendar, faHome } from "@fortawesome/free-solid-svg-icons"

export const SentSucessfully = () => {
    return (
        <div className="text-center col-md-7 col-lg-6 mx-auto pt-5">
            <ScrollToTop />
            <FontAwesomeIcon icon={faCheckCircle} className="text-success pb-3" size="3x" />
            <h1 className="text-black display-6 fw-bolder pb-3">
                Gracias por completar el diagnóstico
            </h1>
            <p className="text-gray">Nos comunicaremos a la brevedad.</p>
            <hr className="my-4" />
            <div className="d-flex flex-wrap gap-3 mt-3">
                <Link to="/" className="w-100">
                    <button
                        type="button"
                        className="btn btn-general btn-lightblue-personalized px-3 py-2 fw-bold text-white">
                        <FontAwesomeIcon icon={faHome} className="me-2" />
                        Volver al inicio
                    </button>
                </Link>
            </div>
        </div>
    );
};
