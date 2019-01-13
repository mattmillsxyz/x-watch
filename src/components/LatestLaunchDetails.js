import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import moment from 'moment';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.span`
  font-weight: 600;
  margin-right: 0.5rem;
`;

const MissionName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;

  h1 {
    line-height: 1;
  }
`;

const Status = styled.span`
  color: #27d872;
`;

const Container = styled.div`
  display: flex;
`;

const PatchBlock = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 160px;
  }
`;

const DetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
`;

const Detail = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.35rem;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  a {
    padding: 0.75rem 1.75rem;
    border: 2px solid #ff006b;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.125s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Number = styled.div`
  font-size: 1.5rem;
  line-height: 1;
  width: 160px;
  display: flex;
  justify-content: center;

  span {
    font-size: 1rem;
    line-height: 1;
    vertical-align: top;
    margin-left: 0.5rem;
  }
`;

const LatestLaunchDetails = () => {
  return (
    <StaticQuery
      query={latestLaunch}
      render={data => {
        const { edges } = data.allInternalLatestLaunch;
        const {
          mission_name,
          launch_date_utc,
          launch_site,
          flight_number,
          launch_success,
          details,
          links,
        } = edges[0].node;

        const date = moment(launch_date_utc);

        return (
          <Wrapper>
            <Container>
              <DetailsBlock>
                <MissionName>
                  <h1>{mission_name}</h1>
                </MissionName>
                <Detail>{details}</Detail>
                <Detail>
                  <Heading>LAUNCH STATUS:</Heading>
                  <Status>{launch_success ? 'SUCCESSFUL' : 'FAILURE'}</Status>
                </Detail>
                <Detail>
                  <Heading>LAUNCH DATE:</Heading>
                  {date.format('MM.DD.YYYY')}
                </Detail>
                <Detail>
                  <Heading>LAUNCH SITE:</Heading>
                  {launch_site.site_name_long}
                </Detail>
              </DetailsBlock>
              <PatchBlock>
                <img src={links.mission_patch} alt={`${mission_name} patch`} />
              </PatchBlock>
            </Container>
            <Actions>
              <Link to="/" arial-label="Go to flight details">
                LAUNCH DETAILS
              </Link>
              <Number>
                FLIGHT
                <span> #</span>
                {flight_number}
              </Number>
            </Actions>
          </Wrapper>
        );
      }}
    />
  );
};

const latestLaunch = graphql`
  {
    allInternalLatestLaunch {
      edges {
        node {
          flight_number
          id
          launch_date_utc
          mission_name
          links {
            mission_patch
          }
          launch_site {
            site_name_long
          }
          launch_success
          details
        }
      }
    }
  }
`;

export default LatestLaunchDetails;
