import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
//const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2b2NhbHRlY2guZGVtby5wZXJzaXN0ZW5jZS5lbnRpdHkuVXNlckAyMDYzZGY0MCIsImV4cCI6MTczODAyMzIxMiwiaWF0IjoxNzM4MDIxNDEyLCJhdXRob3JpdGllcyI6IlJPTEVfQURNSU5fTk9fQ09VTlRSWSIsImp0aSI6ImQwZWFiMDNkLWIwYjgtNDU0Mi05YzVmLTg1ZmJiOTRhOTJlNSJ9.d_6aggllS0_TgDp-bGuwSxqHF0EtXcX2sunDJdb92EI';

export const addTemplates = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/templates`, data); 
        //     {
        //     headers: {  
        //         'Content-Type': 'application/json',  
        //         'Authorization': `Bearer ${token}`   
        //     }
        // });
        return response.data;
        
    } catch  {
        throw new Error("Error al enviar el formulario. Intente nuevamente!");
    }
};

export const getTemplates = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/templates`); 
        return response.data;
        
    } catch  {
        throw new Error("Error al enviar el formulario. Intente nuevamente!");
    }
};

export const templateService = {
    addTemplates,
    getTemplates
}; 