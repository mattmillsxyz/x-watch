const { each } = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const { isEmpty } = require(`lodash`);
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const { createNodeField, createNode } = actions;
  const { type } = node.internal;

  if (type === 'internal__pastLaunches' || type === 'internal__latestLaunch') {
    createNodeField({
      node,
      name: `slug`,
      value: `/launch/${node.flight_number}`,
    });
  }

  if (type === 'internal__pastLaunches') {
    if (node.links && !isEmpty(node.links.flickr_images)) {
      await createNodeField({
        node,
        name: `flickr_images`,
        value: {},
      });

      node.links.flickr_images.forEach(async (image, index) => {
        let fileNode;

        try {
          fileNode = await createRemoteFileNode({
            url: node.links.flickr_images[index],
            store,
            cache,
            createNode,
            createNodeId,
          });
        } catch (e) {
          console.error('Error downloading Flickr images:', e);
        }

        // Adds a field `localImage` or custom name to the node
        // ___NODE appendix tells Gatsby that this field will link to another node
        if (fileNode) {
          node.fields.flickr_images[`image_${index}___NODE`] = fileNode.id;
        }
      });
    }
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
        if (edge.node.flight_number) {
          createPage({
            path: `/launch/${edge.node.flight_number}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          });
        }
      });
      resolve();
    });
  });
};
