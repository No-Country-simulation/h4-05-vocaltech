import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ProgressBar = () => {
    return (
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
                    {/* Círculo con ícono (sin fondo) */}
                    <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px' }}>
                        <img src="./images/step-2.png" width={40} height={40} alt="Paso 2" className="mx-3" />
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
                        <img src="./images/step-3.png" width={40} height={40} alt="Paso 3" className="mx-3" />
                    </div>
                    <p className="text-sm font-weight-medium text-center mt-2 text-muted">
                        Te damos la solución
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
