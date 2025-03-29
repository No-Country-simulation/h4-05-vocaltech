export const Brand = ({ brand, width }) => {
    return  (
        <img src={brand} alt="Brand" className="img-fluid" width={width} 
            style={{ filter: "grayscale(100%)" }} />
    );
};
