import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className="container py-5 overflow-hidden">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6 text-center mb-5 ">
          <span className=" text-white bg-primary rounded-4 px-3 py-2 ">
            Emprendedores
          </span>
          <h1 className="display-5 text-white mt-3 fw-bolder">
            Impulsa tu idea, domina tu mensaje, y haz crecer tu proyecto
          </h1>
          <p className="text-white py-4">
            Aprende a comunicar tu idea con impacto y accede a herramientas
            tecnológicas para construir tu MVP en tiempo récord.
          </p>
          <div className="d-flex flex-xl-nowrap flex-lg-nowrap flex-md-nowrap flex-wrap justify-content-center gap-3">
            <Link to="/agendar-cita" className="w-100">
              <button
                type="button"
                className="btn btn-dark rounded-4 btn-personalized px-3 w-100"
              >
                Agendar reunión con un experto
              </button>
            </Link>
            <Link to="/diagnostico" className="w-100">
              <button
                type="button"
                className="btn btn-dark rounded-4 btn-personalized px-3 w-100"
              >
                Diagnosticar mi emprendimiento
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
