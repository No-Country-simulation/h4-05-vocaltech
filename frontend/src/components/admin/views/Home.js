import { useCompanySelect } from "../../../contexts/CompanySelected";

export const Home = () => {
    const { selectedValue } = useCompanySelect();

    return (
        <>
            {
                selectedValue === "Vos y tu Voz" ? (
                    "Cards con información de Vos y tu Voz"
                ) : selectedValue === "No Country" ? (
                    "Cards con información de No Country"
                ) : (
                    "Cards con información General"
                )
            }
        </>
    );
};
