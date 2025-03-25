import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EntrepreneurForm = () => {

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
                        <h1 className="h3 fw-semibold">1. Sobre tu Emprendimiento</h1>
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
                        <label htmlFor="projectSector" className="form-label fw-semibold fs-5 pb-2">
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
                        <label htmlFor="email" className="form-label fw-semibold fs-5 pb-2">
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
                        <label htmlFor="phone" className="form-label fw-semibold fs-5 pb-2">
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
                        <label htmlFor="socialMedia" className="form-label fw-semibold fs-5 pb-2">
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

export default EntrepreneurForm;