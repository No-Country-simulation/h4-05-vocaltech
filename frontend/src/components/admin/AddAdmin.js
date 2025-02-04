import { useState } from "react";
import { Form } from "../Form";
import { Toaster, toast } from "sonner";
import { userService } from "../../services/user";
import { useAuth } from "../../contexts/Auth";
import { useCompanySelect } from "../../contexts/CompanySelected";
 
export const AddAdmin = ({ closeModal }) => {
    const { user } = useAuth();
    const { selectedCompany } = useCompanySelect();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const handleNewAdmin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (selectedCompany === 0 || selectedCompany === "General") {
            toast.error("Debe seleccionar una organización para crear un nuevo administrador.");
            setIsLoading(false);
            return;
        }

        try {
            await userService.addUser(user.token, {
                ...data,
                roleId: selectedCompany,
            });
        
            setData({
                fullname: "",
                email: "",
                password: "",
            });
            
            closeModal();
            toast.success("Administrador agregado con éxito!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <Form 
                isLoading={isLoading}
                data={data}
                handleChange={handleChange}
                handleSubmit={handleNewAdmin}
                buttonText="Agregar"
            />
            <Toaster richColors position="top-center" />
        </>
    );
};
