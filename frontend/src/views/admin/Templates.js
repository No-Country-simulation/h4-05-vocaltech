import { CardTemplates } from "../../components/admin/CardAdmin/CardTemplates";
import { Modall } from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import { FormTemplate } from "../../components/admin/FormTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { templateService } from "../../services/templates";
import { LoadingTemplates } from "../../utils/loadingTemplates";

export const Templates = () => {
  const { showModal, openModal, closeModal } = useModal();
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchTemplates = async () => {
    setLoading(true);
    try {
      const fetchedTemplates = await templateService.getTemplates();
      localStorage.setItem("templates", JSON.stringify(fetchedTemplates));
    } catch (error) {
      console.error("Error fetching templates:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, [shouldRefetch]);

  const handleRefetch = () => {
    setShouldRefetch((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mb-4 text-center">Plantillas de Mensajes</h1>
            <div className="row d-flex justify-content-end mb-4">
              <h2 className="display-7 fw-bolder text-center pb-3">
                Selecciona un template
              </h2>
              <div className="col-md-4 text-end me-2">
                <button
                  type="button"
                  className="btn btn-outline-success rounded-pill"
                  onClick={openModal}
                >
                  <FontAwesomeIcon className="me-2" icon={faPlus} />
                  Crear Plantilla
                </button>
              </div>
            </div>
            <div className="row mb-4">
              {loading ? (
                <LoadingTemplates />
              ) : (
                <CardTemplates />
              )}
            </div>
          </div>
        </div>
      </div>
      <Modall
        showModal={showModal}
        closeModal={closeModal}
        title="Crear nueva plantilla"
      >
        <FormTemplate onUpdate={handleRefetch} closeModal={closeModal} />
      </Modall>
    </>
  );
};
