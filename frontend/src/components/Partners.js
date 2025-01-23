export const Partners = () => {
  return (
    <section className="container py-5">
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="display-5 fw-bolder text-center mb-3">
            Nuestra alianza
          </h3>
          <p className="lead text-dark h4">
            Vos y Tu Voz y No Country se unen para potenciar el talento desde
            distintos sectores y el desarrollo de aplicaciones innovadoras, ya
            seas emprendedor o líder de empresa.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center">
          <img
            src="./images/logo-voz.png"
            className="object-fit-contain"
            alt="Vos y tu Voz logo"
            style={{ width: "40%" }}
          />
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center">
          <img
            src="./images/logo-no-country.png"
            className="object-fit-sm-contain"
            alt="No Country logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};
