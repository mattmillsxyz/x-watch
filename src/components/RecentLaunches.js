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
  margin-right: 7%;
`;

const Container = styled.div`
  padding: 2rem 7%;
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Badge = styled.img`
  height: 60px;

  svg {
    height: 60px;
  }
`;

const Date = styled.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

const renderBadges = badges => {
  const { edges } = badges.allInternalPastLaunches;

  return edges.map(edge => {
    const date = moment(edge.node.launch_date_utc);

    return (
      <div
        style={{ textAlign: 'center' }}
        key={`badge--${edge.node.flight_number}`}
      >
        <Badge
          src={edge.node.links.mission_patch}
          alt={`${edge.node.flight_number} missions patch`}
        />
        <Date>{date.format('MM.DD.YYYY')}</Date>
      </div>
    );
  });
};

const RecentLaunches = () => (
  <StaticQuery
    query={launchBadges}
    render={data => (
      <Wrapper>
        <Header>
          <Heading>RECENT LAUNCHES</Heading>
          <HeadingLink to="/launches/">VIEW ALL</HeadingLink>
        </Header>

        <Container>
          <BadgeContainer>{renderBadges(data)}</BadgeContainer>
        </Container>
      </Wrapper>
    )}
  />
);

const launchBadges = graphql`
  {
    allInternalPastLaunches(limit: 7) {
      edges {
        node {
          flight_number
          id
          launch_date_utc
          launch_year
          links {
            mission_patch
          }
        }
      }
    }
  }
`;

export default RecentLaunches;
