import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { subscriptionService } from "../../services/subscription";
import SubscriptionsTable from "../../components/admin/SubscriptionsTable"

export const Subscriptions = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        setIsError(false);

        try {
            const response = await subscriptionService.getSubscriptions();
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
                <h2>Subscriptores</h2>
            </div>

            {!isError && !isLoading && <SubscriptionsTable subscriptionsData={data} />}

            <br />

            {isError && !isLoading && "Ha ocurrido un error"}

            <Toaster
                richColors
                position="top-center"
            />
        </section>
    );
};
