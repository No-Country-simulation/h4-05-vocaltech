import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../diagnostic/Input";
import { Textarea } from "../Textarea";
import { loader } from "../Loader";
import { input } from "../../utils/input";
import { textarea } from "../../utils/textarea";
import { initializeForm } from "../../utils/initializeForm";
import { schemas } from "../../utils/schemas";
import { validate } from "../../utils/validate";
import { queriesService } from "../../services/queries";

export const Form = ({ setIsSentSucessfully, setIsErrorSending }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState(initializeForm.query);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const isValid = await validate(schemas.query, form, setErrors);
        
        if (!isValid) {
            setIsLoading(false);
            return;
        }

        try {
            await queriesService.sendQuery(form);
            setIsSentSucessfully(true);
        } catch (error) {
            setIsErrorSending(true);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <form className="p-md-5 rounded-4 shadow-md-form" onSubmit={handleSubmit}>
            <p className="fs-3 fw-bold pb-2 text-black">Formulario de Contacto</p>
            {
                input.query.map(item => (
                    <Input key={item.id} {...item} setForm={setForm} 
                        value={form[item.id]} errors={errors} />
                ))
            }
            {
                textarea.query.map(item => (
                    <Textarea key={item.id} {...item} setForm={setForm} 
                        value={form[item.id]} errors={errors} />
                ))
            }
            <div className="col-md-8 col-lg-12 col-xl-10 mx-auto">
                <button type="submit" disabled={isLoading} className="btn btn-general
                    btn-lightblue-personalized text-white fw-bold">
                    {
                        isLoading ? (
                            <loader.GeneralLoader />
                        ) : 
                        <>
                            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />Enviar Consulta
                        </>
                    }
                </button>
            </div>
        </form>
    );
};
