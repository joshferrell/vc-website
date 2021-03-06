const commonTags = require('common-tags');

module.exports = {
	siteMetadata: {
		title: 'Voice Computer',
		description: commonTags.oneLine`
			Enjoy smart, pain-free voice control of your computer. We make Dragon simple so
			you can greatly reduce, or eliminate, your mouse and touchpad use.
		`,
		configuration: {
			subscribe: {
				url: commonTags.oneLineTrim`
					https://wt-f3ab3db2f1d8499d280a3d0c9b62c78b-0.sandbox.auth0-extend.com/
					mailchimp-subscribe
				`,
				blogList: '1f19689730',
				mainList: '1f19689730'
			},
			pricing: {
				monthly: 10,
				yearly: 99
			},
			hubspot: {
				id: '4435970',
				contactFormId: '4d3025ca-ed4d-414f-9d28-31cbea22d3c5'
			}
		}
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-netlify-cms',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/team`,
				name: 'team'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog',
				path: `${__dirname}/static/blog`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'testamonial',
				path: `${__dirname}/static/testamonial`
			}
		},
		'gatsby-transformer-remark'
	]
};
