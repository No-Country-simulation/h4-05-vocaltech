import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/admin/Navbar";
import { Sidebar } from "../../components/admin/Sidebar";
import { useCompanySelect } from "../../contexts/CompanySelected";

export const Admin = () => {
    const { selectedValue } = useCompanySelect();

    return (
        <>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <div className="container py-5 px-md-4 px-lg-5 overflow-auto" style={{ height: "100vh" }}>            
                    <h1 className="display-6 fw-bolder pb-5">Dashboard {selectedValue}</h1>
                    <div className="row">
                        <Outlet /> 
                    </div>
                </div>
            </div>
        </>
    );
};
