import React from 'react';
import styled, { withTheme } from 'styled-components';

import RedditIcon from '../images/reddit-icon.svg';
import ArticleIcon from '../images/article-icon.svg';
import VideoIcon from '../images/video-icon.svg';
import WikiIcon from '../images/wiki-icon.svg';
import RedditIconWhite from '../images/reddit-icon-white.svg';
import ArticleIconWhite from '../images/article-icon-white.svg';
import VideoIconWhite from '../images/video-icon-white.svg';
import WikiIconWhite from '../images/wiki-icon-white.svg';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin-bottom: 2rem;
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

const renderLinks = (links, theme) => {
  let linkList = [];
  for (let key in links) {
    switch (key) {
      case 'reddit_campaign':
        if (links[key]) {
          linkList.push(
            renderLink(
              links,
              key,
              'CAMPAIGN',
              theme === 'light' ? RedditIcon : RedditIconWhite
            )
          );
        }
        break;
      case 'reddit_launch':
        if (links[key]) {
          linkList.push(
            renderLink(
              links,
              key,
              'LAUNCH',
              theme === 'light' ? RedditIcon : RedditIconWhite
            )
          );
        }
        break;
      case 'reddit_recovery':
        if (links[key]) {
          linkList.push(
            renderLink(
              links,
              key,
              'RECOVERY',
              theme === 'light' ? RedditIcon : RedditIconWhite
            )
          );
        }
        break;
      case 'reddit_media':
        if (links[key]) {
          linkList.push(
            renderLink(
              links,
              key,
              'MEDIA',
              theme === 'light' ? RedditIcon : RedditIconWhite
            )
          );
        }
        break;
      case 'video_link':
        if (links[key]) {
          linkList.push(
            renderLink(
              links,
              key,
              'VIDEO',
              theme === 'light' ? VideoIcon : VideoIconWhite
            )
          );
        }
        break;
      case 'wikipedia':
        if (links[key]) {
          linkList.push(
            renderLink(
              links,
              key,
              'WIKIPEDIA',
              theme === 'light' ? WikiIcon : WikiIconWhite
            )
          );
        }
        break;
      case 'article_link':
        if (links[key]) {
          linkList.push(
            renderLink(
              links,
              key,
              'ARTICLE',
              theme === 'light' ? ArticleIcon : ArticleIconWhite
            )
          );
        }
        break;
      default:
        break;
    }
  }
  return linkList;
};

const MediaLinks = ({ theme, links }) => {
  return (
    <Wrapper>
      <Header>
        <Heading>MEDIA LINKS</Heading>
      </Header>
      <Container>{renderLinks(links, theme.name)}</Container>
    </Wrapper>
  );
};

export default withTheme(MediaLinks);
