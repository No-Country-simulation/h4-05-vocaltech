import { Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { NavbarVocalTech } from "../components/Navbar";
import { FooterVocalTech } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
  return (
    <div>
      <ScrollToTop>
        <NavbarVocalTech />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterVocalTech />
      </ScrollToTop>
    </div>
  );
};

export default AppRoutes;
