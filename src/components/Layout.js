import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
    margin: 0;
  }

  button {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, img {
    margin: 0;
  }

  h5 { 
    font-size: 1rem;
  }

  a, a:visited {
    color: #FF006B;
  }

  a:hover {
    text-decoration: none;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 10rem;
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
