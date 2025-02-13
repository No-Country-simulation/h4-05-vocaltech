export const SendPlan = ({ data }) => {
    return (
        <div className="container">
            <p>El plan se enviará al correo {data.email}. ¿Estás de acuerdo?</p>
            <div className="d-flex flex-wrap flex-md-nowrap gap-3">
                <button type="button" className="btn btn-login rounded-pill w-100">Enviar plan</button>
                <button type="button" className="btn btn-danger rounded-pill w-100">No enviar ningún plan</button>
            </div> 
        </div>
    );
};
