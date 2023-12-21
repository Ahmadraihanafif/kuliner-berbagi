import { Container, Row, Col } from "react-bootstrap";
import mitra1 from "../assets/img/kelas/kelas-4.jpg";
import { mitra } from "../data/mitra";
import { Link } from "react-router-dom";

const SelengkapnyaMitra = () => {
  return (
    <div className="SelMitra">
      <Container>
        <Row>
          <Col xs={5}>
            <h4>Pongek Or</h4>
            <img className="w-100 p-3 shadow rouded" src={mitra1} alt="" />
          </Col>
          <Col xs={4}>
            <h5 className="fw-bold pt-5">Informasi Rumah Makan</h5>
            <div className="d-flex flex-column">
              <p>Alamat : Jl. Khatib Sulaiman , Payakumbuh</p>
              <p>Telepon : 0821 5670 4323 </p>
              <p>Buka : 08.00 - 16.00 (senin-jum’at)</p>
              <p>Harga : Mulai dari Rp3000 - Rp150000</p>
              <p>Mitra : 8</p>
            </div>
          </Col>
          <Col xs={3}>
            <div className="text-center pt-5">
              <p className="rating d-flex justify-content-center">4.5</p>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <p>10 Ulasan</p>
              <Link to="/DaftarMitra">
                <button className="btn btn-outline-warning btn-lg rounded-18 ">
                  Daftar Mitra
                </button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={9}>
            <h3 className="fw-bold">Deskripsi</h3>
            <p>
              Rumah Makan Pangek Or berda di Jalan Khatib Sulaiman, Limbukan,
              Payakumbuh Selatan, Kota Payakumbuh, Sumatera Barat.Tempat makan
              dengan ukuran yang bisa menampung banyak orang. Area parkirnya pun
              cukup luas. Selain itu ada juga kolam – kolam yang diisi dengan
              ikan mujair.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          {mitra.map((mit) => {
            return (
              <Col
                key={mit.id}
                className="shadow rouded m-3"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay={mit.delay}
              >
                <img
                  src={mit.image}
                  alt="unsplash.com"
                  className="w-100 mb-3 rounded-top"
                />
                <h5 className="mb-1 px-3">{mit.title}</h5>

                <div className="star mb-2 px-3">
                  <i className={mit.star1}></i>
                  <i className={mit.star2}></i>
                  <i className={mit.star3}></i>
                  <i className={mit.star4}></i>
                  <i className={mit.star5}></i>
                </div>

                <p className="m-4 mt-4 text-secondary ">{mit.price}</p>
                <div className="ket d-flex justify-content-between align-items-center px-3">
                  <button className="btn btn-warning rounded-1 mb-2">
                    {mit.buy}
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SelengkapnyaMitra;
