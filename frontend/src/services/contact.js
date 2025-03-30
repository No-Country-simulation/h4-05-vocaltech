import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const sendContactInfo = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/contact`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const contactService = {
    sendContactInfo
};