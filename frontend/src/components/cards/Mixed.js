import { useState } from 'react';

const Mixed = ({ title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`diagnostic-card mixed ${isHovered && "hovered"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Imagen como fondo dinámico */}
            {isHovered && (
                <img
                    src="/images/entrepreneurs.png"
                    alt="Background Image"
                    className="position-absolute bottom-0 end-0 img-fluid opacity-25"
                    style={{ height: "270px", width: "235px", marginBottom: "-0.5rem", marginRight: "-0.1rem" }}
                />
            )}

            {!isHovered ? (
                <>
                    {/* Título e icono */}
                    <div className="d-flex align-items-center p-3">
                        <img src="/images/round.png" alt="Microphone Icon" className="me-2" style={{ width: "24px", height: "24px" }} />
                        <h3 className="diagnostic-card-title">{title}</h3>
                    </div>
                    {/* Imagen posicionada */}
                    <div className="position-relative flex-grow-1">
                        <img
                            src="/images/entrepreneurs.png"
                            alt={title}
                            className="position-absolute bottom-0 end-0 img-fluid"
                            style={{ height: "270px", width: "235px", marginBottom: "-0.5rem", marginRight: "-0.1rem" }}
                        />
                    </div>
                    {/* Franja gris */}
                    <div className="diagnostic-card-footer">
                        <p>{description}</p>
                    </div>
                </>
            ) : (
                <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100 text-white px-3">
                    {/* Contenedor para el vector y texto */}
                    <div className="d-flex align-items-center mb-3">
                        <img src="/images/Vector.png" alt="Vector Icon" className="me-2" style={{ width: "20px", height: "20px" }} />
                        <h3 className="fs-6 fw-bold text-white mb-0">Servicio Recomendado para...</h3>
                    </div>
                    {/* Lista de recomendaciones */}
                    <ul className="list-unstyled text-left small">
                        {[
                            "Crear y presentar mi proyecto de forma efectiva.",
                            "No estoy seguro cómo comunicar mi MVP a clientes o inversores.",
                            "Tengo problemas para escalar mi proyecto.",
                            "Fortalecer mi liderazgo para quiar a mi equipo."
                        ].map((text, index) => (
                            <li key={index} className="d-flex mb-2">
                                <img
                                    src="/images/check-circle.png"
                                    alt="Check Circle Icon"
                                    className="me-2"
                                    style={{ width: "12px", height: "12px" }}
                                />
                                <span className="text-wrap text-left" style={{ fontSize: '13px' }}>
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    );
};

export default Mixed;