export const AddAdmin = () => {
  const handleNewAdmin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-lg-6">
            <h3 className="text-center mb-4">
              Completa los datos para añadir un nuevo administrador
            </h3>
            <form onSubmit={handleNewAdmin}>
              <div className="mb-3">
                <label className="form-label">Nombre de usuario:</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Selecciona un Partner</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Partners...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-outline-dark mt-3 rounded-pill"
                  style={{ width: "50%" }}
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
