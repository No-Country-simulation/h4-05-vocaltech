export const Header = () => {
  return (
    <section className="container-fluid bg-info">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 d-none d-md-block"
            style={{
              backgroundImage: "url(./images/banner-home.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "600px",
            }}
          ></div>{" "}
          {/*  solo se muestra a partir de 768px */}
          <div className="col-md-6 pb-5 align-self-center">
            <h2 className="display-5 text-center fw-bolder mt-5 mb-3">
              Trabajamos con tu voz para impulsar tus ideas
            </h2>
            <h6 className="lead text-center mb-4">
              Desarrolla tu proyecto o mejora tu negocio con nuestro
              acompañamiento y las herramientas que necesitas para crecer.
            </h6>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-dark rounded-pill text-center"
                style={{ width: "50%" }}
              >
                Conoce más
              </button>
            </div>
          </div>
          <div
            className="col-md-6 d-md-none"
            style={{
              backgroundImage: "url(./images/banner-home.png)",
              width: "100%",
              height: "380px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>{" "}
          {/*  solo se ve en mobile */}
        </div>
      </div>
    </section>
  );
};
