import { useState, useEffect } from "react";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { RoleSelect } from "../../components/admin/RoleSelect";
import { prueba } from "../../utils/infoPrueba"; 
import { useCompanySelect } from "../../contexts/CompanySelected";

export const Appointments = () => {
    const [appointmentsData, setAppointmentsData] = useState([]);
    const { selectedValue } = useCompanySelect();
    
    useEffect(() => {
        setAppointmentsData(prueba.appointments);
    }, []);

    return (
        <section>
            <div className="pb-3 d-flex justify-content-between align-items-center">
                <h2>Citas</h2>
                <RoleSelect />
            </div>
            {
                selectedValue === "Vos y tu Voz" ? (
                    'Tabla Vos y tu voz'
                ) : selectedValue === "No Country" ? (
                    'Tabla No Country'
                ) : (
                    <Table columns={columnsTable.appointments} data={appointmentsData} />
                )
            }
        </section>
    );
};
