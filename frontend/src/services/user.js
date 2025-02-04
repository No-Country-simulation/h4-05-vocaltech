import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const addUser = async (token, user) => {
    try {
        const response = await axios.post(`${BASE_URL}/users`, user, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
        
    } catch  {
        throw new Error("Error al registrar al administrador. Intente nuevamente!");
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

const updateUser = async (idP, data, token) => {
    const { id, role, ...update } = data; 
    console.log(idP);
    console.log(update);
    console.log(token);
    
    try {
        const response = await axios.put(`${BASE_URL}/users/${idP}`, update, {
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
    updateUser,
}; 
