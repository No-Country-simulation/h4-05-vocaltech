import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useCompanySelect } from "../../contexts/CompanySelected";
import { userService } from "../../services/user";

export const AddAdmin = () => {
  const { selectedCompany } = useCompanySelect();
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleNewAdmin = async (e) => {
    e.preventDefault();

    if(selectedCompany === 0) {
      toast.error("Debe seleccionar una organización para crear un nuevo administrador.");
      return;
    }

    try {
      const response = await userService.addUser({
        ...adminData,
        roleId: selectedCompany
      });
      console.log("Admin added successfully:", response);
      setAdminData({
        fullName: "",
        email: "",
        password: "",
      });
      toast.success("Administrador agregado con exito");
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error adding admin:", error);
      toast.error("Error al agregar administrador");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-lg-8">
            <h3 className="text-center mb-4">
              Completa los datos para añadir un nuevo administrador
            </h3>
            <form onSubmit={handleNewAdmin}>
              <div className="mb-3">
                <label className="form-label">Nombre de usuario:</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  required
                  value={adminData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  value={adminData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  value={adminData.password}
                  onChange={handleChange}
                />
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
      <Toaster richColors position="top-center" />
    </>
  );
};
