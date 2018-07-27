import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Atoms } from 'vc-components';

const Box = styled(Atoms.Box).attrs({
	mt: 4,
	bg: 'white',
	boxShadow: 2,
	hover: {
		boxShadow: 3
	}
})`
	transition: all .3s ease-in-out;

	& > img {
		width: 100%;
	}
`

const Card = ({ title, imageAttributes, children, ...props }) => (
	<Box {...props}>
		<Atoms.Box is="img" {...imageAttributes} />
		<Atoms.Box px={4} pb={4}>
			<Atoms.Box is="h3" mb={2}>{title}</Atoms.Box>
			{children}
		</Atoms.Box>
	</Box>
);

export default Card;
