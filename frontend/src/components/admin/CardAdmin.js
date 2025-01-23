import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CardAdmin = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Pitch</h5>
          <p className="card-text">
            Estimado usuario, en atención a la solicitud de tu pitch este es...
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
