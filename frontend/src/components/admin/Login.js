import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Loader } from "../Loader";
import { authService } from "../../services/auth";
import { useAuth } from "../../contexts/Auth";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const { login } = useAuth();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const reset = () => {
        setEmail("");
        setPassword("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorEmail("");
        setErrorPass("");
        setIsLoading(true);

        try {
            const data = {
                email: email,
                password: password,
            };

            const response = await authService.admin(data);
            login(response);
            reset();
   
        } catch (error) {
            setErrorEmail("Correo inválido");
            setErrorPass("Contraseña inválida");
            toast.error(error.message);

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="p-md-5 bg-md-light-form rounded shadow-md-form">
                <p className="fs-3 text-center fw-bold pb-4">Inicio de sesión</p>
                <div className="form-group mb-4">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" autoComplete="email" 
                        onChange={handleEmailChange} placeholder="vocaltech@prueba.com" />
                    <small className="text-danger">{errorEmail}</small>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" 
                        onChange={handlePasswordChange} placeholder="contraseña" />
                    <small className="text-danger">{errorPass}</small>
                </div>
                <button type="submit" disabled={isLoading} className="btn btn-primary w-100">
                    {
                        isLoading ? (
                            <Loader />
                        ) : "Acceder"
                    }
                </button>
            </form>
            <Toaster
                richColors
                position="top-center"
            />
        </div>
    );
};
