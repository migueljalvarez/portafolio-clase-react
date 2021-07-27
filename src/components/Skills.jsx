import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components";

const SkillsContainer = styled.div`
  padding-left: 20px;
`;
const SkillsTitle = styled.h1`
  color: #187bc1;
  font-size: xx-large;
  padding-left: 20px;
  letter-spacing: 10px;
`;
const SkillsItems = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const SkillItem = styled.div`
  width: 250px;
  margin: 20px;
`;

class Skills extends Component {
  render() {
    const { data } = this.props;
    return (
      <SkillsContainer>
        <SkillsTitle>Habilidades</SkillsTitle>
        <br />
        <SkillsItems>
          {data.map((data, index) => (
            <SkillItem key={index}>
              <p>{data.name}</p>
              <ProgressBar animated now={data.percent} style={{height: 0.5+'em'}} />
            </SkillItem>
          ))}
        </SkillsItems>
      </SkillsContainer>
    );
  }
}
export default Skills;
