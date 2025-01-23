import { CardAdmin } from "../../components/admin/CardAdmin";

export const Templates = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mb-4">Plantillas de Mensajes</h1>
            <div className="row mb-4">
              <CardAdmin />
            </div>
            <button className="btn btn-primary">Crear Plantilla</button>
          </div>
        </div>
      </div>
    </>
  );
};
