import { useState, useEffect } from "react";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { prueba } from "../../utils/infoPrueba"; 
import { useCompanySelect } from "../../contexts/CompanySelected";

export const Appointments = () => {
    const [appointmentsData, setAppointmentsData] = useState([]);
    const { selectedValue } = useCompanySelect();
    
    useEffect(() => {
        const processedAppointments = prueba.appointments.map(item => ({
            ...item,
            diagnostic: item.diagnostic ? 'Si' : 'No', 
            plan: item.plan ? 'Si' : 'No',
        }));

        setAppointmentsData(processedAppointments);
    }, []);

    return (
        <section>
            <h2 className="pb-5">Citas</h2>
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
