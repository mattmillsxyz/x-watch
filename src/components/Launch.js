import React from 'react';
import styled from 'styled-components';

import LaunchDetails from './LaunchDetails';

const Wrapper = styled.div`
  background: #f4f4f4;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h5`
  margin: 0 0 0 5%;
  padding-top: 3rem;
  color: #333333;
  font-weight: 600;
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
