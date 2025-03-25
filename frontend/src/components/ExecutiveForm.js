import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ExecutiveForm = () => {

    const [step, setStep] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

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
            form.occupation.trim() === "" ||
            form.enterpriseName.trim() === "" ||
            form.enterpriseEmail.trim() === "" ||
            form.enterpriseSector.trim() === "" ||
            (form.teamQuantity === "" || isNaN(form.teamQuantity))
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
        console.log(form.selectedOptions)
        if (step === 0 && isStep1NotComplete()) {
            alert("Por favor, seleccione todas las opciones .");
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
        </form>


    );
}

export default ExecutiveForm;