import { useState } from "react";
import { SelectRole } from "../SelectRole";
import { Services } from "./Services";
import { Needs } from "./Needs";
import { AudioRecorder } from "./AudioRecorder";
import { audioRecorderService } from "../../services/audioRecorder";

export const Form = () => {
    const [selectedRole, setSelectedRole] = useState("Seleccionar");
    const [selectedService, setSelectedService] = useState("Seleccionar");
    const [selectedNeeds, setSelectedNeeds] = useState([]); 
    const [file, setFile] = useState(null); 
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleFullnameChange = (e) => setFullname(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const uploadedAudioUrl = await audioRecorderService.uploadToCloudinary(file);
            
            const dataToSend = {
                profileId: selectedRole,
                selectedOptions: selectedNeeds,
                voiceRecordingPath: uploadedAudioUrl,
                fullname: fullname,
                email: email
            };
    
            console.log(dataToSend);
            setSelectedNeeds([]);
            setFile(null);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="container pb-5 mb-4">
            <form onSubmit={handleSubmit} className="p-md-5 mx-auto bg-md-light-form rounded shadow-md-form">
                <div className="form-group mb-4">
                    <label htmlFor="selectRole" className="form-label fw-bold">¿Cuál es tu perfil?</label>
                        <SelectRole selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
                </div>
                <div className="form-group mb-4">
                    <Services selectedRole={selectedRole} selectedService={selectedService} 
                        setSelectedService={setSelectedService} />
                </div>
                <div className="form-group mb-4">
                    <Needs selectedService={selectedService} selectedNeeds={selectedNeeds} 
                        setSelectedNeeds={setSelectedNeeds} />
                </div>
                {
                    selectedService !== "Seleccionar" && (
                        <>
                            <div className="form-group mb-4">
                                <p className="fw-bold pb-3">
                                    {selectedRole === "emprendedor" ? "Grabar o cargar un audio de tu pitch (30-60 segundos)" : "Grabar o cargar un audio sobre el problema/necesidad de tu empresa (30-60 segundos)"}
                                </p>
                                <AudioRecorder file={file} setFile={setFile} />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="fullname" className="form-label fw-bold">Nombre Completo</label>
                                <input 
                                    id="fullname" 
                                    name="fullname" 
                                    className="form-control" 
                                    placeholder="Vocaltech" 
                                    onChange={handleFullnameChange} 
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
                                <input 
                                    autoComplete="email" 
                                    id="email" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="prueba@vocaltech.com" 
                                    onChange={handleEmailChange} 
                                />
                            </div>
                            <button 
                                disabled={selectedNeeds.length === 0 || !file || !email || !fullname} 
                                type="submit" 
                                className="btn btn-primary rounded-pill btn-personalized">
                                Enviar
                            </button>
                        </>
                    )
                }
            </form>
        </div>
    );
};
