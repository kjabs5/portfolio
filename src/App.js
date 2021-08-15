
import React, { Component } from 'react';
import './App.css';
import AboutComponent from './components/AboutComponent';
import FooterComponent from './components/FooterComponent';
import HeroComponent from './components/HeroComponent';
import ProjectsComponent from './components/ProjectsComponent';

import SkillsComponent from './components/SkillsComponent';

function App() {
  return (
    <React.Fragment className="wrapper">
        <HeroComponent />
      
        <SkillsComponent />
        <ProjectsComponent/>
        <AboutComponent/>
        <FooterComponent/>

    </React.Fragment>


  );
}

export default App;
