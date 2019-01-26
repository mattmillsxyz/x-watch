import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/layout';

import Astronaut from '../images/404.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem;

  h1 {
    span {
      font-size: 4rem;
      display: block;
    }
  }

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  max-width: 800px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex: 1;
  min-width: 300px;

  @media (max-width: 740px) {
    text-align: center;
    flex: none;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <TextWrapper>
        <div>
          <h1>
            <span>SORRY</span>PAGE NOT FOUND
          </h1>
          <p>
            You just hit a route that doesn&#39;t exist.
            <br />
            <a href="/" aria-label="Go to the X-Watch home page">
              Go to the X-watch home page
            </a>
            .
          </p>
        </div>
      </TextWrapper>
      <ImageWrapper>
        <img src={Astronaut} alt="Gatsby astronaut" />
      </ImageWrapper>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
