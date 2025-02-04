import { loader } from "./Loader";

export const Form = ({ isLoading, data, handleChange, handleSubmit, buttonText }) => {
    return (
        <form onSubmit={handleSubmit}>
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
                    placeholder="Vocaltech"
                />
            </div>
            <div className="form-group mb-4">
                <label className="form-label" htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    id="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="vocaltech@prueba.com"
                />
            </div>
            {
                buttonText !== "Editar" && (
                    <div className="form-group mb-4">
                        <label className="form-label" htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            required
                            id="password"
                            value={data.password}
                            onChange={handleChange}
                            placeholder="contraseña"
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
