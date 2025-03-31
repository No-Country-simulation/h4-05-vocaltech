import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user?.token || "";
};

const sendSubscription = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/subscription`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getSubscriptions = async () => {
    const token = getToken();
    if (!token) {
        throw new Error("No tiene permisos para acceder a este recurso. Inicie sesión nuevamente.");
    }

    try {
        const response = await axios.get(`${BASE_URL}/subscription`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const subscriptionService = {
    sendSubscription,
    getSubscriptions
};
