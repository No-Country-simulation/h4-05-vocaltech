import { useEffect, useState } from "react";
import { templateService } from "../services/templates";

export const LoadingTemplates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const loadingTemplates = async () => {
      try {
        const response = await templateService.getTemplates();
        console.log("This is the loading response: ", response);
        setTemplates(response);
      } catch (error) {
        console.error("Error loading templates: ", error);
      }
    };

    loadingTemplates();
  }, []);

  const placeholderCount = Math.max(4, templates.length);

  return (
    <>
      <div className="row">
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <div className="col-md-6 col-xl-4 mb-4" key={index}>
            <div
              className="card"
              aria-hidden="true"
              style={{ height: "20rem" }}
            >
              <div className="card-body pt-4 px-4">
                <h5 className="card-title placeholder-glow mt-4">
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
                <div className="d-flex justify-content-center mt-4 px-2">
                  <button
                    href="#"
                    tabIndex="-1"
                    className="btn me-2 btn-info disabled placeholder col-4"
                    style={{ width: "40px" }}
                  ></button>
                  <button
                    href="#"
                    tabIndex="-1"
                    className="btn me-2 btn-warning disabled placeholder col-4"
                    style={{ width: "40px" }}
                  ></button>
                  <button
                    href="#"
                    tabIndex="-1"
                    className="btn btn-danger disabled placeholder col-4"
                    style={{ width: "40px" }}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
