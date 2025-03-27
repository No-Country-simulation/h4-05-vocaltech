import { Header } from "../components/company/Header";
import { Services } from "../components/company/Services";
import { Process } from "../components/entrepreneur/Process";
import { Clients } from "../components/entrepreneur/Clients";
import "../styles/process.css";

export const Company = () => (
    <section className="company overflow-hidden">
        <section className=" px-0 pt-0 pb-xl-0" style={{ backgroundImage: "url(./images/bg-header.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "bottom", height: "auto" }}>
            <Header />
        </section>
        <Services />
        <section className="bg-process">
            <Process />
        </section>
        <Clients />
    </section>
);
