import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../views/home";
import { Entrepreneur } from "../views/Entrepreneur";
import { Company } from "../views/Company";
import { Login } from "../views/admin/Login";
import { Admin } from "../views/admin/Admin";
import { Appointment } from "../views/Appointment";
import { Home as AdminHome } from "../views/admin/Home";
import { Templates } from "../views/admin/Templates";
import { Appointments } from "../views/admin/Appointments";
import { Leads } from "../views/admin/Leads";
import { Users } from "../views/admin/Users";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { Chatbot } from "../components/Chatbot";
import { useAuth } from "../contexts/Auth";
import { CompanySelected } from "../contexts/CompanySelected";
import { AboutUs } from "../views/AboutUs";
import { NewDiagnostic } from "../views/NewDiagnostic";
import { EntrepreneurDiagnostic } from "../views/EntrepreneurDiagnostic";
import { ExecutiveDiagnostic } from "../views/ExecutiveDiagnostic";
import { Contact } from "../views/Contact";

export const AppRoutes = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");
    const isDiagnosticRoute = location.pathname.startsWith("/diagnostico");
    const { isAuthenticated } = useAuth();

    return (
        <>
            <ScrollToTop />
            {!isAdminRoute && <Chatbot />}
            {!isAdminRoute && !isDiagnosticRoute && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/emprendedores" element={<Entrepreneur />} />
                <Route path="/empresas" element={<Company />} />
                <Route path="/nosotros" element={<AboutUs />} />
                <Route path="/diagnostico" element={<NewDiagnostic />} />
                <Route path="/diagnostico/emprendedor" element={<EntrepreneurDiagnostic />} />
                <Route path="/diagnostico/ejecutivo" element={<ExecutiveDiagnostic />} />
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
                    <Route path="users" element={<Users />} />
                </Route>
                <Route path="/contacto" element={<Contact />}/>
            </Routes>
            {!isAdminRoute && <Footer />}
        </>
    );
};
