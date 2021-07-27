import React, { Component } from "react";
import styled from 'styled-components';

const Networks = styled.a`
  font-size: x-large;
  margin: 0px 5px;
  color: slategray;
`;

class Social extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((data) => (
          <Networks key={data.name} href={data.url}>
            {data.icon}
          </Networks>
        ))}
      </div>
    );
  }
}
export default Social;
