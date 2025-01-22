import { Navbar } from "../../components/admin/Navbar";
import { Sidebar } from "../../components/admin/Sidebar";
import { Home } from "./Home";
import { Templates } from "./Templates"
import { Appointments } from "./Appointments";
import { Leads } from "./Leads";
import { AddAdmin } from "./AddAdmin";
import { useCompanySelect } from "../../contexts/CompanySelected";
import { useMenuSelect } from "../../contexts/MenuSelected";

export const Admin = () => {
    const { selectedValue } = useCompanySelect();
    const { selectedMenu } = useMenuSelect();

    return (
        <>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <div className="container py-5 px-md-4 px-lg-5">            
                    <h1 className="display-6 fw-bolder pb-5">Dashboard {selectedValue}</h1>
                    <div className="row">
                        {
                            selectedMenu === "Inicio" ? (
                                <Home selectedValue={selectedValue} />
                            ) : selectedMenu === "Plantillas de Mensajes" ? (
                                <Templates />
                            ) : selectedMenu === "Citas" ? (
                                <Appointments />
                            ) : selectedMenu === "Leads" ? (
                                <Leads />
                            ) : (
                                <AddAdmin />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
