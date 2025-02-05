import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const [isAuthenticated, setIsAuthenticated] = useState(false); 

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const tokenExpiration = localStorage.getItem("tokenExpiration");

        if (storedUser && tokenExpiration) {
            const currentTime = Date.now();

            if (currentTime > tokenExpiration) {
                logout();
            } else {
                setUser(storedUser);
                setIsAuthenticated(true);
            }
        }
    }, []);

    const login = (user) => {
        setUser(user);
        setIsAuthenticated(true);
        const expirationTime = Date.now() + 1800000;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("tokenExpiration", expirationTime);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("usersData");
        localStorage.removeItem("tokenExpiration"); 
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
