const webpack = require('webpack');

exports.modifyWebpackConfig = ({ config, stage }) => {
	if (stage === 'build-html') {
		config.plugin('define', webpack.DefinePlugin, [{ 'global.GENTLY': false }]);
	}

	return config;
};

exports.modifyBabelrc = ({ babelrc }) => ({
	...babelrc,
	plugins: babelrc.plugins.concat([
		['transform-runtime', { "helpers": false, "polyfill": false, "regenerator": true }],
		'transform-regenerator'
	])
});
