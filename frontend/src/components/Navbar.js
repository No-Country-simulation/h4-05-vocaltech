import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

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
              <Nav.Link as={Link} to="/" className="text-white me-4">
                Nuestra alianza
              </Nav.Link>{" "}
              {/* Use Link for React Router */}
              <Nav.Link as={Link} to="#action2" className="text-white me-4">
                Empresas
              </Nav.Link>
              <Nav.Link as={Link} to="#action2" className="text-white">
                Emprendedores
              </Nav.Link>
              {/* <NavDropdown title={<span style={{ color: 'white' }}>Diagnósticos</span>} id="offcanvasNavbarDropdown" menuVariant="dark">
                <NavDropdown.Item className="text-white" href="#action3">Emprendedores</NavDropdown.Item>
                <NavDropdown.Item className="text-white" href="#action4">
                  Empresas
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <div className="d-flex">
              <Button className="me-3" variant="outline-light">
                Contacto
              </Button>
              <Button variant="outline-info">Agenda cita</Button>
            </div> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
