import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CardAdmin = () => {
  return (
    <div className="row">
      <div className="card col-3" style={{ width: "18rem", height: "15rem" }}>
        <div className="card-body">
          <h5 className="card-title">Pitch</h5>
          <p className="card-text text-truncate">
            Estimado usuario, en atención a la solicitud de tu pitch este es Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    </div>
  );
};
