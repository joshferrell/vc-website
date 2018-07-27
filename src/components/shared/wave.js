import React from 'react';
import sys from 'system-components';

const SVG = sys('color', 'space');

const Wave = ({ ...props }) => (
	<div style={{ marginBottom: '-10px' }}>
		<SVG is="svg" viewBox="0 0 1440 126" {...props}>
			<g transform="translate(0.000000, -1977.000000)">
				<path fill="currentColor" d="M1622.3,1937.7c0,0-410.7,169.1-913.4,75.5c-502.7-93.6-977.7,56.3-977.7,56.3v440h1891.1 V1937.7z" />
			</g>
		</SVG>
	</div>
);

export default Wave;
