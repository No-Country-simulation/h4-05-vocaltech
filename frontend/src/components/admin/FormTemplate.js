import { useState } from "react";
import { Toaster, toast } from "sonner";
import { templateService } from "../../services/templates";
import ReacQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "../../styles/buttons.css";

export const FormTemplate = ({ onUpdate, closeModal }) => {
  const [profile, setProfile] = useState(null);
  const [question, setQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [newTemplate, setNewTemplate] = useState({
    role_id: profile,
    title: "",
    subject: "",
    body: "",
    option_id: selectedOption,
  });

  const handleProfileChange = (event) => {
    setProfile(event.target.value);
    setQuestion(null)
    setSelectedOption(null);
    setNewTemplate({
      ...newTemplate,
      role_id: event.target.value,
    })
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
    setSelectedOption(null);
  };

  const handleSelectedOption = (event) => {
    console.log(profile)
    setSelectedOption(event.target.value);

    const questions = {
      '1': "¿Donde se encuentra tu proyecto?",
      '2': "¿Crees que las personas te entienden cuando te comunicas?",
      '3': "¿Tienes un pitch efectivo que genere interes en segundos?",
      '4': "¿Tu voz transmite seguridad y capta la atencion del publico?",
      '5': "¿Cual es tu situacion con el desarrollo del producto o MVP?",
      '6': "¿Buscas talento estrategico para crecer?",
      '7': "¿Cual es el mayor desafio de tu equipo?",
      '8': "¿Como describirias tu capacidad para influir y liderar a tu equipo?",
      '9': "¿Tu voz transmite autoridad y seguridad al hablar?",
      '10': "¿Que tan comodo/a te sientes en conversaciones dificiles (negociaciones, feedback, gestion de conflictos)?",
      '11': "¿Te resulta facil captar la atencion y el interes de tu equipo o clientes en reuniones o presentaciones?",
      '12': "¿Tienes dificultades en la contratacion o retencion de talento clave?",
      '13': "¿Que te gustaria mejorar en tu equipo?"
    };

    setNewTemplate((prev) => ({
      ...prev,
      title: questions[question],
      option_id: event.target.value,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTemplate((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleQuillChange = (value) => {
    setNewTemplate((prev) => ({ ...prev, body: value }));
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
      toast.success("Plantilla agregada con éxito!");
      onUpdate();
    } catch (error) {
      console.error("Error adding template:", error);
      toast.error(error.message);
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
          <option value="2">Ejecutivo</option>
        </select>
        {profile === "1" && (
          <>
            <label htmlFor="selectQuestion" className="form-label fw-bold">Seleccione una pregunta</label>
            <select
              id="selectQuestion"
              className="form-select mb-4"
              aria-label="Select question"
              onChange={handleQuestionChange}
            >
              <option defaultValue="">Preguntas</option>
              <option value="1">1. ¿Donde se encuentra tu proyecto?</option>
              <option value="2">2. ¿Crees que las personas te entienden cuando te comunicas?</option>
              <option value="3">3. ¿Tienes un pitch efectivo que genere interés en segundos?</option>
              <option value="4">4. ¿Tu voz transmite seguridad y capta la atención del público?</option>
              <option value="5">5. ¿Cuál es tu situación con el desarrollo del producto o MVP?</option>
              <option value="6">6. ¿Buscas talento estratégico para crecer?</option>
              <option value="7">7. ¿Cuál es el mayor desafío de tu equipo?</option>
            </select>
          </>
        )}
        {profile === "2" && (
          <>
            <label htmlFor="selectQuestion" className="form-label fw-bold">Seleccione una pregunta</label>
            <select
              id="selectQuestion"
              className="form-select mb-4"
              aria-label="Select question"
              onChange={handleQuestionChange}
            >
              <option defaultValue="">Preguntas</option>
              <option value="8">1. ¿Como describirias tu capacidad para influir y liderar a tu equipo?</option>
              <option value="9">2. ¿Tu voz transmite autoridad y seguridad al hablar?</option>
              <option value="10">3. ¿Que tan comodo/a te sientes en conversaciones dificiles (negociaciones, feedback, gestion de conflictos)?</option>
              <option value="11">4. ¿Te resulta facil captar la atencion y el interes de tu equipo o clientes en reuniones o presentaciones?</option>
              <option value="12">5. ¿Tienes dificultades en la contratacion o retencion de talento clave?</option>
              <option value="13">6. ¿Que te gustaria mejorar en tu equipo?</option>
            </select>
          </>
        )}
        {
          question === "1" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="1">1. Idea inicial</option>
                <option value="2">2. Validando mercado</option>
                <option value="3">3. Generando ingresos</option>
                <option value="4">4. Buscando escalar</option>
              </select>
            </>
          )
        }
        {
          question === "2" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="5">1. Si</option>
                <option value="6">2. Puede mejorar</option>
                <option value="7">3. Necesito ayuda</option>
              </select>
            </>
          )
        }
        {
          question === "3" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="8">1. Sí, funciona y da resultados</option>
                <option value="9">2. Sí, pero podría ser más impactante</option>
                <option value="10">3. No, y lo necesito para atraer inversores y clientes</option>
              </select>
            </>
          )
        }
        {
          question === "4" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="11">1. Sí, mi voz refuerza mi mensaje</option>
                <option value="12">2. A veces siento que no impacta lo suficiente</option>
                <option value="13">3. No, y creo que afecta mi comunicación</option>
              </select>
            </>
          )
        }
        {
          question === "5" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="14">1. Aún no lo hemos desarrollado</option>
                <option value="15">2. Estamos trabajando en un prototipo</option>
                <option value="16">3. Tenemos un MVP en fase de validación</option>
                <option value="17">4. Ya tenemos un producto funcional y queremos mejorarlo</option>
              </select>
            </>
          )
        }
        {
          question === "6" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="18">1. Sí, pero necesitamos mejorar el proceso de selección</option>
                <option value="19">2. Sí, pero aún no tenemos un plan claro</option>
                <option value="20">3. No en este momento</option>
              </select>
            </>
          )
        }
        {
          question === "7" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="21">1. Reclutamiento</option>
                <option value="22">2. Onboarding</option>
                <option value="23">3. Contratación</option>
                <option value="24">4. Retención y rotación</option>
              </select>
            </>
          )
        }
        {
          question === "8" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="25">1. Consigo que me escuchen y actúen con claridad</option>
                <option value="26">2. A veces siento que mi mensaje no genera el impacto esperado</option>
                <option value="27">3. Me cuesta que las personas sigan mis ideas</option>
              </select>
            </>
          )
        }
        {
          question === "9" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="28">1. Sí, me siento seguro/a al expresarme</option>
                <option value="29">2. A veces dudo si mi voz refuerza mi liderazgo</option>
                <option value="30">3. No, siento que mi voz no ayuda a mi comunicación</option>
              </select>
            </>
          )
        }
        {
          question === "10" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="31">1. Manejo bien estas situaciones</option>
                <option value="32">2. A veces me cuesta encontrar las palabras adecuadas</option>
                <option value="33">3. Evito este tipo de conversaciones</option>
              </select>
            </>
          )
        }
        {
          question === "11" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="34">1. Sí, logro conectar y transmitir mi mensaje</option>
                <option value="35">2. A veces siento que no logro impactar lo suficiente</option>
                <option value="36">3. Me cuesta estructurar y comunicar mis ideas con claridad</option>
              </select>
            </>
          )
        }
        {
          question === "12" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="37">1. Sí, encontrar y retener talento es un desafío</option>
                <option value="38">2. Sí, pero más en términos de integración y cultura</option>
                <option value="39">3. No, nuestro equipo está consolidado</option>
              </select>
            </>
          )
        }
        {
          question === "13" && (
            <>
              <label htmlFor="selectOption" className="form-label fw-bold">Seleccione una opcion</label>
              <select
                id="selectOption"
                className="form-select mb-4"
                aria-label="Select option"
                onChange={handleSelectedOption}
              >
                <option defaultValue="">Opciones</option>
                <option value="40">1. Mayor compromiso y alineación con la visión</option>
                <option value="41">2. Mejor comunicación interna y fluidez en la toma de decisiones</option>
                <option value="42">3. Más autonomía y liderazgo en los colaboradores</option>
              </select>
            </>
          )
        }
        {profile && selectedOption && (
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
                <label className="fw-bold mb-2" htmlFor="descripcion">
                  Descripción
                </label>
                <ReacQuill
                  theme="snow"
                  value={newTemplate.body}
                  onChange={handleQuillChange}
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
