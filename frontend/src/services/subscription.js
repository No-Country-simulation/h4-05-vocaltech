import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const sendSubscription = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/subscription`, data);
        return response.data;
    } catch (error) {
        throw new Error("Hubo un error al enviar la suscripción. Intente nuevamente!");
    }
};

const getSubscriptions = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/subscription`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
    } catch {
        throw new Error("Error al traer data de suscriptores. Intente nuevamente!");
    }
};

export const subscriptionService = {
    sendSubscription,
    getSubscriptions
};
