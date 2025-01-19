import { useState } from "react";
import { Link } from 'react-router-dom';
import { diagnosticNeeds } from "../utils/diagnosticNeeds";
import { Form as DiagnosticForm } from "../components/diagnostic/Form";

export const Diagnostic = () => {
    const [selectedOption, setSelectedOption] = useState('Seleccionar');

    const handleSelect = e => {
        setSelectedOption(e.target.value);
    };

    const getAudioTitle = () => 
        selectedOption === "Emprendedor"
        ? "Cargar o grabar un audio de tu pitch"
        : selectedOption === "Empresa"
        ? "Cargar o grabar un audio sobre el problema/necesidad de tu empresa"
        : ""; 

    return (
        <div className="container">
            <h1 className="text-center">Diagnóstico</h1>
            <section className="container pb-5">
                <p>El primer paso es seleccionar tu perfil</p>
                <select className="form-select w-25" value={selectedOption} onChange={handleSelect}>
                <option value="Seleccionar" disabled>Seleccionar</option>
                <option value="Emprendedor">Emprendedor</option>
                <option value="Empresa">Empresa</option>
            </select>
            {
                selectedOption !== "Seleccionar" && (
                    <DiagnosticForm
                        needs={diagnosticNeeds[selectedOption.toLowerCase()]} 
                        audioTitle={getAudioTitle()}
                        key={selectedOption}
                    />
                )
            }
            </section>
            <section>
                <h5>Deseas agendar una cita? Contanos, qué necesitas?</h5>
                <Link to="/agendar-cita">
                    <button className="btn btn-success">Ir al calendario</button>
                </Link>
            </section>
        </div>
    );
};
