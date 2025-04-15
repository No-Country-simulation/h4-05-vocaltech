import { Header } from "../components/company/Header";
import { Advantages } from "../components/company/Advantages";
import { Process } from "../components/Process";
import { CallToAction } from "../components/company/CallToAction";
import "../styles/header.css"
import "../styles/process.css";

export const Company = () => (
    <>
        <Header />
        <Advantages />
        <section className="bg-darkblue py-5">
            <Process />
        </section>
        <section className="py-5 bg-white">
            <CallToAction />
        </section> 
    </>
);
