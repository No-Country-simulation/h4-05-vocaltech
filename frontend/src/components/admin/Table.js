import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

export const Table = ({ columns, data }) => {
    return (
        <div className="table-responsive text-center pb-5 pt-3 px-2">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {
                            columns.map((col, index) => (
                                <th key={index}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                {
                                    Object.keys(item).slice(0, 6).map((key, colIndex) => (
                                        key === "diagnostic" ? (
                                            item[key] ? (
                                                <td key={colIndex}>
                                                    <button className="btn btn-dark rounded-circle">
                                                        <FontAwesomeIcon icon={faEye} />
                                                    </button>
                                                </td>
                                            ) : <td key={colIndex}><FontAwesomeIcon icon={faTimes} 
                                                className="text-danger fs-3" /></td>
                                        ) : key === "plan" ? (
                                            item[key] ? (
                                                <td key={colIndex}>
                                                    <button className="btn btn-dark rounded-circle">
                                                        <FontAwesomeIcon icon={faCloudDownloadAlt} />
                                                    </button>
                                                </td>
                                            ) : (
                                                <td key={colIndex}>
                                                    <button className="btn btn-dark">
                                                        Por enviar
                                                    </button>
                                                </td>
                                            )
                                        ) : <td key={colIndex}>{item[key]}</td>    
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
