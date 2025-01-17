import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
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
              <Nav.Link as={Link} to="/" className="navbar-menu-item text-white me-4">
                Nuestra alianza
              </Nav.Link>{" "}
              {/* Use Link for React Router */}
              <Nav.Link as={Link} to="#action2" className="navbar-menu-item text-white me-4">
                Empresas
              </Nav.Link>
              <Nav.Link as={Link} to="#action2" className="navbar-menu-item text-white me-4">
                Emprendedores
              </Nav.Link>
              <Nav.Link as={Link} to="#action3" className="navbar-menu-item text-white">
                Diagnóstico
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
