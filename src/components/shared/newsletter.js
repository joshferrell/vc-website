import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Atoms, Molecules } from 'vc-components';

const containerStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexWrap: 'wrap',
	maxWidth: '960px',
	mx: 'auto',
	px: [3, 6],
	py: 6,
	bg: 'primary.main',
	is: 'section',
	boxShadow: 3
};

const Box = styled(Atoms.Box).attrs(containerStyles)`
	position: relative;
	z-index: 100;
`;

const Newsletter = ({ title, ...props }) => (
	<Box {...containerStyles} {...props}>
		<Molecules.Section
			color="white"
			p={4}
			flex="1 250px"
			titleAttributes={{
				is: 'h2',
				text: title,
				pb: 2
			}}
		>
			<Atoms.Box mt={3}>
				<Molecules.InlineForm
					inputAttributes={{
						type: 'email',
						py: '14px',
						name: 'email',
						placeholder: 'jane.doe@example.com'
					}}
					buttonAttributes={{
						text: 'Stay informed',
						type: 'tertiary'
					}}
					label="Email"
					onSubmit={() => {}}
				/>
			</Atoms.Box>
		</Molecules.Section>
	</Box>
);

Newsletter.propTypes = {
	title: PropTypes.string
};

Newsletter.defaultProps = {
	title: 'Work smarter, better, and faster with weekly tips and how-tos.'
};

export default Newsletter;
