import { useEffect, useState } from "react";
import { InfoCard } from "../../components/admin/InfoCard";
import { prueba } from "../../utils/infoPrueba";
import { useCompanySelect } from "../../contexts/CompanySelected";

export const Home = () => {
    const [generalData, setGeneralData] = useState([]);
    const { selectedCompany } = useCompanySelect();

    useEffect(() => {
        setGeneralData(prueba.informacionGeneral);
    }, []);

    return (
        <>
            {
                selectedCompany === 1 ? (
                    'cards Vos y tu voz'
                ) : selectedCompany === 2 ? (
                    'cards No Country'
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
