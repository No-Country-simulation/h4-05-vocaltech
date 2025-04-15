import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../views/Home";
import { Entrepreneur } from "../views/Entrepreneur";
import { Company } from "../views/Company";
import { AboutUs } from "../views/AboutUs";
import { Contact } from "../views/Contact";
import { Diagnostic } from "../views/Diagnostic";
import { Login } from "../views/admin/Login";
import { Admin } from "../views/admin/Admin";
import { Home as AdminHome } from "../views/admin/Home";
import { Templates } from "../views/admin/Templates";
import { Appointments } from "../views/admin/Appointments";
import { Leads } from "../views/admin/Leads";
import { Subscriptions } from "../views/admin/Subscriptions";
import { Users } from "../views/admin/Users";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { useAuth } from "../contexts/Auth";
import { CompanySelected } from "../contexts/CompanySelected";
import { Queries } from "../views/admin/Queries";

export const AppRoutes = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");
    const isDiagnosticRoute = location.pathname.startsWith("/diagnostico");
    const { isAuthenticated } = useAuth();

    return (
        <>
            <ScrollToTop />
            {!isAdminRoute && !isDiagnosticRoute && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/emprendedores" element={<Entrepreneur />} />
                <Route path="/empresas" element={<Company />} />
                <Route path="/nosotros" element={<AboutUs />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/diagnostico" element={<Diagnostic />} />
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
                    <Route path="subscriptions" element={<Subscriptions />} />
                    <Route path="queries" element={<Queries />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
            {!isAdminRoute && <Footer />}
        </>
    );
};
