import Hero from '../../views/IndexSections/Hero';
import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Project from "./Project";
import History from "./History";

function Home() {
  return (
    <>
      <Hero />
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Project></Project>
      <History></History>
    </>
  );
}




export default Home;
