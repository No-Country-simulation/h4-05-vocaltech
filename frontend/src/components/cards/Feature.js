import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const Feature = ({ id, backgroundColor, img, icon, title, footer, items }) => {
    return (
        <div className="card text-white rounded-4 border-0 position-relative" 
            style={{ backgroundColor: backgroundColor, height: "430px" }}>
            <img src={img} className="card-img position-absolute bottom-0 end-0" 
                alt={title} style={{ width: id === 1 ? "70%" : "80%" }} />
            <div className="card-img-overlay d-flex flex-column justify-content-between p-0">
                <h4 className="card-title border-0 pt-4 px-4">
                    <FontAwesomeIcon icon={icon} className="me-2" />
                    {title}
                </h4>
                <p className="card-footer mt-auto border-0 p-0 mb-0 px-3 py-2 fw-semibold">{footer}</p>
            </div>
            <div className="overlay px-4 pt-5 position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100">
                <div className="text">
                    <p className="lead fw-semibold d-flex align-items-center">
                        <FontAwesomeIcon icon={faBolt} className="icon-bolt-diagnostic me-2" />
                        Servicio recomendado para...</p>
                    <ul>
                        {
                            items.map((item, index) => (
                                <li className="pb-2 items-card" key={index}><FontAwesomeIcon icon={faCheckCircle} className="me-2 icon-check-diagnostic" />{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};
