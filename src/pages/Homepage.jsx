import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CompleteService from "../components/CompleteService";
import Trusted from "../components/Trusted";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeatureSection />
      <CompleteService />
      <Trusted />
      <Footer />
    </>
  );
};

export default Homepage;
