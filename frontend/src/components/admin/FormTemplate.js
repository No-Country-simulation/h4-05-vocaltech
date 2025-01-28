export const FormTemplate = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mb-4 text-center">Selecciona un perfil</h3>
            <select className="form-select" aria-label="Select profile">
              <option selected>Perfiles</option>
              <option value="1">Emprendedor</option>
              <option value="2">Empresa</option>
            </select>
          </div>
        </div>
      </div>
      
    </>
  );
};
