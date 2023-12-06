import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { makanan } from "../data/makanan";

const Search = () => {
  const [selectedIslands, setSelectedIslands] = useState([]);
  const [selectedProvinces, setSelectedProvinces] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedHarga, setSelectedHarga] = useState([]);
  const [selectedJarak, setSelectedJarak] = useState([]);

  const islands = ["Jawa", "Sumatera", "Kalimantan", "Sulawesi", "Papua"];
  const provinces = [
    "DKI Jakarta",
    "Jawa Barat",
    "Jawa Tengah",
    "Sumatera Utara",
    "Kalimantan Barat",
  ];
  const cities = ["Jakarta", "Bandung", "Surabaya", "Medan", "Pontianak"];
  const harga = [
    "Paket Hemat",
    "Paket Keluarga",
    "Rp.50.000 ke Bawah",
    "Rp.50.000 ke Atas",
  ];
  const jarak = ["0 - 5 Km", "5 - 10 km", "10 - 50 Km", "Dalam Kota"];

  const handleIslandChange = (island) => {
    const updatedIslands = selectedIslands.includes(island)
      ? selectedIslands.filter((selected) => selected !== island)
      : [...selectedIslands, island];
    setSelectedIslands(updatedIslands);
  };

  const handleProvinceChange = (province) => {
    const updatedProvinces = selectedProvinces.includes(province)
      ? selectedProvinces.filter((selected) => selected !== province)
      : [...selectedProvinces, province];
    setSelectedProvinces(updatedProvinces);
  };

  const handleCityChange = (city) => {
    const updatedCities = selectedCities.includes(city)
      ? selectedCities.filter((selected) => selected !== city)
      : [...selectedCities, city];
    setSelectedCities(updatedCities);
  };
  const handleHargaChange = (harga) => {
    const updatedHarga = selectedHarga.includes(harga)
      ? selectedHarga.filter((selected) => selected !== harga)
      : [...selectedHarga, harga];
    setSelectedHarga(updatedHarga);
  };
  const handleJarakChange = (jarak) => {
    const updatedJarak = selectedJarak.includes(jarak)
      ? selectedJarak.filter((selected) => selected !== jarak)
      : [...selectedJarak, jarak];
    setSelectedJarak(updatedJarak);
  };

  return (
    <Container className="Search">
      <Row>
        <Col xs={3}>
          <Form.Group>
            <Form.Label>
              <h4>Pulau</h4>
            </Form.Label>
            {islands.map((island) => (
              <Form.Check
                key={island}
                type="checkbox"
                label={island}
                checked={selectedIslands.includes(island)}
                onChange={() => handleIslandChange(island)}
              />
            ))}
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <h4>Provinsi</h4>
            </Form.Label>
            {provinces.map((province) => (
              <Form.Check
                key={province}
                type="checkbox"
                label={province}
                checked={selectedProvinces.includes(province)}
                onChange={() => handleProvinceChange(province)}
              />
            ))}
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <h4>Kota</h4>
            </Form.Label>
            {cities.map((city) => (
              <Form.Check
                key={city}
                type="checkbox"
                label={city}
                checked={selectedCities.includes(city)}
                onChange={() => handleCityChange(city)}
              />
            ))}
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <h4>Harga</h4>
            </Form.Label>
            {harga.map((harga) => (
              <Form.Check
                key={harga}
                type="checkbox"
                label={harga}
                checked={selectedHarga.includes(harga)}
                onChange={() => handleHargaChange(harga)}
              />
            ))}
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <h4>Jarak</h4>
            </Form.Label>
            {jarak.map((jarak) => (
              <Form.Check
                key={jarak}
                type="checkbox"
                label={jarak}
                checked={selectedJarak.includes(jarak)}
                onChange={() => handleJarakChange(jarak)}
              />
            ))}
          </Form.Group>
        </Col>
        <Col xs={9}>
          <Row>
            {makanan.map((kelas) => {
              return (
                <Col
                  key={kelas.id}
                  className="Lol shadow rounded mw-100 "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-1 p-1 rounded-top "
                  />
                  <div className=" star px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-1 px-3">{kelas.title}</h5>
                  <span className="mb-2 text-start">{kelas.desc}</span>
                  <div className="ket d-flex justify-content-between align-items-center px-3">
                    <a href="">
                      <button className="btn btn-warning rounded-1 mb-2 mt-3">
                        {kelas.buy}
                      </button>
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
