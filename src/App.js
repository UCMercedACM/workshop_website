import React, { Component } from 'react';
import {Container} from 'semantic-ui-react'

//IMPORT COMPONENTS
import NavBar from "./components/NavBar";
import AboutMe from "./components/aboutMe";
import SubHeader from "./components/subHeader";
import Footer from "./components/Footer";
import WorkExperience from "./components/workExperience";
import Skills from "./components/skills";

//IMPORT CSS
import "./assets/css/menu.css";
import "./assets/css/container.css";
import "./assets/css/footer.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <SubHeader/>
        <Container>
          <AboutMe/>
          <WorkExperience/>
          <Skills/>
        </Container>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
