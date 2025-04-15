import { Link } from "react-router-dom"
import { ScrollToTop } from "./ScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle, faHome } from "@fortawesome/free-solid-svg-icons"

export const ErrorSending = () => {
    return (
        <div className="text-center col-md-7 col-lg-6 mx-auto pt-5">
            <ScrollToTop />
            <FontAwesomeIcon icon={faExclamationCircle} className="text-danger pb-3" size="3x" />
            <h1 className="text-black display-6 fw-bolder pb-3">
                No se pudo enviar el formulario
            </h1>
            <p className="text-gray">Por favor, vuelva a intentarlo más tarde.</p>
            <hr className="my-4" />
            <Link to="/" className="w-100">
                <button
                    type="button"
                    className="btn btn-general btn-lightblue-personalized px-3 py-2 fw-bold text-white">
                    <FontAwesomeIcon icon={faHome} className="me-2" /> 
                    Volver al inicio
                </button>
            </Link>
        </div>
    );
};
