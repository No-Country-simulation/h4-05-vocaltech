export const Home = () => (
  <div className="container">
    <div className="row g-5">
      <div className="col-6 pt-5">
        <h2 className="display-5 fw-bolder">
          Trabajamos con tu voz para impulsar tu carrera
        </h2>
        <h6 className="lead">
          Desarrolla hoy tu proyecto o mejora las capacidades de tu negocio
        </h6>
        <p className="lead mb-3">Selecciona tu perfil:</p>
        <div className="d-grid gap-3">

          <button type="button" className="btn btn-outline-dark btn-lg">
            Emprendedor
          </button>
          <button type="button" className="btn btn-outline-dark btn-lg">
            Empresa
          </button>
        </div>
      </div>

      <div className="col-6">
        <img src="./images/alianza-logo-test.jpg" alt="Alianza No Country & Vos y Tu Voz" className="img-fluid" />
      </div>
    </div>
  </div>
);
