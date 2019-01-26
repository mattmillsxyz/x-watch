import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { LazyImage } from 'react-lazy-images';
import Spinner from 'react-spinkit';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h5`
  margin-left: 5%;
  margin-top: 3rem;
`;

const Container = styled.div`
  padding: 2rem 5% 3rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ImageLink = styled.a`
  width: calc(25% - 2px);
  transition: all 0.25s ease-in-out;

  &:hover {
    opacity: 0.75;
  }

  @media (max-width: 750px) {
    width: calc(100% - 2px);
  }
`;

const PlaceholderDiv = styled.div`
  width: 100%;
  height: 170px;
  border: 1px solid ${props => props.theme.backgroundColor};
  border-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 170px;
  border: 1px solid ${props => props.theme.backgroundColor};
  border-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &.animated {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  &.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
`;

const renderImages = imageData => {
  return imageData.map((image, index) => {
    return (
      <ImageLink
        href={image}
        target="_blank"
        key={`flight-image--${index}`}
        aria-label={`View full size launch image number ${index}`}
      >
        <LazyImage
          src={image}
          debounceDurationMs={400}
          placeholder={({ ref }) => (
            <PlaceholderDiv ref={ref}>
              <Spinner name="cube-grid" color={'lightgray'} />
            </PlaceholderDiv>
          )}
          actual={({ imageProps }) => (
            <ImageDiv
              style={{
                background: `url(${imageProps.src}) center center`,
                backgroundSize: 'cover',
              }}
              className="animated fadeIn"
            />
          )}
        />
      </ImageLink>
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
        {!isEmpty(imageData)
          ? renderImages(imageData)
          : 'Sorry, no images available.'}
      </Container>
    </Wrapper>
  );
};

export default Images;
