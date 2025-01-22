export const Header = () => {
  return (
    <section className="mb-5">
      <div className="card row">
        <div className="col-12 bg-info">
          <img
            src="./images/banner-home.png"
            className="img-fluid card-img"
            alt="banner"
          />
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 mb-4 card-img-overlay align-self-center ms-auto">
          <h2 className="display-5 text-center fw-bolder mb-3">
            Trabajamos con tu voz para impulsar tus ideas
          </h2>
          <h6 className="lead text-center mb-4">
            Desarrolla tu proyecto o mejora tu negocio con nuestro
            acompañamiento y las herramientas que necesitas para crecer.
          </h6>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-dark text-center"
              style={{ width: "50%" }}
            >
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
