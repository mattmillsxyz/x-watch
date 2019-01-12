import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Countdown from '../components/countdown';
import RecentLaunches from '../components/recentLaunches';

const IndexPage = () => (
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
  </Layout>
);

export default IndexPage;
