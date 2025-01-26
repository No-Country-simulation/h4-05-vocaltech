import axios from "axios";

const BASE_URL = "";

const sendDiagnostic = async (newLead) => {
    try {
        const response = await axios.post(`${BASE_URL}/`, newLead);
        console.log(response)

        return response.data;
    } catch  {
        throw new Error("Error al enviar el formulario. Intente nuevamente!");
    }
};

export const diagnosticService = {
    sendDiagnostic,
}; 
