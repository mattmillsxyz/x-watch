import React from 'react';
import styled from 'styled-components';

import LatestLaunchDetails from './LatestLaunchDetails';

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

const Container = styled.div`
  padding: 3% 7% 5%;
`;

const LatestLaunch = data => {
  return (
    <Wrapper>
      <Heading>LATEST LAUNCH</Heading>
      <Container>
        <LatestLaunchDetails />
      </Container>
    </Wrapper>
  );
};

export default LatestLaunch;
