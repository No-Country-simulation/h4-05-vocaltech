import React from "react";
import { Header } from "../components/Header";
import { Partners } from "../components/Partners";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/testimonial/Testimonials";
import "../styles/header.css"
import { CallToAction } from "../components/CallToAction";

export const Home = () => {
    return (
        <>
            <Header />
            <Partners />
            <Services />
            <section className="why-us py-5">
                <WhyUs />
            </section>
            <Testimonials />  
            <section className="call-to-action position-relative overflow-hidden">
                <CallToAction /> 
            </section>
        </>
    );
};
