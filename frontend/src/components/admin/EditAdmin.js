import { useState } from "react";
import { Form } from "./Form";
import { Toaster, toast } from "sonner";
import { userService } from "../../services/user";
import { useAuth } from "../../contexts/Auth";
 
export const EditAdmin = ({ item, closeModal, updateUser }) => {
    const [data, setData] = useState(item);
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
            const { role, ...updateData } = data; 
            await userService.updateUser(updateData, user.token);
            updateUser(data);
            closeModal();
            toast.success("Administrador actualizado con éxito!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Form 
                isLoading={isLoading}
                data={data} 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                buttonText="Editar" />
            <Toaster richColors position="top-center" />
        </>
    );
};
