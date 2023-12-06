import { Container, Navbar, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Userr from "../assets/user.png";

import Logo from "../assets/logo.png";

const NavbarComponent = () => {
  return (
    <div className="navbarcomponent">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className="w-25" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/Mitra">Kemintraan</Nav.Link>
            </Nav>
            <Form inline>
              <Row>
                <Col xs="auto">
                  {/* <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  /> */}
                  {/* <a href="/Search">
                    <img src={Search} alt="" />
                  </a> */}
                </Col>
                <Col xs="auto">
                  <a href="/Profil">
                    <img src={Userr}></img>
                  </a>
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
