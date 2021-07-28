import React, { Component } from 'react'
import styled from 'styled-components'

const ExperienceContainer = styled.div`
  display: flex ;
  flex-direction: column;
`;
const ExperienceTitle = styled.h2`
    font-size: 18px;
    color: blue;
`;

const ExperienceElement = styled.div`
    display: flex;
    flex-direction: column;
`;

const ExperienceJobs = styled.h2`
`;

const ExperienceDescription = styled.p`
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
                            <ExperiencePost>{data.job}</ExperiencePost>
                            <ExperienceDescription>{data.description}</ExperienceDescription>
                        </ExperienceElement>
                    ))
                }
            </ExperienceContainer>
        )
    }
}
