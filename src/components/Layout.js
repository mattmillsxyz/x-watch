import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const darkTheme = {
  backgroundColor: '#111111',
  fontColor: '#ffffff',
  heroColor: '#000000',
  shadow: '0 10px 30px rgba(255, 255, 255, 0.15)',
};

const lightTheme = {
  backgroundColor: '#ffffff',
  fontColor: '#111111',
  heroColor: '#f4f4f4',
  shadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
    margin: 0;
    background-color: ${props => props.theme.backgroundColor}
    color: ${props => props.theme.fontColor}
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
  width: 100%;
  margin: 0 auto;
  padding-top: 10rem;
  flex: 1;

  @media (min-width: 741px) and (max-width: 1100px) {
    padding-top: 106px;
  }

  @media (max-width: 740px) {
    padding-top: 83px;
  }
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
      <ThemeProvider theme={darkTheme}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <GlobalStyle />
          <Header />
          <Container>{children}</Container>
          <Footer />
        </div>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
