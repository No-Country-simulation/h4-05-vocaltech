import { Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { Entrepreneur } from "../views/Entrepreneur";
import { Company } from "../views/Company";
import { NavbarVocalTech } from "../components/Navbar";
import { FooterVocalTech } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
              <NavbarVocalTech />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/emprendedor" element={<Entrepreneur />} />
                  <Route path="/empresa" element={<Company />} />
              </Routes>
              <FooterVocalTech />

        </>
    );
};
