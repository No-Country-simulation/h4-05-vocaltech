import { ServiceCard } from "./ServiceCard";
import { advantages } from "../../utils/advantages";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Services = () => {
    return (
        <section className="container py-5">
            <h2 className="display-7 fw-bolder text-start pb-2">Beneficios para tu emprendimiento</h2>
            <p>Descubre lo que obtendrás con VocalTech</p>
            <div className="row d-flex justify-content-sm-between mb-3">
                {
                    advantages.map(advantage => (
                        <div key={advantage.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 d-flex justify-content-center">
                            <ServiceCard
                                imgUrl={advantage.imgUrl}
                                title={advantage.title}
                                description={advantage.description}
                            />
                        </div>
                    ))
                }
            </div>
            <p className="text-center">Accede a nuestra guía de consejos y errores comunes: <Link to="https://drive.google.com/file/d/1DPn7p3NkNvghTgoo5t8EsGZVXfB5ecF8/view" target="_blank">Descargar guía <FontAwesomeIcon icon={faArrowRight} className="ms-1"/> </Link> </p>
        </section>
    );
};
