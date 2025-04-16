import { useState } from "react";
import { Toaster, toast } from "sonner";
import { userService } from "../../services/user";
import { useAuth } from "../../contexts/Auth";
import { loader } from "../Loader";

export const DeleteAdmin = ({ data, closeModal, deleteUser }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
            await userService.deleteUser(data.id, user.token); 
            deleteUser(data.id);
            closeModal();
            toast.success("Administrador eliminado con éxito!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <p>¿Estás seguro de eliminar a {data.fullname}?</p>
            <button type="button" className="btn btn-general btn-danger" disabled={isLoading} 
                onClick={handleSubmit}>
                {
                    isLoading ? (
                        <loader.GeneralLoader />
                    ) : (
                        "Confirmar"
                    )
                }
            </button>
            <Toaster richColors position="top-center" />
        </div>
    );
};
