import { CardAdmin } from "./CardAdmin";
import { useTemplates } from "../../../utils/templatesContent";

export const CardTemplates = () => {
  const { templates, loading, error } = useTemplates();

  if (error) {
    return <p>Error al importar los templates: {error.message}</p>;
  }

  return loading ? (  
    <div className="card" aria-hidden="true">    
      <div className="card-body">  
        <h5 className="card-title placeholder-glow">  
          <span className="placeholder col-6"></span>  
        </h5>  
        <p className="card-text placeholder-glow">    
          <span className="placeholder col-6"></span>    
        </p>  
        <button href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></button>  
      </div>  
    </div>  
  ) : (
    <section className="container">
      <div className="row g-3 gap-4">
        {templates.map((template) => (
          <CardAdmin
            key={template.id}
            title={template.title}
            subject={template.subject}
            description={template.body}
          />
        ))}
      </div>
    </section>
  );
};
