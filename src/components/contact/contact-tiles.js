import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { SectionAttributes } from '../../utils';

const ContactTiles = () => (
	<Atoms.Box
		display="flex"
		flexDirection="row"
		maxWidth="960px"
		flexWrap="wrap"
		mx="auto"
		justifyContent="space-around"
		alignItems="center"
		{...SectionAttributes}
	>
		<Molecules.Section
			flex="1 300px"
			mt={2}
			mb={4}
			mx={4}
			titleAttributes={{
				text: 'Technical or account support',
				pb: 2
			}}
		>
			Need help? If you have questions about your account, or have any technical issues,
			then please <a href="mailto:support@voicecomputer.com">contact support</a>.
		</Molecules.Section>
		<Molecules.Section
			flex="1 300px"
			mt={2}
			mb={4}
			mx={4}
			titleAttributes={{
				text: 'General communication',
				pb: 2
			}}
		>
			For general inquiries, including partnership opportunities, please
			contact <a href="mailto:info@voicecomputer.com">info@voicecomputer.com</a>.
		</Molecules.Section>
	</Atoms.Box>
);

export default ContactTiles;
