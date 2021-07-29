import React, { Component } from 'react'
import styled from 'styled-components';

const StudiesContainer = styled.div`
    padding-left: 40px;
    display: flex;
    flex-direction: column;
`;

const StudiesTitle = styled.h1`
    font-size: xx-large;
    color: #187bc1;
    letter-spacing: 10px;
`;

const StudiesDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const StudiesName = styled.h2`
    font-size: x-large;
    font-weight: 600;
`;

const StudiesDescription = styled.p`
    font-size: large;
`;

export default class Studies extends Component {
    render() {
        const {data} = this.props;
        return (
            <StudiesContainer>
                <StudiesTitle>Mis Estudios</StudiesTitle>
                {
                    data.map((data, index) =>(
                        <StudiesDiv key={index}>
                            <StudiesName>{data.name}</StudiesName>
                            <StudiesDescription>{data.description}</StudiesDescription>
                        </StudiesDiv>
                    ))
                }
            </StudiesContainer>
        )
    }
}
