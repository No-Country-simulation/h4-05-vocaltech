import { useCompanySelect } from "../../contexts/CompanySelected";

export const DashSelect = () => {
    const { selectedCompany, changeSelectedCompany } = useCompanySelect();
    const handleChange = (e) => changeSelectedCompany(e.target.value);

    return (
        <>
            <p className="form-label text-white">Seleccionar Organización</p>
            <select name={selectedCompany} className="form-select" onChange={handleChange}>
                <option value="general">General</option>
                <option value="1">Vos y tu Voz</option>
                <option value="2">No Country</option>
            </select>
        </>
    );
};
