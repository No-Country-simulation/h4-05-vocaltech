import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faHome } from "@fortawesome/free-solid-svg-icons"

export default function SuccessContactInfoSended() {
    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100 py-5">
            <div style={{ maxWidth: "500px" }}>
                <div className="card-body p-4">
                    <div className="text-center mb-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success mb-3" size="4x" />
                        <h1 className="h3 fw-bold mb-3">Gracias por contactarnos</h1>
                        <p className="text-muted">Nos comunicaremos a la brevedad.</p>
                    </div>

                    <hr className="my-4" />

                    <div className="text-center">
                        <div className="d-flex flex-column gap-3 w-100">
                            <Link
                                to="/"
                                className="btn btn-primary d-flex align-items-center justify-content-center gap-3"
                            >
                                <FontAwesomeIcon icon={faHome} className="text-white" size="1x" />
                                <span>Volver al inicio</span>
                            </Link>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}