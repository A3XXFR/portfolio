/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Farasat Mirza',
    author: 'Farasat Mirza',
    email: 'info@farasatmirza.com',
    social: {
      instagram: 'https://www.instagram.com',
      linkedin: 'https://www.linkedin.com/in/farasatmirza/',
      whatsapp: 'https://www.whatsapp.com',
    }
  },
  plugins: [
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
