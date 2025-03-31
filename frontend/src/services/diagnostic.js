import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user?.token || "";
};

const getLeads = async () => {
    const token = getToken();

    if (!token) {
        throw new Error("No tiene permisos para acceder a este recurso.. Inicie sesión nuevamente.");
    }

    try {
        const response = await axios.get(`${BASE_URL}/leads`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch {
        throw new Error("Error al traer la información. Intente nuevamente!");
    }
};


const sendDiagnostic = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/leads`, data);
        return response.data;

    } catch {
        throw new Error("Error al enviar el formulario. Intente nuevamente!");
    }
};

const sendEntrepDiagnostic = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/leads/entrepreneur`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const sendExecDiagnostic = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/leads/executive`, data);
        console.log(response.data)
        return response.data;

    } catch (error) {
        throw error;
    }
};

export const diagnosticService = {
    sendDiagnostic,
    sendEntrepDiagnostic,
    sendExecDiagnostic,
    getLeads,
}; 
