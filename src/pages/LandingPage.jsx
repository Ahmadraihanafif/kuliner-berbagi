import { Container, Row, Col } from "react-bootstrap";
import HeroImg from "../assets/nasi.png";
import PetaId from "../assets/peta.png";

import { dataSwiper } from "../data/index";
import { makanan } from "../data/makanan";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const LandingPage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box pt-lg-5">
            <Col className="pt-5">
              <div className="mb-4">
                <h2>
                  Jelajahi Kekayaan Rasa <br />
                  Tanah Air
                </h2>
              </div>
              <p className="mb-2">
                Eksplorasi keberagaman Kuliner Nusantara dengan cita rasa
                Indonesia yang kaya akan rempah - rempah melalui ratusan rasa
                autentik yang menggoda selera Anda!.
              </p>
              <a href="/Register">
                <button className="btn btn-outline-warning btn-lg rounded-18 me-2">
                  Eksplore
                </button>
              </a>
              <Col className="d-flex flex-row bd-highlight mb-0 ">
                <p className="mb-0 fw-bold m-3 ">1052</p>
                <p className="mb-0 fw-bold m-3">1052</p>
                <p className="mb-0 fw-bold m-3">4.7</p>
              </Col>
              <Col className="d-flex m-0">
                <p className="mb-0 m-1 ">Makanan</p>
                <p className="mb-0 m-1">Ulasan</p>
                <p className="mb-0 m-1 ">Rating</p>
              </Col>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImg} alt="" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="peta">
        <Container>
          <Row>
            <Col className="py-5">
              <img src={PetaId} alt="" />
            </Col>
            <Col className="pt-5">
              <h1 className="mb-4 ">
                Bagikan ulasan dan
                <br />
                <span className="fw-bold"> klaim hadiah !</span>
              </h1>
              <p className="mb-4">
                Bagikan ulasan anda dan Raih kesempatan untuk dapatkan hadiah
                menarik! Setiap ulasan yang Anda berikan adalah satu langkah
                lebih dekat untuk mendapatkan penghargaan. Kami sangat
                menghargai kontribusi Anda dalam membantu mitra kami.
              </p>
              <a href="/Ulasan">
                <button className="btn btn-outline-warning btn-lg rounded-1 me-2 ">
                  Review
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="top10">
        <Container>
          <Row>
            <Col>
              <h5 className="text-center text-warning">Kuliner</h5>
              <h3 className="text-center fw-bold">
                Makanan dengan Ulasan Terbanyak
              </h3>
            </Col>
          </Row>
          <Row>
            {makanan.map((kelas) => {
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
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3">
                    <a href="/Selengkapnya">
                      <button className="btn btn-warning rounded-1 mb-4">
                        {kelas.buy}
                      </button>
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div className="review py-5">
        <Container data-aos="fade-down">
          <Row>
            <Col>
              <h2 className="text-center fw-bold my-5">Review</h2>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
