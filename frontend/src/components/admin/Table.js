import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faTimes, faEye, faCloudDownloadAlt, faEnvelope, faPen, faTrash, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { PaginationComponent as Pagination } from "../Pagination";
import { loader } from "../Loader";
import { Modall } from "../Modal";
import { useModal } from "../../hooks/useModal";
import { DiagnosticSheet } from "./DiagnosticSheet";
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
                        ) : ( currentItems.map((item, index) => (
                            <tr key={index}>
                                {
                                    columns.map((col, idx) => (
                                        <td key={idx}>
                                            {
                                                col.property === "diagnostic" ? 
                                                item[col.property] ? 
                                                    <button className="btn p-0" type="button" 
                                                        onClick={() => handleOpenModal(item, "Ficha de Diagnóstico", "diagnostic")}>
                                                        <FontAwesomeIcon icon={faEye} 
                                                            className="text-primary fs-4 icon-table" />
                                                    </button>  
                                                    : <FontAwesomeIcon icon={faTimes} 
                                                        className="text-danger fs-4" />
                                                : col.property === "plan" ? (
                                                    item.status === "cancelada" || item.status === "pendiente" ? (
                                                        <FontAwesomeIcon icon={faTimes} className="text-danger fs-4" />
                                                    ) : item[col.property] ? (
                                                        <button className="btn p-0">
                                                            <FontAwesomeIcon icon={faCloudDownloadAlt} 
                                                                className="text-success fs-4 icon-table" />
                                                        </button>
                                                    ) : (
                                                        <button className="btn p-0" type="button"
                                                            onClick={() => handleOpenModal(item, "Enviar plan de trabajo", "plan")}>
                                                            <FontAwesomeIcon icon={faEnvelope} 
                                                                className="text-warning fs-4 icon-table" />
                                                        </button>
                                                    )
                                                ) : col.property === "acciones" ? (
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
                        <div className="py-2">
                            <p className="pb-1">El plan se enviará al correo {selectedItem.email}</p>
                            <input className="w-100" type="file" />
                        </div>
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
