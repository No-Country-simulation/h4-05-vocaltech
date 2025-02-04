import { loader } from "./Loader";

export const Form = ({ isLoading, data, handleChange, handleSubmit, buttonText, className="" }) => {
    return (
        <form onSubmit={handleSubmit} className={className}>
            <div className="form-group mb-4">
                <label className="form-label" htmlFor="fullname">Nombre de usuario</label>
                <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    id="fullname"
                    required
                    value={data.fullname}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-4">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    id="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            {
                buttonText !== "Editar" && (
                    <div className="form-group mb-4">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            required
                            id="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                )
            }
            <div className="d-flex justify-content-center">
                <button
                    type="submit"
                    className="btn btn-login rounded-pill w-100" disabled={isLoading}>
                    {
                        isLoading ? (
                            <loader.GeneralLoader />
                        ) : (
                            buttonText
                        )
                    }
                </button>
            </div>
        </form>
    );
};
