const webpack = require('webpack');
const path = require('path');

exports.modifyWebpackConfig = ({ config, stage }) => {
	if (stage === 'build-html') {
		config.plugin('define', webpack.DefinePlugin, [{ 'global.GENTLY': false }]);
	}

	return config;
};

exports.modifyBabelrc = ({ babelrc }) => ({
	...babelrc,
	plugins: babelrc.plugins.concat([
		[
			'transform-runtime',
			{ helpers: false, polyfill: false, regenerator: true }
		],
		[
			'babel-plugin-styled-components',
			{ ssr: true }
		],
		'transform-regenerator'
	])
});

exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;
	const blogPostTemplate = path.resolve('src/templates/article.js');

	return graphql(`{
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] },
			filter: {
				frontmatter: { path: { regex: "/blog/" } }
			}
		) {
			edges {
				node {
					html
					frontmatter {
						path
					}
				}
			}
		}
	}`).then((result) => {
		if (result.errors) return Promise.reject(result.errors);

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: blogPostTemplate,
				context: {}
			});
		});
	});
};
