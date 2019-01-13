import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import moment from 'moment';

const Wrapper = styled.div`
  display: flex;
`;

const Heading = styled.span`
  font-weight: 600;
  margin-right: 0.5rem;
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;

  img {
    width: 160px;
  }
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div`
  font-size: 0.875rem;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
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
          detail,
          links,
        } = edges[0].node;

        const date = moment(launch_date_utc);

        return (
          <Wrapper>
            <LeftBlock>
              <img src={links.mission_patch} alt={`${mission_name} patch`} />
            </LeftBlock>
            <RightBlock>
              <h1>{mission_name}</h1>
              <Detail>{detail}</Detail>
              <Detail>
                <Heading>LAUNCH DATE:</Heading>
                {date.format('MM.DD.YYYY')}
              </Detail>
              <Detail>
                <Heading>LAUNCH SITE:</Heading>
                {launch_site.site_name_long}
              </Detail>
            </RightBlock>
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
