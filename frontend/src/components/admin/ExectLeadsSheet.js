export const ExectLeadSheet = ({ data }) => {


    return (
        <div className="container">
            <p>Nombre completo: <em>{data.fullname}</em></p>
            <p>Red social: <em>{data.socialMedia}</em></p>
            <p>Ocupación: <em>{data.occupation}</em></p>
            <p>Nombre de la empresa: <em>{data.enterpriseName}</em></p>
            <p>Email: <em>{data.enterpriseEmail}</em></p>
            <p>Sector de la empresa: <em>{data.enterpriseSector}</em></p>
            <p>Tamaño del equipo: <em>{data.teamQuantity}</em></p>
            <hr />
            <p className="fs-5">Respuestas del formulario:</p>
            <ul className="list-group-numbered">
                {
                    data.answers.map(answer => (
                        <li key={answer.id} className="list-group-item border-0 mb-2">
                            <strong>{answer.question.value}</strong>
                            <div className="mt-2">R: {answer.value}</div>
                            {answer.id === 43 && <div className="mt-2"><strong>Especifica:</strong> {data.specifyOther}</div>}
                            <br />
                        </li>
                    ))
                }
            </ul>
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
