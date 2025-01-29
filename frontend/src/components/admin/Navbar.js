import { Link } from "react-router-dom";
import { DashSelect } from "./DashSelect";
import { useAuth } from "../../contexts/Auth";
import { sidebarLinks } from "../../utils/sidebarLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../../styles/navbar.css";

export const Navbar = () => {
    const { user, logout } = useAuth();
 
    return (
        <nav className="navbar navbar-dark navbar-bg sticky-top d-md-none py-3">
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
                    className="offcanvas offcanvas-start navbar-bg"
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
                        <p className="text-white pb-3">
                            <FontAwesomeIcon icon={faUser} className="pe-1" /> {user?.userInfo.fullname}
                        </p>
                        <button onClick={logout} className="btn btn-logout rounded-pill w-75">
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>
        </nav>    
    );
};
