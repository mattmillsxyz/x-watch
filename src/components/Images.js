import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h5`
  margin-left: 5%;
  margin-top: 3rem;
  color: #00caca;
  font-weight: 400;
`;

const Container = styled.div`
  padding: 2rem 5% 3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const renderImages = imageData => {
  return imageData.map((image, index) => {
    return (
      <a
        href={image}
        key={`flight-image--${index}`}
        aria-label={`View full size launch image number ${index}`}
      >
        <div
          style={{
            background: `url(${image}) center center`,
            backgroundSize: 'cover',
            width: '170px',
            height: '130px',
            marginBottom: '1.5rem',
          }}
        />
      </a>
    );
  });
};

const Images = ({ imageData }) => {
  return (
    <Wrapper>
      <Header>
        <Heading>IMAGES</Heading>
      </Header>
      <Container>
        {imageData ? renderImages(imageData) : 'Sorry, no images available.'}
      </Container>
    </Wrapper>
  );
};

export default Images;
