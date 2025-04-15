import { Link } from "react-router-dom";
import { DashSelect } from "./DashSelect";
import { useAuth } from "../../contexts/Auth";
import { sidebarLinks } from "../../utils/sidebarLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import "../../styles/navbar.css";

export const Navbar = () => {
    const { user, logout } = useAuth();
 
    return (
        <nav className="navbar bg-white sticky-top d-md-none py-4 shadow-md">
            <div className="container">
                <img src="./images/logos/vocaltech-logo.png" width={150} alt="Vocaltech logo"/>
                <FontAwesomeIcon icon={faCircleUser} className="mx-auto me-0 fs-2 text-gray" /> 
                <button
                    className="navbar-toggler text-white border-0 p-0 ps-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header py-4">
                        <p className="mb-0 d-flex align-items-center fw-semibold text-black">
                            <FontAwesomeIcon icon={faCircleUser} className="pe-2 fs-2" /> {user?.userInfo.fullname}
                        </p>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">
                        </button>
                    </div>
                    <div className="offcanvas-body pt-0">
                        <div className="pb-3">
                            <DashSelect />
                        </div>
                        <ul className="navbar-nav">
                            {
                                sidebarLinks.map((link, index) => (

                                    <li className="nav-item" data-bs-dismiss="offcanvas" key={index} >
                                        <Link className="nav-link" 
                                            to={link.to}>
                                            <FontAwesomeIcon icon={link.icon} className="pe-2" /> {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="pb-3 px-3">
                        <button onClick={logout} className="btn btn-general text-white 
                            btn-lightblue-personalized">
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>
        </nav>    
    );
};
