import { useState } from "react";
import { Modall } from "../../Modal";
import { Toaster, toast } from "sonner";
import { templateService } from "../../../services/templates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/buttons.css";

export const CardAdmin = ({ id, roleId, serviceId, title, subject, description, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardSubject, setCardSubject] = useState("");
  const [content, setContent] = useState("");

  const handleView = (title) => {
    setModalTitle(title);
    setModalType("view");
    setShowModal(true);
  };

  const handleEdit = (titleModal) => {
    setModalTitle(titleModal)
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

  const handleDelete = (title) => {
    setModalTitle(title)
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
          <button className="btn btn-outline-info me-3" onClick={() => handleView("Información")}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="btn btn-outline-warning me-3" onClick={() => handleEdit("Editar plantilla")}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className="btn btn-outline-danger" onClick={() => handleDelete("Eliminar plantilla")}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>

      <Modall title={modalTitle} showModal={showModal} closeModal={closeModal}>
        {modalType === "view" && (
          <>
            <h5 className="mb-2">{title}</h5>
            <p>Asunto: {subject}</p>
            <p>Descripción: {description}</p>
          </>
        )}
        {modalType === "edit" && (
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label className="fw-bold" htmlFor="title">Título</label>
                <input
                  className="form-control"
                  type="text"
                  id="title"
                  value={cardTitle}
                  onChange={(e) => setCardTitle(e.target.value)}
                />
            </div>
            <div className="form-group mb-4">
              <label className="w-bold" htmlFor="asunto">Asunto</label>
                <input
                  className="form-control"
                  type="text"
                  id="asunto"
                  value={cardSubject}
                  onChange={(e) => setCardSubject(e.target.value)}
                />
            </div>
            <div className="form-group">
              <label className="fw-bold" htmlFor="descripcion">Descripción</label>
                <textarea
                  className="form-control"
                  rows="6"
                  id="descripcion"
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="text-center">
              <button
                className="btn btn-form-diagnostic rounded-pill mt-4"
                type="submit">
                Editar
              </button>
            </div>
          </form>
        )}
        {modalType === "delete" && (
          <div className="w-100">
            <h5 className="mb-4">
              ¿Seguro que deseas eliminar esta plantilla?
            </h5>
            <div className="d-flex justify-content-between gap-2">
              <button
                className="btn btn-danger rounded-pill w-100"
                onClick={closeModal}>
                Cancelar
              </button>
              <button
                className="btn btn-success rounded-pill w-100"
                onClick={handleConfirmDelete}>
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
