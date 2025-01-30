import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { NavbarVocalTech } from "../components/Navbar";
import { Home } from "../views/Home";
import { Entrepreneur } from "../views/Entrepreneur";
import { Company } from "../views/Company";
import { Diagnostic } from "../views/Diagnostic";
import { Login } from "../views/admin/Login";
import { Admin } from "../views/admin/Admin"; 
import { Appointment } from "../views/Appointment";
import { Home as AdminHome } from "../views/admin/Home";
import { Templates } from "../views/admin/Templates";
import { Appointments } from "../views/admin/Appointments";
import { Leads } from "../views/admin/Leads";
import { AddAdmin } from "../views/admin/AddAdmin";
import { FooterVocalTech } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { useAuth } from "../contexts/Auth";
import { CompanySelected } from "../contexts/CompanySelected";

export const AppRoutes = () => {
    const location = useLocation(); 
    const isAdminRoute = location.pathname.startsWith("/admin");
    const { isAuthenticated } = useAuth();

    return (
        <>
            <ScrollToTop />
            { !isAdminRoute && <NavbarVocalTech /> }
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/emprendedor" element={<Entrepreneur />} />
                <Route path="/empresa" element={<Company />} />
                <Route path="/diagnostico" element={<Diagnostic />} />
                <Route path="/agendar-cita" element={<Appointment />} />
                <Route path="/login-admin" 
                    element={isAuthenticated ? <Navigate to="/admin-dashboard" /> : <Login />} 
                />
                <Route path="/admin-dashboard/*" element={
                    isAuthenticated ? (
                        <CompanySelected>
                            <Admin />
                        </CompanySelected>
                    ) : (
                        <Navigate to="/login-admin" />
                    )
                }>
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
