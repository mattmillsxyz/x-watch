import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';

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

const HeadingLink = styled(Link)`
  margin-top: 3rem;
  color: ${props => props.theme.linkColor};
  font-weight: 600;
  margin-right: 5%;
`;

const Container = styled.div`
  padding: 2rem 5%;
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 740px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const Badge = styled.img`
  height: 60px;

  svg {
    height: 60px;
  }

  @media (max-width: 740px) {
    margin-right: 1rem;
  }
`;

const Date = styled.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;

  @media (max-width: 740px) {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;

const renderBadges = badges => {
  const { edges } = badges.allInternalPastLaunches;

  return edges.map(edge => {
    return (
      <div
        style={{ textAlign: 'center' }}
        key={`badge--${edge.node.flight_number}`}
      >
        <Link
          to={edge.node.fields.slug}
          aria-label={`Go to flight number ${edge.node.flight_number} details`}
        >
          <Badge
            src={edge.node.mission_patch.childImageSharp.fixed.src}
            alt={`${edge.node.flight_number} mission patch`}
          />
        </Link>
        <Date>{edge.node.launch_date_utc}</Date>
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
          launch_date_utc(formatString: "MM.DD.YYYY")
          launch_year
          mission_patch {
            childImageSharp {
              fixed(width: 120) {
                src
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default RecentLaunches;
