import React from 'react';
import sys from 'system-components';
import { Atoms, Molecules } from 'vc-components';
import {
	Office,
	Chrome,
	Firefox,
	Edge,
	Slack,
	Skype,
	Adobe,
	Citrix
} from '../../img';

const CellImg = sys({ is: 'img' }, 'width', 'space');

const CellValues = [
	() => (
		<CellImg src={Office} alt="Microsoft Office" width="130px" px={2} />
	),
	() => ([
		<Atoms.Box display="flex" justifyContent="space-around">
			<CellImg src={Chrome} width="40px" height="45px" alt="Chrome" px={2} />
			<CellImg src={Firefox} width="40px" height="45px" alt="Firefox" px={2} />
			<CellImg src={Edge} width="40px" height="45px" alt="Microsoft Edge" px={2} />
		</Atoms.Box>
	]),
	() => (
		<Atoms.Box display="flex" justifyContent="space-around">
			<CellImg src={Slack} width="40px" height="45px" alt="Slack" px={2} />
			<CellImg src={Skype} width="40px" height="45px" alt="Skype" px={2} />
		</Atoms.Box>
	),
	() => (
		<CellImg src={Adobe} width="54px" height="45px" alt="Adobe Creative Cloud" px={2} />
	),
	() => (
		<CellImg src={Citrix} width="90px" height="45px" alt="Citrix" px={2} />
	)
];

const bodyCells = CellValues.map(cell => ([
	{
		render: cell,
		cellAttributes: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
	},
	{
		iconAttributes: { name: 'check', type: 'glyph', color: '#72C472' },
		cellAttributes: { textAlign: 'center' }
	}
]));

const FeatureTable = () => (
	<Molecules.Table
		mb={[5, 0]}
		mx="auto"
		boxShadow={3}
		headerCells={[
			{ text: 'App' },
			{
				text: 'Voice Control & Custom Commands',
				cellAttributes: { maxWidth: '200px' }
			}
		]}
		buttonAttributes={{ text: 'and more', to: '/product' }}
		bodyCells={bodyCells}
	/>
);

export default FeatureTable;
