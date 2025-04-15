import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getLeads = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/leads`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
    } catch {
        throw new Error("Error al traer la información. Intente nuevamente!");
    }
};

const sendDiagnostic = async (user, data) => {
    try {
        let response;
        
        if(user === "entrepreneur") {
            response = await axios.post(`${BASE_URL}/leads/entrepreneur`, data);
        } else {
            response = await axios.post(`${BASE_URL}/leads/executive`, data);
        }
        
        return response.data;

    } catch {
        throw new Error("Error al enviar el formulario. Intente nuevamente!");
    }
};

export const diagnosticService = {
    sendDiagnostic,
    getLeads,
}; 
