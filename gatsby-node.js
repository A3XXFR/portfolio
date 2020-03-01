const path = require('path')
const fs = require('fs')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({graphql, actions }) => {
  const {createPage} = actions
  const projectTemplate = path.resolve('./src/templates/project.js')
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)
  console.log("@@@@", res.data.allMarkdownRemark.edges)
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    const imagesPath = path.parse(edge.node.fileAbsolutePath).dir + '/images'
    const drawingsPath = path.parse(edge.node.fileAbsolutePath).dir + '/drawings'
    const downloadsPath = path.parse(edge.node.fileAbsolutePath).dir + '/downloads'

    createPage({
      component: projectTemplate,
      path: `/project/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        imgPath: imagesPath,
        drawingsPath: drawingsPath,
        downloads: downloadsPath,
      }
    })
    console.log(createPage)
  })
}