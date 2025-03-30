import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = ({ icon, title, subtitle, description }) => {
    return (
        <div className="border shadow-md rounded-3 p-4 px-md-5 bg-special-gray h-100">
            <FontAwesomeIcon icon={icon} className="fs-3 icon-services" />
            <h3 className="text-black fw-semibold fs-3 pt-2">{title}</h3>
            <p className="subtitle-card-services py-2">{subtitle}</p>
            <p>{description}</p>
        </div>
    );
};
