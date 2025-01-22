import { useEffect, useState } from "react";
import { InfoCard } from "../../components/admin/InfoCard";
import { prueba } from "../../utils/infoPrueba";

export const Home = ({ selectedValue }) => {
    const [generalData, setGeneralData] = useState([]);

    useEffect(() => {
        setGeneralData(prueba.informacionGeneral);
    }, []);

    return (
        <>
            {
                selectedValue === "Vos y tu Voz" ? (
                    generalData.map((data, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <InfoCard title={data.title} quantity={data.quantity} />
                        </div>
                    ))
                ) : selectedValue === "No Country" ? (
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
