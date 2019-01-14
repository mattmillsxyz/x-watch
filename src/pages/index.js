import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Countdown from '../components/Countdown';
import RecentLaunches from '../components/RecentLaunches';
import UpcomingLaunches from '../components/UpcomingLaunches';

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
    <Countdown {...props} />
    <RecentLaunches />
    <UpcomingLaunches />
  </Layout>
);

export default IndexPage;
