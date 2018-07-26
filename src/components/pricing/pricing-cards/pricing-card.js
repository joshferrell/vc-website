import React, { Component } from 'react';
import styled from 'styled-components';
import { Atoms, Molecules } from 'vc-components';
import EnterpriseCard from './enterprise-card';
import FullAccessCard from './full-access';

const containerStyles = {
	m: '-280px auto 60px',
	px: 3,
	maxWidth: '1088px',
	is: 'section',
	color: 'white',
	display: 'flex'
};

const Toggle = styled(Atoms.Toggle).attrs({
	onColor: 'white',
	offColor: 'neutral.2',
	isChecked: true,
	ml: -3,
	onState: {
		label: 'Annual',
		value: 'annual',
		render: () => (
			<Atoms.Box py={1} px={2} ml={3} borderRadius={4} color="highlight.green" bg="white">
				Save 17%
			</Atoms.Box>
		)
	},
	offState: {
		label: 'Monthly',
		value: 'monthly'
	}
})`
	@media(max-width: 895px) {
		margin: 10px auto 0;
		max-width: 356px;
		display: flex;
	}

	@media(max-width: 387px) {
		width: 211px;
		display: block;
		text-align: center;

		& > div { margin: 8px; }
		& > label { justify-content: center; }
	}
`;

export default class PricingCard extends Component {
	state = { isAnnual: true }

	setStatus = isAnnual => this.setState({ isAnnual });

	render = () => {
		const { isAnnual } = this.state;

		return (
			<Molecules.Section {...containerStyles}>
				<Toggle handleChange={this.setStatus} />
				<Atoms.Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
					<FullAccessCard isAnnual={isAnnual} monthlyPrice={10} annualPrice={99} />
					<EnterpriseCard />
				</Atoms.Box>
			</Molecules.Section>
		);
	}
}
