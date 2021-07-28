import React, { Component } from 'react'
import styled from 'styled-components'

const CertificationContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const CertificationItem = styles.h2`
    color: blue;
`

export default class Certification extends Component {
    render() {
        const { data } = this.props;

        return (
            <CertificationContainer>
                {
                    data.map((data, index) => (
                        <CertificationItem>{data.certification}</CertificationItem>
                    ))
                }
            </CertificationContainer>
        )
    }
}
