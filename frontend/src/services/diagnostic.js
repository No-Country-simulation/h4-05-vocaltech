import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getLeads = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/leads`);
        return response.data;
        
    } catch  {
        throw new Error("Error al traer la información!");
    }
};

const sendDiagnostic = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/leads`, data);
        return response.data;
        
    } catch  {
        throw new Error("Error al enviar el formulario. Intente nuevamente!");
    }
};

export const diagnosticService = {
    sendDiagnostic,
    getLeads,
}; 
