import React, { Component } from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import styled from "styled-components";

import { Info } from "../utils/data";
import "bootstrap/dist/css/bootstrap.min.css";

import Certification from "../components/Certification";
import Experience from "../components/Experience";
import Studies from "../components/Studies";

const { skills , certifications, experience, studies} = Info;

const Main = styled.main`
  display: flex;
`;
const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
`;
class App extends Component {
  render() {
    return (
      <Main>
        <Wrapper>
          <About data={Info} />
          <div>
            <Experience data={experience} />
            <Certification data={certifications} />
            <Studies data={studies} />
            <Skills data={skills} />
          </div>
        </Wrapper>
      </Main>
    );
  }
}
export default App;
