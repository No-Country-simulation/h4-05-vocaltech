import { Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { NavbarVocalTech } from "../components/Navbar";
import { FooterVocalTech } from "../components/Footer";

const AppRoutes = () => {
  return (
    <div>
      <NavbarVocalTech />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterVocalTech />
    </div>
  );
};

export default AppRoutes;
