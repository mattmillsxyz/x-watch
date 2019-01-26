import React, { useState } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

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

const Date = styled.div`
  min-width: 6rem;

  @media (max-width: 740px) {
    margin-bottom: 0.5rem;
  }
`;

const Launch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }

  @media (max-width: 740px) {
    flex-direction: column;
    padding-bottom: 2rem;
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
  margin-bottom: 0.5rem;
`;

const LaunchSite = styled.div`
  margin-bottom: 2rem;

  span {
    font-weight: 600;
  }
`;

const Rocket = styled.div`
  flex: 1;
  span {
    font-weight: 600;
  }
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

const ShowAll = styled.button`
  padding: 0.5rem;
  background: ${props => props.theme.heroColor};
  color: ${props => props.theme.linkColor};
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const renderList = (launches, limit) => {
  const { edges } = launches.allInternalUpcomingLaunches;
  const limitEdges = limit ? edges.slice(0, limit) : edges;

  return limitEdges.map(edge => {
    if (edge.node.flight_number) {
      return (
        <Launch key={`upcoming-list--${edge.node.flight_number}`}>
          <Date>{edge.node.launch_date_local}</Date>
          <Mission>
            <MissionName>{edge.node.mission_name}</MissionName>
            <LaunchSite>
              <span>LAUNCH SITE:</span> {edge.node.launch_site.site_name_long}
            </LaunchSite>
          </Mission>
          <RocketDetails>
            <Rocket>
              <span>ROCKET:</span> {edge.node.rocket.rocket_name}
              <Flags
                id={edge.node.id}
                payloads={edge.node.rocket.second_stage.payloads}
              />
            </Rocket>
            <Number>
              <span>#</span>
              {edge.node.flight_number}
            </Number>
          </RocketDetails>
        </Launch>
      );
    }
    return false;
  });
};

const UpcomingLaunches = () => {
  const count = 5;
  const [limit, setLimit] = useState(count);

  return (
    <StaticQuery
      query={upcomingLaunches}
      render={data => {
        return (
          <Wrapper>
            <Header>
              <Heading>UPCOMING LAUNCHES</Heading>
            </Header>
            <Container>
              <LaunchList>{renderList(data, limit)}</LaunchList>
              <ShowAll onClick={() => setLimit(limit ? null : count)}>
                {limit ? 'SHOW ALL' : 'SHOW LESS'}
              </ShowAll>
            </Container>
          </Wrapper>
        );
      }}
    />
  );
};

const upcomingLaunches = graphql`
  {
    allInternalUpcomingLaunches {
      edges {
        node {
          flight_number
          mission_name
          id
          launch_date_local(formatString: "MM.DD.YYYY")
          launch_site {
            site_name_long
          }
          rocket {
            rocket_name
            second_stage {
              payloads {
                nationality
              }
            }
          }
        }
      }
    }
  }
`;

export default UpcomingLaunches;
