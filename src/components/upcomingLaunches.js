import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { useFetch } from '../hooks/useFetch';
import Flags from './flags';

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h5`
  margin-left: 5%;
  margin-top: 3rem;
`;

const Container = styled.div`
  padding: 2rem 5%;
  display: flex;
  flex-direction: column;
`;

const LaunchList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LaunchHeading = styled.span`
  color: grey;
  margin-right: 0.5rem;
`;

const LaunchDate = styled.div`
  min-width: 6rem;
  @media (max-width: 740px) {
    margin-bottom: 0.5rem;
  }
`;

const Launch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.highlightColor};
  border: 3px solid ${(props) => props.theme.backgroundColor};
  padding: 36px 24px;
  border-radius: 4px;
  margin-bottom: 2rem;
  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

const Mission = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-right: 1rem;
`;

const MissionName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
`;

const Rocket = styled.div`
  flex: 1;
`;

const Number = styled.div`
  font-size: 1.5rem;
  line-height: 1;
  span {
    font-size: 1rem;
    line-height: 1;
    vertical-align: top;
  }
`;

const RocketDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const ShowAllWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FlagWrapper = styled.div`
  margin-top: 1rem;
`;

const ShowAll = styled.button`
  background: none;
  color: ${(props) => props.theme.linkColor};
  border: 1px solid ${(props) => props.theme.linkColor};
  border-radius: 3px;
  display: inline-block;
  padding: 4px 12px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
`;

const isPast = (date) => {
  if (moment(Date()).isBefore(date)) {
    return false;
  }
  return true;
};

const renderList = (launches, limit, launchpadData) => {
  let launchCount = 0;
  const maxLaunches = limit || launches.length;

  return launches.map((launch) => {
    if (
      launch.flight_number &&
      !isPast(launch.date_local) &&
      launchCount < maxLaunches
    ) {
      launchCount++;
      const launchpadDetails = launchpadData.filter((launchpad) => {
        return launchpad.id === launch.launchpad;
      })[0];
      console.log(launchpadDetails);

      return (
        <Launch key={`upcoming-list--${launch.flight_number}`}>
          <LaunchDate>
            {isPast(launch.date_local)
              ? 'TBD'
              : moment(launch.date_local).format('MM.DD.YYYY')}
          </LaunchDate>
          <Mission>
            <MissionName>{launch.name}</MissionName>
            <div>
              <LaunchHeading>LAUNCH SITE:</LaunchHeading>{' '}
              {launchpadDetails.full_name || 'TBD'}
            </div>
          </Mission>
          <RocketDetails>
            <Rocket>
              <LaunchHeading>ROCKET:</LaunchHeading> {launch.rocket.rocket_name}
              <FlagWrapper>
                {/* <Flags
                  id={launch.id}
                  payloads={launch.rocket.second_stage.payloads}
                /> */}
              </FlagWrapper>
            </Rocket>
            <Number>
              <span>#</span>
              {launch.flight_number}
            </Number>
          </RocketDetails>
        </Launch>
      );
    }
    return false;
  });
};

const UpcomingLaunches = ({ launches }) => {
  const launchpadUrl = `https://api.spacexdata.com/v4/launchpads/`;
  const { data: launchpadData } = useFetch(launchpadUrl);
  const count = 5;
  const [limit, setLimit] = useState(count);

  return (
    <Wrapper>
      <Header>
        <Heading>UPCOMING LAUNCHES</Heading>
      </Header>
      <Container>
        <LaunchList>{renderList(launches, limit, launchpadData)}</LaunchList>
      </Container>
      <ShowAllWrapper>
        <ShowAll onClick={() => setLimit(limit ? null : count)}>
          {limit ? 'SHOW ALL' : 'SHOW LESS'}
        </ShowAll>
      </ShowAllWrapper>
    </Wrapper>
  );
};

export default UpcomingLaunches;
