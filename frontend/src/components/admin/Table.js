import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { PaginationComponent as Pagination } from "../Pagination";
import { loader } from "../Loader";
import { Modall } from "../Modal";
import { useModal } from "../../hooks/useModal";
import { DiagnosticSheet } from "./DiagnosticSheet";
import { SendPlan } from "./SendPlan";
import { EditAdmin } from "./EditAdmin";
import { DeleteAdmin } from "./DeleteAdmin";

export const Table = ({ columns, data, isLoading, isError, getData, updateUser, deleteUser }) => {
    const { showModal, openModal, closeModal } = useModal();
    const [selectedItem, setSelectedItem] = useState({});
    const [title, setTitle] = useState("");
    const [typeChildren, setTypeChildren] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleOpenModal = (item, title, children) => {
        setSelectedItem(item);
        setTitle(title);
        setTypeChildren(children)
        openModal();
    };

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const lastItem = currentPage * itemsPerPage;
    const firstItem = lastItem - itemsPerPage;
    const currentItems = data.slice(firstItem, lastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    return (
        <div className="table-responsive text-center pb-5 pt-3 px-2">
            <table className="table table-striped">
                <thead>
                    <tr>
                        {
                            columns.map((col, index) => (
                                <th key={index}>{col.title}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? (
                            <tr>
                                <td colSpan={columns.length}><loader.tableLoader /></td>
                            </tr>
                        ) : isError ? (
                            <tr>
                                <td colSpan={columns.length}>
                                    <button className="btn btn-warning rounded-pill px-5" type="button"
                                        onClick={getData}>
                                        Error al traer la información. Intente nuevamente
                                        <FontAwesomeIcon icon={faSyncAlt}
                                            className="ms-2" />
                                    </button>
                                </td>
                            </tr>
                        ) : currentItems.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length}>No hay datos para mostrar</td>
                            </tr>
                        ) : (currentItems.map((item, index) => (
                            <tr key={index} className="align-middle">
                                {
                                    columns.map((col, idx) => (
                                        <td key={idx}>
                                            {
                                                col.property === "email" ? 
                                                    <a href={`mailto:${item[col.property]}`}>
                                                        {item[col.property]}
                                                    </a>
                                                : col.property === "phone" ?
                                                    item[col.property] !== "N/A" ? (
                                                        <a href={`https://wa.me/${item[col.property]}`} target="_blank" rel="noopener noreferrer">
                                                            {item[col.property]}
                                                        </a>
                                                    ) : "N/A"
                                                : col.property === "voiceRecordingPath" ? 
                                                    <audio controls>
                                                        <source src={item[col.property]} type="audio/webm" />
                                                            Tu navegador no soporta el elemento de audio.
                                                    </audio>
                                                : col.property === "diagnostic" ?
                                                    <button className="btn p-0" type="button"
                                                        onClick={() => handleOpenModal(item, "Ficha de Diagnóstico", "diagnostic")}>
                                                        <FontAwesomeIcon icon={faEye}
                                                            className="text-primary fs-4 icon-table" />
                                                    </button>
                                                : col.property === "acciones" ? (
                                                        <div className="d-flex justify-content-evenly">
                                                            <button className="btn p-0" type="button"
                                                                onClick={() => handleOpenModal(item, "Editar administrador", "edit")}>
                                                                <FontAwesomeIcon icon={faPen} className="text-warning fs-4" />
                                                            </button>
                                                            <button className="btn p-0" type="button"
                                                                onClick={() => handleOpenModal(item, "Eliminar administrador", "delete")}>
                                                                <FontAwesomeIcon icon={faTrash} className="text-danger fs-4" />
                                                            </button>
                                                        </div>
                                                ) : item[col.property]
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        )))
                    }
                </tbody>
            </table>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            <Modall
                showModal={showModal}
                closeModal={closeModal}
                title={title}>
                {
                    typeChildren === "diagnostic" ? (
                        <DiagnosticSheet data={selectedItem} />
                    ) : typeChildren === "plan" ? (
                        <SendPlan data={selectedItem} />
                    ) : typeChildren === "edit" ? (
                        <EditAdmin item={selectedItem} closeModal={closeModal} updateUser={updateUser} />
                    ) : typeChildren === "delete" && (
                        <DeleteAdmin data={selectedItem} closeModal={closeModal} deleteUser={deleteUser} />
                    )
                }
            </Modall>
        </div>
    );
};
