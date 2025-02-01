import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const addUser = async (user) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const token = storedUser ? storedUser.token : null;
    try {
        const response = await axios.post(`${BASE_URL}/users`, user, {
            headers: {  
                'Content-Type': 'application/json',  
                'Authorization': `Bearer ${token}`   
            }
        });

        return response.data;
        
    } catch  {
        throw new Error("Error al registrar usuario. Intente nuevamente!");
    }
};

const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
        
    } catch  {
        throw new Error("Error al traer a los administradores. Intente nuevamente!");
    }
};

export const userService = {
    addUser,
    getUsers,
}; 
