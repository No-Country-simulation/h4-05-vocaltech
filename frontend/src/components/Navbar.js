import { Link } from "react-router-dom";
import { navLinks } from "../utils/navLinks";
import "../styles/navbar.css"

export const Navbar = () => {
    return (
        <div className="d-flex justify-content-center">
            <nav className="navbar navbar-landing navbar-expand-lg position-fixed bg-white shadow-md">
                <div className="container-fluid px-4 px-xl-5">
                    <Link className="navbar-brand py-0" to="/">
                        <img src="./images/logos/vocaltech-logo.png" width={150} alt="Vocaltech logo"/>
                    </Link>
                    <button
                        className="navbar-toggler border-0 p-0"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="offcanvas canvas-landing offcanvas-start"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header canvas-header-landing shadow-sm py-0 px-4 mb-4">
                            <Link className="navbar-brand py-0" to="/">
                                <img src="./images/logos/vocaltech-logo.png" width={150} alt="Vocaltech logo"/>
                            </Link>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close">
                            </button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 align-items-lg-center">
                                {
                                    navLinks.map((link, index) => (
                                        <li className="nav-item" data-bs-dismiss="offcanvas" key={index}>
                                            <Link className="nav-link ms-md-3 mb-2 mb-lg-0" to={link.to}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))
                                }
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <Link to="/diagnostico">
                                        <button className="btn btn-navbar mt-4 mt-lg-0 ms-md-3 px-3 py-2">
                                            Obtener Diagnóstico Gratis
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
