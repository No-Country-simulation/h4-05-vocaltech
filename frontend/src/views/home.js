import React from "react";
import { Header } from "../components/Header";
import { Partners } from "../components/Partners";
import { Services } from "../components/Services";
import { Benefits } from "../components/Benefits";
import { Testimonials } from "../components/testimonial/Testimonials";
import { Diagnostic } from "../components/Diagnostic";

export const Home = () => {
  return (
    <>
      <Header />
      <Partners />
      <Services />
      <Benefits />
      <Testimonials />
      <Diagnostic />   
    </>
  );
};