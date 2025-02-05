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
import { AddAdmin } from "../../components/admin/AddAdmin";

export const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const { showModal, openModal, closeModal } = useModal();
    const { selectedCompany } = useCompanySelect();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getUsers = async () => {
        setIsLoading(true);

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
        storedUsers ? setUsersData(JSON.parse(storedUsers)) : getUsers();
    },[]);

    const addUser = (newUser) => {
        const updatedUsers = [...usersData, newUser]; 
        setUsersData(updatedUsers);
        localStorage.setItem("usersData", JSON.stringify(updatedUsers)); 
    };

    const updateUser = (update) => {
        const updatedUsers = usersData.map(user => 
            user.id === update.id ? update : user
        );

        setUsersData(updatedUsers);
        localStorage.setItem("usersData", JSON.stringify(updatedUsers));
    };

    const deleteUser = (id) => {
        const updatedUsers = usersData.filter(user => user.id !== id); 
        setUsersData(updatedUsers);
        localStorage.setItem("usersData", JSON.stringify(updatedUsers));
    };
    
    const filteredUsersData = selectedCompany === 0 || selectedCompany === "General" 
        ? usersData 
        : usersData.filter(user => user.roleId === selectedCompany);

    return (
        <section>
            <div className="pb-5 d-md-flex justify-content-between align-items-center">
                <h2>Administradores</h2>
                <div className="pt-4 pt-md-0 d-flex flex-column align-items-end">
                    <button
                        type="button"
                        className="btn-personalized rounded-pill w-100"
                        onClick={openModal}
                        >
                        <FontAwesomeIcon className="me-2" icon={faPlus} />Agregar admin
                    </button>
                </div>
            </div>
            {
                selectedCompany === 1 ? (
                    <Table columns={columnsTable.users} isLoading={isLoading} isError={isError} 
                        data={filteredUsersData} updateUser={updateUser} deleteUser={deleteUser} />
                ) : selectedCompany === 2 ? (
                    <Table columns={columnsTable.users} isLoading={isLoading} isError={isError} 
                        data={filteredUsersData} updateUser={updateUser} deleteUser={deleteUser} />
                ) : (
                    <Table columns={columnsTable.users} isLoading={isLoading} isError={isError} 
                        data={filteredUsersData} updateUser={updateUser} deleteUser={deleteUser} />
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
