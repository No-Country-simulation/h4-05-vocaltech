import { useState } from "react";
import { Toaster, toast } from "sonner";
import { templateService } from "../../services/templates";
import "../../styles/buttons.css";

export const FormTemplate = ({ onUpdate, closeModal}) => {
  const [profile, setProfile] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [newTemplate, setNewTemplate] = useState({
    role_id: profile,
    title: "",
    subject: "",
    body: "",
    service_id: selectedService,
  });

  const handleProfileChange = (event) => {
    setProfile(event.target.value);
    setSelectedService(null);
    setNewTemplate({
      ...newTemplate,
      role_id: event.target.value,
    })
  };

  const handleSelectedService = (event) => {
    setSelectedService(event.target.value);
    const serviceNames = {  
      '1': "Levantamiento de capital",  
      '2': "Pitch a inversores",  
      '3': "Comunicación efectiva para ventas",  
      '4': "Construcción de MVP",  
      '7': "Reskilling - Upskilling",  
      '5': "Comunicación y liderazgo",  
      '6': "Cultura empresarial",  
      '8': "Evidencia de comportamiento",  
      '9': "Contratación de nuevo talento",  
    };

    setNewTemplate((prev) => ({  
      ...prev,  
      service_id: event.target.value,  
      title: serviceNames[event.target.value],  
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTemplate((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await templateService.addTemplates(newTemplate);
      console.log(response);

      const cachedTemplates = JSON.parse(localStorage.getItem("templates") || "[]");
      cachedTemplates.push(response.data);
      localStorage.setItem("templates", JSON.stringify(cachedTemplates));
      
      setNewTemplate({
        role_id: null,
        title: "",
        subject: "",
        body: "",
        service_id: null,
      });
      closeModal();
      toast.success("Plantilla agregada con exito");
      onUpdate();
    } catch (error) {
      console.error("Error adding template:", error);
      toast.error("Error al agregar plantilla");
    }
  };

  return (
    <>
      <div className="container">
        <label htmlFor="selectRole" className="form-label fw-bold">Seleccione un perfil</label>
        <select
          className="form-select mb-4"
          id="selectRole"
          aria-label="Select profile"
          onChange={handleProfileChange}>
          <option value="">Perfiles</option>
          <option value="1">Emprendedor</option>
          <option value="2">Empresa</option>
        </select>
        {profile === "1" && (
          <>
            <label htmlFor="selectService" className="form-label fw-bold">Seleccione un servicio</label>
            <select
              id="selectService"
              className="form-select mb-4"
              aria-label="Select service"
              onChange={handleSelectedService}
            >
              <option defaultValue="">Servicios</option>
              <option value="1">Levantamiento de capital</option>
              <option value="2">Pitch a inversores</option>
              <option value="3">Comunicación efectiva para ventas</option>
              <option value="4">Construcción de MVP</option>
              <option value="7">Reskilling - Upskilling</option>
            </select>
          </>
        )}
        {profile === "2" && (
          <>
            <label htmlFor="selectService" className="form-label fw-bold">Seleccione un servicio</label>
            <select
              id="selectService"
              className="form-select mb-4"
              aria-label="Select service"
              onChange={handleSelectedService}
            >
              <option defaultValue="">Servicios</option>
              <option value="5">Comunicación y liderazgo</option>
              <option value="6">Cultura empresarial</option>
              <option value="8">Evidencia de comportamiento</option>
              <option value="9">Contratación de nuevo talento</option>
            </select>
          </>
        )}
        {profile && selectedService && (
          <div className="mb-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label className="fw-bold" htmlFor="asunto">
                  Asunto o tema
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="subject"
                  id="asunto"
                  placeholder="Asunto..."
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="fw-bold" htmlFor="descripcion">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  name="body"
                  id="descripcion"
                  rows="4"
                  required
                  placeholder="Escriba la descripción..."
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-form-diagnostic rounded-pill mt-4"
                  type="submit">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Toaster richColors position="top-center" />
    </>
  );
};
