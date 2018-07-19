import React, { Component } from 'react';
import { Atoms, Molecules } from 'vc-components';
import { FullAccessCard, EnterpriseCard } from '.';

const containerStyles = {
	m: '-280px auto 60px',
	px: 3,
	maxWidth: '1088px',
	color: 'white',
	display: 'flex'
};

export default class PricingCards extends Component {
	state = { isMonthly: false }

	setStatus = value => this.setState({ isMonthly: value });

	render = () => (
		<Molecules.Section {...containerStyles}>
			<Atoms.Toggle
				onColor="white"
				isChecked
				handleChange={this.setStatus}
				ml={-3}
				offColor="neutral.2"
				onState={{
					label: 'Annual',
					value: 'annual',
					render: () => (
						<Atoms.Box py={1} px={2} ml={3} borderRadius={4} color="highlight.green" bg="white">
							Save 20%
						</Atoms.Box>
					)
				}}
				offState={{
					label: 'Monthly',
					value: 'monthly'
				}}
			/>
			<Atoms.Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
				<FullAccessCard isMonthly={this.state.isMonthly} />
				<EnterpriseCard />
			</Atoms.Box>
		</Molecules.Section>
	)
}
