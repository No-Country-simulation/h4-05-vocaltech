import React, { useState } from 'react';

const SubscriptionsTable = ({ subscriptionsData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calcular los índices de los items que se mostrarán
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = subscriptionsData.slice(indexOfFirstItem, indexOfLastItem);

    // Función para cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Función para ir a la página siguiente
    const nextPage = () => {
        if (currentPage < Math.ceil(subscriptionsData.length / itemsPerPage)) {
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
    const totalPages = Math.ceil(subscriptionsData.length / itemsPerPage);

    return (
        <div className="table-responsive text-center pb-5 pt-3 px-2">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nro</th>
                        <th>Correo Electrónico</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((subscription, index) => (
                        <tr key={subscription.id}>
                            <td className="align-middle">{index + 1}</td>
                            <td className="align-middle">{subscription.email}</td>
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

export default SubscriptionsTable;
