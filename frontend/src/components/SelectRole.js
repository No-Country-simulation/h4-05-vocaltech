export const SelectRole = ({ all, selectedRole, setSelectedRole }) => {
    const handleChange = (e) => {
        const value = e.target.value === "Todos" ? 0 : Number(e.target.value);
        setSelectedRole(value); 
    };

    return (
        <select id="selectRole" name={selectedRole}  value={selectedRole} aria-label="Seleccionar rol" 
            className="form-select w-100" onChange={handleChange}>
            {
                all ? (
                    <option value="Todos">Todos</option>
                ) : <option value="Seleccionar" disabled>Seleccionar</option>
            }
            <option value="1">Emprendedor</option>
            <option value="2">Empresa</option>
        </select>
    );
};
