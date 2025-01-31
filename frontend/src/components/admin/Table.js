import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
//import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { loader } from "../Loader";
import { Modall } from "../Modal";
import { useModal } from "../../hooks/useModal";
import { DiagnosticSheet } from "./DiagnosticSheet";

export const Table = ({ columns, data, isLoading, isError }) => {
    const { showModal, openModal, closeModal } = useModal();
    const [selectedDiagnostic, setSelectedDiagnostic] = useState({});
    console.log(data)

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
                                <td colSpan={columns.length}>Error al traer la información. Intente nuevamente!</td>
                            </tr>
                        ) : data.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length}>No hay datos para mostrar</td>
                            </tr>
                        ) : ( data.map((item, index) => (
                            <tr key={index}>
                                {
                                    columns.map((col, idx) => (
                                        <td key={idx}>
                                            {
                                                col.property === 'diagnostic' ? 
                                                item[col.property] ? 
                                                    <button className="btn p-0" type="button" 
                                                        onClick={() => { setSelectedDiagnostic(item); openModal(); }}>
                                                        <FontAwesomeIcon icon={faEye} 
                                                            className="text-primary fs-4 icon-table" />
                                                    </button>  
                                                    : <FontAwesomeIcon icon={faTimes} 
                                                        className="text-danger fs-4" />
                                                    : item[col.property]
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        )))
                    }
                </tbody>
            </table>
            <Modall
                showModal={showModal}
                closeModal={closeModal}
                title="Ficha de Diagnóstico">
                <DiagnosticSheet data={selectedDiagnostic} />
            </Modall>
        </div>
    );
};
