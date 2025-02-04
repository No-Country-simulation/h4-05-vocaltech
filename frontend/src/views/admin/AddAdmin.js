import { useState } from "react";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { useCompanySelect } from "../../contexts/CompanySelected";
import { userService } from "../../services/user";
import { Form } from "../../components/Form"; 

export const AddAdmin = () => {
    const { user } = useAuth();
    const { selectedCompany } = useCompanySelect();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const handleNewAdmin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (selectedCompany === 0) {
            toast.error("Debe seleccionar una organización para crear un nuevo administrador.");
            return;
        }

        try {
            console.log(data)
            await userService.addUser(user.token, {
                ...data,
                roleId: selectedCompany,
            });
        
            setData({
                fullname: "",
                email: "",
                password: "",
            });
            toast.success("Administrador agregado con éxito!");
            navigate("/admin-dashboard");
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
        <section>
            <div className="pb-5">
                <h2>Completa los datos para añadir un nuevo administrador</h2>
            </div>
            <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                    <Form 
                        isLoading={isLoading}
                        data={data}
                        handleChange={handleChange}
                        handleSubmit={handleNewAdmin}
                        buttonText="Agregar"
                        className="p-md-5 bg-md-light-form rounded shadow-md-form"
                    />
                </div>
            </div>
            <Toaster richColors position="top-center" />
        </section>
    );
};
