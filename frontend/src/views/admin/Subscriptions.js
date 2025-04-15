import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { columnsTable } from "../../utils/columnsTable";
import { Table } from "../../components/admin/Table";
import { useAuth } from "../../contexts/Auth";
import { subscriptionService } from "../../services/subscription";

export const Subscriptions = () => {
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    const getData = async () => {
        setIsLoading(true);
        setIsError(false);
        
        try {
            const response = await subscriptionService.getSubscriptions(user.token);
            const updatedResponse = response.map((item, index) => ({
                ...item,
                nro: index + 1
            }));
            
            setData(updatedResponse);
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
            <h2 className="pb-5">Subscriptores</h2>
            <Table columns={columnsTable.subscribers} isLoading={isLoading} isError={isError} 
                data={data} getData={getData} />
            <Toaster
                richColors
                position="top-center"
            />
        </section>
    );
};
