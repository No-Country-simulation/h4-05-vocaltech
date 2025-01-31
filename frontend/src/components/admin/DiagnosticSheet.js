export const DiagnosticSheet = ({ data }) => {
    console.log(data)
    return (
        <div className="container">
            <p><strong>Nombre completo:</strong> {data.name}</p>
            <p><strong>Perfil:</strong> {data.profile.value}</p>
            <p><strong>Servicio seleccionado:</strong> {data.service.value}</p>
            <p><strong>Opciones:</strong></p>    
            <ol className="list-group-numbered">
                {
                    data.answers.map(answer => (
                        <li key={answer.id} className="list-group-item border-0 mb-2">{answer.value}</li>
                    ))
                }
            </ol>
        </div>
    );
};
