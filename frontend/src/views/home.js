import React from "react";
import { Header } from "../components/Header";
import { Partners } from "../components/Partners";
import { Services } from "../components/Services";
import { Benefits } from "../components/Benefits";
import { Testimonials } from "../components/testimonial/Testimonials";
import { CallToAction } from "../components/CallToAction";
import "../styles/header.css"
import "../styles/callToAction.css";

export const Home = () => {
    return (
        <>
            <Header />
            <Partners />
            <Services />
            <Benefits />
            <section className="call-to-action">
                <CallToAction />
            </section>
            <Testimonials />  
        </>
    );
};
