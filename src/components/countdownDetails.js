import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { useFetch } from '../hooks/useFetch';

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Heading = styled.span`
  margin-right: 0.5rem;
  color: grey;
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  @media (max-width: 768px) {
    align-items: flex-start;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const Detail = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const isPast = (date) => {
  if (moment(Date()).isBefore(date)) {
    return false;
  }
  return true;
};

const CountdownDetails = (props) => {
  const { name, date_local, launchpad, rocket } = props.data;
  const launchDate = moment(date_local).format('MM.DD.YYYY hh:mm A');
  const url = `https://api.spacexdata.com/v4/rockets/${rocket}`;
  const { data: rocketData } = useFetch(url);
  const launchpadUrl = `https://api.spacexdata.com/v4/launchpads/${launchpad}`;
  const { data: launchpadData } = useFetch(launchpadUrl);

  return (
    <Wrapper>
      <LeftBlock>
        <Detail>
          <Heading>MISSION NAME:</Heading>
          {name ? name : 'UNKNOWN'}
        </Detail>
        <Detail>
          <Heading>LAUNCH DATE:</Heading>
          {isPast(launchDate) ? 'TBD' : launchDate}
        </Detail>
        <Detail>
          <Heading>LAUNCH SITE:</Heading>
          {launchpadData
            ? `${launchpadData.locality}, ${launchpadData.region}`
            : 'TBD'}
        </Detail>
      </LeftBlock>
      <RightBlock>
        <Detail>
          <Heading>ROCKET:</Heading>
          {rocketData ? rocketData.name : 'N/A'}
        </Detail>
        <Detail>
          <Heading>COUNTRY:</Heading>
          {rocketData ? rocketData.country : 'N/A'}
        </Detail>
        <Detail>
          <Heading>COMPANY:</Heading>
          {rocketData ? rocketData.company : 'N/A'}
        </Detail>
      </RightBlock>
    </Wrapper>
  );
};

export default CountdownDetails;
