import { Link } from "react-router-dom";
import { DashSelect } from "./DashSelect";
import { useAuth } from "../../contexts/Auth";
import { sidebarLinks } from "../../utils/sidebarLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
    const { user, logout } = useAuth();
    console.log(user)
    
    return (
        <div className="d-md-flex d-none ">
            <div
                className="sidebar bg-dark text-white" 
                style={{position: 'relative', top: 0, left: 0, height: '100vh', 
                width: '300px', padding: '20px 40px', display: 'flex', flexDirection: 'column', 
                justifyContent: 'space-between'}}>
                <div>
                    <h5 className="pb-">Logo</h5>
                    <div className="py-4 py-lg-5">
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
                <div className="text-center mt-auto pb-1">
                    <p className="text-white pb-2">
                        <FontAwesomeIcon icon={faUser} className="pe-1" /> {user?.userInfo.fullname}
                    </p>
                    <button onClick={logout} className="btn btn-primary w-100">Cerrar sesión</button>
                </div>
            </div>
        </div>
    );
};
