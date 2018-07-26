import React from 'react';
import styled from 'styled-components';
import { Molecules } from 'vc-components';
import bodyCells from './feature-body.config';

const containerStyles = {
	alignItems: 'left',
	maxWidth: '1088px',
	is: 'section',
	py: [5, 6],
	px: 3,
	mx: 'auto'
};

const Section = styled(Molecules.Section).attrs(containerStyles)`
	overflow-x: scroll;
`;

const tableStyles = {
	mb: [5, 0],
	mt: 4,
	mx: 'auto',
	width: '100%',
	boxShadow: 3
};

const FeatureTable = () => (
	<Section
		titleAttributes={{
			text: 'Key Features',
			fontSize: 3,
			is: 'h2'
		}}
	>
		<Molecules.Table
			{...tableStyles}
			headerCells={[
				{
					text: 'Key Feature',
					cellAttributes: { textAlign: 'left' }
				},
				{ text: 'Voice Computer' },
				{ text: 'Enterprise' }
			]}
			bodyCells={bodyCells}
		/>
	</Section>
);

export default FeatureTable;
