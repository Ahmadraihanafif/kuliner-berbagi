// import '../dist/css/UserProfile.css';
import pengguna from "../assets/profil/pengguna.png";
import coin from "../assets/profil/coin.png";
import person from "../assets/profil/person.png";
import box from "../assets/profil/box.png";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div className="userProfil">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-3">
            <h1>Profil Pengguna</h1>
            <img src={pengguna} alt="" />
          </div>
          <div
            className="col align-self-center "
            style={{ marginBottom: "0%" }}
          >
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
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="mt-4"
              >
                <img src={coin} alt="Coins" style={{ marginRight: "1%" }} />
                <strong>500</strong>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ paddingTop: "5%" }}>
        <div className="row align-items-start">
          <div className="col-2">
            <a href="/UserProfile">
              <img src={person} alt="Tentang" />
              <span style={{ color: "black" }}>Tentang</span>
            </a>
          </div>
          <div className="col-2">
            <a href="/Profil">
              <img src={box} alt="Penghargaan" />
              <str style={{ color: "black" }}>Penghargaan</str>
            </a>
          </div>
          <div className="col-2 mb-2">
            <Link to="/Login">
              <button className="btn btn-danger">Log out</button>
            </Link>
          </div>
          <hr className="custom-hr" />
        </div>

        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col-2">
              <p>No Telepon </p>
              <p>Alamat </p>
              <p>Pekerjaan </p>
              <p>Email </p>
            </div>
            <div className="col-1">
              <p>08129837568 </p>
              <p>Surabaya</p>
              <p>Mahasiwa</p>
              <p>selviaputri@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
