import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DashSelect } from "./DashSelect";
import { sidebarLinks } from "../../utils/sidebarLinks";

export const Sidebar = () => {   
    return (
        <div className="d-md-flex d-none bg-white shadow-md">
            <div className="sidebar">
                <div className="pt-5">
                    <div className="pt-5 pb-4">
                        <DashSelect />
                    </div>
                    <ul className="navbar-nav">
                        {
                            sidebarLinks.map((link, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link sidebar-link" 
                                        to={link.to}>
                                        <FontAwesomeIcon icon={link.icon} className="pe-2" /> {link.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};
