import { useState, useEffect } from "react";

import { Container, Navbar, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Userr from "../assets/user.png";
const NavbarComponent = () => {
  const [change, setChange] = useState(false);

  const changeBackgroud = () => {
    if (window.scrollY > 10) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  useEffect(() => {
    changeBackgroud();

    window.addEventListener("scroll", changeBackgroud);
  });

  return (
    <div className="navbarcomponent">
      <Navbar expand="lg" className={change ? "color-aktif" : ""}>
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold">
            Kuliner
          </Navbar.Brand>
          <Navbar.Toggle aria-aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/">Tentang</Nav.Link>
              <Nav.Link href="/Mitra">Kemintraan</Nav.Link>
            </Nav>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <a href="">
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
