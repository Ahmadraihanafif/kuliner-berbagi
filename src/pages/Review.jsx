import "../dist/css/review.css";
import makanan3 from "../assets/selengkapnya/makanan3.png";
import gambar from "../assets/selengkapnya/gambar.png";
import koin from "../assets/selengkapnya/koin.png";

import { useState } from "react";

function Review() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    textareaValue: "",
  });

  const handleTextareaChange = (e) => {
    setFormData({
      ...formData,
      textareaValue: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="container">
      <span className="bold-text">Review</span>
      <span className="arrow-left">&#x2190;</span>
      <div className="text-center mt-5">
        <div className="row align-items-start">
          <div className="col">
            <div className="mkn">
              <img src={makanan3} alt="Ayam Bekakak" className="imageStyle" />
              <p className="custom-text textStyle">Ayam Bakar Bang jen</p>
              <div className="star-rating starRatingStyle">
                <p style={{ marginLeft: "-8%", marginTop: "10%" }}>Ranting</p>
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
                <p style={{ marginLeft: "-8%" }}>Ulusan</p>
                <div>
                  <form onSubmit={handleSubmit} style={{ marginLeft: "25%" }}>
                    <textarea
                      value={formData.textareaValue}
                      onChange={handleTextareaChange}
                      placeholder="Masukkan teks di sini"
                      rows={4}
                      cols={50}
                    />
                    <br />
                  </form>
                  <div className="container d-flex justify-content-center align-items-center vh-100">
                    <button
                      type="button"
                      className="btn btn-warning custom-btn text-white"
                      onClick={togglePopup}
                      style={{ marginTop: "-73%", marginLeft: "140%" }}
                    >
                      Kirim
                    </button>

                    {showPopup && (
                      <div
                        className="modal"
                        tabIndex="-1"
                        role="dialog"
                        style={{ display: "block" }}
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div
                              className="modal-header"
                              style={{ background: "orange" }}
                            >
                              <img src={gambar} alt="" className="tengah" />
                            </div>
                            <div className="modal-body">
                              <img src={koin} className="koin" />
                            </div>
                            <div className="text">
                              <h3>Terimakasih Selvia Putri</h3>
                            </div>
                            <div style={{ marginTop: "1%", marginLeft: "1 %" }}>
                              <p style={{ fontSize: "20px" }}>
                                Selamat Selvia Putri anda berhak <br />{" "}
                                mendapatkan 50 koin atas dukungan <br /> anda
                                dalam menikmati kelezatan cita <br />
                                rasa kuliner tanah air melalui ulasan <br />{" "}
                                anda !
                              </p>
                            </div>
                            <button
                              type="button"
                              className="btn btn-warning custom-btn text-white"
                              onClick={togglePopup}
                            >
                              Dapatkan
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
