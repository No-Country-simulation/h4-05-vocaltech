import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ProgressBar from "../components/new-diagnostic/ProgressBar";
import Communication from "../components/cards/Communication";
import Tecnhnology from "../components/cards/Technology";
import Mixed from "../components/cards/Mixed";


export const NewDiagnostic = () => {

    return (
        <section className="diagnostic">
            <Link className="diagnostic-back" to="/">
                <FontAwesomeIcon icon={faArrowLeftLong} to={"/"} className="ms-2 fa-lg" />
                Regresar
            </Link>
            <img src="/images/vocaltech-logo.png" width="328" height="54" alt="Vocaltech Logo" className="mx-3 mb-3" />
            <ProgressBar />

            <div className="diagnostic-cards-section">
                <div className="d-flex flex-column gap-3">
                    <h2>
                        ¿Qué necesitas construir o mejorar?
                    </h2>
                    <p className="diagnostic-cards-section-subtitle">
                        En Vocaltech te ayudamos a identificar y construir lo que tu negocio necesita.
                    </p>

                    <div className="d-flex justify-content-start gap-3">
                        <Communication
                            title="Comunicación y Liderazgo"
                            description="Potenciar tus habilidades de comunicación"
                        />
                        <Tecnhnology
                            title="Soluciones Tecnológicas"
                            description="Impulsar tus proyectos Tech con soluciones a medida"
                        />
                        <Mixed
                            title="Combinado"
                            description="Tu proyecto necesita tanto comunicación como tecnología"
                        />
                    </div>

                    <p className="diagnostic-cards-section-choice">
                        Para continuar, cuéntanos quién eres para adaptar tu diagnóstico.
                    </p>

                </div>
            </div>

            <div className="d-flex justify-content-start gap-3 mt-3">
                <Link className="diagnostic-entrepreneur-link" to={"/diagnostico/emprendedor"}>Soy Emprendedor</Link>
                <Link className="diagnostic-executive-link" to={"/diagnostico/ejecutivo"}>Represento una Empresa</Link>
            </div>
        </section>
    );
};