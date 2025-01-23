import { useState, useEffect } from "react";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { prueba } from "../../utils/infoPrueba"; 
import { useCompanySelect } from "../../contexts/CompanySelected";

export const Leads = () => {
    const [leadsData, setLeadsData] = useState([]);
    const { selectedValue } = useCompanySelect();
    
    useEffect(() => {
        const processedLeads = prueba.leads.map(item => ({
            ...item,
            diagnostic: item.diagnostic ? 'Si' : 'No', 
            plan: item.plan ? 'Si' : 'No',
        }));

        setLeadsData(processedLeads);
    }, []);

    return (
        <section>
            <h2 className="pb-5">Leads</h2>
                {
                    selectedValue === "Vos y tu Voz" ? (
                        'Leads Vos y tu voz'
                    ) : selectedValue === "No Country" ? (
                        'Leads No Country'
                    ) : (
                        <Table columns={columnsTable.leads} data={leadsData} />
                    )
                }
        </section>
    );
};
