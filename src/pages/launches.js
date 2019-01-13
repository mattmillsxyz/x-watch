import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LatestLaunch from '../components/LatestLaunch';
import PreviousLaunches from '../components/PreviousLaunches';

const LaunchesPage = () => {
  return (
    <Layout>
      <SEO title="Recent Launches" />
      <LatestLaunch />
      <PreviousLaunches />
    </Layout>
  );
};

export default LaunchesPage;
