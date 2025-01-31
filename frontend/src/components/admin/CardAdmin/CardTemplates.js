import { CardAdmin } from "./CardAdmin";
import { templateService } from "../../../services/templates";
import { useState, useEffect } from "react";

export const CardTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  const fetchTemplates = async () => {
    setError(null);
    setLoading(true);
    try {
      const fetchedTemplates = await templateService.getTemplates();
      setTemplates(fetchedTemplates || []);
    } catch (error) {
      console.error("Error fetching templates:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

   useEffect(() => {
     fetchTemplates();
   }, [shouldRefetch]);

  const handleRefetch = () => {
    setShouldRefetch(prev => !prev);
  };

  if (error) {
    return <p>Error al importar los templates: {error.message}</p>;
  };

  return loading ? (
    <div
      className="card"
      aria-hidden="true"
      style={{ width: "18rem", height: "20rem" }}
    >
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-12"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-12"></span>
        </p>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-12"></span>
        </p>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-12"></span>
        </p>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-12"></span>
        </p>
        <div className="d-flex justify-content-center mt-3 px-2">
          <button
            href="#"
            tabIndex="-1"
            className="btn me-2 btn-outline-info disabled placeholder col-4"
          ></button>
          <button
            href="#"
            tabIndex="-1"
            className="btn me-2 btn-outline-warning disabled placeholder col-4"
          ></button>
          <button
            href="#"
            tabIndex="-1"
            className="btn btn-outline-danger disabled placeholder col-4"
          ></button>
        </div>
      </div>
  </div>
   ) : (
 
    <section className="container">
      <div className="row ">
        {templates.length > 0 ? (
          templates.map((template) => (
            <div key={template.id} className="col-md-6 col-xl-4 mb-4">
              <CardAdmin
                id={template.id}
                roleId={template.role_id}
                serviceId={template.service_id}
                title={template.title}
                subject={template.subject}
                description={template.body}
                onUpdate={handleRefetch}
              />
            </div>
          ))
        ) : (
          <h4>Aún no hay plantillas, comienza a crearlas.</h4>
        )}
      </div>
    </section>
  );
};
