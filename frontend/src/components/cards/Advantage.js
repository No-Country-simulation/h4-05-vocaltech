export const Advantage = ({ imgUrl, title, description }) => {
    return (
        <div className="card border-0 p-0 bg-transparent">
            <div className="card-header p-0 border-0 bg-transparent">
                <img src={imgUrl} alt={title} className="w-100 rounded" height={145} style={{ objectFit: "cover" }} />
            </div>
            <div className="card-body px-0">
                <p className="card-title fw-bolder">{title}</p>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};
