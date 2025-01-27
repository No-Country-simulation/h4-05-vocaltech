import { CardAdmin } from "./CardAdmin";
import { templatesContent } from "../../../utils/templatesContent";

export const CardTemplates = () => {
  return (
    <section className="container">
      <div className="row g-3 gap-4">
        {templatesContent.map((template) => (
          <CardAdmin
            key={template.id}
            title={template.title}
            description={template.description}
          />
        ))}
      </div>
    </section>
  );
};
