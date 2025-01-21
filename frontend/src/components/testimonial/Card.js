import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

export const Card = () => {
    return (
        <div className="card py-3 px-1 col-md-4 col-lg-3">
            <div className="card-header border-0 bg-transparent">
                    <FontAwesomeIcon icon={faStar} className="text-warning fs-5" />
                    <FontAwesomeIcon icon={faStar} className="text-warning fs-5" />
                    <FontAwesomeIcon icon={faStar} className="text-warning fs-5" />
                    <FontAwesomeIcon icon={faStar} className="text-warning fs-5" />
                    <FontAwesomeIcon icon={regularStar} className="text-warning fs-5" />
             
            </div>
            <div className="card-body">
                <p className="card-text">
                    La capacitación en técnicas de pitch ha transformado nuestra
                    forma de presentar proyectos. Ahora tenemos las herramientas
                    necesarias para comunicar nuestras ideas de manera clara y
                    efectiva.
                </p>
            </div>
            <div className="card-footer d-flex border-0 bg-transparent">
                <img
                    src="https://picsum.photos/200?random=3"
                    alt="Juan Pérez"
                    className="object-fit-contain rounded-circle me-4"
                    style={{ width: "80px", height: "80px" }}
                />
                <div className="align-self-center">
                    <p className="card-title">Juan Pérez</p>
                    <p className="card-subtitle fw-bold">CEO de XYZ</p>
                </div>
            </div>
        </div>
    );
};
