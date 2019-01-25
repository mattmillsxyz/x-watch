import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import CountdownDetails from './CountdownDetails';
import Timer from './Timer';

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
