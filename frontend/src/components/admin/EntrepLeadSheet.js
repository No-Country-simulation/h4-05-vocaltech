export const EntrepLeadSheet = ({ data }) => {


    return (
        <div className="container">
            <p>Nombre completo: <em>{data.fullname}</em></p>
            <p>Red social: <em>{data.socialMedia}</em></p>
            <p>Sector del Proyecto: <em>{data.projectSector}</em></p>
            <p>Email: <em>{data.email}</em></p>
            <p>Phone: <em>{data.phone}</em></p>
            <hr />
            <p className="fs-5">Respuestas del formulario:</p>
            <ul className="list-group-numbered">
                {
                    data.answers.map(answer => (
                        <li key={answer.id} className="list-group-item border-0 mb-2">
                            <strong>{answer.question.value}</strong>
                            <div className="mt-2">R: {answer.value}</div>
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
