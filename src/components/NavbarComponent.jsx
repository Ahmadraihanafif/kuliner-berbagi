import { Container, Navbar, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Userr from "../assets/pengguna.png";
import Logo from "../assets/logo.png";

const NavbarComponent = () => {
  return (
    <div className="navbarcomponent">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/Mitra">Kemitraan</Nav.Link>
            </Nav>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <div>
                    <span>Halo, Selvia Putri</span>
                    <a href="/Profil">
                    <img src={Userr} alt ="user profile" style={{ marginLeft: "8px" }}/>
                  </a>
                  </div>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
