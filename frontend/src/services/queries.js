import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_GATEWAY_URL = process.env.REACT_APP_API_GATEWAY_URL;

const sendQuery = async (data) => {
    try {
        const response = await axios.post(`${API_GATEWAY_URL}/contact`, data);  
        return response.data;
    } catch {
        throw new Error("Error al enviar el formulario. Intente nuevamente!");
    }
};

const getQueries = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/contact`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
    } catch {
        throw new Error("Error al traer la información. Intente nuevamente!");
    }
};

export const queriesService = {
    sendQuery,
    getQueries
};
