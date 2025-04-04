import { Link } from "react-router-dom";
import { BrandsCallToAction } from "../BrandsCallToAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const CallToAction = () => {
    return (
        <BrandsCallToAction 
            subtitle={"Nuestra trayectoria en Comunicación y Tech"}
            question={"¿Necesitas asesoría?"}>
            <Link to="/">
                <button
                    type="button"
                    className="btn btn-general btn-multicolor-personalized px-3 
                    py-2 fw-bold text-white">
                    Contáctanos ahora 
                    <FontAwesomeIcon icon={faArrowRight} className="d-none d-md-inline ms-2" /> 
                </button>
            </Link>
        </BrandsCallToAction>
    );
};
