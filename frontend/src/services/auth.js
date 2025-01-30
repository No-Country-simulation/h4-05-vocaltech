import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const admin = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, data);
        return response.data;
        
    } catch  {
        throw new Error("Error al enviar las credenciales. Intente nuevamente!");
    }
};

export const authService = {
    admin,
}; 
