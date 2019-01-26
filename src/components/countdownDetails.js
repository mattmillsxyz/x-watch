import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import moment from 'moment';

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Heading = styled.span`
  font-weight: 600;
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

  @media (max-width: 768px) {
    align-items: flex-start;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const Detail = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const CountdownDetails = () => (
  <StaticQuery
    query={nextLaunch}
    render={data => {
      const {
        mission_name,
        launch_date_local,
        launch_site,
        rocket,
      } = data.internalNextLaunch;
      const launchDate = moment(launch_date_local).format('MM.DD.YYYY hh:mm A');

      return (
        <Wrapper>
          <LeftBlock>
            <Detail>
              <Heading>MISSION NAME:</Heading>
              {mission_name}
            </Detail>
            <Detail>
              <Heading>LAUNCH DATE:</Heading>
              {launchDate}
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
    internalNextLaunch {
      id
      mission_name
      launch_date_local
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
`;

export default CountdownDetails;
