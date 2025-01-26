import { useCompanySelect } from "../../contexts/CompanySelected";

export const DashSelect = () => {
    const { selectedCompany, changeSelectedCompany } = useCompanySelect();
    const handleChange = (e) => changeSelectedCompany(e.target.options[e.target.selectedIndex].text);

    return (
        <>
            <p className="form-label text-white">Seleccionar Organización</p>
            <select name={selectedCompany} className="form-select" onChange={handleChange}>
                <option value="general">General</option>
                <option value="vosYtuVoz">Vos y tu Voz</option>
                <option value="noCountry">No Country</option>
            </select>
        </>
    );
};
