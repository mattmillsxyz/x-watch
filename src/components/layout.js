import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';

const darkTheme = {
  name: 'dark',
  backgroundColor: '#000000',
  fontColor: '#ffffff',
  heroColor: '#1a1a1a',
  shadow: '0 10px 30px rgba(255, 255, 255, 0.15)',
  headerBackgroundColor: '#000000',
  sectionHeadingColor: '#ffffff',
  borderColor: '#404040',
  linkColor: '#0094ff',
  highlightColor: '#111111',
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
    margin: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor}
  }
  button {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
  }
  h1, h2, h3, h4, h5, h6, img {
    margin: 0;
  }
  h5 { 
    font-size: 2rem;
    color: ${(props) => props.theme.sectionHeadingColor};
    font-weight: 300;
  }
  a, a:visited {
    color: ${(props) => props.theme.linkColor};
    text-decoration: none;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1681px) {
    max-width: 1400px;
  }
  @media (min-width: 741px) and (max-width: 1100px) {
    padding-top: 106px;
  }
  @media (max-width: 740px) {
    padding-top: 98px;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
