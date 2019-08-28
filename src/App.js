import React, { Component } from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Counters from './components/Counters';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div class="container-wrap">
          <SideBar />
          <div id="colorlib-main">
            <Home />
            <About />
            <Services />
            <Counters />
            <Skills />
            <Education />
            <Experience />
            {/* <Work /> */}
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
