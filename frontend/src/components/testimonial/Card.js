import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

export const Card = ({ name, role, description, imgUrl, stars  }) => {
    return (
        <div className="card py-3 px-1" style={{ minHeight: '400px' }}>
            <div className="card-header border-0 bg-transparent">
                {[...Array(stars)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-warning fs-6" />
                ))}
                {[...Array(5 - stars)].map((_, index) => (
                    <FontAwesomeIcon key={index + stars} icon={regularStar} className="text-warning fs-6" />
                ))}
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer d-flex border-0 bg-transparent">
                <img
                    src={imgUrl}
                    alt={name}
                    className="object-fit-contain rounded-circle me-4"
                    style={{ width: "70px", height: "70px" }}
                />
                <div className="align-self-center">
                    <p className="card-title">{name}</p>
                    <p className="card-subtitle fw-bold">{role}</p>
                </div>
            </div>
        </div>
    );
};
