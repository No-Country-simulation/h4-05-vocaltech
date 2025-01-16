import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [location.state]);

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
            <div className="col-12 mb-5">
              <p className="text-dark ms-3">
                Vos y Tu Voz y No Country se unen para potenciar el talento
                desde distintos sectores y el desarrollo de aplicaciones
                innovadoras, ya seas emprendedor o líder de empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="row mt-5 section">
        <div className="row mt-3">
          <h3 className="display-5 fw-bolder text-center">
            Nuestros servicios
          </h3>
        </div>
      </section>
    </div>
  );
};
