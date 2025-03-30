import { Link } from "react-router-dom"

export default function ErrorFormSended() {
    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100 py-5">
            <div className="card shadow-lg border-danger" style={{ maxWidth: "500px" }}>
                <div className="card-body p-4">
                    <div className="text-center mb-4">
                        <i className="fas fa-exclamation-circle text-danger fa-4x mb-3"></i>
                        <h1 className="h3 fw-bold mb-3">No se pudo enviar el formulario</h1>
                        <p className="text-muted">Por favor, vuelva a intentarlo más tarde.</p>
                    </div>

                    <hr className="my-4" />

                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center mb-2">
                            <i className="fas fa-redo text-primary me-2"></i>
                            <p className="mb-0 fw-medium">¿Desea intentarlo nuevamente?</p>
                        </div>
                        <p className="mb-3 text-muted">Puede intentar refrescar la página o volver más tarde.</p>
                        <div className="d-grid gap-2">
                            <button onClick={() => window.location.reload()} className="btn btn-outline-primary mb-2">
                                Intentar nuevamente
                            </button>
                            <Link to="/" className="btn btn-primary">
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}