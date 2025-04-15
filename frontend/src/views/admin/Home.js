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
            { title: "Leads", quantity: user.metrics.leads },
            { title: "Convertidos", quantity: user.metrics.pendingAppointments },
            { title: "Pendientes", quantity: user.metrics.lastAppointments },
        ];

        setGeneralData(data);
    }, [user]);

    return (
        <>
            <div className="pb-5 d-md-flex justify-content-between">
                <h2>Métricas generales</h2>
            </div>
            {
                selectedCompany === 1 ? (
                    generalData.map((data, index) => (
                        <div key={index} className="col-md-6 col-lg-4 col-xl-3 mb-4">
                            <InfoCard title={data.title} quantity={data.quantity} />
                        </div>
                    ))
                ) : selectedCompany === 2 ? (
                    generalData.map((data, index) => (
                        <div key={index} className="col-md-6 col-lg-4 col-xl-3 mb-4">
                            <InfoCard title={data.title} quantity={data.quantity} />
                        </div>
                    ))
                ) : (
                    generalData.map((data, index) => (
                        <div key={index} className="col-md-6 col-lg-4 col-xl-3 mb-4">
                            <InfoCard title={data.title} quantity={data.quantity} />
                        </div>
                    ))
                )
            }
        </>
    );
};
