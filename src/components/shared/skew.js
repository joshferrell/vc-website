import React from 'react';
import sys from 'system-components';

const Div = sys({
	height: 330,
	width: '100%',
	zIndex: -1,
	position: 'relative',
	mb: '70px',
	mt: '-400px'
}, 'color', () => `
	transform: skewY(-8deg) translateY(60%);
`);

const Skew = ({ ...props }) => (
	<Div {...props} />
);

export default Skew;
