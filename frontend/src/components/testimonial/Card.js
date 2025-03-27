export const Card = ({ name, role, description, imgUrl, logoCompany  }) => {
    return (
        <div className="border shadow-md rounded-3 py-4 px-3 bg-special-gray h-100">
            <div className="card-body">
            <img
                    src={logoCompany}
                    alt="Logo compañia"
                    style={{ width: "50px" }}
                />
                <p className="card-text pt-4">"{description}"</p>
            </div>
            <div className="card-footer d-flex border-0 bg-transparent pt-5">
                <img
                    src={imgUrl}
                    alt={name}
                    className="object-fit-contain rounded-circle me-4"
                    style={{ width: "60px", height: "60px" }}
                />
                <div className="align-self-center">
                    <small className="card-title">{role}</small>
                    <p className="card-subtitle fw-bold">{name}</p>
                </div>
            </div>
        </div>
    );
};
