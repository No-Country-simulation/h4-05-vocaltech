import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

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
      <section id="about" className="section">
        <div className="row mt-5">
          <h3 className="display-5 fw-bolder text-center">Nuestra alianza</h3>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="row mt-3 border-0">
            <div className="col-12">
              <p className="text-dark ms-3">
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
        className="container mt-5 section"
        style={{ height: "100vh" }}
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
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img
              src="./images/empresas.jpg"
              alt="empresas"
              className="object-fill-contain"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 d-flex justify-content-center">
            <img
              src="./images/empresas.jpg"
              alt="empresas"
              className="object-fill-contain"
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
          </div>
        </div>
      </section>

      {/* Historias de éxito */}
      <section
        className="container mt-5 section"
        id="stories"
        style={{ height: "100vh" }}
      >
        <div className="row mt-3">
          <h3 className="display-5 fw-bolder text-center">
            Historias de éxito
          </h3>
        </div>
      </section>
    </div>
  );
};
