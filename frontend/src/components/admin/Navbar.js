import { Link } from "react-router-dom";
import { DashSelect } from "./DashSelect";
import { sidebarLinks } from "../../utils/sidebarLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top d-md-none">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">
                    VocalTech
                </Link>
                <button
                    className="navbar-toggler text-white"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-start bg-dark"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header bg-dark">
                        <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">
                            VocalTech
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">
                        </button>
                    </div>
                    <div className="offcanvas-body bg-dark">
                        <div className="pb-3">
                            <DashSelect />
                        </div>
                        <ul className="navbar-nav">
                            {
                                sidebarLinks.map((link, index) => (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link text-white" 
                                            to={link.to}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="text-center pb-4">
                        <p className="text-white pb-5">
                            <FontAwesomeIcon icon={faUser} className="pe-1" /> Nombre Usuario</p>
                        <Link to="/" className="btn btn-primary w-50">
                            Cerrar sesión
                        </Link>
                    </div>
                </div>
            </div>
        </nav>    
    );
};
