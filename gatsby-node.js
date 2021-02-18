/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path=require('path');

// For function createNodeField
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if(node.internal.type==='MarkdownRemark'){
    const slug=path.basename(node.fileAbsolutePath,'.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
    /* console.log(JSON.stringify(node,undefined,4)); */
  } 
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith("develop")) {
      actions.setWebpackConfig({
        resolve: {
          alias: {
            "react-dom": "@hot-loader/react-dom",
          },
        },
      })
    }
  }