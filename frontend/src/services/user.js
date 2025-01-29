import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');

const addUser = async (user) => {
    console.log(user);
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

export const userService = {
    addUser
}; 
