import React, { useState } from 'react';

const ExecLeadsTable = ({ executiveLeads }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calcular los índices de los items que se mostrarán
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = executiveLeads.slice(indexOfFirstItem, indexOfLastItem);

    // Función para cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Función para ir a la página siguiente
    const nextPage = () => {
        if (currentPage < Math.ceil(executiveLeads.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Función para ir a la página anterior
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Calcular el número total de páginas
    const totalPages = Math.ceil(executiveLeads.length / itemsPerPage);

    return (
        <div className="table-responsive text-center pb-5 pt-3 px-2">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre Cliente</th>
                        <th>Correo Electrónico</th>
                        <th>Fecha de creación</th>
                        <th>Pitch</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((lead) => (
                        <tr key={lead.id}>
                            <td className="align-middle">{lead.fullname}</td>
                            <td className="align-middle">{lead.enterpriseEmail}</td>
                            <td className="align-middle">{lead.creationDate}</td>
                            <td>{lead.voiceRecordingPath ? (
                                <audio controls>
                                    <source src={lead.voiceRecordingPath} type="audio/mpeg" />
                                    Tu navegador no soporta el elemento de audio.
                                </audio>
                            ) : "N/A"}</td>
                            <td className="align-middle">
                                <button className="btn btn-primary">Ver Detalle</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Paginación */}
            <div className="pagination">
                <button
                    onClick={prevPage}
                    className={`btn ${currentPage === 1 ? 'btn-light' : 'btn-secondary'}`}
                    disabled={currentPage === 1}
                >
                    &#60;
                </button>

                <span className="mx-2">Página {currentPage} de {totalPages}</span>

                <button
                    onClick={nextPage}
                    className={`btn ${currentPage === totalPages ? 'btn-light' : 'btn-secondary'}`}
                    disabled={currentPage === totalPages}
                >
                    &#62;
                </button>
            </div>
        </div>
    );
};

export default ExecLeadsTable;
