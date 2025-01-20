import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export const Home = () => {
  return (
    <div className="allSection">
      <section id="banner-welcome" className="section">
        <div className="header-row" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="card col-12 d-flexjustify-content-end bg-info">
              <img
                src="./images/banner-home.png"
                className="img-fluid card-img"
                alt="banner"
              />
              <div
                className="card-img-overlay d-flex flex-column align-self-center ms-auto me-5 text-center align-items-center gap-3"
                style={{ width: "50%" }}
              >
                <h2 className="display-5 fw-bolder">
                  Trabajamos con tu voz para impulsar tus ideas
                </h2>
                <h6 className="lead">
                  Desarrolla tu proyecto o mejora tu negocio con nuestro
                  acompañamiento y las herramientas que necesitas para crecer.
                </h6>
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
        </div>
      </section>

      {/* Información sobre partners y servicios  */}
      <section id="about" className="container-fluid section">
        <div className="row mt-5">
          <h3 className="display-5 fw-bolder text-center">Nuestra alianza</h3>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="row mt-3 border-0">
            <div className="col-12">
              <p className="text-dark display-6 ms-3">
                Vos y Tu Voz y No Country se unen para potenciar el talento
                desde distintos sectores y el desarrollo de aplicaciones
                innovadoras, ya seas emprendedor o líder de empresa.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-center">
              <img
                src="./images/logo-voz.png"
                className="object-fit-contain"
                alt="Vos y tu Voz logo"
                style={{ width: "40%" }}
              />
            </div>
            <div className="col-6 d-flex justify-content-center">
              <img
                src="./images/logo-no-country.png"
                className="object-fit-sm-contain"
                alt="No Country logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="container-fluid px-5 mt-5 section"
        style={{ height: "140vh" }}
      >
        <div className="row mt-3">
          <h3 className="display-5 fw-bolder text-center">
            Nuestros servicios
          </h3>
        </div>
        <div className="row g-3 mt-3 mb-4">
          <div className="col-6 d-flex flex-column justify-content-center gap-3">
            <h4 className="fw-bolder display-6 text-center">Empresas</h4>
            <p>
              Fortalece tus equipos, lidera con confianza y transforma tu
              cultura empresarial. Descubre cómo nuestros workshops y
              herramientas innovadoras pueden llevar a tu empresa al siguiente
              nivel.
            </p>
            <p className="fw-bold">Beneficios:</p>
            <ul className="list-group list-group-flush">
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
                style={{ width: "50%" }}
              >
                <FontAwesomeIcon className="me-2" icon={faBriefcase} /> Descubre
                cómo potenciamos a empresas
              </button>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img
              src="./images/empresas.jpg"
              alt="empresas"
              className="object-fit-contain"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex justify-content-center">
            <img
              src="./images/emprendedores.jpg"
              alt="empresas"
              className="object-fit-contain"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center gap-3">
            <h4 className="fw-bolder display-6 text-center">Emprendedores</h4>
            <p>
              Transforma tu visión en un proyecto exitoso con nuestro
              acompañamiento. Desde el desarrollo de tu MVP hasta mejorar tu
              pitch, estamos aquí para ayudarte.
            </p>
            <p className="fw-bold">Beneficios:</p>
            <ul className="list-group list-group-flush">
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
                style={{ width: "50%" }}
              >
                <FontAwesomeIcon className="me-2" icon={faHouseLaptop} />{" "}
                Descubre cómo te ayudamos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Historias de éxito */}
      <section
        className="container-fluid px-5 mt-5 section"
        id="stories"
        style={{ height: "55vh" }}
      >
        <div className="row mt-3">
          <h3 className="display-5 fw-bolder text-center mb-3">
            Historias de éxito que inspiran
          </h3>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-between gap-5">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body d-flex flex-column">
                <div className="mb-auto">
                  <h5 className="card-title fw-bold mb-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={regularStar} />
                  </h5>
                  <p className="card-text mb-3">
                    La capacitación en técnicas de pitch ha transformado nuestra
                    forma de presentar proyectos. Ahora tenemos las herramientas
                    necesarias para comunicar nuestras ideas de manera clara y
                    efectiva.
                  </p>
                </div>
                <div className="d-flex mb-2">
                  <img
                    src="https://picsum.photos/200?random=1"
                    alt="empresas"
                    className="object-fit-contain rounded-circle me-3"
                    style={{ width: "30%" }}
                  />
                  <div className="align-self-center">
                    <p className="card-title">Juan Pérez</p>
                    <p className="card-subtitle">CEO de XYZ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body d-flex flex-column">
                <div className="mb-auto">
                  <h5 className="card-title fw-bold mb-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={regularStar} />
                  </h5>
                  <p className="card-text mb-3">
                    La formación en el desarrollo de MVP ha sido un cambio de
                    juego para nuestro equipo. Ahora podemos enfocarnos en lo
                    que realmente importa. Gracias a VocalTech hemos lanzado
                    nuestros primeros prototipos con confianza.
                  </p>
                </div>
                <div className="d-flex mb-2">
                  <img
                    src="https://picsum.photos/200?random=2"
                    alt="empresas"
                    className="object-fit-contain rounded-circle me-3"
                    style={{ width: "30%" }}
                  />
                  <div className="align-self-center">
                    <p className="card-title">Juan Pérez</p>
                    <p className="card-subtitle">CEO de XYZ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body d-flex flex-column">
                <div className="mb-auto">
                  <h5 className="card-title fw-bold mb-3">
                    {" "}
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={regularStar} />{" "}
                  </h5>
                  <p className="card-text mb-3">
                    Las sesiones de liderazgo han sido fundamentales para
                    nuestro crecimiento como equipo. Hemos aprendido a fomentar
                    una cultura de colaboración y a inspirar a cada miembro a
                    dar lo mejor de sí.
                  </p>
                </div>
                <div className="d-flex mb-2">
                  <img
                    src="https://picsum.photos/200?random=3"
                    alt="empresas"
                    className="object-fit-contain rounded-circle me-3"
                    style={{ width: "30%" }}
                  />
                  <div className="align-self-center">
                    <p className="card-title">Juan Pérez</p>
                    <p className="card-subtitle">CEO de MiraTech</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body d-flex flex-column">
                <div className="mb-auto">
                  <h5 className="card-title fw-bold mb-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={regularStar} />
                  </h5>
                  <p className="card-text mb-3">
                    La capacitación en comunicación efectiva ha mejorado
                    notablemente nuestras interacciones internas y externas.
                    Esto ha fortalecido nuestras relaciones y ha aumentado
                    nuestra productividad.
                  </p>
                </div>
                <div className="d-flex mb-2">
                  <img
                    src="https://picsum.photos/200?random=4"
                    alt="empresas"
                    className="object-fit-contain rounded-circle me-3"
                    style={{ width: "30%" }}
                  />
                  <div className="align-self-center">
                    <p className="card-title">Juan Pérez</p>
                    <p className="card-subtitle">CEO de XYZ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body d-flex flex-column">
                <div className="mb-auto">
                  <h5 className="card-title fw-bold mb-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={regularStar} />
                  </h5>
                  <p className="card-text mb-3">
                    La serie de talleres sobre técnicas de pitch superó nuestras
                    expectativas. Aprendimos a diseñar presentaciones
                    impactantes, lo que nos ha ayudado a captar la atención de
                    inversionistas clave para nuestros proyectos.
                  </p>
                </div>
                <div className="d-flex mb-2">
                  <img
                    src="https://picsum.photos/200?random=5"
                    alt="empresas"
                    className="object-fit-contain rounded-circle me-3"
                    style={{ width: "30%" }}
                  />
                  <div className="align-self-center">
                    <p className="card-title">Juan Pérez</p>
                    <p className="card-subtitle">CEO de Valinor & Co</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="diagnostic"
        className="container-fluid px-5 mt-5 section"
        style={{ height: "80vh" }}
      >
        <div className="row g-5">
          <div className="col-6 d-flex flex-column align-self-center gap-3">
            <h2 className="fw-bold display-6 mb-3">Diagnostica tu caso ahora</h2>
            <p className="text-justify mb-3">
              Completa el diagnóstico y recibe una hoja de ruta personalizada
              para mejorar tu pitch y validar tu negocio.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button
                type="button"
                className="btn btn-outline-dark text-center"
                style={{ width: "50%" }}
              >
                Realiza tu diagnóstico gratuito
              </button>
              <button
                type="button"
                className="btn btn-outline-dark text-center"
                style={{ width: "50%" }}
              >
                CTA Whatsapp
              </button>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img
              src="./images/diagnostico.jpg"
              className="object-fit-contain"
              alt="diagnostic"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
