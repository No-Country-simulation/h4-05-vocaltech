import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const sendSubscription = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/subscription`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getSubscriptions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/subscription`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const subscriptionService = {
    sendSubscription,
    getSubscriptions
};