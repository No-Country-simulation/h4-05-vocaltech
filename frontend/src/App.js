import { AppRoutes } from "./routes/Routes";
import { AuthProvider } from "./contexts/Auth";
import "./App.css";
import "./styles/buttons.css";

export const App = () => {
    return (
        <>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </>
    );
};
