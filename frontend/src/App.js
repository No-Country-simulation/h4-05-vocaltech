import { AppRoutes } from './routes/Routes';
import { AuthProvider } from "./contexts/Auth";
import './App.css';

export const App = () => {
    return (
        <>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </>
    );
};
