import React from 'react';
import styled from 'styled-components';

import CountdownDetails from './CountdownDetails';

const Wrapper = styled.div`
  background: #f4f4f4;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h5`
  margin: 0 0 0 7%;
  padding-top: 3rem;
  color: #00caca;
  font-weight: 400;
`;

const Timer = styled.div`
  padding: 3% 7% 5%;
`;

const Countdown = data => {
  return (
    <Wrapper>
      <Heading>NEXT LAUNCH</Heading>
      <Timer>
        <svg viewBox="0 0 66 12">
          <text
            style={{ fontFamily: 'Rajdhani' }}
            x="50%"
            y="12"
            textAnchor="middle"
          >
            01:10:23:36
          </text>
        </svg>
        <CountdownDetails />
      </Timer>
    </Wrapper>
  );
};

export default Countdown;
