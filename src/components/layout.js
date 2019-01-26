import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Cookies from 'universal-cookie';

import Header from '../components/header';
import Footer from '../components/footer';
import ThemeToggle from '../components/themeToggle';

const darkTheme = {
  name: 'dark',
  backgroundColor: '#111111',
  fontColor: '#ffffff',
  heroColor: '#1a1a1a',
  shadow: '0 10px 30px rgba(255, 255, 255, 0.15)',
  headerBackgroundColor: '#2E1A4F',
  sectionHeadingColor: '#00CACA',
  borderColor: '#404040',
  linkColor: '#FF006B',
};

const lightTheme = {
  name: 'light',
  backgroundColor: '#ffffff',
  fontColor: '#111111',
  heroColor: '#f4f4f4',
  shadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  headerBackgroundColor: '#2E1A4F',
  sectionHeadingColor: '#00CACA',
  borderColor: '#f4f4f4',
  linkColor: '#FF006B',
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
    margin: 0;
    background-color: ${props => props.theme.backgroundColor};
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
    color: ${props => props.theme.sectionHeadingColor};
    font-weight: 600;
  }

  a, a:visited {
    color: ${props => props.theme.linkColor};
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

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const cookies = new Cookies();

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
    };
  }

  componentDidMount() {
    this.setState({
      theme: cookies.get('x-watchTheme') === 'dark' ? 'dark' : 'light',
    });
  }

  toggleTheme = () => {
    cookies.set(
      'x-watchTheme',
      `${this.state.theme === 'light' ? 'dark' : 'light'}`,
      { path: '/' }
    );

    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === 'dark' ? darkTheme : lightTheme}
      >
        <Wrapper>
          <GlobalStyle />
          <Header />
          <Container>{this.props.children}</Container>
          <ThemeToggle
            theme={this.state.theme}
            onToggleClick={() => this.toggleTheme()}
          />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
