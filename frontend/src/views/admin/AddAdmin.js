import React, { useState } from "react";

export const AddAdmin = () => {
  const [ selectedPartner, changeSelectedPartner ] = useState("Partners");
  const handleNewAdmin = (e) => {
    e.preventDefault();
    console.log("New admin added with ID:", selectedPartner);

  };

  const handleChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedId = selectedOption.id;
    changeSelectedPartner(selectedId);
  };

  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-lg-6">
            <h3 className="text-center mb-4">
              Completa los datos para añadir un nuevo administrador
            </h3>
            <form onSubmit={handleNewAdmin}>
              <div className="mb-3">
                <label className="form-label">Nombre de usuario:</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Selecciona un Partner</label>
                <select
                  name={selectedPartner}
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="general">Partners</option>
                  <option id="1" value="noCountry">
                    No Country
                  </option>
                  <option id="2" value="vosYtuVoz">
                    Vos y tu Voz
                  </option>
                </select>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-outline-dark mt-3 rounded-pill"
                  style={{ width: "50%" }}
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
