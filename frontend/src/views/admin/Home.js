import { useEffect, useState } from "react";
import { InfoCard } from "../../components/admin/InfoCard";
import { useCompanySelect } from "../../contexts/CompanySelected";
import { useAuth } from "../../contexts/Auth";

export const Home = () => {
    const [generalData, setGeneralData] = useState([]);
    const { selectedCompany } = useCompanySelect();
    const { user } = useAuth();

    useEffect(() => {
        
        const data = [
            { title: 'Leads Totales', quantity: user.metrics.leads },
            { title: 'Citas Pendientes', quantity: user.metrics.pendingAppointments },
            { title: 'Citas en la última semana', quantity: user.metrics.lastAppointments },
            { title: 'Planes de Trabajo enviados', quantity: user.metrics.sentPlans },
        ];

        setGeneralData(data);
    }, [user]);

    return (
        <>
            {
                selectedCompany === 1 ? (
                    generalData.map((data, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <InfoCard title={data.title} quantity={data.quantity} />
                        </div>
                    ))
                ) : selectedCompany === 2 ? (
                    generalData.map((data, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <InfoCard title={data.title} quantity={data.quantity} />
                        </div>
                    ))
                ) : (
                    generalData.map((data, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <InfoCard title={data.title} quantity={data.quantity} />
                        </div>
                    ))
                )
            }
        </>
    );
};
