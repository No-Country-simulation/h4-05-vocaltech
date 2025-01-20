import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { navLinks } from "../utils/navLinks";
import "../styles/navbar.css"

export const NavbarVocalTech = () => {
  return (
    <Navbar expand="sm" className="navbar-dark bg-dark sticky-top">
      <Container className="mx-3" fluid>
        <Navbar.Brand className="text-white ms-3" href="#">
          VocalTech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="text-white" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header className="bg-dark" closeButton="btn-close-white">
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">
              VocalTech
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-dark">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {
              navLinks.map((link, index) => (
                   <Nav.Link as={Link} to={link.to} className="text-white" key={index}>
                         {link.label}
                 </Nav.Link>
                                ))
                            }
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
