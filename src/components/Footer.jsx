import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="8">
            <h3 className="fw-bold ">Kuliner</h3>
            <p className="desc">
              Eksplorasi keberagaman Kuliner Nusantara dengan cita rasa
              Indonesia <br />
              yang kaya akan rempah - rempah melalui ratusan rasa autentik yang
              menggoda selera Anda!.
            </p>
            <div className="email mt-4">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">kuliner.indonesia@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-3">
            <h5 className="fw-bold mb-3">Follow untuk info selanjutnya</h5>
            <div className="sosial mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by
              <span className="fw-bold"> Kuliner indonesia</span>, All Right
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
