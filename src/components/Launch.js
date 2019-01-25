import React from 'react';
import styled from 'styled-components';

import LaunchDetails from './LaunchDetails';

const Wrapper = styled.div`
  background-color: ${props => props.theme.heroColor};
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h5`
  margin: 0 0 0 5%;
  padding-top: 3rem;
`;

const Container = styled.div`
  padding: 3% 5% 5%;
`;

const Launch = ({ heading, launchData, type }) => {
  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <Container>
        <LaunchDetails launchData={launchData} type={type} />
      </Container>
    </Wrapper>
  );
};

export default Launch;
