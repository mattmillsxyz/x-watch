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
  color: #333333;
  font-weight: 600;
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
  padding-bottom: 2rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Mission = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 2rem;
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
`;

const Status = styled.span``;

const getStatusStyle = status => {
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
  const { edges } = launches;
  const latestFlight = latest.edges[0].node.flight_number;

  return edges.map(edge => {
    if (edge.node.flight_number && edge.node.flight_number !== latestFlight) {
      return (
        <Launch key={`previous-list--${edge.node.flight_number}`}>
          <Patch>
            <img
              src={edge.node.links.mission_patch}
              alt={`${edge.node.mission_name} mission patch`}
            />
          </Patch>
          <Mission>
            <MissionName>{edge.node.mission_name}</MissionName>
            <Details>
              {edge.node.details
                ? `${edge.node.details.substring(0, 160)}...`
                : 'No description provided.'}

              <DetailsLink>
                <Link
                  to={edge.node.fields.slug}
                  aria-label={`Go to ${edge.node.mission_name} launch details`}
                >
                  LAUNCH DETAILS
                </Link>
              </DetailsLink>
            </Details>
          </Mission>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Date>{edge.node.launch_date_utc}</Date>
              <Number>
                <span>#</span>
                {edge.node.flight_number}
              </Number>
            </div>
            <Status style={getStatusStyle(edge.node.launch_success)}>
              {edge.node.launch_success ? 'SUCCESSFUL' : 'FAILURE'}
            </Status>
          </div>
        </Launch>
      );
    }

    return false;
  });
};

const PreviousLaunches = data => (
  <StaticQuery
    query={previousLaunches}
    render={data => (
      <Wrapper>
        <Header>
          <Heading>PREVIOUS LAUNCHES</Heading>
        </Header>
        <Container>
          <LaunchList>
            {renderList(
              data.allInternalPastLaunches,
              data.allInternalLatestLaunch
            )}
          </LaunchList>
        </Container>
      </Wrapper>
    )}
  />
);

const previousLaunches = graphql`
  {
    allInternalPastLaunches {
      edges {
        node {
          flight_number
          mission_name
          id
          launch_date_utc(formatString: "MM.DD.YYYY")
          details
          links {
            mission_patch
          }
          launch_success
          fields {
            slug
          }
        }
      }
    }
    allInternalLatestLaunch {
      edges {
        node {
          flight_number
        }
      }
    }
  }
`;

export default PreviousLaunches;
