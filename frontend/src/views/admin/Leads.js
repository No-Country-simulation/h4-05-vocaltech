import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { SelectRole } from "../../components/SelectRole";
import { useAuth } from "../../contexts/Auth";
import { diagnosticService } from "../../services/diagnostic";

export const Leads = () => {
    const { user } = useAuth();
    const [selectedRole, setSelectedRole] = useState("Todos");
    const [entrepreneurLeads, setEntrepreneurLeads] = useState([]);
    const [executiveLeads, setExecutiveLeads] = useState([]);
    const [filteredLeads, setFilteredLeads] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    const getData = async () => {
        setIsLoading(true);
        setIsError(false);
        
        try {
            const response = await diagnosticService.getLeads(user.token);

            const entrepreneurs = response.entrepreneurLeads;
            const executives = response.executiveLeads.map(lead => ({
                ...lead,
                phone: "N/A",
                email: lead.enterpriseEmail
            }));

            setEntrepreneurLeads(entrepreneurs);
            setExecutiveLeads(executives);
            setFilteredLeads([...entrepreneurs, ...executives]);
        } catch (error) {
            toast.error(error.message);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (selectedRole === "Todos" || selectedRole === 0) {
            setFilteredLeads([...entrepreneurLeads, ...executiveLeads]);
        } else if (selectedRole === 1) {
            setFilteredLeads(entrepreneurLeads);
        } else if (selectedRole === 2) {
            setFilteredLeads(executiveLeads);
        }
    }, [selectedRole, entrepreneurLeads, executiveLeads]);
    
    return (
        <section>
            <h2 className="pb-3">Gestión de Leads</h2>
            <div className="px-2 py-3 d-md-flex justify-content-md-end border rounded-top">
                <div className="d-flex flex-row align-items-center">
                    <label htmlFor="selectRole" className="form-label mb-0 me-2 text-nowrap">Filtrar por</label>
                    <SelectRole all selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
                </div>
            </div>
            <Table columns={columnsTable.leads} isLoading={isLoading} isError={isError} 
                data={filteredLeads} getData={getData} />
            <Toaster
                richColors
                position="top-center"
            />
        </section>
    );
};
