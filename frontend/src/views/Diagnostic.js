import { Diagnostic as ComponentDiagnostic } from "../components/diagnostic/Diagnostic";

export const Diagnostic = () => {
    return (
        <section className="diagnostic container py-5 mb-5">
            <ComponentDiagnostic />
        </section>
    );
};
