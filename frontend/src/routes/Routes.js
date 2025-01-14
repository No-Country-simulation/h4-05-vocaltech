import { Routes, Route } from "react-router-dom";
import { Home } from "../views/home";
import { NavbarVocalTech } from "../component/navbar";
import { FooterVocalTech } from "../component/footer";

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
