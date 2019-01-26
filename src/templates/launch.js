import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Launch from '../components/launch';
import LaunchNav from '../components/launchNav';
import SEO from '../components/seo';
import RocketDetails from '../components/rocketDetails';
import Images from '../components/images';
import MediaLinks from '../components/mediaLinks';

const LaunchPage = ({ data }) => {
  const { node } = data.allInternalPastLaunches.edges[0];

  return (
    <Layout>
      <SEO title={`Launch #${node.flight_number}`} />
      <LaunchNav flightNumber={node.flight_number} />
      <Launch heading="LAUNCH DETAILS" launchData={node} type="details" />
      <RocketDetails rocketData={node.rocket} />
      <Images imageData={node.links.flickr_images} />
      <MediaLinks links={node.links} />
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
          launch_date_local(formatString: "MM.DD.YYYY")
          mission_name
          mission_patch {
            childImageSharp {
              fixed(width: 320) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          links {
            presskit
            flickr_images
            reddit_campaign
            reddit_launch
            reddit_recovery
            reddit_media
            video_link
            wikipedia
            article_link
          }
          telemetry {
            flight_club
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
