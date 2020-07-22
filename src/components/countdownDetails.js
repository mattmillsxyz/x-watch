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
  font-weight: 600;
  margin-right: 0.5rem;
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
    margin-bottom: 0.5rem;
  }
`;

const isPast = (date) => {
  if (moment(Date()).isBefore(date)) {
    return false;
  }
  return true;
};

const CountdownDetails = (props) => {
  const { mission_name, launch_date_local, launch_site, rocket } = props.data;
  const launchDate = moment(launch_date_local).format('MM.DD.YYYY hh:mm A');

  return (
    <Wrapper>
      <LeftBlock>
        <Detail>
          <Heading>MISSION NAME:</Heading>
          {mission_name}
        </Detail>
        <Detail>
          <Heading>LAUNCH DATE:</Heading>
          {isPast(launchDate) ? 'TBD' : launchDate}
        </Detail>
        <Detail>
          <Heading>LAUNCH SITE:</Heading>
          {(launch_site && launch_site.site_name_long) || 'TBD'}
        </Detail>
      </LeftBlock>
      <RightBlock>
        <Detail>
          <Heading>ROCKET:</Heading>
          {(rocket && rocket.rocket_name) || 'N/A'}
        </Detail>
        <Detail>
          <Heading>PAYLOAD TYPE:</Heading>
          {(rocket && rocket.second_stage.payloads[0].payload_type) || 'N/A'}
        </Detail>
        <Detail>
          <Heading>MANUFACTURER:</Heading>
          {(rocket && rocket.second_stage.payloads[0].manufacturer) || 'N/A'}
        </Detail>
      </RightBlock>
    </Wrapper>
  );
};

export default CountdownDetails;
