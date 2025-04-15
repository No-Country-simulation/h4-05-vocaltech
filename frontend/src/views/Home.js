import React from "react";
import { Header } from "../components/landing/Header";
import { Partners } from "../components/landing/Partners";
import { Services } from "../components/landing/Services";
import { WhyUs } from "../components/landing/WhyUs";
import { Testimonials } from "../components/landing/Testimonials";
import { FQA } from "../components/landing/FQA";
import { CallToAction } from "../components/landing/CallToAction";
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
            <FQA />
            <section className="call-to-action position-relative overflow-hidden">
                <CallToAction />
            </section>
        </>
    );
};
