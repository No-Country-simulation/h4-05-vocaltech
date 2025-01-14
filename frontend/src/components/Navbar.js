import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { navLinks } from "../utils/navLinks";

export const NavbarVocalTech = () => {
    return (
        <Navbar expand="sm" className="bg-dark mb-3 sticky-top">
            <Container className="mx-3" fluid>
                <Navbar.Brand className="text-white" href="#">VocalTech</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                            {
                                navLinks.map((link, index) => (
                                    <Nav.Link as={Link} to={link.to} className="text-white" key={index}>
                                        {link.label}
                                    </Nav.Link>
                                ))
                            }
                        </Nav>
                        <div className="d-flex">
                            <Button className="me-3" variant="outline-light">Contacto</Button>
                            <Button variant="outline-info">Agenda cita</Button>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};
