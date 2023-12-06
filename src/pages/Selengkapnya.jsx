import "../dist/css/selengkapnya.css";
import makanan3 from "../assets/selengkapnya/makanan3.png";
import dolar from "../assets/selengkapnya/dolar.jpg";
import location from "../assets/selengkapnya/location.jpg";
import time from "../assets/selengkapnya/time.png";
import phone from "../assets/selengkapnya/phone.png";
import jam from "../assets/selengkapnya/jam.jpg";
import foto1 from "../assets/selengkapnya/foto1.jpg";

function Selengkanya() {
  return (
    <div className="container ">
      <span className="arrow-left">&#x2190;</span>
      <span className="bold-text">Ayam Bekakak</span>

      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-">
            <div className="mkn">
              <img src={makanan3} alt="Ayam Bekakak" />
              <p className="custom-text">Ayam Bakar</p>
            </div>
          </div>
          <div className="col-">
            <div className="image-container">
              <div>
                <img src={dolar} alt="Dollar Image" />
                <span className="image-text">Rp75000</span>
              </div>
              <div>
                <img src={location} alt="Location Image" />
                <span className="image-text">Grand Cikarang City</span>
              </div>
              <div>
                <img src={time} alt="Time Image" />
                <span className="image-text">08.00 - 16.00</span>
              </div>
              <div>
                <img src={phone} alt="Phone Image" />
                <span className="image-text">0821 5670 4323</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="custom-div">
              <p className="rating">4.5</p>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <p>10 Ulasan</p>
              <input type="submit" value="Review" className="custom-button" />
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-2 colored-text">Ulusan</div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-12">
            <img src={foto1} alt="Nadya" />
            <span className="nadya">Nadya</span>

            <div className="text1">
              <img src={jam} alt="Phone Image" />
              <span className="text">2 minggu yang lalu</span>
            </div>

            <p className="a">
              Bumbunya enak dan juicy daging ayamnya, harganya juga terjangkau.
              <br />
              Tetapi untuk pelayanan nya masih kurang karena agak lama.
            </p>

            <div className="bintang">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-12">
            <img src={foto1} alt="Nadya" />
            <span className="dina">Dina Amira</span>

            <div className="text1">
              <img src={jam} alt="Phone Image" />
              <span className="text">3 minggu yang lalu</span>
            </div>

            <p className="a">
              Jadi ketagihan makan ayam bekakak! Selain emang enak bumbunya dan
              juicy daging ayamnya, harganya itu loh yang terjangkau pake
              banget!.
            </p>

            <div className="bintang">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-12">
            <img src={foto1} alt="Nadya" />
            <span className="nadya">Nadya</span>

            <div className="text1">
              <img src={jam} alt="Phone Image" />
              <span className="text">2 minggu yang lalu</span>
            </div>

            <p className="a">
              Bumbunya enak dan juicy daging ayamnya, harganya juga terjangkau.
              <br />
              Tetapi untuk pelayanan nya masih kurang karena agak lama.
            </p>

            <div className="bintang">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selengkanya;
