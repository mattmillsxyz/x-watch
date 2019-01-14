const { each } = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const { type } = node.internal;
  if (type === 'internal__pastLaunches' || type === 'internal__latestLaunch') {
    createNodeField({
      node,
      name: `slug`,
      value: `/launch/${node.flight_number}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allInternalPastLaunches {
            edges {
              node {
                id
                flight_number
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      const pageTemplate = path.resolve('./src/templates/launch.js');
      each(result.data.allInternalPastLaunches.edges, edge => {
        createPage({
          path: `/launch/${edge.node.flight_number}/`,
          component: slash(pageTemplate),
          context: {
            id: edge.node.id,
          },
        });
      });
      resolve();
    });
  });
};
