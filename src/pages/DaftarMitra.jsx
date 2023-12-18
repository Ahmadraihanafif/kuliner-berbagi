import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

function DaftarMitra () {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleClick = () => {
    Swal.fire({
      title: "Permintaan anda berhasil dikirim!",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/DaftarMitra");
      }
    });
  };

  return (
    <div className="DaftarMitra">
      <Container>
        <Row>
          <Col>
            <h2 className="fw-bold text-start">Daftar Kemitraan</h2>
            <Tabs defaultActiveKey="persyaratan" id="uncontrolled-tab-example" className="mb-3" >

              <Tab eventKey="persyaratan" title="Persyaratan" >
                <p>
                  Baca persyaratan sebelum mendaftarkan diri Anda untuk
                  berkolaborasi dengan rumah makan yang sudah Anda pilih
                  sebelumnya!
                </p>
                <ul>
                  <li>
                    Makanan yang dapat direview merupakan makanan yang sudah
                    dipilih oleh pihak restoran.
                  </li>
                  <li>
                    Jika ada beberapa makanan yang tidak bisa Anda makan, Anda
                    bisa konfirmasi kembali ke pihak restoran untuk mengganti
                    menu.
                  </li>
                  <li>
                    Restoran akan segera konfirmasi pergantian menu sebelum
                    tanggal kedatangan Anda.
                  </li>
                  <li>
                    Makanan yang dipilih pihak restoran diberikan secara gratis,
                    untuk sekali datang saat mereview makanan. Kedatangan
                    selanjutnya sudah tidak gratis walaupun Anda membuat konten
                    video untuk review makanannya kembali.
                  </li>
                  <li>
                    Tanggal kedatangan Anda adalah satu minggu setelah pihak
                    restoran acc kolaborasi Anda.
                  </li>
                  <li>
                    Dipastikan di tanggal kedatangan, Anda diperkenankan untuk
                    menemui pemilik rumah makan atau staf dengan jabatan
                    tertinggi di rumah makan terlebih dahulu.
                  </li>
                  <li>
                    Durasi pembuatan konten di reels Instagram minimal 3 menit
                    dan di youtube minimal 7 menit.
                  </li>
                </ul>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Saya setuju atas persyaratan yang CariMakan berikan untuk berkolaborasi dengan rumah makan yang telah saya pilih. "
          feedback="Centang apabila setuju."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button variant="outline-warning" type="submit">Berikutnya</Button>
    </Form>
     </Tab>

              <Tab eventKey="datadiri" title="Isi Data Diri">
                <h5>Lengkapi data diri Anda</h5>
            
                <Form>
                  <Row className="mb-1 pt-3">
                    <Col>
                      <Form.Group controlId="formGridEmail">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="email" placeholder="Masukkan nama lengkap anda" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="password" placeholder="Masukkan email anda" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formGridNama">
                        <Form.Label>Instagram</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan username instagram anda" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formGridNomorTelepon">
                        <Form.Label>Youtube</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Masukkan akun channel youtube anda"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                <Button variant="outline-warning" type="submit" onClick={() => handleClick()}
                >
                  Kirim
                  
                </Button>
                
                </Form>
              </Tab>
              </Tabs>
         
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DaftarMitra;