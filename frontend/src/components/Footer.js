import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { socialLinks } from "../utils/socialLinks";
import "../styles/navbar.css"

export const FooterVocalTech = () => {
    return (
        <footer className="footer-bg py-4">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4 pb-5 pb-md-0 text-center text-md-start">
                        <Link className="navbar-brand text-white fs-2" to="/">
                            <strong>V</strong>ocal<strong>T</strong>ech
                        </Link>
                    </div>
                    <div className="col-md-4 d-none d-md-block text-center">
                        <small className="text-white">&copy;2024 - VocalTech. Derechos reservados.</small>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0">
                        {
                            socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-footer rounded-circle d-flex justify-content-center 
                                    align-items-center mx-2 mx-md-0 ms-md-2"
                                    style={{ width: '40px', height: '40px' }}>
                                    <FontAwesomeIcon icon={link.icon} />
                                </a>
                            ))
                        }
                    </div>
                    <div className="d-md-none text-center">
                        <small className="text-white">&copy;2024 - VocalTech. Derechos reservados.</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};
