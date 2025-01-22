import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../views/Home";
import { Entrepreneur } from "../views/Entrepreneur";
import { Company } from "../views/Company";
import { Admin } from "../views/admin/Admin"; 
import { Home as AdminHome } from "../views/admin/Home";
import { Templates } from "../views/admin/Templates";
import { Appointments } from "../views/admin/Appointments";
import { Leads } from "../views/admin/Leads";
import { AddAdmin } from "../views/admin/AddAdmin";
import { NavbarVocalTech } from "../components/Navbar";
import { FooterVocalTech } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { CompanySelected } from "../contexts/CompanySelected";
import { MenuSelected } from "../contexts/MenuSelected";

export const AppRoutes = () => {
    const location = useLocation(); 
    const isAdminRoute = location.pathname.startsWith("/admin");

    return (
        <>
            <ScrollToTop />
            { !isAdminRoute && <NavbarVocalTech /> }
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/emprendedor" element={<Entrepreneur />} />
                <Route path="/empresa" element={<Company />} />
                <Route path="/admin-dashboard/*" element={
                    <CompanySelected>
                        <MenuSelected>
                            <Admin />  
                        </MenuSelected>    
                    </CompanySelected>}>
                    <Route index element={<AdminHome />} />
                    <Route path="templates" element={<Templates />} />
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="leads" element={<Leads />} />
                    <Route path="add-new-admin" element={<AddAdmin />} />
                </Route>
            </Routes>
            { !isAdminRoute && <FooterVocalTech /> }
        </>
    );
};
