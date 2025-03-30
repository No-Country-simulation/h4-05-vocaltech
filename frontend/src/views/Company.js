import { Header } from "../components/company/Header";
import { Advantages } from "../components/company/Advantages";
import { Process } from "../components/entrepreneur/Process";
import { CallToAction } from "../components/company/CallToAction";
import "../styles/header.css"
import "../styles/process.css";

export const Company = () => (
    <>
        <Header />
        <Advantages />
        <section className="bg-process">
            <Process />
        </section>
        <section className="py-5 mb-5 bg-white">
            <CallToAction />
        </section> 
    </>
);
