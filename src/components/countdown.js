import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { useFetch } from '../hooks/useFetch';
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

const Countdown = () => {
  const url = `https://api.spacexdata.com/v3/launches/next`;

  const { status, data, error } = useFetch(url);

  return (
    <Wrapper>
      <Heading>NEXT LAUNCH</Heading>
      <Container>
        {isPast(data.launch_date_local) ? (
          <CountdownDetails data={data} />
        ) : (
          <>
            <Timer launchDate={data.launch_date_local} />
            <CountdownDetails data={data} />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Countdown;
