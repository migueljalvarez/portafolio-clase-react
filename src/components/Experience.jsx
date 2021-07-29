import React, { Component } from 'react'
import styled from 'styled-components'

const ExperienceContainer = styled.div`
  display: flex ;
  flex-direction: column;
  padding-left: 40px;
  
`;
const ExperienceTitle = styled.h2`
    color: #187bc1;
    font-size: xx-large;
    letter-spacing: 10px;
`;

const ExperienceElement = styled.div`
    display: flex;
    flex-direction: column;
`;

const ExperienceJobs = styled.h2`
    font-size: x-large;
`;

const ExperienceDescription = styled.p`
    font-size: large;
`;

export default class Experience extends Component {
    render() {
        const { data } = this.props;

        return (
            <ExperienceContainer>
                <ExperienceTitle>Experiencia</ExperienceTitle>
                {
                    data.map((data, index) => (
                        <ExperienceElement key={index}>
                            <ExperienceJobs>{data.job}</ExperienceJobs>
                            <ExperienceDescription>{data.description}</ExperienceDescription>
                        </ExperienceElement>
                    ))
                }
            </ExperienceContainer>
        )
    }
}
