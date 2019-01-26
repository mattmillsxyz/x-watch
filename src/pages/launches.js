import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Launch from '../components/launch';
import PreviousLaunches from '../components/previousLaunches';

const LaunchesPage = data => {
  return (
    <>
      <SEO title="Recent Launches" />
      <Launch
        heading="LATEST LAUNCH"
        launchData={data.data.internalLatestLaunch}
        type="latest"
      />
      <PreviousLaunches />
    </>
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
