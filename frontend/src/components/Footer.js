import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from 'sonner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../utils/socialLinks";
import { loader } from "./Loader";
import { subscriptionService } from "../services/subscription";
import { schemas } from "../utils/schemas";
import { validate } from "../utils/validate";

export const Footer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({ email: "" });
    const [error, setError] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)

        const isValid = await validate(schemas.subscription, form, setError);
                
        if (!isValid) {
            setIsLoading(false);
            return;
        }

        try {
            await subscriptionService.sendSubscription(form);
            toast.success("¡Suscripción enviada con éxito!");
            setForm({ email: "" })
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <footer className="bg-footer py-5 text-white">
            <Toaster
                richColors
                position="top-center"
            />
            <div className="container">
                <div className="row gap-4 gap-lg-0 border-bottom pb-5">
                    <div className="col-lg-6">
                        <Link className="navbar-brand fs-4 fw-bold" to="/">
                            VocalTech
                        </Link>
                        <p className="text-medium pt-3">
                            Únete a nuestro boletín para recibir actualizaciones sobre características y
                            lanzamientos.
                        </p>
                        <form className="pb-3 d-flex flex-wrap flex-md-nowrap gap-2 pe-lg-5" onSubmit={handleSubmit}>
                            <div className="col-12 col-md-8 pb-2 pb-md-0">
                                <input 
                                    type="email" 
                                    className="form-control bg-transparent rounded-0 py-2 px-3" 
                                    id="email" 
                                    placeholder="Introduce tu correo"
                                    value={form.email}
                                    disabled={isLoading}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn bg-transparent rounded-0 border py-2 px-3 w-100"
                                disabled={isLoading}>
                                {
                                    isLoading ? (
                                        <loader.GeneralLoader />
                                    ) : (
                                        "Suscribirse"
                                    )
                                }
                            </button>
                        </form>
                        { error && <p className="invalid-feedback d-block mt-0">{error.email}</p> }
                        <p className="text-white text-small">Al suscribirte, aceptas nuestra <Link className="text-white text-decoration-underline" to="/">Política de Privacidad</Link> y
                            consientes recibir actualizaciones.
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <p className="fw-semibold">Servicios</p>
                        <ul className="text-medium">
                            <li className="pb-3">
                                <Link className="text-white" to="/empresas">Para Empresas</Link>
                            </li>
                            <li><Link className="text-white" to="/emprendedores">Para Emprendedores</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <p className="fw-semibold">Institucional</p>
                        <ul className="text-medium">
                            <li className="pb-3"><Link className="text-white" to="/nosotros">Nosotros</Link></li>
                            <li><Link className="text-white" to="/contacto">Contacto</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <p className="fw-semibold">Síguenos</p>
                        <ul className="text-medium">
                            {
                                socialLinks.map((link, index) => (
                                    <li className="pb-3" key={index}>
                                        <Link
                                            to={link.url}
                                            className="text-white">
                                            <FontAwesomeIcon icon={link.icon} className="me-3" /> {link.text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="row text-small pt-4">
                    <div className="col-lg-6">
                        <p>&copy;2025 VocalTech. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-lg-6">
                        <ul className="d-flex flex-wrap justify-content-lg-end gap-3">
                            <li className="pb-2">
                                <Link className="text-white text-decoration-underline" to="/">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li className="pb-2">
                                <Link className="text-white text-decoration-underline" to="/">
                                    Términos de Servicio
                                </Link>
                            </li>
                            <li className="pb-2">
                                <Link className="text-white text-decoration-underline" to="/">
                                    Configuración de Cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
