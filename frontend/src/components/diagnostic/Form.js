import { useState } from "react";
import { Toaster, toast } from 'sonner';
import { loader } from "../Loader";
import { SelectRole } from "../SelectRole";
import { Services } from "./Services";
import { Needs } from "./Needs";
import { AudioRecorder } from "./AudioRecorder";
import { audioRecorderService } from "../../services/audioRecorder";
import { diagnosticService } from "../../services/diagnostic";

export const Form = () => {
    const [selectedRole, setSelectedRole] = useState("Seleccionar");
    const [selectedService, setSelectedService] = useState("Seleccionar");
    const [selectedNeeds, setSelectedNeeds] = useState([]); 
    const [file, setFile] = useState(null); 
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        const publicDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const domain = emailValue.split("@")[1];
        
        if (!emailRegex.test(emailValue)) {
            setEmailError("Ingrese un correo válido.");
            return;
        }
    
        if (selectedRole === 2 && domain && publicDomains.includes(domain)) {
            setEmailError("Debe ingresar un correo corporativo.");
        } else {
            setEmailError("");
        }
    };
    
    const handleFullnameChange = (e) => setFullname(e.target.value);

    const reset = () => {
        setSelectedRole("Seleccionar");
        setSelectedService("Seleccionar");
        setSelectedNeeds([]);
        setFile(null);
        setFullname("");
        setEmail("");
        
        window.scrollTo({
            behavior: "smooth" ,
            top: 0,   
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const uploadedAudioUrl = await audioRecorderService.uploadToCloudinary(file);
            
            const data = {
                profileId: selectedRole,
                serviceId: selectedService,
                selectedOptions: selectedNeeds,
                voiceRecordingPath: uploadedAudioUrl,
                fullname: fullname,
                email: email
            };

            await diagnosticService.sendDiagnostic(data);
            reset();
            toast.success("Enviado exitosamente! Esté pendiente de su correo.")
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
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
                    <Needs selectedRole={selectedRole} selectedService={selectedService} selectedNeeds={selectedNeeds} 
                        setSelectedNeeds={setSelectedNeeds} />
                </div>
                {
                    selectedService !== "Seleccionar" && (
                        <>
                            <div className="form-group mb-4">
                                <p className="fw-bold pb-3">
                                    {
                                        selectedRole === 1 ? "Grabar o cargar un audio de tu pitch (30-60 segundos)" 
                                        : "Grabar o cargar un audio sobre el problema/necesidad de tu empresa (30-60 segundos)"
                                    }
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
                                    type="email"
                                    className="form-control" 
                                    placeholder="prueba@vocaltech.com" 
                                    onChange={handleEmailChange} 
                                />
                                {
                                    emailError && (<small className="text-danger">{emailError}</small>)
                                }
                            </div>
                            <div className="text-center">
                                <button 
                                    disabled={selectedNeeds.length === 0 || !file || !fullname || !email || isLoading || emailError } 
                                    type="submit" 
                                    className="btn rounded-pill btn-form-diagnostic">
                                    {
                                        isLoading ? (
                                            <loader.GeneralLoader />
                                        ) : "Enviar"
                                    }
                                </button>
                            </div>
                        </>
                    )
                }
            </form>
            <Toaster
                richColors
                position="top-center"
            />
        </div>
    );
};
