import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { useCompanySelect } from "../../contexts/CompanySelected";
import { userService } from "../../services/user";
import { Modall } from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import { useActionUser } from "../../hooks/useActionUser";
import { AddAdmin } from "../../components/admin/AddAdmin";

export const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const { showModal, openModal, closeModal } = useModal();
    const { selectedCompany } = useCompanySelect();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const addUser = useActionUser.useAdd(usersData, setUsersData);
    const updateUser = useActionUser.useUpdate(usersData, setUsersData);
    const deleteUser = useActionUser.useDelete(usersData, setUsersData);


    const getData = async () => {
        setIsLoading(true);
        setIsError(false);

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

            localStorage.setItem("usersData", JSON.stringify(updatedResponse));
            setUsersData(updatedResponse);
        } catch (error) {
            toast.error(error.message);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const storedUsers = localStorage.getItem("usersData");
        storedUsers ? setUsersData(JSON.parse(storedUsers)) : getData();
    },[]);
    
    const filteredUsersData = selectedCompany === 0 || selectedCompany === "General" 
        ? usersData 
        : usersData.filter(user => user.roleId === selectedCompany);

    return (
        <section>
            <h2 className="pb-3">Administradores</h2>
            <div className="px-2 py-3 d-md-flex justify-content-md-end border rounded-top">
                {
                    (selectedCompany === 1 || selectedCompany === 2) && (
                        <div className="pt-4 pt-md-0 d-flex flex-column align-items-end">
                            <button
                                type="button"
                                className="btn btn-general btn-dark-personalized text-white"
                                onClick={openModal}>
                                <FontAwesomeIcon className="me-2" icon={faPlus} />Agregar admin
                            </button>
                        </div>
                    )
                }
            </div>
            {
                selectedCompany === 1 ? (
                    <Table columns={columnsTable.users} isLoading={isLoading} isError={isError} 
                        getData={getData} data={filteredUsersData} updateUser={updateUser} deleteUser={deleteUser} />
                ) : selectedCompany === 2 ? (
                    <Table columns={columnsTable.users} isLoading={isLoading} isError={isError} 
                        getData={getData} data={filteredUsersData} updateUser={updateUser} deleteUser={deleteUser} />
                ) : (
                    <Table columns={columnsTable.users} isLoading={isLoading} isError={isError} 
                        getData={getData} data={filteredUsersData} updateUser={updateUser} deleteUser={deleteUser} />
                )
            }
            <Modall
                showModal={showModal}
                closeModal={closeModal}
                title="Agregar nuevo admin">
                <AddAdmin addUser={addUser} closeModal={closeModal} />
            </Modall>
            <Toaster
                richColors
                position="top-center"
            />
        </section>
    );
};
