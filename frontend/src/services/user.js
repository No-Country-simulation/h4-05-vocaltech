import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const addUser = async (token, user) => {
    try {
        const response = await axios.post(`${BASE_URL}/users`, user, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;

    } catch {
        throw new Error("Error al registrar al nuevo administrador. Intente nuevamente!");
    }
};

const getUsers = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const token = user?.token || "";
    if (!token) {
        throw new Error("No se encontró un token de autenticación. Inicie sesión nuevamente.");
    }

    try {
        const response = await axios.get(`${BASE_URL}/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch {
        throw new Error("Error al traer a los administradores. Intente nuevamente!");
    }
};


const deleteUser = async (id, token) => {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;

    } catch {
        throw new Error("Error al eliminar al administrador. Intente nuevamente!");
    }
};

const updateUser = async (updateData, token) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${updateData.id}`, updateData, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;

    } catch {
        throw new Error("Error al actualizar la información. Intente nuevamente!");
    }
};

export const userService = {
    addUser,
    getUsers,
    deleteUser,
    updateUser,
}; 
