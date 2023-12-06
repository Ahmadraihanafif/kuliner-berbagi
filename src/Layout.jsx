// Layout.jsx
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
