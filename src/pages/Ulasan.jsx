import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const ReviewPage = () => {
  const [reviewData, setReviewData] = useState({
    pulau: "",
    provinsi: "",
    kota: "",
    warungMakan: "",
    menu: "",
    tanggal: "",
    ulasan: "",
    rating: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data Ulasan:", reviewData);
    setReviewData({
      pulau: "",
      provinsi: "",
      kota: "",
      warungMakan: "",
      menu: "",
      tanggal: "",
      ulasan: "",
      rating: 0,
    });
  };

  const [ratings, setRatings] = useState({
    rasaMakanan: 0,
    pelayanan: 0,
    kebersihan: 0,
  });

  const handleRatingChange = (category, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: value,
    }));
  };
  const handleClick = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Terima Kasih",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <Container className="ulasan">
      <Row>
        <Col md={8}>
          <h2 className="fw-bold">Review</h2>
          <p>
            Sudah mencoba hidangan lezat yang kami rekomendasikan? Bagikan
            pengalaman kuliner Anda dengan ulasan Anda! Tulis ulasan Anda
            sekarang dan bantu kami meningkatkan kualitas layanan kami. Ulasan
            Anda sangat berarti bagi kami!
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPulau">
              <Form.Label className="fw-bold">Pulau</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama pulau"
                name="pulau"
                value={reviewData.pulau}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formProvinsi">
              <Form.Label className="fw-bold">Provinsi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama provinsi"
                name="provinsi"
                value={reviewData.provinsi}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formKota">
              <Form.Label className="fw-bold">Kota</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama kota"
                name="kota"
                value={reviewData.kota}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formUlasan">
              <Form.Label className="fw-bold">Ulasan</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Tulis ulasan Anda"
                name="ulasan"
                value={reviewData.ulasan}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button
              type="submit"
              className="mt-3 btn btn-warning"
              onClick={() => handleClick()}
            >
              Kirim Ulasan
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formWarungMakan">
            <Form.Label className="fw-bold">Warung Makan</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama warung makan"
              name="warungMakan"
              value={reviewData.warungMakan}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formMenu">
            <Form.Label className="fw-bold">Menu</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama menu"
              name="menu"
              value={reviewData.menu}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTanggal">
            <Form.Label className="fw-bold">Tanggal</Form.Label>
            <Form.Control
              type="date"
              name="tanggal"
              value={reviewData.tanggal}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="m-3">
            <Form.Group controlId="formRating1" className="ratingUlasan">
              <Form.Label>Rasa Makanan</Form.Label>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <FaStar
                      key={index}
                      className="star"
                      style={{
                        color:
                          ratingValue <= ratings.rasaMakanan
                            ? "#ffc107"
                            : "#e4e5e9",
                      }}
                      onClick={() =>
                        handleRatingChange("rasaMakanan", ratingValue)
                      }
                    />
                  );
                })}
              </div>
            </Form.Group>
          </div>
          <div className="m-3">
            <Form.Group controlId="formRating2" className="ratingUlasan">
              <Form.Label>Pelayanan</Form.Label>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <FaStar
                      key={index}
                      className="star"
                      style={{
                        color:
                          ratingValue <= ratings.pelayanan
                            ? "#ffc107"
                            : "#e4e5e9",
                      }}
                      onClick={() =>
                        handleRatingChange("pelayanan", ratingValue)
                      }
                    />
                  );
                })}
              </div>
            </Form.Group>
          </div>
          <div className="m-3">
            <Form.Group controlId="formRating3" className="ratingUlasan">
              <Form.Label>Kebersihan</Form.Label>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <FaStar
                      key={index}
                      className="star"
                      style={{
                        color:
                          ratingValue <= ratings.kebersihan
                            ? "#ffc107"
                            : "#e4e5e9",
                      }}
                      onClick={() =>
                        handleRatingChange("kebersihan", ratingValue)
                      }
                    />
                  );
                })}
              </div>
            </Form.Group>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewPage;
