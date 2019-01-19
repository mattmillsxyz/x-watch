import React, { useState } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Flags from './Flags';

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
  color: #00caca;
  font-weight: 400;
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
`;

const Launch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f4;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Mission = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
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

const ShowAll = styled.button`
  padding: 0.5rem;
  background: #f4f4f4;
  color: #ff006b;
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
          <Date>{edge.node.launch_date_utc}</Date>
          <Mission>
            <MissionName>{edge.node.mission_name}</MissionName>
            <LaunchSite>
              <span>LAUNCH SITE:</span> {edge.node.launch_site.site_name_long}
            </LaunchSite>
          </Mission>
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
          launch_date_utc(formatString: "MM.DD.YYYY")
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
