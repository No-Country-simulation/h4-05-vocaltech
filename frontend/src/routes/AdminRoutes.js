import { Routes, Route } from "react-router-dom";
import { Templates } from "../views/admin/Templates";
import { Appointments } from "../views/admin/Appointments";
import { Leads } from "../views/admin/Leads";
import { AddAdmin } from "../views/admin/AddAdmin";
import { ScrollToTop } from "../components/ScrollToTop";

export const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/admin-dashboard/templates" element={<Templates />} />
                <Route path="/admin-dashboard/appointments" element={<Appointments />} />
                <Route path="/admin-dashboard/leads" element={<Leads />} />
                <Route path="/admin-dashboard/add-new-admin" element={<AddAdmin />} />
            </Routes>
        </>
    );
};
