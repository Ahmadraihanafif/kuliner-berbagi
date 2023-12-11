import "../dist/css/profil.css";
import pengguna from "../assets/profil/pengguna.png";
import coin from "../assets/profil/coin.png";
import person from "../assets/profil/person.png";
import box from "../assets/profil/box.png";
import makanan1 from "../assets/profil/makanan1.png";
import makanan2 from "../assets/profil/makanan2.png";
import makanan3 from "../assets/profil/makanan3.png";
import makanan4 from "../assets/profil/makanan4.png";

function Profil() {
  return (
    <div>
      <div className="container ">
        <div className="row align-items-start pt-5">
          <div className="col-3">
            <h2>Profil Pengguna</h2>
            <img src={pengguna} alt="" />
          </div>
          <div className="col align-self-center" style={{ marginBottom: "1%" }}>
            <h1>Selvia Putri</h1>
            <h2>Mahasiswa</h2>
            <p>Aktivitas</p>
            4.5
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            (10)
            <p>
              <img src={coin} alt="Coins" />
              <strong>500</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center" style={{ paddingTop: "5%" }}>
        <div className="row align-items-start">
          <div className="col-2">
            <img src={person} alt="Tentang" />
            Tentang
          </div>
          <div className="col-2">
            <img src={box} alt="Penghargaan" />
            <strong> Penghargaan</strong>
          </div>
          <hr className="custom-hr" />
        </div>
      </div>

      <div className="container text-left">
        <div className="row align-items-start">
          <div className="col-">
            <h3 className="claim-title">Klaim Hadiah Anda Sekarang!</h3>
            <p className="claim-text">
              Kini saatnya untuk meraih hadiah yang telah Anda tunggu.Klaim
              sekarang dan nikmati
              <br />
              manfaat eksklusif yang telah Anda raih. Jangan lewatkan kesempatan
              ini!
            </p>
          </div>
        </div>

        <div className="cards-container">
          <div className="card" style={{ width: "18rem" }}>
            <img src={makanan1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p>Voucher Diskon </p>
              <h5 className="card-title">Itiak Lado Mudo 20%</h5>
              <p className="card-text">Klaim voucher ini dengan 50 koin! </p>
              <a href="#" className="btn btn-primary">
                Klaim
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={makanan2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p>Voucher Diskon </p>
              <h5 className="card-title">Ikan Asam Padeh 8%</h5>
              <p className="card-text">Klaim voucher ini dengan 20 koin! </p>
              <a href="#" className="btn btn-primary">
                Klaim
              </a>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
}

export default Profil;
