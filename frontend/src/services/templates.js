import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
//const token = localStorage.getItem('token');

export const addTemplates = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/templates`, data); 
        const newTemplate = response.data;

        const cachedTemplates = JSON.parse(localStorage.getItem("templates") || "[]");
        localStorage.setItem("templates", JSON.stringify([...cachedTemplates, newTemplate]));

        return newTemplate;
        
    } catch  {
        throw new Error("Error al enviar el formulario. Intente nuevamente!");
    }
};

export const getTemplates = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/templates`); 
        const templatesData = response.data;

        if (Array.isArray(templatesData)) {
            localStorage.setItem('templates', JSON.stringify(templatesData));
            return templatesData;
        } else {
            throw new Error("Error al obtener las plantillas.");
        }
        
    } catch (error)  {
        console.error("Error al enviar el formulario. Intente nuevamente!");
        const cachedTemplates = JSON.parse(localStorage.getItem("templates") || "[]");
        return Array.isArray(cachedTemplates) ? cachedTemplates : [];
    }
};

export const editTemplates = async (data) => {
    try {
        const response = await axios.put(`${BASE_URL}/templates/${data.id}`, data); 
        const updatedTemplate = response.data;

        const cachedTemplates = JSON.parse(localStorage.getItem("templates") || "[]");
        const updatedTemplates = cachedTemplates.map(template => 
            (template.id === updatedTemplate.id ? updatedTemplate : template));
        localStorage.setItem("templates", JSON.stringify(updatedTemplates));

        return updatedTemplate;
        
    } catch  {
        throw new Error("Error al enviar el formulario. Intente nuevamente!");
    }
};

export const deleteTemplates = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/templates/${id}`); 
        
        const cachedTemplates = JSON.parse(localStorage.getItem('templates') || '[]');
        const updatedTemplates = cachedTemplates.filter(template => template.id !== id);
        localStorage.setItem('templates', JSON.stringify(updatedTemplates));
        return id;
    } catch  {
        throw new Error("Error al enviar el formulario. Intente nuevamente!");
    }
};

export const templateService = {
    addTemplates,
    getTemplates,
    editTemplates,
    deleteTemplates
}; 