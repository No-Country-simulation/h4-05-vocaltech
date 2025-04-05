import React, { useState } from 'react';
import { useModal } from "../../hooks/useModal";
import { Modall } from "../Modal";
import { EntrepLeadSheet } from "./EntrepLeadSheet";

const EntrepLeadsTable = ({ entrepreneurLeads }) => {
    const { showModal, openModal, closeModal } = useModal();
    const [selectedItem, setSelectedItem] = useState({});
    const [title, setTitle] = useState("");
    const [typeChildren, setTypeChildren] = useState("");


    const handleOpenModal = (item, title, children) => {
        setSelectedItem(item);
        setTitle(title);
        setTypeChildren(children)
        openModal();
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calcular los índices de los items que se mostrarán
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = entrepreneurLeads.slice(indexOfFirstItem, indexOfLastItem);

    // Función para cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Función para ir a la página siguiente
    const nextPage = () => {
        if (currentPage < Math.ceil(entrepreneurLeads.length / itemsPerPage)) {
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
    const totalPages = Math.ceil(entrepreneurLeads.length / itemsPerPage);

    return (
        <div className="table-responsive text-center pb-5 pt-3 px-2">
            <Modall
                showModal={showModal}
                closeModal={closeModal}
                title={title}>
                {
                    typeChildren === "diagnostic" &&
                    <EntrepLeadSheet data={selectedItem} />

                }
            </Modall>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre Cliente</th>
                        <th>Correo Electrónico</th>
                        <th>Teléfono</th>
                        <th>Fecha de creación</th>
                        <th>Pitch</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((lead) => (
                        <tr key={lead.id}>
                            <td className="align-middle">{lead.fullname}</td>
                            <td className="align-middle">{lead.email}</td>
                            <td className="align-middle">
                                {lead.phone ? (
                                    <a
                                        href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {lead.phone}
                                    </a>
                                ) : (
                                    <span className="text-muted">Sin número</span>
                                )}
                            </td>
                            <td className="align-middle">{lead.creationDate}</td>
                            <td>{lead.voiceRecordingPath ? (
                                <audio controls>
                                    <source src={lead.voiceRecordingPath} type="audio/mpeg" />
                                    Tu navegador no soporta el elemento de audio.
                                </audio>
                            ) : "N/A"}</td>
                            <td className="align-middle">
                                <button className="btn btn-secondary" onClick={() => handleOpenModal(lead, "Ficha de Diagnóstico", "diagnostic")}>Ver Detalle</button>
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

export default EntrepLeadsTable;
