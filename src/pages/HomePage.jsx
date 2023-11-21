import { Container, Row, Col } from "react-bootstrap";
import HeroImg from "../assets/bekakak.png";
import PetaId from "../assets/peta.png";

import { kelasTerbaru, dataSwiper } from "../data/index";

import { Swiper, SwiperSlide } from "swiper/react";

// import {
//   MDBCarousel,
//   MDBCarouselItem,
//   MDBCarouselCaption,
// } from "mdb-react-ui-kit";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const HomePage = () => {
  return (
    <div className="homepage">
      {/* <div>
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1}>
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              className="d-block w-100"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              className="d-block w-100"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={3}>
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              className="d-block w-100"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel>
      </div> */}
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box pt-lg-5">
            <Col className="pt-5">
              <h1 className="mb-4 ">
                Kuliner Berbagi
                <br />
                <span>Ayam Bekakak</span>
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cupiditate officiis, fugit optio obcaecati dolore inventore
                saepe nisi sint. Cupiditate in iure suscipit esse unde a, enim
                at ullam asperiores.
              </p>
              <button className="btn btn-outline-danger btn-lg rounded-1 me-2">
                Cek Selengkapnya
              </button>
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
              <button className="btn btn-outline-danger btn-lg rounded-1 me-2">
                Cek Selengkapnya
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="top10">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Top 10 Reviewers</h1>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
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
                  {/* <div className="ket d-flex justify-content-between align-items-center px-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {kelas.buy}
                    </button>
                  </div> */}
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

export default HomePage;
