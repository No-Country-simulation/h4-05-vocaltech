import { useState, useEffect } from "react";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { SelectRole } from "../../components/SelectRole";
import { prueba } from "../../utils/infoPrueba"; 
import { useCompanySelect } from "../../contexts/CompanySelected";

export const Leads = () => {
    const [leadsData, setLeadsData] = useState([]);
    const { selectedValue } = useCompanySelect();
    
    useEffect(() => {
        setLeadsData(prueba.leads);
    }, []);

    return (
        <section>
            <div className="pb-3 d-md-flex justify-content-between align-items-center">
                <h2>Leads</h2>
                <div className="d-flex flex-column align-items-end">
                    <label htmlFor="selectRole" className="form-label">Filtrar por</label>
                    <SelectRole />
                </div>
            </div>
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
