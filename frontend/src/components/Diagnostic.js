export const Diagnostic = () => {
  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-6 mb-4 align-self-center">
          <h2 className="fw-bold display-6 mb-4">Diagnostica tu caso ahora</h2>
          <p className="text-justify mb-5">
            Completa el diagnóstico y recibe una hoja de ruta personalizada para
            mejorar tu pitch y validar tu negocio.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button
              type="button"
              className="btn btn-outline-dark rounded-pill text-center"
              style={{ width: "50%" }}
            >
              Realiza tu diagnóstico gratuito
            </button>
            <button
              type="button"
              className="btn btn-outline-dark rounded-pill text-center"
              style={{ width: "50%" }}
            >
              CTA Whatsapp
            </button>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 mb-4">
          <img
            src="./images/diagnostico.jpg"
            className="object-fit-contain rounded"
            alt="diagnostic"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};


