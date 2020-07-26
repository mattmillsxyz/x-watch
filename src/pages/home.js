import React from 'react';

import { useFetch } from '../hooks/useFetch';
import Layout from '../components/layout';
import Countdown from '../components/countdown';
import RecentLaunches from '../components/recentLaunches';
import UpcomingLaunches from '../components/upcomingLaunches';

const Home = () => {
  const url = `https://api.spacexdata.com/v3/launches/upcoming?order=ascc`;

  const { data } = useFetch(url);

  return (
    <Layout>
      <Countdown launches={data} />
      <RecentLaunches />
      <UpcomingLaunches launches={data} />
    </Layout>
  );
};

export default Home;
