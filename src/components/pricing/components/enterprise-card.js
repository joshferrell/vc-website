import React from 'react';
import { Atoms, Molecules } from 'vc-components';

import { BorderCard } from '../../../components';

const cardStyles = {
	flex: '1 400px',
	bg: 'neutral.0',
	boxShadow: 2,
	color: 'neutral.6',
	textAlign: 'center',
	maxWidth: '550px'
};

const EnterpriseCard = () => (
	<BorderCard title="Volume Pricing" {...cardStyles}>
		<Molecules.Section
			is="div"
			p={5}
			justifyContent="center"
			alignItems="center"
			titleAttributes={{
				text: 'Enterprise',
				textAlign: 'center',
				fontSize: [2, 3],
				mb: 2
			}}
			subtitleAttributes={{
				text: 'Dedicated support, custom implementation, and ergonimcs at scale.',
				textAlign: 'center',
				maxWidth: '300px',
				fontSize: 1
			}}
		>
			<Atoms.Box mt={4} mb={2} textAlign="center">
				<Atoms.ButtonLink to="/contact" outline>
					Contact Sales
				</Atoms.ButtonLink>
			</Atoms.Box>
		</Molecules.Section>
	</BorderCard>
);

export default EnterpriseCard;
