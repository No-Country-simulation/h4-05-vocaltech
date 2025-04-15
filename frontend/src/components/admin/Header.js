import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/Auth";
import { Dropdown } from "react-bootstrap"; 
import "../../styles/navbar.css";

export const Header = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar bg-white position-fixed w-100 d-md-flex d-none py-4 shadow-md">
            <div className="container-fluid px-4 px-lg-5">
                <img src="./images/logos/vocaltech-logo.png" width={150} alt="Vocaltech logo"/> 
                <div className="d-flex align-items-center text-black">
                    <p className="mb-0 fw-semibold pe-3 text-black">{user?.userInfo.fullname}</p>
                    <Dropdown align="end"> 
                        <Dropdown.Toggle 
                            variant="link"  
                            id="dropdown-custom-components"
                            className="p-0 fs-5 text-black">
                            <FontAwesomeIcon icon={faCircleUser} className="fs-2 text-black" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={logout} className="text-black">Cerrar sesión</Dropdown.Item>  {/* Acción para cerrar sesión */}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
};
