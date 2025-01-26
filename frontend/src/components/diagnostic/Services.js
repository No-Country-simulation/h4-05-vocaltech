export const Services = ({ selectedRole, selectedService, setSelectedService }) => {
    const handleChange = (e) => setSelectedService(e.target.value);
    

    return (
        <>
            {
                selectedRole === "emprendedor" ? (
                    <>
                        <label htmlFor="selectService" className="form-label fw-bold">
                            ¿Cuál servico requieres/necesitas?
                        </label>
                        <select id="selectService" name={selectedService} 
                            value={selectedService} aria-label="Seleccionar servicio" 
                            className="form-select w-100" onChange={handleChange}>
                            <option value="Seleccionar" disabled>Seleccionar</option>
                            <option value="tuvozEmprendedor">Coaching de comunicación y liderazgo</option>
                            <option value="nocountryEmprendedor">Desarrollo de MVPs de alta fidelidad en 5 semanas</option>
                            <option value="ambosEmprendedor">Ambos servicios</option>
                        </select>  
                    </> 
                ) : selectedRole === "empresa" && (
                    <>
                        <label htmlFor="selectService" className="form-label fw-bold">
                            ¿Cuál servico requieres/necesitas?
                        </label>
                        <select id="selectService" name={selectedService} 
                            value={selectedService} aria-label="Seleccionar servicio" 
                            className="form-select w-100" onChange={handleChange}>
                            <option value="Seleccionar" disabled>Seleccionar</option>
                            <option value="tuvozEmpresa">Workshops y coaching de comunicación y liderazgo</option>
                            <option value="nocountryEmpresa">Búsqueda y selección de talento</option>
                            <option value="ambosEmpresa">Ambos servicios</option>
                        </select>
                    </>
                )
            }
        </>
    );
};
