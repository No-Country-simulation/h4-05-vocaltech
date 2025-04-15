import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/admin/Navbar";
import { Header } from "../../components/admin/Header";
import { Sidebar } from "../../components/admin/Sidebar";
import { useCompanySelect } from "../../contexts/CompanySelected";

export const Admin = () => {
    const { selectedCompany } = useCompanySelect();

    return (
        <>
            <Navbar />
            <Header />
            <div className="d-flex">
                <Sidebar />
                <div className="container py-5 px-md-4 px-lg-5 overflow-auto" style={{ height: "100vh" }}>            
                    <h1 className="display-6 fw-bolder pb-4 pt-md-5 mt-md-2 mt-lg-4">Dashboard
                        {
                            selectedCompany === 2 ? (
                                " Vos y Tu Voz"
                            ) : (
                                selectedCompany === 1 ? (
                                    " No Country"
                                ) : (
                                    " General"
                                )
                            )
                        } 
                    </h1>
                    <div className="row">
                        <Outlet /> 
                    </div>
                </div>
            </div>
        </>
    );
};
