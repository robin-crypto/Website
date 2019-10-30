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
	    resolve: `gatsby-plugin-netlify-cms`,
	    options: {
	      modulePath: `path/to/custom/script.js`, // default: undefined
	      enableIdentityWidget: true,
	      publicPath: `admin`,
	      htmlTitle: `Content Manager`,
	      htmlFavicon: `path/to/favicon`,
	      includeRobots: false,
	    },
	  },
	]
}