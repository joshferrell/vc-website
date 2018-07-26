import React from 'react';
import { Molecules } from 'vc-components';
import { HeroTitleAttributes, HeroSubtitleAttributes } from '../utils';
import { Skew } from '../components';
import { ContactTiles, ContactForm } from '../components/contact';

const Contact = () => (
	<div>
		<Molecules.Section
			pt={6}
			pb={4}
			alignItems="center"
			titleAttributes={{
				text: 'Contact our sales team',
				...HeroTitleAttributes
			}}
			subtitleAttributes={{
				text: 'We\'re always happy to talk about how we can work together.',
				...HeroSubtitleAttributes
			}}
		/>
		<Molecules.Section justifyContent="center">
			<Molecules.Section
				bg="white"
				m="0 auto -120px"
				maxWidth="600px"
				p={[4, 5]}
				boxShadow={3}
			>
				<ContactForm />
			</Molecules.Section>
		</Molecules.Section>
		<Skew bg="neutral.1" />
		<Molecules.Section bg="neutral.1" p={80} />
		<Molecules.Section bg="neutral.1">
			<ContactTiles />
		</Molecules.Section>
	</div>
);

export default Contact;
