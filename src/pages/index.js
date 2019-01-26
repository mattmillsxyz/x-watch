import React from 'react';

import SEO from '../components/seo';
import Countdown from '../components/countdown';
import RecentLaunches from '../components/recentLaunches';
import UpcomingLaunches from '../components/upcomingLaunches';

const IndexPage = props => (
  <>
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
  </>
);

export default IndexPage;
