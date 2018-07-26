
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

const bodyCells = [
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
];

export default bodyCells;
