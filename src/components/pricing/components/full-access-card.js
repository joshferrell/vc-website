import React from 'react';
import PropTypes from 'prop-types';
import { Atoms, Molecules } from 'vc-components';

const containerStyles = {
	bg: 'white',
	px: 5,
	py: 5,
	my: 4,
	borderTop: '3px solid',
	borderTopColor: 'highlight.green',
	maxWidth: '550px',
	flex: '1 400px',
	boxShadow: 2,
	color: 'neutral.6',
	zIndex: 100,
	alignItems: 'center',
	textAlign: 'center',
	headerDivider: 'green'
};

const statusStyles = {
	fontSize: '1.1rem',
	alignSelf: 'flex-end',
	paddingBottom: '6px',
	letterSpacing: '.04rem',
	fontWeight: 400
};
const dollarStyles = { alignSelf: 'flex-start', fontSize: '1.75rem', marginRight: '4px' };
const priceStyles = { fontSize: '4rem', lineHeight: 1 };

const price = isMonthly => (isMonthly ? 10 : 99);

const FullAccessCard = ({ isMonthly }) => (
	<Molecules.Section
		{...containerStyles}
		titleAttributes={{
			text: 'Full Access',
			textAlign: 'center',
			fontSize: [2, 3],
			pb: 0,
			mb: -2
		}}
	>
		<Atoms.Box maxWidth="250px" mt={-2} mb={5} textAlign="center">
			Free for 30 days.<br />
			No credit card required.
		</Atoms.Box>
		<Atoms.Box display="flex" flexWrap="nowrap" fontWeight={600} justifyContent="center">
			<div style={dollarStyles}>$</div>
			<div style={priceStyles}>{price(isMonthly)}</div>
			<div style={statusStyles}>/ {isMonthly ? 'month' : 'year'}</div>
		</Atoms.Box>
		<Atoms.Box mt={2} mb={5} textAlign="center">
			billed {isMonthly ? 'monthly' : 'annually'}
		</Atoms.Box>
		<Atoms.Box textAlign="center">
			<Atoms.ArrowButtonLink to="/sign-up">
				Try it free
			</Atoms.ArrowButtonLink>
		</Atoms.Box>
		<Atoms.Box textAlign="center" mt={2}>
			or <Atoms.ButtonLink type="tertiary" to="/sign-up" nostyle small>purchase now</Atoms.ButtonLink>
		</Atoms.Box>
	</Molecules.Section>
);

FullAccessCard.propTypes = {
	isMonthly: PropTypes.bool
};

FullAccessCard.defaultProps = {
	isMonthly: false
};

export default FullAccessCard;
