import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { AudioRecorder } from "../components/diagnostic/AudioRecorder"
import { diagnosticService } from "../services/diagnostic"
import { useNavigate } from "react-router-dom";

const ExecutiveForm = ({ step, setStep }) => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

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
        socialMedia: "",
        occupation: "",
        enterpriseName: "",
        enterpriseEmail: "",
        enterpriseSector: "",
        teamQuantity: 0,
        selectedOptions: [],
        voiceRecordingPath: "",
        specifyOther: "",
    });


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

    useEffect(() => {
        if (form.selectedOptions.some(option => [40, 41, 42].includes(option.id))) {
            setForm(prevForm => ({ ...prevForm, specifyOther: "" }));
        }
    }, [form.selectedOptions]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        if (file == null) {
            alert("Por favor, grabe su pitch.");
            return;
        }

        const optionsIds = form.selectedOptions.map(option => option.id);

        const data = {
            fullname: form.fullname,
            socialMedia: form.socialMedia,
            occupation: form.occupation,
            enterpriseName: form.enterpriseName,
            enterpriseEmail: form.enterpriseEmail,
            enterpriseSector: form.enterpriseSector,
            teamQuantity: form.teamQuantity,
            selectedOptions: optionsIds,
            voiceRecordingPath: form.voiceRecordingPath,
            specifyOther: form.specifyOther,
        };

        try {
            await diagnosticService.sendExecDiagnostic(data);
            navigate("/diagnostico/envio-exitoso");
        } catch (error) {
            navigate("/diagnostico/error");
        } finally {
            setIsLoading(false)
        }

    };

    const isStep1NotComplete = () => {
        return (
            form.fullname.trim() === "" ||
            form.occupation.trim() === "" ||
            form.enterpriseName.trim() === "" ||
            form.enterpriseEmail.trim() === "" ||
            form.enterpriseSector.trim() === "" ||
            (form.teamQuantity === "" || isNaN(form.teamQuantity))
        );
    };

    const isStep2NotComplete = () => {
        return (
            form.selectedOptions.length < 4
        );
    };

    const isStep3NotComplete = () => {
        return (
            form.selectedOptions.length < 6
        );
    };

    const handleNextStep = (event) => {
        if (step === 0 && isStep1NotComplete()) {
            alert("Por favor, complete los campos.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (step === 0 && !emailPattern.test(form.enterpriseEmail)) {
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

        setStep(prevStep => prevStep + 1)
    }

    return (

        <form className="container mt-4 px-3" onSubmit={handleSubmit} style={{ maxWidth: '796px', margin: '0 auto' }}>
            {step === 0 && (
                <div>
                    <div className="mb-4">
                        <h1 className="h3 fw-semibold">1. Sobre ti</h1>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="fullname" className="form-label fw-semibold fs-5 pb-2">
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
                        <label htmlFor="occupation" className="form-label fw-semibold fs-5 pb-2">
                            2. Puesto/Cargo
                        </label>
                        <input
                            id="occupation"
                            name="occupation"
                            type="text"
                            placeholder="Ej: Director de Marketing, Gerente de Ventas"
                            className="form-control border-0 border-bottom text-muted"
                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                            value={form.occupation}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="enterpriseName" className="form-label fw-semibold fs-5 pb-2">
                            3. Empresa
                        </label>
                        <input
                            id="enterpriseName"
                            name="enterpriseName"
                            type="enterpriseName"
                            placeholder="Nombre de la Empresa"
                            className="form-control border-0 border-bottom text-muted"
                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                            value={form.enterpriseName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="enterpriseEmail" className="form-label fw-semibold fs-5 pb-2">
                            4. Email Corporativo
                        </label>
                        <input
                            id="enterpriseEmail"
                            name="enterpriseEmail"
                            type="enterpriseEmail"
                            placeholder="Ej: nombre@empresa.com"
                            className="form-control border-0 border-bottom text-muted"
                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                            value={form.enterpriseEmail}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="enterpriseSector" className="form-label fw-semibold fs-5 pb-2">
                            5. Sector de la Empresa
                        </label>
                        <input
                            id="enterpriseSector"
                            name="enterpriseSector"
                            type="text"
                            placeholder="Ej: Tecnología"
                            className="form-control border-0 border-bottom text-muted"
                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                            value={form.enterpriseSector}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="socialMedia" className="form-label fw-semibold fs-5 pb-2">
                            6. LinkedIn o Sitio Web (opcional)
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

                    <div className="mb-4">
                        <label htmlFor="teamQuantity" className="form-label fw-semibold fs-5 pb-2">
                            7. Tamaño del equipo que lideras
                        </label>
                        <input
                            id="teamQuantity"
                            name="teamQuantity"
                            type="number"
                            min="0"
                            placeholder="10"
                            className="form-control border-0 border-bottom text-muted"
                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                            value={form.teamQuantity}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            )}

            {step === 1 &&
                <div>
                    <div className="mb-4">
                        <h2 className="diagnostic-cards-section-h2">2. Comunicación y Liderazgo</h2>
                    </div>
                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            1. ¿Cómo describirías tu capacidad para influir y liderar a tu equipo?
                        </label>
                        <div className="mt-3">
                            {[
                                { label: "Consigo que me escuchen y actúen con claridad", id: 25 },
                                { label: "A veces siento que mi mensaje no genera el impacto esperado", id: 26 },
                                { label: "Me cuesta que las personas sigan mis ideas", id: 27 },
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
                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            2. ¿Tu voz transmite autoridad y seguridad al hablar?
                        </label>
                        <div className="mt-3">
                            {[
                                { label: "Sí, me siento seguro/a al expresarme", id: 28 },
                                { label: "A veces dudo si mi voz refuerza mi liderazgo", id: 29 },
                                { label: "No, siento que mi voz no ayuda a mi comunicación", id: 30 },
                            ].map((q2, index) => (
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
                            3. ¿Qué tan cómodo/a te sientes en conversaciones difíciles (negociaciones, feedback, gestión de conflictos)?
                        </label>
                        <div className="mt-3">
                            {[
                                { label: "Manejo bien estas situaciones", id: 31 },
                                { label: "A veces me cuesta encontrar las palabras adecuadas", id: 32 },
                                { label: "Evito este tipo de conversaciones", id: 33 },
                            ].map((q3, index) => (
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
                            4. ¿Te resulta fácil captar la atención y el interés de tu equipo o clientes en reuniones o presentaciones?
                        </label>
                        <div className="mt-3">
                            {[
                                { label: "Sí, logro conectar y transmitir mi mensaje", id: 34 },
                                { label: "A veces siento que no logro impactar lo suficiente", id: 35 },
                                { label: "Me cuesta estructurar y comunicar mis ideas con claridads", id: 36 },
                            ].map((q4, index) => (
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
                </div>}

            {step === 2 &&
                <div>
                    <div className="mb-4">
                        <h2 className="diagnostic-cards-section-h2">3. Gestión y Desarrollo de Talento</h2>
                    </div>
                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            1. ¿Tienes dificultades en la contratación o retención de talento clave?
                        </label>
                        <div className="mt-3">
                            {[
                                { label: "Sí, encontrar y retener talento es un desafío", id: 37 },
                                { label: "Sí, pero más en términos de integración y cultura", id: 38 },
                                { label: "No, nuestro equipo está consolidado", id: 39 },
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
                    <div className="mb-4">
                        <label className="diagnostic-form-label">
                            2. ¿Qué te gustaría mejorar en tu equipo?
                        </label>
                        <div className="mt-3">
                            {[
                                { label: "Mayor compromiso y alineación con la visión", id: 40 },
                                { label: "Mejor comunicación interna y fluidez en la toma de decisiones", id: 41 },
                                { label: "Más autonomía y liderazgo en los colaboradores", id: 42 },
                                { label: "Otro", id: 43 },
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

                            {
                                form.selectedOptions.some(option => option.id === 43) && (
                                    <div className="mb-4">
                                        <label htmlFor="fullname" className="form-label fw-semibold fs-5 pb-2">
                                            Especificar:
                                        </label>
                                        <input
                                            id="specifyOther"
                                            name="specifyOther"
                                            type="text"
                                            placeholder="Escríbelo aquí."
                                            className="form-control border-0 border-bottom text-muted"
                                            style={{ backgroundColor: "transparent", outline: "none", boxShadow: "none" }}
                                            value={form.specifyOther}
                                            onChange={handleChange}
                                        />
                                    </div>

                                )
                            }

                        </div>
                    </div>
                </div>}

            {step === 3 &&
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
                        {!isLoading && <AudioRecorder file={file} setFile={setFile} />}
                    </div>
                </div>
            }

            {/* Botón Siguiente */}
            {
                step <= 2 &&
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
                step === 3 &&
                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className="d-flex align-items-center justify-content-center gap-4 mt-3 bg-primary text-white rounded-pill w-auto px-4 py-2"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                                Enviando...
                            </>
                        ) : (
                            "Enviar Diagnóstico"
                        )}
                    </button>
                </div>
            }
        </form>


    );
}

export default ExecutiveForm;