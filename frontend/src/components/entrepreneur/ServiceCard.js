export const ServiceCard = ({ imgUrl, title, description  }) => {
    return (
        <div className="card border-0 bg-transparent" style={{ width: "18rem"}}>
            <div className="card-header  border-0 bg-transparent">
                <img src={imgUrl} alt={title} className="img-fluid rounded-3"/>
            </div>
            <div className="card-body">
                <p className="card-title fw-bolder">{title}</p>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};