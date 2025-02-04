import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const addUser = async (user) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const token = storedUser ? storedUser.token : null;
    try {
        const response = await axios.post(`${BASE_URL}/users`, user, {
            headers: {  
                'Content-Type': 'application/json',  
                'Authorization': `Bearer ${token}`   
            }
        });

        return response.data;
        
    } catch  {
        throw new Error("Error al registrar usuario. Intente nuevamente!");
    }
};

const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
        
    } catch  {
        throw new Error("Error al traer a los administradores. Intente nuevamente!");
    }
};

const deleteUser = async (id, token) => {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
        
    } catch  {
        throw new Error("Error al eliminar al administrador. Intente nuevamente!");
    }
};

const editUser = async (id, update, token) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${id}`, update, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
        
    } catch  {
        throw new Error("Error al editar al administrador. Intente nuevamente!");
    }
};

export const userService = {
    addUser,
    getUsers,
    deleteUser,
    editUser,
}; 
