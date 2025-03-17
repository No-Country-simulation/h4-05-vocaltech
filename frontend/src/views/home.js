import React from "react";
import { Header } from "../components/Header";
import { Partners } from "../components/Partners";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/testimonial/Testimonials";
import "../styles/header.css"

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
        </>
    );
};
