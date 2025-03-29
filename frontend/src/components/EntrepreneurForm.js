import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AudioRecorder } from "../components/diagnostic/AudioRecorder"

const EntrepreneurForm = ({ step, setStep }) => {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const [file, setFile] = useState(null);

    const [form, setForm] = useState({
        fullname: "",
        projectSector: "",
        email: "",
        phone: "",
        socialMedia: "",
        voiceRecordingPath: "",
        selectedOptions: []
    })

    const handleSelection = (category, id) => {
        setForm((prevForm) => {
            const updatedOptions = [
                // Filtra el array eliminando la categoría si ya existe
                ...prevForm.selectedOptions.filter(option => option.category !== category),
                // Agrega la nueva selección
                { category, id }
            ];

            return { ...prevForm, selectedOptions: updatedOptions };
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (step === 5 && isStep6NotComplete()) {
            alert("Por favor, seleccione todas las opciones .");
            return;
        }
        console.log("submit")
    };

    const isStep1NotComplete = () => {
        return (
            form.fullname.trim() === "" ||
            form.projectSector.trim() === "" ||
            form.email.trim() === "" ||
            form.phone.trim() === "" ||
            form.socialMedia.trim() === ""
        );
    };

    const isStep2NotComplete = () => {
        return (
            form.selectedOptions.length < 1
        );
    };

    const isStep3NotComplete = () => {
        return (
            form.selectedOptions.length < 4
        );
    };

    const isStep4NotComplete = () => {
        return (
            form.selectedOptions.length < 5
        );
    };

    const isStep5NotComplete = () => {
        return (
            form.selectedOptions.length < 7
        );
    };

    const isStep6NotComplete = () => {
        return (
            form.voiceRecordingPath.trim() === ""
        );
    };


    const handleNextStep = (event) => {
        if (step === 0 && isStep1NotComplete()) {
            alert("Por favor, seleccione todas las opciones .");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (step === 0 && !emailPattern.test(form.email)) {
            alert("El email no tiene un formato correcto.");
            return;
        }

        if (step === 1 && isStep2NotComplete()) {
            alert("Por favor, seleccione todas las opciones .");
            return;
        }

        if (step === 2 && isStep3NotComplete()) {
            alert("Por favor, seleccione todas las opciones .");
            return;
        }

        if (step === 3 && isStep4NotComplete()) {
            alert("Por favor, seleccione todas las opciones .");
            return;
        }

        if (step === 4 && isStep5NotComplete()) {
            alert("Por favor, seleccione todas las opciones .");
            return;
        }

        setStep(prevStep => prevStep + 1)
    }

    return (

        <form className="container mt-4 px-3" onSubmit={handleSubmit} style={{ maxWidth: '796px', margin: '0 auto' }}>
            {step === 0 && (
                <div>
                    <div className="mb-2">
                        <h2 className="diagnostic-cards-section-h2">1. Sobre tu Emprendimiento</h2>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="fullname" className="diagnostic-form-label">
                            1. Nombre y apellido
                        </label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            placeholder="Ej: John Doe"
                            className="form-control border-0 border-bottom text-muted"
                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                            value={form.fullname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="projectSector" className="diagnostic-form-label">
                            2. Sector del proyecto
                        </label>
                        <input
                            id="projectSector"
                            name="projectSector"
                            type="text"
                            placeholder="Ej: Tecnología (Desarrollo de Software)"
                            className="form-control border-0 border-bottom text-muted"
                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                            value={form.projectSector}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="diagnostic-form-label">
                            3. Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Ej: johndoe@gmail.com"
                            className="form-control border-0 border-bottom text-muted"
                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="diagnostic-form-label">
                            4. Teléfono
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="Ej: +54 9 11 1234-5678"
                            className="form-control border-0 border-bottom text-muted"
                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="socialMedia" className="diagnostic-form-label">
                            5. Web o LinkedIn del Proyecto
                        </label>
                        <input
                            id="socialMedia"
                            name="socialMedia"
                            type="text"
                            placeholder="Ej: https://www.linkedin.com/in/johndoe/"
                            className="form-control border-0 border-bottom text-muted"
                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                            value={form.socialMedia}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            )}

            {step === 1 &&
                <div>
                    <div className="mb-4">
                        <h2 className="diagnostic-cards-section-h2">2. Etapa Actual</h2>
                    </div>
                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            1. ¿En qué etapa se encuentra tu emprendimiento?
                        </label>
                        <div className="mt-3">
                            {[
                                { label: "Idea Inicial", id: 1 },
                                { label: "Validando Mercado", id: 2 },
                                { label: "Generando Ingresos", id: 3 },
                                { label: "Buscando Escalabilidad", id: 4 },
                            ].map((q1, index) => (
                                <div key={q1.id} className="form-check mb-2">
                                    <input
                                        type="radio"
                                        name="q1"
                                        value={q1.id}
                                        id={`q1-${q1.id}`}
                                        className="form-check-input visually-hidden"
                                        checked={form.selectedOptions.some(option => option.category === "q1" && option.id === q1.id)}
                                        onChange={() => handleSelection("q1", q1.id)}
                                    />
                                    <label htmlFor={`q1-${q1.id}`} className="form-check-label d-flex align-items-center gap-2 cursor-pointer">
                                        <div className={`diagnostic-check-button ${form.selectedOptions.some(option => option.category === "q1" && option.id === q1.id) ? 'bg-primary border-primary' : 'light'}`}>
                                            <span className="">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="ms-2 text-dark">{q1.label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>}

            {step === 2 && (
                <div>
                    <div className="mb-4">
                        <h2 className="diagnostic-cards-section-h2">3. Comunicación y Pitch</h2>
                    </div>

                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            1. ¿Crees que las personas te entienden cuando te comunicas?
                        </label>
                        <div className="mt-3">
                            {[{ label: "Sí", id: 5 }, { label: "Puede Mejorar", id: 6 }, { label: "Necesito ayuda", id: 7 }].map((q2, index) => (
                                <div key={q2.id} className="form-check mb-2">
                                    <input
                                        type="radio"
                                        name="q2"
                                        value={q2.id}
                                        id={`q2-${q2.id}`}
                                        className="form-check-input visually-hidden"
                                        checked={form.selectedOptions.some(option => option.category === "q2" && option.id === q2.id)}
                                        onChange={() => handleSelection("q2", q2.id)}
                                    />
                                    <label htmlFor={`q2-${q2.id}`} className="form-check-label d-flex align-items-center gap-2 cursor-pointer">
                                        <div className={`diagnostic-check-button ${form.selectedOptions.some(option => option.category === "q2" && option.id === q2.id) ? 'bg-primary border-primary' : 'light'}`}>
                                            <span className="">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="ms-2 text-dark">{q2.label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            2. ¿Tienes un pitch efectivo que genere interes en segundos?
                        </label>
                        <div className="mt-3">
                            {[{ label: "Si, funciona y da resultados", id: 8 }, { label: "Si, pero podria ser mas impactante", id: 9 }, { label: "No, y lo necesito para atraer inversores y clientes", id: 10 }].map((q3, index) => (
                                <div key={q3.id} className="form-check mb-2">
                                    <input
                                        type="radio"
                                        name="q3"
                                        value={q3.id}
                                        id={`q3-${q3.id}`}
                                        className="form-check-input visually-hidden"
                                        checked={form.selectedOptions.some(option => option.category === "q3" && option.id === q3.id)}
                                        onChange={() => handleSelection("q3", q3.id)}
                                    />
                                    <label htmlFor={`q3-${q3.id}`} className="form-check-label d-flex align-items-center gap-2 cursor-pointer">
                                        <div className={`diagnostic-check-button ${form.selectedOptions.some(option => option.category === "q3" && option.id === q3.id) ? 'bg-primary border-primary' : 'light'}`}>
                                            <span className="">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="ms-2 text-dark">{q3.label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            3. ¿Tu voz transmite seguridad y capta la atención del público?
                        </label>
                        <div className="mt-3">
                            {[{ label: "Si, mi voz refuerza mi mensaje", id: 11 }, { label: "A veces siento que no impacta lo suficiente", id: 12 }, { label: "No, y creo que afecta mi comunicacion", id: 13 }].map((q4, index) => (
                                <div key={q4.id} className="form-check mb-2">
                                    <input
                                        type="radio"
                                        name="q4"
                                        value={q4.id}
                                        id={`q4-${q4.id}`}
                                        className="form-check-input visually-hidden"
                                        checked={form.selectedOptions.some(option => option.category === "q4" && option.id === q4.id)}
                                        onChange={() => handleSelection("q4", q4.id)}
                                    />
                                    <label htmlFor={`q4-${q4.id}`} className="form-check-label d-flex align-items-center gap-2 cursor-pointer">
                                        <div className={`diagnostic-check-button ${form.selectedOptions.some(option => option.category === "q4" && option.id === q4.id) ? 'bg-primary border-primary' : 'light'}`}>
                                            <span className="">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="ms-2 text-dark">{q4.label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {step === 3 &&
                <div>
                    <div className="mb-4">
                        <h2 className="diagnostic-cards-section-h2">4. Producto y Crecimiento</h2>
                    </div>
                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            1. ¿Cuál es tu situación con el desarrollo del producto o MVP?
                        </label>
                        <div className="mt-3">
                            {[
                                { label: "Aun no lo hemos desarrollado", id: 14 },
                                { label: "Estamos trabajando en un prototipo", id: 15 },
                                { label: "Tenemos un MVP en fase de validacion", id: 16 },
                                { label: "Ya tenemos un producto funcional y queremos mejorarlo", id: 17 }
                            ].map((q5, index) => (
                                <div key={q5.id} className="form-check mb-2">
                                    <input
                                        type="radio"
                                        name="q5"
                                        value={q5.id}
                                        id={`q5-${q5.id}`}
                                        className="form-check-input visually-hidden"
                                        checked={form.selectedOptions.some(option => option.category === "q5" && option.id === q5.id)}
                                        onChange={() => handleSelection("q5", q5.id)}
                                    />
                                    <label htmlFor={`q5-${q5.id}`} className="form-check-label d-flex align-items-center gap-2 cursor-pointer">
                                        <div className={`diagnostic-check-button ${form.selectedOptions.some(option => option.category === "q5" && option.id === q5.id) ? 'bg-primary border-primary' : 'light'}`}>
                                            <span className="">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="ms-2 text-dark">{q5.label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }

            {step === 4 &&
                <div>
                    <div className="mb-4">
                        <h2 className="diagnostic-cards-section-h2">5. Talento y Equipo</h2>
                    </div>
                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            1. ¿Buscas talento estratégico para crecer?
                        </label>
                        <div className="mt-3">
                            {[
                                { label: "Sí, pero necesitamos mejorar el proceso de selección", id: 18 },
                                { label: "Sí, pero aún no tenemos un plan claro", id: 19 },
                                { label: "No en este momento", id: 20 }
                            ].map((q6, index) => (
                                <div key={q6.id} className="form-check mb-2">
                                    <input
                                        type="radio"
                                        name="q6"
                                        value={q6.id}
                                        id={`q6-${q6.id}`}
                                        className="form-check-input visually-hidden"
                                        checked={form.selectedOptions.some(option => option.category === "q6" && option.id === q6.id)}
                                        onChange={() => handleSelection("q6", q6.id)}
                                    />
                                    <label htmlFor={`q6-${q6.id}`} className="form-check-label d-flex align-items-center gap-2 cursor-pointer">
                                        <div className={`diagnostic-check-button ${form.selectedOptions.some(option => option.category === "q6" && option.id === q6.id) ? 'bg-primary border-primary' : 'light'}`}>
                                            <span className="">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="ms-2 text-dark">{q6.label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            2. ¿Cuál es el mayor desafío de tu equipo?
                        </label>
                        <div className="mt-3">
                            {[
                                { label: "Reclutamiento", id: 21 },
                                { label: "Onboarding", id: 22 },
                                { label: "Contratación", id: 23 },
                                { label: "Retención y rotación", id: 24 }
                            ].map((q7, index) => (
                                <div key={q7.id} className="form-check mb-2">
                                    <input
                                        type="radio"
                                        name="q7"
                                        value={q7.id}
                                        id={`q7-${q7.id}`}
                                        className="form-check-input visually-hidden"
                                        checked={form.selectedOptions.some(option => option.category === "q7" && option.id === q7.id)}
                                        onChange={() => handleSelection("q7", q7.id)}
                                    />
                                    <label htmlFor={`q7-${q7.id}`} className="form-check-label d-flex align-items-center gap-2 cursor-pointer">
                                        <div className={`diagnostic-check-button ${form.selectedOptions.some(option => option.category === "q7" && option.id === q7.id) ? 'bg-primary border-primary' : 'light'}`}>
                                            <span className="">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="ms-2 text-dark">{q7.label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }

            {step === 5 &&
                <div>
                    <div className="mb-4">
                        <h2 className="diagnostic-cards-section-h2">6. Graba Tu Pitch en 30 Segundos</h2>
                    </div>

                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            Estás en un ascensor con un inversor. En menos de 30 segundos, cuéntanos tu propuesta para obtener un diagnóstico personalizado.
                        </label>
                    </div>
                    <div className="form-group mb-4">
                        <AudioRecorder file={file} setFile={setFile} />
                    </div>
                </div>
            }



            {/* Botón Siguiente */}
            {
                step <= 4 &&
                <div className="d-flex justify-content-center">
                    <button
                        type="button"
                        className="d-flex align-items-center justify-content-center gap-4 mt-3 bg-primary text-white rounded-pill w-auto px-4 py-2"
                        onClick={handleNextStep}
                    >
                        Siguiente <FontAwesomeIcon icon={faArrowRight} className="text-white" style={{ fontSize: '16px' }} />
                    </button>
                </div>
            }

            {/* Botón Enviar Diagnóstico */}
            {
                step === 5 &&
                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className="d-flex align-items-center justify-content-center gap-4 mt-3 bg-primary text-white rounded-pill w-auto px-4 py-2"
                    >
                        Enviar Diagnóstico
                    </button>
                </div>
            }
        </form>


    );
}

export default EntrepreneurForm;