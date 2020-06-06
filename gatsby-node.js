const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const { resolve } = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

const martyr = resolve("./src/templates/martyr.js")

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node)

  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/features` page.
  if (page.path.match(/^\/features/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/:lang/features/"
    // Update the page.
    createPage(page)
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // only news page parsed
  return await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/martyrs/" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.allMarkdownRemark

    edges.forEach(({ node }) => {
      const {
        fields: { slug },
      } = node

      createPage({
        path: slug,
        component: martyr,
      })
    })
  })
}
