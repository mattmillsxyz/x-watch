import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import CountdownDetails from './CountdownDetails';
import Timer from './Timer';

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

const Countdown = () => (
  <StaticQuery
    query={nextLaunchDate}
    render={data => (
      <Wrapper>
        <Heading>NEXT LAUNCH</Heading>
        <Container>
          <Timer launchDate={data.internalNextLaunch.launch_date_utc} />
          <CountdownDetails />
        </Container>
      </Wrapper>
    )}
  />
);

const nextLaunchDate = graphql`
  {
    internalNextLaunch {
      launch_date_utc
    }
  }
`;

export default Countdown;
