import React from 'react';

import { useFetch } from '../hooks/useFetch';
import Layout from '../components/layout';
import Launch from '../components/launch';
import PreviousLaunches from '../components/previousLaunches';

const LaunchesPage = () => {
  const url = `https://api.spacexdata.com/v3/launches/latest`;

  const { data } = useFetch(url);

  return (
    <Layout>
      <Launch heading="LATEST LAUNCH" launchData={data} type="latest" />
      <PreviousLaunches latestlaunchData={data} />
    </Layout>
  );
};

export default LaunchesPage;
