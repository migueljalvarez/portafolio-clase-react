import React, { Component } from 'react'
import styled from 'styled-components'

const CertificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 40px;
`;

const CertificationTitle = styled.h2`
    color: #187bc1;
    font-size: xx-large;
    letter-spacing: 10px;
`;

const CertificationItem = styled.p`
    font-size: x-large;
    font-weight: 500;
`;

export default class Certification extends Component {
    render() {
        const { data } = this.props;

        return (
            <CertificationContainer>
                <CertificationTitle>Certificaciones</CertificationTitle>
                {
                    data.map((data, index) => (
                        <CertificationItem key={index}>{data}</CertificationItem>
                    ))
                }
            </CertificationContainer>
        )
    }
}
