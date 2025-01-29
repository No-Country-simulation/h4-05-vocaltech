import { useState } from "react";
import { Modall } from "../../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CardAdmin = ({ title, subject, description }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardSubject, setCardSubject] = useState("");
  const [content, setContent] = useState("");

  const handleView = () => {
    setModalType("view");
    setShowModal(true);
  };

  const handleEdit = () => {
    setCardTitle(title); 
    setCardSubject(subject); 
    setContent(description);
    setModalType("edit");
    setShowModal(true);
  };

  const handleDelete = () => {
    setModalType("delete");
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    // Lógica para confirmar la eliminación
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="card" style={{ width: "18rem", height: "15rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subject}</h6>
          <p className="card-text text-truncate">{description}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-outline-info me-3" onClick={handleView}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="btn btn-outline-warning me-3" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>

      <Modall showModal={showModal} closeModal={closeModal}>
        {modalType === "view" && (
          <div className="d-flex flex-column p-4">
            <h5 className="mb-3 text-center">{title}</h5>
            <h6 className="mb-3 text-start">Asunto: {subject}</h6>
            <p className="lead">{description}</p>
          </div>
        )}
        {modalType === "edit" && (
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column" style={{ width: "80%" }}>
              <label className="mb-3 fw-bold">Título:</label>
              <input
                className="form-control mb-3"
                type="text"
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
              />
              <label className="mb-3 fw-bold">Asunto:</label>
              <input
                className="form-control mb-3"
                type="text"
                value={cardSubject}
                onChange={(e) => setCardSubject(e.target.value)}
              />
              <label className="mb-3 fw-bold">Descripción:</label>
              <textarea
                className="form-control mb-3 rounded-4"
                rows="6"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="text-center mt-3 mb-3">
              <button className="btn btn-outline-success me-3">
                Registrar
              </button>
            </div>
          </div>
        )}
        {modalType === "delete" && (
          <div>
            <h5 className="text-center mb-4">
              ¿Seguro que deseas eliminar esta plantilla?
            </h5>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-danger me-3"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button
                className="btn btn-outline-success"
                onClick={handleConfirmDelete}
              >
                Eliminar
              </button>
            </div>
          </div>
        )}
      </Modall>
    </>
  );
};
