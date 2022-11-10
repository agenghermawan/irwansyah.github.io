import React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import AboutMe from "../components/about-me";
import Experiences from "../components/experiences";
import Project from "../components/project";
import ContactMe from "../components/contact-me";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Experiences />
      <Project />
      <ContactMe />
    </Layout>
  );
}
