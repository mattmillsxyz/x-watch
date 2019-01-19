import React from 'react';
import styled from 'styled-components';

import RedditIcon from '../images/reddit-icon.svg';
import ArticleIcon from '../images/article-icon.svg';
import VideoIcon from '../images/video-icon.svg';
import WikiIcon from '../images/wiki-icon.svg';

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
  color: #333333;
  font-weight: 600;
`;

const Container = styled.div`
  padding: 2rem 5% 1rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const IconLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 6%;
  margin-bottom: 2rem;

  span {
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;

const renderLink = (links, key, title, icon) => {
  return (
    <IconLink
      href={links[key]}
      target="_blank"
      rel="noopener noreferrer"
      key={`launch-media-link-${key}`}
    >
      <img src={icon} alt={`${title} icon`} />
      <span>{title}</span>
    </IconLink>
  );
};

const renderLinks = links => {
  let linkList = [];
  for (let key in links) {
    switch (key) {
      case 'reddit_campaign':
        if (links[key]) {
          linkList.push(renderLink(links, key, 'CAMPAIGN', RedditIcon));
        }
        break;
      case 'reddit_launch':
        if (links[key]) {
          linkList.push(renderLink(links, key, 'LAUNCH', RedditIcon));
        }
        break;
      case 'reddit_recovery':
        if (links[key]) {
          linkList.push(renderLink(links, key, 'RECOVERY', RedditIcon));
        }
        break;
      case 'reddit_media':
        if (links[key]) {
          linkList.push(renderLink(links, key, 'MEDIA', RedditIcon));
        }
        break;
      case 'video_link':
        if (links[key]) {
          linkList.push(renderLink(links, key, 'VIDEO', VideoIcon));
        }
        break;
      case 'wikipedia':
        if (links[key]) {
          linkList.push(renderLink(links, key, 'WIKIPEDIA', WikiIcon));
        }
        break;
      case 'article_link':
        if (links[key]) {
          linkList.push(renderLink(links, key, 'ARTICLE', ArticleIcon));
        }
        break;
      default:
        break;
    }
  }
  return linkList;
};

const MediaLinks = ({ links }) => {
  return (
    <Wrapper>
      <Header>
        <Heading>MEDIA LINKS</Heading>
      </Header>
      <Container>{renderLinks(links)}</Container>
    </Wrapper>
  );
};

export default MediaLinks;
