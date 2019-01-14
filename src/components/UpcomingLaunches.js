import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

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
  flex: 1;
`;

const MissionName = styled.div`
  font-size: 1.125rem;
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

const Number = styled.div`
  font-size: 1.5rem;
  line-height: 1;

  span {
    font-size: 1rem;
    line-height: 1;
    vertical-align: top;
  }
`;

const renderList = launches => {
  const { edges } = launches.allInternalUpcomingLaunches;

  return edges.map(edge => {
    return (
      <Launch key={`upcoming-list--${edge.node.flight_number}`}>
        <Date>{edge.node.launch_date_utc}</Date>
        <Mission>
          <MissionName>{edge.node.mission_name}</MissionName>
          <LaunchSite>
            <span>LAUNCH SITE:</span> {edge.node.launch_site.site_name_long}
          </LaunchSite>
        </Mission>
        <Number>
          <span>#</span>
          {edge.node.flight_number}
        </Number>
      </Launch>
    );
  });
};

const UpcomingLaunches = () => (
  <StaticQuery
    query={upcomingLaunches}
    render={data => (
      <Wrapper>
        <Header>
          <Heading>UPCOMING LAUNCHES</Heading>
        </Header>
        <Container>
          <LaunchList>{renderList(data)}</LaunchList>
        </Container>
      </Wrapper>
    )}
  />
);

const upcomingLaunches = graphql`
  {
    allInternalUpcomingLaunches(limit: 5) {
      edges {
        node {
          flight_number
          mission_name
          id
          launch_date_utc(formatString: "MM.DD.YYYY")
          launch_site {
            site_name_long
          }
        }
      }
    }
  }
`;

export default UpcomingLaunches;
