import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/semuaKelas";
import { Link } from "react-router-dom";

const Mitra = () => {
  return (
    <div className="mitra">
      <Container>
        <Row>
          <Col>
            <h2 className="fw-bold text-start">Rekomendasi Rumah Makan</h2>
            <p className="text-start">
              Dengan adanya fitur <span className="fw-bold">Kemitraan</span>,
              kami memudahkan food vlogger untuk dapat berkolaborasi bersama
              pelaku bisnis rumah makan dengan mudah. Dapatkan rekomendasi
              berdasarkan preferensi Anda, lihat portofolio rumah makan, baca
              ulasan, dan hubungi mereka dengan mudah. Jadikan kolaborasi
              kuliner Anda lebih menyenangkan dan sukses!
            </p>
          </Col>
        </Row>
        <Row>
          {semuaKelas.map((kelas) => {
            return (
              <Col
                key={kelas.id}
                className="shadow rouded"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay={kelas.delay}
              >
                <img
                  src={kelas.image}
                  alt="unsplash.com"
                  className="w-100 mb-5 rounded-top"
                />

                <h5 className="mb-5 px-3">{kelas.title}</h5>

                <div className="star mb-2 px-3">
                  <i className={kelas.star1}></i>
                  <i className={kelas.star2}></i>
                  <i className={kelas.star3}></i>
                  <i className={kelas.star4}></i>
                  <i className={kelas.star5}></i>
                </div>

                <div className="ket d-flex justify-content-between align-items-center px-3">
                  <p className="m-0 text-secondary fw-bold">{kelas.price}</p>
                  <Link to="/SelengkapnyaMitra">
                    <button className="btn btn-warning rounded-1 mb-2">
                      {kelas.buy}
                    </button>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Mitra;
