import { Link } from "react-router-dom";

export const Header = () => {
  const handleScroll = () => {
    const section = document.getElementById("services");
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="landing-header">
      <div className="container pt-5 text-center">
        <div className="row">
          <div
            className="col-lg-6 col-xl-5 d-none d-lg-block"
            style={{
              backgroundImage: "url(./images/banner-home.png)",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className="col-lg-6 col-xl-7 header-padding">
            <h2 className="display-5 fw-bolder">
              Trabajamos con tu voz para impulsar tus ideas
            </h2>
            <p className="py-4 lead">
              Desarrolla tu proyecto o mejora tu negocio con nuestro
              acompañamiento y las herramientas que necesitas para crecer.
            </p>
            <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3">
              <Link to="/" onClick={handleScroll} className="w-100">
                <button
                  type="button"
                  className="btn rounded-pill btn-dark btn-landing"
                >
                  Conoce más
                </button>
              </Link>
              <Link to="/diagnostico" className="w-100">
                <button
                  type="button"
                  className="btn rounded-pill btn-personalized btn-landing"
                >
                  ¡Haz tu diagnóstico!
                </button>
              </Link>
            </div>
          </div>
          <div
            className="d-lg-none mt-4"
            style={{
              backgroundImage: "url(./images/banner-home.png)",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "260px",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
