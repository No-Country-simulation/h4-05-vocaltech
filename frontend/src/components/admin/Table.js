//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
//import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import { faEye } from "@fortawesome/free-solid-svg-icons";
//import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

export const Table = ({ columns, data }) => {
    return (
        <div className="table-responsive text-center pb-5 pt-3 px-2">
            <table className="table table-hover">
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
                        data.map((item, index) => (
                            <tr key={index}>
                                {
                                    columns.map((col, idx) => (
                                        <td key={idx}>
                                            {item[col.property]}
                                        </td>
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
