export const Services = ({ selectedRole, selectedService, setSelectedService }) => {
    const handleChange = (e) => setSelectedService(Number(e.target.value));

    return (
        <>
            <label htmlFor="selectService" className="form-label fw-bold">
                ¿Cuál servico requieres/necesitas?
            </label>
            <select id="selectService" name={selectedService} 
                value={selectedService} aria-label="Seleccionar servicio" 
                className="form-select w-100" onChange={handleChange}>
                <option value="Seleccionar" disabled>Seleccionar</option>
                {
                    selectedRole === 1 ? (
                        <>
                            <option value="1">Coaching de comunicación y liderazgo</option>
                            <option value="2">Desarrollo de MVPs de alta fidelidad en 5 semanas</option>
                            <option value="5">Ambos servicios</option>
                        </> 
                    ) : selectedRole === 2 && (
                        <>
                            <option value="3">Workshops y coaching de comunicación y liderazgo</option>
                            <option value="4">Búsqueda y selección de talento</option>
                            <option value="5">Ambos servicios</option>
                        </>
                    )
                }
            </select>  
        </>
    );
};
