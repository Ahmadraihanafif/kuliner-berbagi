import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            Kuliner
          </Navbar.Brand>
          <Navbar.Toggle aria-aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Beranda</Nav.Link>
              <Nav.Link href="#">Tentang</Nav.Link>
              <Nav.Link href="#pricing">Kemintraan</Nav.Link>
            </Nav>
            <div>
              <i className="bi bi-search"></i>
              <i className="bi bi-person"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
