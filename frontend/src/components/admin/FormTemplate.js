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
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-4 text-center">Selecciona un perfil</h4>
            <select
              className="form-select mb-4"
              aria-label="Select profile"
              onChange={handleProfileChange}
            >
              <option value="">Perfiles</option>
              <option value="1">Emprendedor</option>
              <option value="2">Empresa</option>
            </select>

            {profile === "1" && (
              <>
                <h4 className="mb-4 text-center">Selecciona un servicio</h4>
                <select
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
                <h4 className="mb-4 text-center">Selecciona un servicio</h4>
                <select
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
                  <div className="d-flex flex-column mb-3">
                    <label className="mb-2 text-start fw-bold">
                      Asunto o tema
                    </label>
                    <input
                      className="form-control rounded-pill"
                      type="text"
                      name="subject"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label className="mb-2 text-start fw-bold">
                      Descripción
                    </label>
                    <textarea
                      className="form-control rounded rounded-4"
                      name="body"
                      rows="4"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center mt-2">
                    <button
                      className="btn btn-form-diagnostic rounded-pill mt-4"
                      type="submit"
                      style={{ width: "50%" }}
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster richColors position="top-center" />
    </>
  );
};
