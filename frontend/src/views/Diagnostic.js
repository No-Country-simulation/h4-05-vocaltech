import { Link } from 'react-router-dom';
import { Form as DiagnosticForm } from "../components/diagnostic/Form";

export const Diagnostic = () => {

    return (
        <div className="container">
            <h1 className="text-center">Diagnóstico</h1>
            <section className="container pb-5">
            <DiagnosticForm />
                
         
            </section>
            <section>
                <h5>Deseas agendar una cita? Contanos, qué necesitas?</h5>
                <Link to="/agendar-cita">
                    <button className="btn btn-success">Ir al calendario</button>
                </Link>
            </section>
        </div>
    );
};
