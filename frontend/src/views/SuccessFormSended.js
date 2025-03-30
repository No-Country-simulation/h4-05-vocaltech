import { Link } from "react-router-dom"

export default function SuccessFormSended() {
    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100 py-5">
            <div className="card shadow-lg" style={{ maxWidth: "500px" }}>
                <div className="card-body p-4">
                    <div className="text-center mb-4">
                        <i className="fas fa-check-circle text-success fa-4x mb-3"></i>
                        <h1 className="h3 fw-bold mb-3">Gracias por completar el diagnóstico</h1>
                        <p className="text-muted">Nos comunicaremos a la brevedad.</p>
                    </div>

                    <hr className="my-4" />

                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center mb-2">
                            <i className="fas fa-calendar-alt text-primary me-2"></i>
                            <p className="mb-0 fw-medium">¿Quieres feedback inmediato?</p>
                        </div>
                        <p className="mb-3 text-muted">Agenda una sesión gratuita para potenciar tu comunicación y tu negocio.</p>
                        <Link to="/agendar-cita" className="btn btn-primary w-100">
                            Agendar cita
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}