import { Link } from "react-router-dom";
import { navLinks } from "../utils/navLinks";
import "../styles/navbar.css"

export const NavbarVocalTech = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark navbar-bg sticky-top">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">
                    <strong>V</strong>ocal<strong>T</strong>ech
                </Link>
                <button
                    className="navbar-toggler text-white border-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end navbar-bg"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header navbar-bg">
                        <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">
                            <strong>V</strong>ocal<strong>T</strong>ech
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">
                        </button>
                    </div>
                    <div className="offcanvas-body navbar-bg">
                        <ul className="navbar-nav justify-content-end flex-grow-1">
                            {
                                navLinks.map((link, index) => (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link text-white ms-4" to={link.to}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>    
    );
};
