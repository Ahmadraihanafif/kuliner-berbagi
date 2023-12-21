import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../assets/profil/logo.png";
import FB from "../assets/Fb.png";
import google from "../assets/google.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setvalues({ ...values, [event.target.name]: [event.target.values] });
  };
  const handleClick = () => {
    Swal.fire({
      title: "Register Successful!",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/");
      }
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/signup", values)
      .then((res) => console.log("Berhasill...."))
      .catch((err) => console.log(err));
  };
  return (
    <div className="register">
      <Container>
        <Row
          className="d-flex justify-content-center"
          style={{ height: "100vh" }}
        >
          <Col
            md={4}
            className="rounded p-3  "
            style={{ backgroundColor: "#f6f6f6  " }}
          >
            {/* Logo */}
            <div className="text-center mb-4">
              <img src={logo} alt="Logo" height="100" />
              <h4>Cari Makan</h4>
            </div>

            {/* Register Form */}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  name="nama"
                  onChange={handleChange}
                  placeholder="Masukkan Nama"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Masukkan Email"
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Kata Sandi</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Masukkan Kata Sandi"
                />
              </Form.Group>

              {/* <Form.Group controlId="formConfirmPassword">
                <Form.Label>Konfirmasi Kata Sandi</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukkan Ulang Kata Sandi"
                />
              </Form.Group> */}

              <Link to="/Login">
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
