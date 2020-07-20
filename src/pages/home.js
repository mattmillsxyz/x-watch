import React from 'react';

import Layout from '../components/layout';
import Countdown from '../components/countdown';
import RecentLaunches from '../components/recentLaunches';
import UpcomingLaunches from '../components/upcomingLaunches';

const Home = (props) => {
  return (
    <Layout>
      <Countdown />
      <RecentLaunches />
      <UpcomingLaunches />
    </Layout>
  );
};

export default Home;
