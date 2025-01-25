import { useEffect, useState } from "react";
import { InfoCard } from "../../components/admin/InfoCard";
import { prueba } from "../../utils/infoPrueba";
import { useCompanySelect } from "../../contexts/CompanySelected";

export const Home = () => {
    const [generalData, setGeneralData] = useState([]);
    const { selectedValue } = useCompanySelect();

    useEffect(() => {
        setGeneralData(prueba.informacionGeneral);
    }, []);

    return (
        <>
            {
                selectedValue === "Vos y tu Voz" ? (
                    'cards Vos y tu voz'
                ) : selectedValue === "No Country" ? (
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
