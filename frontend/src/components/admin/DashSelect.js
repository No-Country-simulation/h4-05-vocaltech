import { useCompanySelect } from "../../contexts/CompanySelected";

export const DashSelect = () => {
    const { selectedCompany, changeSelectedCompany } = useCompanySelect();

    const handleChange = (e) => {
        const value = e.target.value === "general" ? 0 : Number(e.target.value);
        changeSelectedCompany(value);
    };

    return (
        <>
            <p className="form-label text-white">Seleccionar Organización</p>
            <select name={selectedCompany} className="form-select admin-select" onChange={handleChange}>
                <option value="general">General</option>
                <option value="1">No Country</option>
                <option value="2">Vos y tu Voz</option>
            </select>
        </>
    );
};
