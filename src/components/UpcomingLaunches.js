import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import moment from 'moment';

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h5`
  margin-left: 7%;
  margin-top: 3rem;
  color: #00caca;
  font-weight: 400;
`;

const HeadingLink = styled(Link)`
  margin-top: 3rem;
  color: #ff006b;
  font-weight: 600;
  font-size: 0.83rem;
  margin-right: 7%;
`;

const Container = styled.div`
  padding: 2rem 7%;
`;

const LaunchList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Date = styled.div`
  font-size: 0.75rem;
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
  font-size: 0.875rem;
  margin-bottom: 2rem;

  span {
    font-weight: 600;
  }
`;

const Number = styled.div`
  font-size: 1.5rem;
  line-height: 1;

  span {
    font-size: 0.875rem;
    line-height: 1;
    vertical-align: top;
  }
`;

const renderList = launches => {
  const { edges } = launches.allInternalUpcomingLaunches;

  return edges.map(edge => {
    const date = moment(edge.node.launch_date_utc);

    return (
      <Launch key={`upcoming-list--${edge.node.flight_number}`}>
        <Date>{date.format('MM.DD.YYYY')}</Date>
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
          <HeadingLink to="/launches/">VIEW ALL</HeadingLink>
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
          launch_date_utc
          launch_site {
            site_name_long
          }
        }
      }
    }
  }
`;

export default UpcomingLaunches;
