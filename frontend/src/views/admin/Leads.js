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
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await diagnosticService.getLeads();
                setLeadsData(response); 
                setFilteredLeads(response);
            } catch (error) {
                toast.error(error.message);
            } finally {

            }
        };

        getData();
    }, []);

    useEffect(() => {
        if (selectedRole === 0 || selectedRole === "Todos") {
            setFilteredLeads(leadsData); 
        } else {
            const filtered = leadsData.filter(lead => lead.profile.id === selectedRole);
            setFilteredLeads(filtered); 
        }
    }, [selectedRole, leadsData]);

    return (
        <section>
            <div className="pb-3 d-md-flex justify-content-between align-items-center">
                <h2>Leads</h2>
                <div className="d-flex flex-column align-items-end">
                    <label htmlFor="selectRole" className="form-label">Filtrar por</label>
                    <SelectRole all selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
                </div>
            </div>
            {
                selectedCompany === 2 ? (
                    'Leads Vos y tu voz'
                ) : selectedCompany === 1 ? (
                    'Leads No Country'
                ) : (
                    <Table columns={columnsTable.leads} data={filteredLeads} />
                )
            }
            <Toaster
                richColors
                position="top-center"
            />
        </section>
    );
};
