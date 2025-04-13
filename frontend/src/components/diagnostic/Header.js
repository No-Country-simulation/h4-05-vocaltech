import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { ProgressBar } from "./ProgressBar";

export const Header = ({ step = null }) => {
    return (
        <section className="diagnostic-header pb-4">
            <div className="position-relative">
                <div className="position-absolute left-0">
                    <Link className="text-dark fw-bolder link-back" to="/">
                        <FontAwesomeIcon icon={faArrowLeftLong} className="me-2" />
                        Regresar
                    </Link>
                </div>
                <div className="d-flex justify-content-center pt-5 pt-md-0">
                    <img src="/images/logos/vocaltech-logo.png" height={40} alt="Vocaltech Logo"  />
                </div>
            </div>
            <ProgressBar step={step} />
        </section>
    );
};
