import { CardTemplates } from "../../components/admin/CardAdmin/CardTemplates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Templates = () => {
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
                <button className="btn btn-outline-success rounded-pill">
                  <FontAwesomeIcon className="me-2" icon={faPlus} />
                  Crear Plantilla
                </button>
              </div>
            </div>
            <div className="row mb-4">
              <CardTemplates />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
