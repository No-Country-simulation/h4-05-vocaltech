export const Table = ({ columns, data }) => {
    return (
        <div className="table-responsive text-center">
            <table className="table table-striped">
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
                                        <td key={colIndex}>{item[key]}</td>
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
