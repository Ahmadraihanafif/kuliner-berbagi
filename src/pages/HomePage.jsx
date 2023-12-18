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
import { semuaKelas } from "../data/semuaKelas";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box pt-lg-3">
            <Col className="pt-1">
              <div className="mb-4">
                <h1>
                  Jelajahi Kekayaan Rasa <br />
                  Tanah Air
                </h1>
              </div>
              <p className="mb-2">
                Eksplorasi keberagaman Kuliner Nusantara dengan cita rasa
                Indonesia yang kaya akan rempah - rempah melalui ratusan rasa
                autentik yang menggoda selera Anda!.
              </p>
              <a href="/Search">
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
              <h1 className="mb-4">
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
              {makanan.map((semuaKelas) => {
                return (
                  <SwiperSlide key={semuaKelas.id} className="shadow-rounded">
                    <img
                      src={semuaKelas.image}
                      alt="unsplash.com"
                      className="w-100 mb-3 rounded-top rounded-bottom"
                    />
                    <h5 className="mb-2 px-3">{semuaKelas.title}</h5>
                    <h6 className="mb-2 px-3">{semuaKelas.desc}</h6>
                    <p className="mb-3 px-3">{semuaKelas.ulasan}</p>
                    <div className="button justify-content-between align-items-center mx-4 px-5">
                      <a href="/Selengkapnya">
                        <button className="btn btn-outline-warning rounded-15 mb-2">
                          {semuaKelas.buy}
                        </button>
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>


      <div className="review">
        <Container data-aos="fade-down">
          <Row>
            <Col>
              <h5 className="text-center text-warning">Ulasan</h5>
              <h3 className="text-center fw-bold">
                Pecinta Kuliner
              </h3>
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
              {dataSwiper.map((data,kelas)=> {
                return (
                  <SwiperSlide key={data.id} className="shadow-rounded">
                     <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                      <h5 className="mb-2 mx-3">{data.name}</h5>
                      <h6 className="mb-2 mx-3">{data.skill}</h6>
                      <p className="desc mx-3">{data.desc}</p>
                          <div className="star mb-2 px-3"> 
                            <i className={kelas.star1}></i>
                            <i className={kelas.star2}></i>
                            <i className={kelas.star3}></i>
                            <i className={kelas.star4}></i>
                            <i className={kelas.star5}></i>
                          </div>
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

export default HomePage;
