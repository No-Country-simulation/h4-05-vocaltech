import { useState } from "react";
import { Modall } from "../../Modal";
import { Toaster, toast } from "sonner";
import { templateService } from "../../../services/templates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CardAdmin = ({ id, roleId, serviceId, title, subject, description, onUpdate }) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await templateService.editTemplates({
        id,
        role_id: roleId,
        title: cardTitle,
        subject: cardSubject,
        body: content,
        service_id: serviceId
      });
      console.log(response);
      toast.success("Plantilla actualizada");

      const updatedTemplates = JSON.parse(localStorage.getItem("templates") || "[]");
      const index = updatedTemplates.findIndex(template => template.id === id);
      if (index !== -1) {
        updatedTemplates[index] = { ...updatedTemplates[index], title: cardTitle, subject: cardSubject, body: content };
        localStorage.setItem("templates", JSON.stringify(updatedTemplates));
      }
      onUpdate()
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar plantilla");
    }
  }

  const handleDelete = () => {
    setModalType("delete");
    setShowModal(true);
  };

  const handleConfirmDelete = async(event) => {
    event.preventDefault();
    
    try {
      const response = await templateService.deleteTemplates(id);
      console.log(response);
      toast.success("Plantilla eliminada");

      const updatedTemplates = JSON.parse(localStorage.getItem("templates") || "[]");
      const newTemplates = updatedTemplates.filter(template => template.id !== id);
      localStorage.setItem("templates", JSON.stringify(newTemplates));

      onUpdate()
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar plantilla");
    }
    setShowModal(false);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="card" style={{ height: "20rem" }}>
        <div className="card-body pt-4 px-4">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subject}</h6>
          <p className="card-text mt-4 text-truncate">{description}</p>
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
          <form onSubmit={handleSubmit}>
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
                <button className="btn btn-outline-success rounded-pill me-3" type="submit" style={{ width: "200px" }}>
                  Registrar
                </button>
              </div>
            </div>
          </form>
        )}
        {modalType === "delete" && (
          <div>
            <h5 className="text-center mb-4">
              ¿Seguro que deseas eliminar esta plantilla?
            </h5>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-danger rounded-pill me-3"
                onClick={closeModal}
                style={{ width: "200px" }}
              >
                Cancelar
              </button>
              <button
                className="btn btn-outline-success rounded-pill"
                onClick={handleConfirmDelete}
                style={{ width: "200px" }}
              >
                Eliminar
              </button>
            </div>
          </div>
        )}
      </Modall>
      <Toaster richColors position="top-center" />
    </>
  );
};
