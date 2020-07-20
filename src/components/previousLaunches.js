import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';

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
`;

const LaunchList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Date = styled.div`
  min-width: 6rem;
`;

const Launch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.highlightColor};
  border: 3px solid ${(props) => props.theme.backgroundColor};
  padding: 18px;
  padding-bottom: 2rem;
  border-radius: 4px;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Mission = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 2rem;

  @media (max-width: 740px) {
    padding-right: 0;
  }
`;

const MissionName = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const Details = styled.div``;

const DetailsLink = styled.div`
  margin-top: 0.5rem;

  a {
    font-weight: 600;
  }
`;

const Patch = styled.div`
  width: 60px;

  img {
    width: 60px;
  }
`;

const Number = styled.div`
  font-size: 1.5rem;
  line-height: 1;
  min-width: 3rem;
  text-align: right;

  span {
    font-size: 1rem;
    line-height: 1;
    vertical-align: top;
  }

  @media (max-width: 740px) {
    flex: 1;
  }
`;

const Status = styled.span``;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 740px) {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MissionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 740px) {
    flex-direction: column-reverse;
  }
`;

const getStatusStyle = (status) => {
  if (status) {
    return {
      color: '#27d872',
    };
  }
  return {
    color: '#FF0303',
  };
};

const renderList = (launches, latest) => {
  const latestFlight = latest.flight_number;

  return launches.map((launch) => {
    if (launch.flight_number && launch.flight_number !== latestFlight) {
      return (
        <Launch key={`previous-list--${launch.flight_number}`}>
          <Link
            to={`/launch/${launch.flight_number}`}
            aria-label={`Go to ${launch.mission_name} launch details`}
          >
            <Patch>
              <img
                src={launch.links.mission_patch || '/images/space-x-badge.png'}
                alt={`${launch.mission_name} mission patch`}
              />
            </Patch>
          </Link>
          <MissionWrapper>
            <Mission>
              <MissionName>{launch.mission_name}</MissionName>
              <Details>
                {launch.details
                  ? `${launch.details.substring(0, 140)}...`
                  : 'No description provided.'}

                <DetailsLink>
                  <Link
                    to={`/launch/${launch.flight_number}`}
                    aria-label={`Go to ${launch.mission_name} launch details`}
                  >
                    LAUNCH DETAILS
                  </Link>
                </DetailsLink>
              </Details>
            </Mission>
            <StatWrapper>
              <DateWrapper>
                <Date>{launch.launch_date_local}</Date>
                <Number>
                  <span>#</span>
                  {launch.flight_number}
                </Number>
              </DateWrapper>
              <Status style={getStatusStyle(launch.launch_success)}>
                {launch.launch_success ? 'SUCCESSFUL' : 'FAILURE'}
              </Status>
            </StatWrapper>
          </MissionWrapper>
        </Launch>
      );
    }

    return false;
  });
};

const PreviousLaunches = (props) => {
  const url = `https://api.spacexdata.com/v3/launches/past?order=desc`;
  const { status, data, error } = useFetch(url);

  return (
    <Wrapper>
      <Header>
        <Heading>PREVIOUS LAUNCHES</Heading>
      </Header>
      <Container>
        <LaunchList>{renderList(data, props.latestlaunchData)}</LaunchList>
      </Container>
    </Wrapper>
  );
};

export default PreviousLaunches;
