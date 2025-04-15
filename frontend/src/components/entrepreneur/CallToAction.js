import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BrandsCallToAction } from "../BrandsCallToAction";

export const CallToAction = () => {
    return (
        <BrandsCallToAction 
            subtitle={"Empresas que confían en nuestros resultados"}
            question={"Construye tu futuro. Comienza hoy."}>
            <div className="d-flex flex-wrap flex-md-nowrap justify-content-center gap-3 mt-3 
                px-0 col-lg-9 col-xl-7 mx-auto px-3">
                <Link to="/diagnostico">
                    <button
                        type="button"
                        className="btn btn-general btn-multicolor-personalized px-3 py-2 fw-bold text-white">
                        Diagnosticar mi emprendimiento
                        <FontAwesomeIcon icon={faArrowRight} className="d-none d-md-inline ms-2" /> 
                    </button>
                </Link>
            </div>
        </BrandsCallToAction>
    );
};
