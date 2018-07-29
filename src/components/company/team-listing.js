import React from 'react';
import PropTypes from 'prop-types';
import { Atoms, Molecules } from 'vc-components';
import styled from 'styled-components';
import { HeaderAttributes } from '../../utils';

const containerStyles = {
	bg: 'white',
	pb: 6,
	is: 'section',
	pt: [5, 5, 3],
	px: 3,
	mt: 4,
	alignItems: 'center'
};

const Section = styled(Molecules.Section)`
	align-items: center;
	& > div {
		max-width: 960px;
		width: 100%;
		margin: 0 auto;
	}
`;

const TeamListing = ({ team }) => (
	<Section
		{...containerStyles}
		titleAttributes={{
			text: 'Meet the team',
			...HeaderAttributes
		}}
		headerDivider="blue"
	>
		<Atoms.Box is="ul" p={0} display="flex" flexWrap="wrap">
			{team.map(({ title, image, employeeTitle }) => (
				<Molecules.ListItem
					flex={['1 100%', '1 100%', '1 45%']}
					mt={5}
					mb={3}
					textAlign="center"
					mx={3}
					imageAttributes={{
						alt: title,
						src: image,
						style: { marginBottom: '8px' }
					}}
					title={title}
					subtitle={employeeTitle}
				/>
			))}
		</Atoms.Box>
	</Section>
);

TeamListing.propTypes = {
	team: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		employeeTitle: PropTypes.string.isRequired
	})).isRequired
};

export default TeamListing;
