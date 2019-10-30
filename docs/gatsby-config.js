var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Elements - Template Example",
    description:
      "An example of how to use a template to build your Gatsby theme",
    siteUrl: "https://mikedarche.com",
  },
	plugins: [
	`gatsby-theme-elements`,
	  {
	    resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
}