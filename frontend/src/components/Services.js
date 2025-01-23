import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <section className="container py-5">
      <h2 className="display-6 fw-bolder text-center pb-5">
        Nuestros servicios
      </h2>
      <div className="row mb-5">
        <div className="col-md-6 col-lg-6 col-xl-6 mb-4">
          <h4 className="fw-bolder display-6 text-center mb-3">Empresas</h4>
          <p className="mb-3">
            Fortalece tus equipos, lidera con confianza y transforma tu cultura
            empresarial. Descubre cómo nuestros workshops y herramientas
            innovadoras pueden llevar a tu empresa al siguiente nivel.
          </p>
          <p className="fw-bold mb-1">Beneficios:</p>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item list-group-item-action">
              Workshops en liderazgo y comunicación para equipos.
            </li>
            <li className="list-group-item list-group-item-action">
              Identificación y desarrollo de talento a través de simulaciones.
            </li>
            <li className="list-group-item list-group-item-action">
              Programas de reskilling y upskilling para mejorar habilidades.
            </li>
            <li className="list-group-item list-group-item-action">
              Creación de estrategias para fortalecer la cultura empresarial.
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-dark text-center"
              style={{ width: "70%" }}
            >
              <FontAwesomeIcon className="me-2" icon={faBriefcase} /> Descubre
              cómo potenciamos a empresas
            </button>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6">
          <img
            src="./images/empresas.jpg"
            alt="empresas"
            className="object-fit-contain"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <img
            src="./images/emprendedores.jpg"
            alt="empresas"
            className="object-fit-contain mb-4"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6">
          <h4 className="fw-bolder display-6 text-center mb-3">Emprendedores</h4>
          <p className="mb-3">
            Transforma tu visión en un proyecto exitoso con nuestro
            acompañamiento. Desde el desarrollo de tu MVP hasta mejorar tu
            pitch, estamos aquí para ayudarte.
          </p>
          <p className="fw-bold mb-1">Beneficios:</p>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item list-group-item-action">
              Desarrollo de MVPs funcionales en 5 semanas.{" "}
            </li>
            <li className="list-group-item list-group-item-action">
              Entrenamiento en pitch para conectar con inversores.{" "}
            </li>
            <li className="list-group-item list-group-item-action">
              Validación de ideas y modelos de negocio.{" "}
            </li>
            <li className="list-group-item list-group-item-action">
              Estrategias de comunicación efectiva para ventas.{" "}
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-dark text-center"
              style={{ width: "70%" }}
            >
              <FontAwesomeIcon className="me-2" icon={faHouseLaptop} /> Descubre
              cómo te ayudamos
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  //   <section className="container py-5">
  //     <div className="row mt-3">
  //       <h3 className="display-5 fw-bolder text-center">Nuestros servicios</h3>
  //     </div>
  //     <div className="row g-3 mt-3 mb-4">
  //       <div className="col-6 d-flex flex-column justify-content-center gap-3">
  //         <h4 className="fw-bolder display-6 text-center">Empresas</h4>
  //         <p>
  //           Fortalece tus equipos, lidera con confianza y transforma tu cultura
  //           empresarial. Descubre cómo nuestros workshops y herramientas
  //           innovadoras pueden llevar a tu empresa al siguiente nivel.
  //         </p>
  //         <p className="fw-bold">Beneficios:</p>
  //         <ul className="list-group list-group-flush">
  //           <li className="list-group-item list-group-item-action">
  //             Workshops en liderazgo y comunicación para equipos.
  //           </li>
  //           <li className="list-group-item list-group-item-action">
  //             Identificación y desarrollo de talento a través de simulaciones.
  //           </li>
  //           <li className="list-group-item list-group-item-action">
  //             Programas de reskilling y upskilling para mejorar habilidades.
  //           </li>
  //           <li className="list-group-item list-group-item-action">
  //             Creación de estrategias para fortalecer la cultura empresarial.
  //           </li>
  //         </ul>
  //         <div className="d-flex justify-content-center">
  //           <button
  //             type="button"
  //             className="btn btn-outline-dark text-center"
  //             style={{ width: "50%" }}
  //           >
  //             <FontAwesomeIcon className="me-2" icon={faBriefcase} /> Descubre
  //             cómo potenciamos a empresas
  //           </button>
  //         </div>
  //       </div>
  //       <div className="col-6 d-flex justify-content-center">
  //         <img
  //           src="./images/empresas.jpg"
  //           alt="empresas"
  //           className="object-fit-contain"
  //           style={{ width: "100%" }}
  //         />
  //       </div>
  //     </div>
  //     <div className="row mt-3">
  //       <div className="col-6 d-flex justify-content-center">
  //         <img
  //           src="./images/emprendedores.jpg"
  //           alt="empresas"
  //           className="object-fit-contain"
  //           style={{ width: "100%" }}
  //         />
  //       </div>
  //       <div className="col-6 d-flex flex-column justify-content-center gap-3">
  //         <h4 className="fw-bolder display-6 text-center">Emprendedores</h4>
  //         <p>
  //           Transforma tu visión en un proyecto exitoso con nuestro
  //           acompañamiento. Desde el desarrollo de tu MVP hasta mejorar tu pitch,
  //           estamos aquí para ayudarte.
  //         </p>
  //         <p className="fw-bold">Beneficios:</p>
  //         <ul className="list-group list-group-flush">
  //           <li className="list-group-item list-group-item-action">
  //             Desarrollo de MVPs funcionales en 5 semanas.{" "}
  //           </li>
  //           <li className="list-group-item list-group-item-action">
  //             Entrenamiento en pitch para conectar con inversores.{" "}
  //           </li>
  //           <li className="list-group-item list-group-item-action">
  //             Validación de ideas y modelos de negocio.{" "}
  //           </li>
  //           <li className="list-group-item list-group-item-action">
  //             Estrategias de comunicación efectiva para ventas.{" "}
  //           </li>
  //         </ul>
  //         <div className="d-flex justify-content-center">
  //           <button
  //             type="button"
  //             className="btn btn-outline-dark text-center"
  //             style={{ width: "50%" }}
  //           >
  //             <FontAwesomeIcon className="me-2" icon={faHouseLaptop} /> Descubre
  //             cómo te ayudamos
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>;
};
