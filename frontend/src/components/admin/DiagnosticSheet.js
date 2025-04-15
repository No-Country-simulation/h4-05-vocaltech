export const DiagnosticSheet = ({ data }) => {
    return (
        <div className="container text-black">
            <p className="pb-2"><strong>Nombre completo:</strong> {data.fullname}</p>
            <p className="pb-2"><strong>Red social o web: </strong>
                <a href={data.socialMedia} target="_blank" rel="noopener noreferrer">
                    {
                        data.socialMedia ? (
                            <a href={data.socialMedia} target="_blank" rel="noopener noreferrer">
                                {data.socialMedia}
                            </a>
                        ) : "Sin información"
                    }
                </a>
            </p>
            <p className="pb-2"><strong>Email: </strong>
                <a href={`mailto:${data.email}`}>
                    {data.email || data.enterpriseEmail}
                </a>
            </p>
            <p className="pb-2"><strong>Sector del Proyecto: </strong>
                {data.projectSector || data.enterpriseSector}
            </p>
            {
                data.profile.value === "Emprendedor" ? (
                    <p className="pb-2"><strong>Teléfono: </strong>
                        <a href={`https://wa.me/${data.phone}`} target="_blank" rel="noopener noreferrer">
                            {data.phone}
                        </a>
                    </p>
                ) : (
                    <>
                        <p className="pb-2"><strong>Ocupación:</strong> {data.occupation}</p>
                        <p className="pb-2"><strong>Nombre de la empresa:</strong> {data.enterpriseName}</p>
                        <p className="pb-2"><strong>Tamaño del equipo:</strong> {data.teamQuantity}</p>
                    </>
                )
            }
            <p className="pb-2"><strong>Respuestas del formulario:</strong></p>
            <ul className="list-group-numbered fw-bold">
                {
                    data.answers.map(answer => (
                        <li key={answer.id} className="list-group-item border-0 mb-2">
                            {answer.question.value}
                            <div className="mt-2 fw-normal">R: {answer.value}</div>

                            {answer.id === 43 && (
                                <div className="mt-2 p-2 rounded bg-light text-dark small border">
                                    <span className="fw-semibold">Su respuesta fue:</span>
                                    <span className="fw-normal ms-1">{data.specifyOther}</span>
                                </div>
                            )}

                            <hr className="py-2" />
                        </li>
                    ))
                }
            </ul>
            <p className="fw-bold">Pitch:</p>
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
