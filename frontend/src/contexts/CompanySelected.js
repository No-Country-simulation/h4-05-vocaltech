import { createContext, useState, useContext } from "react";

const CompanySelectContext = createContext();

export const CompanySelected = ({ children }) => {
    const [selectedValue, setSelectedValue] = useState("General");
    const changeSelectedValue = (value) => setSelectedValue(value);

    return (
        <CompanySelectContext.Provider value={{ selectedValue, changeSelectedValue }}>
            {children}
        </CompanySelectContext.Provider>
    );
};

export const useCompanySelect = () => useContext(CompanySelectContext);
