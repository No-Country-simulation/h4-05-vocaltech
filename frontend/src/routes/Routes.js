import { Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { Entrepreneur } from "../views/Entrepreneur";
import { Company } from "../views/Company";
import { NavbarVocalTech } from "../components/Navbar";
import { FooterVocalTech } from "../components/Footer";

export const AppRoutes = () => {
    return (
        <>
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
