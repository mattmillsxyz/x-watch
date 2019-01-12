import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './header';
import Footer from './footer';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', Helvetica, sans-serif;
    margin: 0;
    padding: 0 2rem;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header />
        <Container>{children}</Container>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
