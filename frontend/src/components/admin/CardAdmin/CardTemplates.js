import { CardAdmin } from "./CardAdmin";
import { LoadingTemplates } from "../../../utils/loadingTemplates";
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
    <LoadingTemplates />
  ) : (
    <>
      {
        templates.length > 0 ? (
          templates.map((template) => (
            <div key={template.id} className="col-md-6 col-xl-4 mb-4">
              <CardAdmin
                id={template.id}
                roleId={template.role_id}
                optionId={template.option_id}
                title={template.title}
                subject={template.subject}
                description={template.body}
                onUpdate={handleRefetch}
              />
            </div>
          ))
        ) : (
          <h4>Aún no hay plantillas, comienza a crearlas.</h4>
        )
      }
    </>
  );
};
