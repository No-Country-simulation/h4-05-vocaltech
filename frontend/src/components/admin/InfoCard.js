import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarChart } from "@fortawesome/free-solid-svg-icons"

export const InfoCard = ({ title, quantity }) => {
    return (
        <div className="card border-1 rounded-4">
            <div className="card-body py-2">
                <p className="card-title me-1 text-lightgray fw-semibold">
                    <FontAwesomeIcon style={{ transform: 'rotate(-90deg)' }} 
                    icon={faBarChart} className="me-2 text-lightblue" />{title}
                </p>
                <h1 className="fw-bolder text-lightblue fs-1">
                    {quantity}
                </h1>
            </div>
        </div>
    );
};
