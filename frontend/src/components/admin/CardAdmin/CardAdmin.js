import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CardAdmin = ({title, description}) => {
  return (
    <>
      <div className="card" style={{ width: "18rem", height: "15rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-truncate">
            {description}
          </p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-outline-info me-3">
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="btn btn-outline-warning me-3">
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className="btn btn-outline-danger">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  );
};
