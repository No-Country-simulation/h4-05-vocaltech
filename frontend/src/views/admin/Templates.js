import { CardTemplates } from "../../components/admin/CardAdmin/CardTemplates";
import { Modall } from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import { FormTemplate } from "../../components/admin/FormTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { templateService } from "../../services/templates";
import { LoadingTemplates } from "../../utils/loadingTemplates";
import "../../styles/buttons.css";

export const Templates = () => {
  const { showModal, openModal, closeModal } = useModal();
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [loading, setLoading] = useState(true);

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
    <section>
      <div className="pb-5 d-md-flex justify-content-between align-items-center">
        <h2>Mensajes automatizados</h2>
        <div className="pt-4 pt-md-0 d-flex flex-column align-items-end">
          <button
            type="button"
            className="btn btn-general btn-dark-personalized text-white"
            onClick={openModal}>
            <FontAwesomeIcon className="me-2" icon={faPlus} />Crear Plantilla
          </button>
        </div>
      </div>
      <div className="row">
          {
            loading ? (
              <LoadingTemplates />
            ) : (
              <CardTemplates />
            )
          }
      </div>
      <Modall
        showModal={showModal}
        closeModal={closeModal}
        title="Crear nueva plantilla">
        <FormTemplate onUpdate={handleRefetch} closeModal={closeModal} />
      </Modall>
    </section>
  );
};
