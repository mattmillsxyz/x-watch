module.exports = {
  siteMetadata: {
    title: `X Watch`,
    description: `Tracking past and future SpaceX launches.`,
    author: `@mattmillsxyz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `x-watch`,
        short_name: `x-watch`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/x-watch-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        typePrefix: 'internal__',
        name: `launches`,
        url: `https://api.spacexdata.com/v3/launches`,
      },
    },
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        typePrefix: 'internal__',
        name: `nextLaunch`,
        url: `https://api.spacexdata.com/v3/launches/next`,
      },
    },
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        typePrefix: 'internal__',
        name: `pastLaunches`,
        url: `https://api.spacexdata.com/v3/launches/past?order=desc`,
      },
    },
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        typePrefix: 'internal__',
        name: `upcomingLaunches`,
        url: `https://api.spacexdata.com/v3/launches/upcoming`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rajdhani`,
          `Source+Sans+Pro\:400,600`, // you can also specify font weights and styles
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
