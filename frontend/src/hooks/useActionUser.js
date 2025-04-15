const useAdd = (usersData, setUsersData) => {
    const addUser = (newUser) => {
        const updatedUsers = [...usersData, newUser]; 
        setUsersData(updatedUsers);
        localStorage.setItem("usersData", JSON.stringify(updatedUsers)); 
    };

    return addUser;
};

const useUpdate = (usersData, setUsersData) => {
    const updateUser = (update) => {
        const updatedUsers = usersData.map(user => 
            user.id === update.id ? update : user
        );

        setUsersData(updatedUsers);
        localStorage.setItem("usersData", JSON.stringify(updatedUsers));
    };

    return updateUser;
};

const useDelete = (usersData, setUsersData) => {
    const deleteUser = (id) => {
        const updatedUsers = usersData.filter(user => user.id !== id); 
        setUsersData(updatedUsers);
        localStorage.setItem("usersData", JSON.stringify(updatedUsers));
    };

    return deleteUser;
};

export const useActionUser = {
    useAdd,
    useUpdate,
    useDelete
}
