import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const reset = () => {
        setEmail("");
        setPassword("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                email: email,
                password: password,
            };

            const response = await authService.admin(data);
            console.log(response)
            reset();
            navigate("/admin-dashboard");
            
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-md-5 bg-md-light-form rounded shadow-md-form">
            <p className="fs-3 text-center fw-bold pb-4">Inicio de sesión</p>
            <div className="form-group mb-4">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" autoComplete="email" 
                    onChange={handleEmailChange} placeholder="vocaltech@prueba.com" />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" 
                    onChange={handlePasswordChange} placeholder="contraseña" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Acceder</button>
        </form>
    );
};
