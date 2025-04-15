import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { contactService } from "../../services/contact";
import QueryTable from "../../components/admin/QueryTable";

export const Queries = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        setIsError(false);

        try {
            const response = await contactService.getContacts();
            setData(response)
        } catch (error) {
            toast.error(error.message);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <section>
            <div className="pb-3 d-md-flex justify-content-between">
                <h2>Consultas</h2>
            </div>

            {isLoading && <p>Cargando... (puede demorar unos minutos)...</p>}

            {!isError && !isLoading && <QueryTable contactData={data} />}

            <br />

            {isError && !isLoading && "Ha ocurrido un error"}

            <Toaster
                richColors
                position="top-center"
            />
        </section>
    );
};
