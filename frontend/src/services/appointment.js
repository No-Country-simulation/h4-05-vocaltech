import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const TOKEN = process.env.REACT_APP_CALENDLY_API_TOKEN;

const getAppointments = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/appointments`);
        return response.data;
        
    } catch  {
        throw new Error("Error al traer la información. Intente nuevamente!");
    }
};

const create = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/appointments`);
        return response.data;
        
    } catch  {
        throw new Error("");
    }
};

const eventDetails = async(url) => {
    try {
        const response = await axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`, 
                }
            }
        );

        return response.data;
    } catch {
        throw new Error("Error al obtener detalles del evento");
    }
};

const inviteeDetails = async(url) => {
    try {
        const response = await axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`, 
                }
            }
        );

        return response.data;
    } catch {
        throw new Error("Error al obtener detalles del invitado");
    }
};

export const appointmentService = {
    create,
    eventDetails,
    inviteeDetails,
    getAppointments
}; 
