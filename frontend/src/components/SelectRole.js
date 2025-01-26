export const SelectRole = ({ all, selectedRole, setSelectedRole }) => {
    const handleChange = (e) => setSelectedRole(e.target.value);

    return (
        <select id="selectRole" name={selectedRole} value={selectedRole} aria-label="Seleccionar rol" 
            className="form-select w-100" onChange={handleChange}>
            {
                all ? (
                    <option value="todos">Todos</option>
                ) : <option value="Seleccionar" disabled>Seleccionar</option>
            }
            <option value="emprendedor">Emprendedor</option>
            <option value="empresa">Empresa</option>
        </select>
    );
};
