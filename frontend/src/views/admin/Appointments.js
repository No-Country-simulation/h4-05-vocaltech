import { useState, useEffect } from "react";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { SelectRole } from "../../components/SelectRole";
import { prueba } from "../../utils/infoPrueba"; 
import { useCompanySelect } from "../../contexts/CompanySelected";

export const Appointments = () => {
    const [appointmentsData, setAppointmentsData] = useState([]);
    const { selectedCompany } = useCompanySelect();
    const [selectedRole, setSelectedRole] = useState("Todos");
    
    useEffect(() => {
        setAppointmentsData(prueba.appointments);
    }, []);

    return (
        <section>
            <div className="pb-3 d-flex justify-content-between align-items-center">
                <h2>Citas</h2>
                <div className="d-flex flex-column align-items-end">
                    <label htmlFor="selectRole" className="form-label">Filtrar por</label>
                    <SelectRole all selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
                </div>
            </div>
            {
                selectedCompany === 2 ? (
                    'Tabla Vos y tu voz'
                ) : selectedCompany === 1 ? (
                    'Tabla No Country'
                ) : (
                    <Table columns={columnsTable.appointments} data={appointmentsData} />
                )
            }
        </section>
    );
};
