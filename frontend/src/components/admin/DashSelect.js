export const DashSelect = () => {
    return (
        <>
            <label htmlFor="dashboardSelect" className="form-label text-white">Seleccionar Dashboard</label>
            <select className="form-select" id="dashboardSelect" defaultValue="general">
                <option value="general">General</option>
                <option value="vosYtuVoz">Vos y tu Voz</option>
                <option value="noCountry">No Country</option>
            </select>
        </>
    );
};
