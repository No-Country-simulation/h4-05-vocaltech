import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { diagnosticService } from "../../services/diagnostic";
import EntrepLeadsTable from "../../components/admin/EntrepLeadsTable";
import ExecLeadsTable from "../../components/admin/ExecLeadsTable";

export const Leads = () => {
    const [entrepLeadsData, setEntrepLeadsData] = useState([]);
    const [execLeadsData, setExecLeadsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        setIsError(false);

        try {
            const response = await diagnosticService.getLeads();
            setEntrepLeadsData(response.entrepreneurLeads)
            setExecLeadsData(response.executiveLeads)
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
                <h2>Leads de Emprendedores</h2>
            </div>

            {!isError && !isLoading && <EntrepLeadsTable entrepreneurLeads={entrepLeadsData} />}

            <br />
            <div className="pb-3 d-md-flex justify-content-between">
                <h2>Leads de Ejecutivos</h2>
            </div>

            {!isError && !isLoading && <ExecLeadsTable executiveLeads={execLeadsData} />}

            {isError && !isLoading && "Ha ocurrido un error"}

            <Toaster
                richColors
                position="top-center"
            />
        </section>
    );
};
