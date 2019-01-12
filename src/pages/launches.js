import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LatestLaunch from '../components/LatestLaunch';
import UpcomingLaunches from '../components/UpcomingLaunches';
import RecentLaunches from '../components/RecentLaunches';

const LaunchesPage = data => {
  const { edges } = data.data.allInternalLaunches;
  return (
    <Layout>
      <SEO title="Recent Launches" />
      <LatestLaunch />
      <RecentLaunches />
      <UpcomingLaunches />
    </Layout>
  );
};

export const query = graphql`
  {
    allInternalLaunches {
      edges {
        node {
          id
          mission_name
          launch_date_utc
          links {
            mission_patch
          }
        }
      }
    }
  }
`;

export default LaunchesPage;
