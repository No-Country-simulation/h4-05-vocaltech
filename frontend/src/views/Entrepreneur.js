import { Header } from "../components/entrepreneur/Header";
import { Advantages } from "../components/entrepreneur/Advantages";
import { Process } from "../components/entrepreneur/Process";
import { CallToAction } from "../components/entrepreneur/CallToAction";
import "../styles/header.css"
import "../styles/process.css";

export const Entrepreneur = () => (
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
