export const LoadingTemplates = () => {
  return (
    <div
      className="card"
      aria-hidden="true"
      style={{ width: "18rem", height: "20rem" }}
    >
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-12"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-12"></span>
        </p>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-12"></span>
        </p>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-12"></span>
        </p>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-12"></span>
        </p>
        <div className="d-flex justify-content-center mt-3 px-2">
          <button
            href="#"
            tabIndex="-1"
            className="btn me-2 btn-outline-info disabled placeholder col-4"
          ></button>
          <button
            href="#"
            tabIndex="-1"
            className="btn me-2 btn-outline-warning disabled placeholder col-4"
          ></button>
          <button
            href="#"
            tabIndex="-1"
            className="btn btn-outline-danger disabled placeholder col-4"
          ></button>
        </div>
      </div>
    </div>
  );
};
