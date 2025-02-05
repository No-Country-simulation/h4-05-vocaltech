import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { SelectRole } from "../../components/SelectRole";
import { useCompanySelect } from "../../contexts/CompanySelected";
import { diagnosticService } from "../../services/diagnostic";

export const Leads = () => {
    const [leadsData, setLeadsData] = useState([]);
    const { selectedCompany } = useCompanySelect();
    const [selectedRole, setSelectedRole] = useState("Todos");
    const [filteredLeads, setFilteredLeads] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            try {
                const response = await diagnosticService.getLeads();
                setLeadsData(response);
            } catch (error) {
                toast.error(error.message);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    useEffect(() => {
        const leadsByCompany = selectedCompany === 0 || selectedCompany === "General"
            ? leadsData
            : leadsData.filter(lead => lead.roles.some(role => role.id === selectedCompany)
        );

        const filteredLeads = selectedRole === 0 || selectedRole === "Todos"
            ? leadsByCompany
            : leadsByCompany.filter(lead => lead.profile.id === selectedRole);

        const formattedLeads = filteredLeads.map(lead => ({
            ...lead,
            creationDate: lead.creationDate.split(" ")[0].split("-").reverse().join("-")  
        }));

        const sortedLeads = formattedLeads.reverse();

        setFilteredLeads(sortedLeads); 
    }, [selectedCompany, selectedRole, leadsData]); 

    return (
        <section>
            <div className="pb-3 d-md-flex justify-content-between">
                <h2>Leads</h2>
                <div className="d-flex flex-column align-items-end">
                    <label htmlFor="selectRole" className="form-label">Filtrar por</label>
                    <SelectRole all selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
                </div>
            </div>
            {
                selectedCompany === 1 ? (
                    <Table columns={columnsTable.leads} isLoading={isLoading} isError={isError} data={filteredLeads} />
                ) : selectedCompany === 2 ? (
                    <Table columns={columnsTable.leads} isLoading={isLoading} isError={isError} data={filteredLeads} />
                ) : (
                    <Table columns={columnsTable.leads} isLoading={isLoading} isError={isError} data={filteredLeads} />
                )
            }
            <Toaster
                richColors
                position="top-center"
            />
        </section>
    );
};
