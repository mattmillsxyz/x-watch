import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Heading = styled.span`
  font-weight: 700;
  margin-right: 0.5rem;
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
`;

const Detail = styled.div`
  font-size: 0.875rem;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const CountdownDetails = () => (
  <StaticQuery
    query={nextLaunch}
    render={data => {
      const { edges } = data.allInternalNextLaunch;
      const {
        mission_name,
        launch_date_utc,
        launch_site,
        rocket,
      } = edges[0].node;

      return (
        <Wrapper>
          <LeftBlock>
            <Detail>
              <Heading>MISSION NAME:</Heading>
              {mission_name}
            </Detail>
            <Detail>
              <Heading>LAUNCH DATE:</Heading>
              {launch_date_utc}
            </Detail>
            <Detail>
              <Heading>LAUNCH SITE:</Heading>
              {launch_site.site_name_long}
            </Detail>
          </LeftBlock>
          <RightBlock>
            <Detail>
              <Heading>ROCKET:</Heading>
              {rocket.rocket_name}
            </Detail>
            <Detail>
              <Heading>PAYLOAD TYPE:</Heading>
              {rocket.second_stage.payloads[0].payload_type}
            </Detail>
            <Detail>
              <Heading>MANUFACTURER:</Heading>
              {rocket.second_stage.payloads[0].manufacturer}
            </Detail>
          </RightBlock>
        </Wrapper>
      );
    }}
  />
);
const nextLaunch = graphql`
  {
    allInternalNextLaunch {
      edges {
        node {
          id
          mission_name
          launch_date_utc
          launch_site {
            site_name_long
          }
          rocket {
            rocket_name
            second_stage {
              payloads {
                payload_type
                manufacturer
              }
            }
          }
          links {
            reddit_campaign
          }
        }
      }
    }
  }
`;

export default CountdownDetails;
