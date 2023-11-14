import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Ulasan from "./pages/Ulasan";
function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Login" Component={Login} />
        <Route path="/Ulasan" Component={Ulasan} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
