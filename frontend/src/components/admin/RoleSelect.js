import { useState } from "react";

export const RoleSelect = () => {
    const [selectValue, setSelectedValue] = useState("Todos");
    const handleChange = (e) => setSelectedValue(e.target.value);

    return (
        <div className="d-flex flex-column align-items-end">
            <label htmlFor="filter" className="form-label">Filtrar por</label>
            <select id="filter" name={selectValue} aria-label="Filtrar" 
                className="form-select w-100" onChange={handleChange}>
                <option value="todos">Todos</option>
                <option value="emprendedor">Emprendedor</option>
                <option value="empresa">Empresa</option>
            </select>
        </div>
    );
};
