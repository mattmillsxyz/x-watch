import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import CountdownDetails from './countdownDetails';
import Timer from './timer';

const Wrapper = styled.div`
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

const isPast = (date) => {
  if (moment(Date()).isBefore(date)) {
    return false;
  }
  return true;
};

const Countdown = ({ launches }) => {
  const launch = launches.find((launch) => !isPast(launch.date_local));

  return (
    <Wrapper>
      <Heading>NEXT LAUNCH</Heading>
      <Container>
        {launch && (
          <>
            <Timer launchDate={launch.date_local} />
            <CountdownDetails data={launch} />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Countdown;
