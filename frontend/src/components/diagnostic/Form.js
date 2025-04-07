import { useState } from "react";
import { Title } from "./Title";
import { Entrepreneur } from "./Entrepreneur";
import { Company } from "./Company";
import { loader } from "../Loader"
import { Modall } from "../Modal";
import { AudioRecorder } from "./AudioRecorder";
import { ScrollToTop } from "../ScrollToTop";
import { initializeForm } from "../../utils/initializeForm";
import { isCurrentStepValid } from "../../utils/isCurrentStepValid";
import { audioRecorderService } from "../../services/audioRecorder";
import { diagnosticService } from "../../services/diagnostic";
import { useModal } from "../../hooks/useModal";

export const Form = ({ user, setIsSentSucessfully, setIsErrorSending }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { showModal, openModal, closeModal } = useModal();
    const [step, setStep] = useState(0); 
    const [form, setForm] = useState(initializeForm.diagnostic(user));
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});

    const nextStep = () => { if (step < lastStep) return setStep(prev => prev + 1) };
    
    const prevStep = () => {
        if(file) {
            openModal();
        } else {
            setStep(prev => (prev > 0 ? prev - 1 : prev));
        } 
    }

    const lastStep = user === "entrepreneur" ? 5 : 3;

    const handleNext = async () => {
        const valid = await isCurrentStepValid(user, step, form, setErrors);
        if (valid) nextStep();
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const uploadedAudioUrl = await audioRecorderService.uploadToCloudinary(file);
            
            const data = {
                ...form, 
                selectedOptions: Object.values(form.selectedOptions),
                voiceRecordingPath: uploadedAudioUrl,
            };

            await diagnosticService.sendDiagnostic(user, data);
            setIsSentSucessfully(true);
        } catch (error) {
            setIsErrorSending(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="col-md-10 col-lg-8 mx-auto">
            <ScrollToTop step={step} />
            { user === "entrepreneur" && step === 0 && <img src="/images/diagnostic/entrepreneur-hero.png" 
                alt="Emprendedor" className="rounded-4 w-100" /> 
            }
            { user === "company" && step === 0 && <img src="/images/diagnostic/executive-hero.png" 
                alt="Ejectivo de empresa" className="rounded-4 w-100" /> 
            }
            <form onSubmit={handleSubmit} className="w-100">
                <Title user={user} step={step} />
                { user === "entrepreneur" && <Entrepreneur step={step} form={form} 
                    setForm={setForm} errors={errors} /> 
                }
                { user === "company" && <Company user={user} step={step} form={form} 
                    setForm={setForm} errors={errors} /> 
                }
                { step === lastStep && <AudioRecorder file={file} setFile={setFile} disabled={isLoading} /> }

                <div className="d-flex justify-content-center gap-2 mt-4 col-lg-9 col-xl-7 mx-auto">
                    <button 
                        onClick={prevStep} 
                        disabled={step === 0 || isLoading} 
                        type="button"
                        className="btn btn-lightblue-personalized px-4 py-2 fw-bold 
                        text-white">
                        Anterior
                    </button>
                    <button 
                        onClick={step === lastStep && file ? undefined : handleNext} 
                        disabled={step === lastStep && !file} 
                        type={step === lastStep && file ? "submit" : "button"}
                        className="btn btn-lightblue-personalized px-4 py-2 fw-bold text-white">
                        { 
                            step === lastStep ? (
                                isLoading ? ( <loader.GeneralLoader /> ) : "Enviar"
                            ) : "Siguiente" 
                        }
                    </button>
                </div>
            </form>
            <Modall
                showModal={showModal}
                closeModal={closeModal}
                title="¿Estás seguro?">
                <p>Si vuelves atrás, la grabación o el archivo adjunto se perderá. 
                    ¿Estás seguro que quieres hacerlo?</p>
                <button 
                    onClick={() => {
                        setStep(prev => (prev > 0 ? prev - 1 : prev));
                        setFile(null);
                        closeModal();
                    }} 
                    type="button"
                    className="btn btn-lightblue-personalized px-4 py-2 fw-bold 
                    text-white">
                    Confirmar
                </button>
            </Modall>
        </div>
    );
};
