import React from 'react';
import { graphql } from 'gatsby';

import Launch from '../components/Launch';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RocketDetails from '../components/RocketDetails';

const LaunchPage = ({ data }) => {
  const { node } = data.allInternalPastLaunches.edges[0];

  return (
    <Layout>
      <SEO title={`Launch #${node.flight_number}`} />
      <Launch heading="LAUNCH DETAILS" launchData={node} type="details" />
      <RocketDetails rocketData={node.rocket} />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    allInternalPastLaunches(filter: { id: { eq: $id } }) {
      edges {
        node {
          flight_number
          id
          launch_date_utc(formatString: "MM.DD.YYYY")
          mission_name
          links {
            mission_patch
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
          rocket {
            rocket_name
            rocket_type
            first_stage {
              cores {
                core_serial
                flight
                landing_intent
                land_success
                landing_type
                landing_vehicle
              }
            }
            second_stage {
              payloads {
                payload_id
                norad_id
                customers
                payload_type
                nationality
                manufacturer
                payload_mass_kg
              }
            }
          }
        }
      }
    }
  }
`;

export default LaunchPage;
