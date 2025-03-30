import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import EntrepreneurForm from "../components/EntrepreneurForm"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const EntrepreneurDiagnostic = () => {

    const [step, setStep] = useState(0);

    const navigate = useNavigate();
    const handleBack = () => {
        if (step !== 0)
            setStep(prevStep => prevStep - 1)
        if (step === 0)
            navigate("/diagnostico");
    };

    return (
        <section className="diagnostic">
            <button className="diagnostic-back" onClick={handleBack}>
                <FontAwesomeIcon icon={faArrowLeftLong} className="ms-2 fa-lg" />
                Regresar
            </button>
            <img src="/images/logos/vocaltech-logo.png" width="328" height="54" alt="Vocaltech Logo" className="mx-3 mb-3" />
            <div className="d-flex justify-content-center align-items-center mt-5 overflow-auto">
                <div className="d-flex align-items-center w-100" style={{ minWidth: '320px', maxWidth: '600px' }}>
                    {/* Paso 1 */}
                    <div className="d-flex flex-column align-items-center">
                        {/* Círculo azul con el check */}
                        <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary" style={{ width: '40px', height: '40px' }}>
                            <FontAwesomeIcon icon={faCheck} className="text-white" style={{ fontSize: '24px' }} />
                        </div>
                        <p className="text-sm font-weight-medium text-center mt-2 text-primary">
                            ¿Qué necesitas?
                        </p>
                    </div>

                    {/* Línea 1 */}
                    <div className="d-flex align-items-center justify-content-center mx-2" style={{ width: '64px', height: '32px', position: 'relative' }}>
                        <div className="w-100" style={{ height: '2px', backgroundColor: '#007bff' }}></div>
                    </div>

                    {/* Paso 2 */}
                    <div className="d-flex flex-column align-items-center">
                        {/* Círculo azul con el check */}
                        <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary" style={{ width: '40px', height: '40px' }}>
                            <FontAwesomeIcon icon={faCheck} className="text-white" style={{ fontSize: '24px' }} />
                        </div>
                        <p className="text-sm font-weight-medium text-center mt-2 text-muted">
                            Ayúdanos a entenderte
                        </p>
                    </div>

                    {/* Línea 2 */}
                    <div className="d-flex align-items-center justify-content-center mx-2" style={{ width: '64px', height: '32px', position: 'relative' }}>
                        <div className="w-100" style={{ height: '2px', backgroundColor: '#007bff' }}></div>
                    </div>

                    {/* Paso 3 */}
                    <div className="d-flex flex-column align-items-center">
                        {/* Círculo con ícono (sin fondo) */}
                        <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px' }}>
                            <img src="../images/step-3.png" width={40} height={40} alt="Paso 3" className="mx-3" />
                        </div>
                        <p className="text-sm font-weight-medium text-center mt-2 text-muted">
                            Te damos la solución
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <img src="/images/entrepreneur-hero.png" width="796" height="313" alt="Ejecutivo de Empresa" className="mx-3 mb-3" />

            {/* Form */}
            <EntrepreneurForm step={step} setStep={setStep} />

        </section>
    );
};