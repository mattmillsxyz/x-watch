import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const LaunchPage = ({ data }) => {
  const { node } = data.allInternalPastLaunches.edges[0];

  return (
    <Layout>
      <SEO title={`Launch #${node.flight_number}`} />
      <h1>{node.mission_name}</h1>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    allInternalPastLaunches(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          mission_name
          flight_number
        }
      }
    }
  }
`;

export default LaunchPage;
