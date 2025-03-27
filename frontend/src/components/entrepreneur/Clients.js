import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Clients = () => {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 text-center ">
          <h5>CLIENTES</h5>
          <h2 className="fw-bold my-3">Empresas que confían en nuestros resultados</h2>
          <div className="d-flex flex-wrap justify-content-center mb-3">
            <img src="./images/brand1.png" alt="brand1" className="img-fluid" style={{ maxHeight: '75px' }}/>
            <img src="./images/brand2.png" alt="brand2" className="img-fluid" style={{ maxHeight: '75px' }}/>
            <img src="./images/brand3.png" alt="brand3" className="img-fluid" style={{ maxHeight: '75px' }}/>
            <img src="./images/brand4.png" alt="brand4" className="img-fluid" style={{ maxHeight: '75px' }}/>
          </div>
          <p className="mb-4">Construye tu futuro. Comienza hoy.</p>

          <div className="d-flex flex-xl-nowrap flex-lg-nowrap flex-md-nowrap flex-wrap justify-content-center gap-3">
            <Link to="/agendar-cita" className="w-100 text-md-end text-lg-end">
              <button
                type="button"
                className="btn btn-dark-personalized text-white rounded-4 w-sm-100 w-md-100 w-lg-100 w-75"
              >
                Agendar reunión
                <FontAwesomeIcon icon={faArrowRight} className="ms-2"/>
              </button>
            </Link>
            <Link to="/diagnostico" className="w-100 text-md-start text-lg-start">
              <button
                type="button"
                className="btn rounded-4 btn-multicolor-personalized text-white w-sm-100 w-md-100 w-lg-100 w-75"
              >
                Diagnostica tu caso
                <FontAwesomeIcon icon={faArrowRight} className="ms-2"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
