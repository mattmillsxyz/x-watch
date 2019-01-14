import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const LaunchPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Launch" />
      <h1>{data.allInternalPastLaunches.edges[0].node.mission_name}</h1>
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
        }
      }
    }
  }
`;

export default LaunchPage;
