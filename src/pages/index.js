import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Countdown from '../components/countdown';
import RecentLaunches from '../components/recentLaunches';
import UpcomingLaunches from '../components/upcomingLaunches';

const IndexPage = props => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `spacex`,
        `launch`,
        `rocket`,
        `nasa`,
        `mission`,
        `gatsby`,
        `application`,
        `react`,
      ]}
    />
    <Countdown />
    <RecentLaunches />
    <UpcomingLaunches />
  </Layout>
);

export default IndexPage;
