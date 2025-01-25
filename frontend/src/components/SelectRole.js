import { useState } from "react";

export const SelectRole = () => {
    const [selectValue, setSelectedValue] = useState("Todos");
    const handleChange = (e) => setSelectedValue(e.target.value);

    return (
        <select id="selectRole" name={selectValue} aria-label="Seleccionar rol" 
            className="form-select w-100" onChange={handleChange}>
            <option value="todos">Todos</option>
            <option value="emprendedor">Emprendedor</option>
            <option value="empresa">Empresa</option>
        </select>
    );
};
