import { createContext, useState, useContext } from "react";

const CompanySelectContext = createContext();

export const CompanySelected = ({ children }) => {
    const [selectedCompany, setSelectedCompany] = useState("General");
    const changeSelectedCompany = (value) => setSelectedCompany(value);

    return (
        <CompanySelectContext.Provider value={{ selectedCompany, changeSelectedCompany }}>
            {children}
        </CompanySelectContext.Provider>
    );
};

export const useCompanySelect = () => useContext(CompanySelectContext);
