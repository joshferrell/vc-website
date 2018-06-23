const webpack = require('webpack');

exports.modifyWebpackConfig = ({ config, stage }) => {
	if (stage === 'build-html') {
		config.plugin('define', webpack.DefinePlugin, [{ 'global.GENTLY': false }]);
	}

	return config;
};