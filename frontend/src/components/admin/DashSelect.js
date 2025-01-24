import { useCompanySelect } from "../../contexts/CompanySelected";

export const DashSelect = () => {
    const { selectedValue, changeSelectedValue } = useCompanySelect();
    const handleChange = (e) => changeSelectedValue(e.target.options[e.target.selectedIndex].text);

    return (
        <>
            <p className="form-label text-white">Seleccionar Organización</p>
            <select name={selectedValue} className="form-select" onChange={handleChange}>
                <option value="general">General</option>
                <option value="vosYtuVoz">Vos y tu Voz</option>
                <option value="noCountry">No Country</option>
            </select>
        </>
    );
};
