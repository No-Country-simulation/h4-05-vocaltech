import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStar, faGraduationCap, faCogs, faRocket, faBullhorn, faLightbulb, faChartLine } from '@fortawesome/free-solid-svg-icons';

export const Benefits = () => {
    return (
        <section className="container py-5">
            <div className="row mb-4">
                <div className="col-md-6">
                    <h4 className="fw-bolder display-8 text-center pb-5 pb-md-4 text-md-start">
                        Beneficios para Emprendedores
                    </h4>
                    <div className="card mb-3 shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <FontAwesomeIcon icon={faRocket} className="me-3 fs-3 icon-benefit" />
                            <p className="mb-0">Desarrollo de MVPs funcionales en 5 semanas.</p>
                        </div>
                    </div>
                    <div className="card mb-3 shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <FontAwesomeIcon icon={faBullhorn} className="me-3 fs-3 icon-benefit" />
                            <p className="mb-0">Entrenamiento en pitch para conectar con inversores.</p>
                        </div>
                    </div>
                    <div className="card mb-3 shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <FontAwesomeIcon icon={faLightbulb} className="me-3 fs-3 icon-benefit" />
                            <p className="mb-0">Validación de ideas y modelos de negocio.</p>
                        </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <FontAwesomeIcon icon={faChartLine} className="me-3 fs-3 icon-benefit" />
                            <p className="mb-0">Estrategias de comunicación efectiva para ventas.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 className="fw-bolder display-8 text-center py-5 text-md-start pt-md-0 pb-md-4">
                        Beneficios para Empresas
                    </h4>
                    <div className="card mb-3 shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <FontAwesomeIcon icon={faUsers} className="me-3 fs-3 icon-benefit" />
                            <p className="mb-0">Workshops en liderazgo y comunicación para equipos.</p>
                        </div>
                    </div>
                    <div className="card mb-3 shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <FontAwesomeIcon icon={faStar} className="me-3 fs-3 icon-benefit" />
                            <p className="mb-0">Identificación y desarrollo de talento a través de simulaciones.</p>
                        </div>
                    </div>
                    <div className="card mb-3 shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <FontAwesomeIcon icon={faGraduationCap} className="me-3 fs-3 icon-benefit" />
                            <p className="mb-0">Programas de reskilling y upskilling para mejorar habilidades.</p>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <FontAwesomeIcon icon={faCogs} className="me-3 fs-3 icon-benefit" />
                            <p className="mb-0">Creación de estrategias para fortalecer la cultura empresarial.</p>
                        </div>
                    </div>
                </div>           
            </div>
        </section>
    );
};
