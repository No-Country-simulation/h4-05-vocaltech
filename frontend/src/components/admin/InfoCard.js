export const InfoCard = ({ title, quantity }) => {
    return (
        <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title me-1">{title}</h5>
                <p className="fw-bolder" style={{fontSize: "50px",
                    background: "linear-gradient(135deg, #6a11cb, #2575fc)", 
                    WebkitBackgroundClip: "text",  
                    WebkitTextFillColor: "transparent"}}>
                    {quantity}
                </p>
            </div>
        </div>
    );
};
