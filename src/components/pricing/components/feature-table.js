import React from 'react';
import { Molecules } from 'vc-components';

const checkBoxCell = {
	iconAttributes: {
		name: 'check', type: 'glyph', color: '#72C472', alignToText: true
	},
	cellAttributes: { textAlign: 'center' }
};

const minusBoxCell = {
	iconAttributes: {
		name: 'minus', type: 'glyph', color: '#a6abb7', alignToText: true
	},
	cellAttributes: { textAlign: 'center' }
};

const containerStyles = {
	alignItems: 'left',
	maxWidth: '1088px',
	py: [5, 6],
	mx: 'auto'
};

const tableStyles = {
	mb: [5, 0],
	mt: 4,
	mx: 'auto',
	width: '100%',
	boxShadow: 2
};

const FeatureTable = () => (
	<Molecules.Section
		{...containerStyles}
		titleAttributes={{
			text: 'Key Features',
			fontSize: 3
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
			bodyCells={[
				[
					{ text: 'Voice-controlled mouse' },
					checkBoxCell,
					checkBoxCell
				],
				[
					{ text: 'Numbered tag interface' },
					checkBoxCell,
					checkBoxCell
				],
				[
					{ text: 'Microsoft Windows support' },
					checkBoxCell,
					checkBoxCell
				],
				[
					{ text: 'Documentation, lessons, and on-boarding' },
					checkBoxCell,
					checkBoxCell
				],
				[
					{ text: 'Personalized training, customization, and support' },
					{
						text: 'Available upon request',
						cellAttributes: { textAlign: 'center' }
					},
					checkBoxCell
				],
				[
					{ text: 'Dedicated account manager' },
					minusBoxCell,
					checkBoxCell
				],
				[
					{ text: 'Enterprise SLA & custom Terms of Service' },
					minusBoxCell,
					checkBoxCell
				],
				[
					{ text: 'Volume discount' },
					minusBoxCell,
					checkBoxCell
				]
			]}
		/>
	</Molecules.Section>
);

export default FeatureTable;
