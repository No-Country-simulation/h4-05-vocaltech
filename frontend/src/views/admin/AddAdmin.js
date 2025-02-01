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
    <section>
      <div className="pb-5">
        <h2>Completa los datos para añadir un nuevo administrador</h2>
      </div>
      <div className="row">
        <div className="col-lg-10 col-xl-7 mx-auto">
          <form onSubmit={handleNewAdmin} className="p-md-5 bg-md-light-form rounded shadow-md-form">
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="fullName">Nombre de usuario</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                id="fullName"
                required
                value={adminData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                required
                id="email"
                autoComplete="email"
                value={adminData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                required
                id="password"
                value={adminData.password}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-login rounded-pill w-100"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster richColors position="top-center" />
    </section>
  );
};
