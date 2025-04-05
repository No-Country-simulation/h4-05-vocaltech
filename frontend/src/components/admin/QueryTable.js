import React, { useState } from 'react';

const QueryTable = ({ contactData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calcular los índices de los items que se mostrarán
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = contactData.slice(indexOfFirstItem, indexOfLastItem);

    // Función para cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Función para ir a la página siguiente
    const nextPage = () => {
        if (currentPage < Math.ceil(contactData.length / itemsPerPage)) {
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
    const totalPages = Math.ceil(contactData.length / itemsPerPage);

    return (
        <div className="table-responsive text-center pb-5 pt-3 px-2">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nro</th>
                        <th>Correo Electrónico</th>
                        <th>Teléfono</th>
                        <th>Contacto</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((query, index) => (
                        <tr key={query.id}>
                            <td className="align-middle">{index + 1}</td>
                            <td className="align-middle">{query.email}</td>
                            <td className="align-middle">
                                {query.phone ? (
                                    <a
                                        href={`https://wa.me/${query.phone.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {query.phone}
                                    </a>
                                ) : (
                                    <span className="text-muted">Sin número</span>
                                )}
                            </td>
                            <td className="align-middle">{query.message}</td>
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

export default QueryTable;
