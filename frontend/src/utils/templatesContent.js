import { useEffect, useState } from "react";
import { templateService } from "../services/templates";

export const useTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const templates = await templateService.getTemplates();
        setTemplates(templates);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  return { templates, loading, error };
};
