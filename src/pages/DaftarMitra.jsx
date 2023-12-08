import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';



function DaftarMitra () {
  const [checked, setChecked] = useState(false);
    return (
        <div className="DaftarMitra">
          <Container>
            <Row>
              <Col>
                <h2 className="fw-bold text-start">Daftar Kemitraan</h2>
               
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">

                  <Tab eventKey="persyaratan" title="Persyaratan"> 
                  Baca persyaratan sebelum mendaftarkan diri anda untuk berkolaborasi dengan rumah makan yang sudah anda pilih sebelumnya!
                  1. Makanan yang dapat direview merupakan makanan yang sudah dipilih oleh pihak restoran.
                  2. JIka ada beberapa makanan yang tidak bisa anda makan, anda bisa konfirmasi kembali ke pihak restoran untuk mengganti menu.
                  3. Restoran akan segera konfirmasi pergantian menu sebelum tanggal kedatangan anda.
                  4. Makanan yang dipilih pihak restoran diberikan secara gratis, untuk sekali datang saat mereview makanan. Kedatangan selanjutnya sudah tidak gratis walaupun anda membuat konten video untuk review makanannya kembali.
                  5. Tanggal kedatangan anda adalah satu minggu setelah pihak restoran acc kolaborasi anda.
                  6. Dipastikan di tanggal kedatangan, anda diperkenankan untuk menemui pemilik rumah makan atau staf dengan jabatan tertinggi di rumah makan terlebih dahulu.
                  7. Durasi pembuatan konten di reels Instagram minimal 3 menit dan di youtube minimal 7 menit.

<Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Saya setuju atas persyaratan yang CariMakan berikan untuk berkolaborasi dengan rumah makan yang telah saya pilih. " />
      </Form.Group>

                  </Tab>

                  <Tab eventKey="datadiri" title="Isi Data Diri">
                    <h5> Lengkapi data diri anda</h5>
                    
                    <Form>
                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
                    </Form>
                  </Tab>
      
                </Tabs>
                
         
                <Button variant="outline-warning">Kirim</Button>{' '}
                
    
  
              
             </Col>
            </Row>
           
          </Container>
        </div>
    );
    
 
      
    }

  export default DaftarMitra;