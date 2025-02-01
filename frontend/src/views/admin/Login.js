import { Login as AdminLogin } from "../../components/admin/Login";

export const Login = () => {
    return (
        <div className="container py-5 mb-4" style={{ height:"100vh" }}>
            <div className="row">
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                    <AdminLogin />
                </div>
            </div>    
        </div>
    );
};
