import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Launch from '../components/Launch';
import PreviousLaunches from '../components/PreviousLaunches';

const LaunchesPage = data => {
  return (
    <Layout>
      <SEO title="Recent Launches" />
      <Launch
        heading="LATEST LAUNCH"
        launchData={data.data.internalLatestLaunch}
        type="latest"
      />
      <PreviousLaunches />
    </Layout>
  );
};

export const query = graphql`
  {
    internalLatestLaunch {
      flight_number
      id
      launch_date_utc(formatString: "MM.DD.YYYY")
      mission_name
      mission_patch {
        childImageSharp {
          fixed(width: 320) {
            src
          }
        }
      }
      links {
        presskit
      }
      launch_site {
        site_name_long
      }
      launch_success
      details
      fields {
        slug
      }
    }
  }
`;

export default LaunchesPage;
