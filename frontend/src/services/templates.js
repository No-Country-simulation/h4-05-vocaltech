import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user?.token || "";
};

export const addTemplates = async (data) => {
    const token = getToken();
    if (!token) {
        throw new Error("No tiene permisos para realizar esta acción. Vuelva a iniciar sesión.");
    }

    try {
        const response = await axios.post(`${BASE_URL}/templates`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const newTemplate = response.data;

        const cachedTemplates = JSON.parse(localStorage.getItem("templates") || "[]");
        localStorage.setItem("templates", JSON.stringify([...cachedTemplates, newTemplate]));

        return newTemplate;
    } catch {
        throw new Error("Error al crear una plantilla. Intente nuevamente!");
    }
};

export const getTemplates = async () => {
    const token = getToken();
    if (!token) {
        throw new Error("No tiene permisos para acceder a este recurso. Vuelva a iniciar sesión.");
    }

    try {
        const response = await axios.get(`${BASE_URL}/templates`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const templatesData = response.data;

        if (Array.isArray(templatesData)) {
            localStorage.setItem('templates', JSON.stringify(templatesData));
            return templatesData;
        } else {
            throw new Error("Error al obtener las plantillas.");
        }
    } catch (error) {
        console.error("Error al obtener las plantillas. Intente nuevamente!");
        const cachedTemplates = JSON.parse(localStorage.getItem("templates") || "[]");
        return Array.isArray(cachedTemplates) ? cachedTemplates : [];
    }
};

export const editTemplates = async (data) => {
    const token = getToken();
    if (!token) {
        throw new Error("No tiene permisos para realizar esta acción. Vuelva a iniciar sesión.");
    }

    try {
        const response = await axios.put(`${BASE_URL}/templates/${data.id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const updatedTemplate = response.data;

        const cachedTemplates = JSON.parse(localStorage.getItem("templates") || "[]");
        const updatedTemplates = cachedTemplates.map(template =>
            (template.id === updatedTemplate.id ? updatedTemplate : template));
        localStorage.setItem("templates", JSON.stringify(updatedTemplates));

        return updatedTemplate;
    } catch {
        throw new Error("Error al actualizar una plantilla. Intente nuevamente!");
    }
};

export const deleteTemplates = async (id) => {
    const token = getToken();
    if (!token) {
        throw new Error("No tiene permisos para realizar esta acción. Vuelva a iniciar sesión.");
    }

    try {
        await axios.delete(`${BASE_URL}/templates/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const cachedTemplates = JSON.parse(localStorage.getItem('templates') || '[]');
        const updatedTemplates = cachedTemplates.filter(template => template.id !== id);
        localStorage.setItem('templates', JSON.stringify(updatedTemplates));
        return id;
    } catch {
        throw new Error("Error al eliminar una plantilla. Intente nuevamente!");
    }
};

export const templateService = {
    addTemplates,
    getTemplates,
    editTemplates,
    deleteTemplates
}; 
