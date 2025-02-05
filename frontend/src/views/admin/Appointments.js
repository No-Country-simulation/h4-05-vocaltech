import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { SelectRole } from "../../components/SelectRole"; 
import { useCompanySelect } from "../../contexts/CompanySelected";
import { appointmentService } from "../../services/appointment";

export const Appointments = () => {
    const [appointmentsData, setAppointmentsData] = useState([]);
    const { selectedCompany } = useCompanySelect();
    const [selectedRole, setSelectedRole] = useState("Todos");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            try {
                const response = await appointmentService.getAppointments();
                
                const updatedData = response.map(appointment => ({
                    ...appointment,
                    name: ['Jose', 'Maria', 'Pedro', 'Ana', 'Luis'][Math.floor(Math.random() * 5)],
                    diagnostic: Math.random() < 0.5, 
                    plan: Math.random() < 0.5,      

                }));

                setAppointmentsData(updatedData);
            } catch (error) {
                toast.error(error.message);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <section>
            <div className="pb-3 d-flex justify-content-between">
                <h2>Citas</h2>
                <div className="d-flex flex-column align-items-end">
                    <label htmlFor="selectRole" className="form-label">Filtrar por</label>
                    <SelectRole all selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
                </div>
            </div>
            {
                selectedCompany === 1 ? (
                    <Table columns={columnsTable.appointments} isLoading={isLoading} isError={isError} data={appointmentsData} />
                ) : selectedCompany === 2 ? (
                    <Table columns={columnsTable.appointments} isLoading={isLoading} isError={isError} data={appointmentsData} />
                ) : (
                    <Table columns={columnsTable.appointments} isLoading={isLoading} isError={isError} data={appointmentsData} />
                )
            }
            <Toaster
                richColors
                position="top-center"
            />
        </section>
    );
};
