import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavbarVocalTech = () => {
  return (
    <Navbar expand="sm" className="bg-dark mb-3 sticky-top">
      <Container className="mx-3" fluid>
        <Navbar.Brand className="text-white" href="#">VocalTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/" className="text-white">
                Inicio
              </Nav.Link>{" "}
              {/* Use Link for React Router */}
              <Nav.Link as={Link} to="#action2" className="text-white">
                Emprendedores
              </Nav.Link>
              <Nav.Link as={Link} to="#action2" className="text-white">
                Empresas
              </Nav.Link>
              <NavDropdown title={<span style={{ color: 'white' }}>Diagnósticos</span>} id="offcanvasNavbarDropdown" menuVariant="dark">
                <NavDropdown.Item className="text-white" href="#action3">Emprendedores</NavDropdown.Item>
                <NavDropdown.Item className="text-white" href="#action4">
                  Empresas
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex">
              <Button className="me-3" variant="outline-light">
                Contacto
              </Button>
              <Button variant="outline-info">Agenda cita</Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
