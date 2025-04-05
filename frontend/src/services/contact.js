import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user?.token || "";
};

const sendContactInfo = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/contact`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getContacts = async (data) => {
    const token = getToken();
    try {
        const response = await axios.get(`${BASE_URL}/contact`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const contactService = {
    sendContactInfo,
    getContacts
};