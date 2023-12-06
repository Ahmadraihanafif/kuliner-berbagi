import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Mitra from "./pages/Mitra";
import Regis from "./pages/regis";
import Search from "./pages/Search";
import Profil from "./pages/profil";
import Ulasan from "./pages/Ulasan";
import Selengkanya from "./pages/Selengkapnya";

function App() {
  return (
    <Routes>
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
        path="/Selengkapnya"
        element={
          <Layout>
            <Selengkanya />
          </Layout>
        }
      />
      {/* Halaman Login tidak memerlukan Navbar dan Footer */}
      <Route path="/Login" element={<Login />} />
      <Route
        path="/"
        element={
          <Layout>
            <Login />
            <Regis />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
