import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle, faHome } from "@fortawesome/free-solid-svg-icons"

export default function ErrorFormSended() {
    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100 py-5">
            <div style={{ maxWidth: "500px" }}>
                <div className="card-body p-4">
                    <div className="text-center mb-4">
                        <FontAwesomeIcon icon={faExclamationCircle} className="text-danger mb-3" size="4x" />
                        <h1 className="h3 fw-bold mb-3">No se pudo enviar el formulario</h1>
                        <p className="text-muted">Por favor, vuelva a intentarlo más tarde.</p>
                    </div>

                    <hr className="my-4" />

                    <div className="text-center">
                        <div className="d-grid gap-2">
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