import { useState } from 'react';
import { AudioRecorder } from './AudioRecorder';
import { audioRecorderService } from '../../services/audioRecorder';
import { diagnosticNeeds } from '../../utils/diagnosticNeeds';

export const Form = ({ needs }) => {
    const [selectedNeeds, setSelectedNeeds] = useState([]); 
    const [file, setFile] = useState(null); 
    const [selectedOption, setSelectedOption] = useState('Seleccionar');
    const [selectedServiceOption, setSelectedServiceOption] = useState('Seleccionar');

    const handleSelect = e => {
        setSelectedOption(e.target.value);
    };

    const handleServiceSelect = e => {
        setSelectedServiceOption(e.target.value);
    };

    const getAudioTitle = () => 
        selectedOption === "emprendedor"
        ? "Cargar o grabar un audio de tu pitch"
        : selectedOption === "empresa"
        ? "Cargar o grabar un audio sobre el problema/necesidad de tu empresa"
        : ""; 


    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setSelectedNeeds((prevNeeds) => {
            if (checked) {
                return [...prevNeeds, value];
            } else {
                return prevNeeds.filter((need) => need !== value);
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const uploadedAudioUrl = await audioRecorderService.uploadToCloudinary(file);
            
            const dataToSend = {
                needs: selectedNeeds,
                audio: uploadedAudioUrl,
            };
    
            console.log(dataToSend);
            setSelectedNeeds([]);
            setFile(null);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
                <p>¿Cuál es tu perfil?</p>
                <select className="form-select w-25" value={selectedOption} onChange={handleSelect}>
                    <option value="Seleccionar" disabled>Seleccionar</option>
                    <option value="emprendedor">Emprendedor</option>
                    <option value="empresa">Empresa</option>
                </select>
            </div>
                {
                    selectedOption === "emprendedor" ? (
                        <div className="form-group">
                            <p>¿Cuál servico requieres/necesitas?</p>
                            <select key={selectedOption} className="form-select w-25" value={selectedServiceOption} onChange={handleServiceSelect}>
                                <option value="Seleccionar" disabled>Seleccionar</option>
                                <option value="tuvozEmprendedor">Coaching de comunicación y liderazgo</option>
                                <option value="nocountryEmprendedor">Desarrollo de MVPs de alta fidelidad en 5 semanas</option>
                                <option value="ambosEmprendedor">Ambos servicios</option>
                            </select>   
                        </div>
                    ) : selectedOption === "empresa" && (
                        <div className="form-group">
                            <p>¿Cuál servico requieres/necesitas?</p>
                            <select key={selectedOption} className="form-select w-25" value={selectedServiceOption} onChange={handleServiceSelect}>
                                <option value="Seleccionar" disabled>Seleccionar</option>
                                <option value="tuvozEmpresa">Workshops y coaching de comunicación y liderazgo</option>
                                <option value="nocountryEmpresa">Búsqueda y selección de talento</option>
                                <option value="ambosEmpresa">Ambos servicios</option>
                            </select>   
                        </div>
                    )
                   
                }
          
            <div className="form-group">
                {diagnosticNeeds[selectedServiceOption]?.map((need, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            value={need}
                            onChange={handleCheckboxChange}
                            id={`need-${index}`}
                            checked={selectedNeeds.includes(need)}
                        />
                        <label htmlFor={`need-${index}`}>{need}</label>
                    </div>
                ))}
            </div>
            {
                selectedServiceOption !== "Seleccionar" && (
                    <div className="form-group">
                <label htmlFor="audio">{getAudioTitle()} (30-60 segundos)</label>
                <AudioRecorder file={file} setFile={setFile} /> 
                <label for="">Correo Electrónico</label>
                <input className="form-control" />
                <button 
                disabled={selectedNeeds.length === 0 || !file} 
                type="submit" className="btn btn-primary">Enviar</button>
            </div>
            
                )
            }
            
        </form>
    );
};
