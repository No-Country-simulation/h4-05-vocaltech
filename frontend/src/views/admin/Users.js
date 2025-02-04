import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { useCompanySelect } from "../../contexts/CompanySelected";
import { userService } from "../../services/user";

export const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const { selectedCompany } = useCompanySelect();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
   useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            try {
                const response = await userService.getUsers();
                const roleMap = {
                    1: "No Country",
                    2: "Vos y tu Voz"
                };
                  
                const updatedResponse = response.map(user => {
                    const { roles, ...rest } = user;
                    return {
                        ...rest,
                        role: roleMap[roles[0].id],
                        roleId: roles[0].id
                    };
                });
                setUsersData(updatedResponse);

            } catch (error) {
                toast.error(error.message);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    const filteredUsersData = selectedCompany === 0 || selectedCompany === "General" 
        ? usersData 
        : usersData.filter(user => user.role_id === selectedCompany);

    return (
        <section>
            <div className="pb-3 d-md-flex justify-content-between align-items-center">
                <h2>Administradores</h2>
            </div>
            {
                selectedCompany === 1 ? (
                    <Table columns={columnsTable.users} isLoading={isLoading} isError={isError} data={filteredUsersData} />
                ) : selectedCompany === 2 ? (
                    <Table columns={columnsTable.users} isLoading={isLoading} isError={isError} data={filteredUsersData} />
                ) : (
                    <Table columns={columnsTable.users} isLoading={isLoading} isError={isError} data={filteredUsersData} />
                )
            }
            <Toaster
                richColors
                position="top-center"
            />
        </section>
    );
};
