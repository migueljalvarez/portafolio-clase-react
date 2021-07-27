import React, { Component } from "react";
import styled from "styled-components";
import Social from "./Social";

const AboutContainer = styled.div`
  width: 255px;
  text-align: center;
  font-family: Arial;
  color: slategray;
  margin: 0 20px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  margin: 20px;
  box-shadow: 0px 0px 15px 5px slategray;
  border: solid 2px #187bc1;
`;
const Name = styled.h1`
  color: #187bc1;
  font-size: xx-large;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Jobs = styled.h3`
  color: #187bc1;
  font-size: large;
  margin-top: 5px;
  margin-bottom: 5px;
`;
class About extends Component {
  render() {
    const { data } = this.props;
    const {
      name,
      lastName,
      jobs,
      description,
      city,
      imageUrl,
      imageAlt,
      networks,
    } = data;
    return (
      <AboutContainer>
        <Avatar src={imageUrl} alt={imageAlt} />
        <Name>
          {name} {lastName}
        </Name>
        <Jobs>{jobs}</Jobs>
        <p>{description}</p>
        <p>{city}</p>
        <Social data={networks} />
      </AboutContainer>
    );
  }
}
export default About;
