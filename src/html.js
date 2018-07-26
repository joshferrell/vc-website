import React from 'react';
import PropTypes from 'prop-types';

const HTML = ({
	htmlAttributes,
	headComponents,
	bodyAttributes,
	preBodyComponents,
	postBodyComponents,
	body
}) => (
	<html lang="en" {...htmlAttributes}>
		<head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			{headComponents}
		</head>
		<body {...bodyAttributes}>
			{preBodyComponents}
			<div
				key="body"
				id="___gatsby"
				dangerouslySetInnerHTML={{ __html: body }}
			/>
			{postBodyComponents}
			<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4435970.js" />
		</body>
	</html>
);

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array
};

export default HTML;
