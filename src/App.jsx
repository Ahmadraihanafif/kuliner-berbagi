import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Mitra from "./pages/Mitra";
import Search from "./pages/Search";
import UserProfil from "./pages/UserProfil";
import Profil from "./pages/Profil";
import Ulasan from "./pages/Ulasan";
import Review from "./pages/Review";
import DaftarMitra from "./pages/DaftarMitra";
import Selengkapnya from "./pages/Selengkapnya";
import SelengkapnyaMitra from "./pages/SelengkapnyaMitra";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route
        path="/LandingPage"
        element={
          <Layout>
            <LandingPage />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/Mitra"
        element={
          <Layout>
            <Mitra />
          </Layout>
        }
      />

      <Route
        path="/Search"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />
      <Route
        path="/UserProfil"
        element={
          <Layout>
            <UserProfil />
          </Layout>
        }
      />
      <Route
        path="/Profil"
        element={
          <Layout>
            <Profil />
          </Layout>
        }
      />
      <Route
        path="/Ulasan"
        element={
          <Layout>
            <Ulasan />
          </Layout>
        }
      />
      <Route
        path="/Review"
        element={
          <Layout>
            <Review />
          </Layout>
        }
      />
      <Route
        path="/Selengkapnya"
        element={
          <Layout>
            <Selengkapnya />
          </Layout>
        }
      />
      <Route
        path="/SelengkapnyaMitra"
        element={
          <Layout>
            <SelengkapnyaMitra />
          </Layout>
        }
      />
      <Route
        path="/DaftarMitra"
        element={
          <Layout>
            <DaftarMitra />
          </Layout>
        }
      />
      <Route path="/Register" element={<Register />} />
      {/* Halaman Login tidak memerlukan Navbar dan Footer */}
      <Route path="/Login" element={<Login />} />
      <Route
        path="/"
        element={
          <Layout>
            <Login />
            <Register />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
