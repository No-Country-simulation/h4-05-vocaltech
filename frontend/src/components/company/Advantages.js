import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Advantage } from "../cards/Advantage";
import { advantages } from "../../utils/advantages";

export const Advantages = () => {
    return (
        <section className="services-entrepreneur container py-5">
            <div className="col-lg-5">
                <h2 className="subtitle text-black display-3 text-center d-md-none fw-bolder pb-3">
                    Beneficios para tu empresa
                </h2>
                <h2 className="subtitle text-black display-2 d-none d-md-block fw-bolder pb-3">
                    Beneficios para tu empresa
                </h2>
                <p className="lead pb-4">Descubre lo que obtendrás con VocalTech</p>
            </div>
            <div className="row d-flex gap-4 gap-md-0 justify-content-lg-between">
                {
                    advantages.map(advantage => (
                        <div key={advantage.id} className="col-md-4 col-lg-2 mb-md-4">
                            <Advantage
                                imgUrl={advantage.imgUrl}
                                title={advantage.title}
                                description={advantage.description}
                            />
                        </div>
                    ))
                }
            </div>
            <p className="text-md-end pt-3">Accede a nuestra guía gratuita de consejos y errores comunes: <Link to="https://drive.google.com/file/d/1DPn7p3NkNvghTgoo5t8EsGZVXfB5ecF8/view" target="_blank">Descargar guía <FontAwesomeIcon icon={faArrowRight} className="ms-1"/></Link></p>
        </section>
    );
};
