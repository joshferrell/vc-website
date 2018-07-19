import React from 'react';
import styled from 'styled-components';
import { Atoms, Molecules } from 'vc-components';

const Box = styled(Atoms.Box).attrs({
	p: 2,
	bg: 'neutral.1',
	textAlign: 'center'
})`
	text-transform: uppercase;
	letter-spacing: .03rem;
	font-weight: 500;
`;

const BorderCard = ({ children, title, ...props }) => (
	<Molecules.Section {...props}>
		<Box>{title}</Box>
		{children}
	</Molecules.Section>
);

export default BorderCard;
