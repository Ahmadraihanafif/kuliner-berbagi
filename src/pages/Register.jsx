import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../assets/profil/logo.png";
import FB from "../assets/Fb.png";
import google from "../assets/google.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Register = () => {
  const handleClick = () => {
    Swal.fire({
      title: "Login Successful!",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/");
      }
    });
  };
  return (
    <div className="register">
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Col
            md={4}
            className="rounded p-3"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            {/* Logo */}
            <div className="text-center mb-4">
              <img src={logo} alt="Logo" height="100" />
            </div>

            {/* Register Form */}
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Link to="/">
                <Button
                  type="submit"
                  className="w-100 mt-3 btn btn-warning"
                  onClick={() => handleClick()}
                >
                  Daftar
                </Button>
              </Link>
            </Form>

            {/* Social Login */}
            <div className="text-center mt-3">
              <Button variant="outline-dark" className="mr-2 mb-2">
                <img src={google} alt="Google" height="20" className="mr-2" />
                Register with Google
              </Button>
              <Button variant="outline-primary">
                <img src={FB} alt="Facebook" height="20" className="mr-2" />
                Register with Facebook
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
