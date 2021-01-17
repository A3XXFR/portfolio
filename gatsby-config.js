/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    defaultTitle: 'Portfolio',
    titleTemplate: '%s · Farasat Mirza',
    defaultDescription: 'Explore Farasat Mirza\'s projects and expertise in Architecture and Design.',
    siteUrl: 'https://www.farasatmirza.com',
    author: 'Farasat Mirza',
    email: 'info@farasatmirza.com',
    social: {
      instagram: 'https://www.instagram.com/_farasatmirza/',
      linkedin: 'https://www.linkedin.com/in/farasatmirza/',
      youtube: 'https://www.youtube.com/c/FarasatAhmed',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-sub-sup"
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ]
}
