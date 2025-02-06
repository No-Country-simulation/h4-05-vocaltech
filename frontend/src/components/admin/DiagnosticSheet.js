export const DiagnosticSheet = ({ data }) => {
    console.log(data)
    

    return (
        <div className="container">
            <p>Nombre completo: {data.name}</p>
            <p>Perfil: {data.profile.value}</p>
            <p>Servicio seleccionado: {data.service.value}</p>
            <p>Opciones:</p>    
            <ol className="list-group-numbered">
                {
                    data.answers.map(answer => (
                        <li key={answer.id} className="list-group-item border-0 mb-2">{answer.value}</li>
                    ))
                }
            </ol>
            <p>Pitch:</p> 
            <audio controls>
                <source src={data.voiceRecordingPath} type="audio/webm" />
                <a href={data.voiceRecordingPath} download target="_blank" rel="noopener noreferrer">
                    Descargar el audio
                </a>
                Tu navegador no soporta el elemento de audio.
            </audio>
        </div>
    );
};
