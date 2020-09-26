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
    email: 'farmirza98@gmail.com',
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-remark',
  ]
}
