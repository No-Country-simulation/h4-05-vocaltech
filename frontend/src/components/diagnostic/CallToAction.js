import { Link } from "react-router-dom";

export const CallToAction = () => {
    return (
        <section className="container py-5 mb-4 text-center">
            <div className="row align-items-center">
                <div className="col-md-10 mx-auto">
                    <h2 className="display-5 pb-4 fw-bolder">¿Prefieres agendar una cita en lugar de llenar el diagnóstico?
                    </h2>
                    <p className="fw-bold pb-4">Reserva una sesión personalizada con nuestros expertos 
                        para analizar tu situación en detalle. Estamos aquí para ayudarte. 
                    </p>
                    <p className="lead pb-5">¡Elige la fecha y hora que mejor te convenga y démosle impulso a tu próximo paso!
                    </p>
                    <Link to="/agendar-cita">
                        <button className="btn btn-dark rounded-pill btn-personalized">Ir al calendario</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
