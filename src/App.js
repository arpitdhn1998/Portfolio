import React from 'react';
import './App.css';
import Navbars from "./components/my-navbar/Navbars";
import Caraousel from "./components/mycaraousel/Caraousel";
import Title from "./components/mytitle/Title";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import About from "./pages/About";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Contact from "./pages/contact/Contact";
import Skills from "./pages/Skills/Skill";
import Experience from "./pages/experience/Experience";
import Footer from "./components/footer/Footer";
import Timelines from "./components/timeline/Timelines";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Navbars />
      <Caraousel />
      <Title />
      {<Particles
        className="particles particles-box"
        params={particlesOptions}
      />}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >

          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>


      <Container className="container-box rounded  ">
        <Slide bottom duration={500}>
          <hr />
          <Skills />

        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Timelines />

          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Experience />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>

      <hr />
      <Footer />

    </div>
  );
}

export default App;
