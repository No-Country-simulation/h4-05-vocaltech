import { Link } from "react-router-dom";
import { Service } from "./cards/Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { services } from "../utils/services";
  
export const Services = () => {
    return (
        <section className="services container py-5 mb-5">
            <div className="col-lg-7 mx-lg-auto">
                <p className="small-subtitle text-lightgray lead text-center">SERVICIOS</p>
                <h2 className="subtitle text-black display-2 fw-bolder text-center pb-5">
                    Cómo podemos ayudarte a crecer
                </h2>
            </div>
            <div className="row">
                <div className="d-flex justify-content-end pe-0 mb-3">
                    <Link to="/">
                        <button
                            type="button"
                            className="btn text-black py-0">
                            Explora todas las opciones que tenemos para ti 
                            <FontAwesomeIcon icon={faArrowRight} className="ms-2" /> 
                        </button>
                    </Link>
                </div>
                {
                    services.slice(0, 3).map((service, index) => (
                        <div className={ index === 2 ? "col-lg-4" : "mb-4 mb-lg-0 col-md-6 col-lg-4" }>
                        <Service
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            subtitle={service.subtitle}
                            description={service.description}
                        />
                        </div>
                    ))
                }    
            </div>
        </section>
    );
};
