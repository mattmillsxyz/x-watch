import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `spacex`,
        `launch`,
        `rocket`,
        `nasa`,
        `mission`,
        `gatsby`,
        `application`,
        `react`,
      ]}
    />
    <h1>NEXT LAUNCH</h1>
    <Link to="/launches/">VIEW ALL</Link>
  </Layout>
);

export default IndexPage;
