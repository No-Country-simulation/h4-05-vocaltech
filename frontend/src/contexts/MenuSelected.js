import { createContext, useState, useContext } from "react";

const MenuSelectedContext = createContext();

export const MenuSelected = ({ children }) => {
    const [selectedMenu, setSelectedMenu] = useState("Inicio"); 
    const changeSelectedMenu = (menu) => setSelectedMenu(menu); 

    return (
        <MenuSelectedContext.Provider value={{ selectedMenu, changeSelectedMenu }}>
            {children} 
        </MenuSelectedContext.Provider>
    );
};

export const useMenuSelect = () => useContext(MenuSelectedContext);
