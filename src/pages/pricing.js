import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { oneLineTrim } from 'common-tags';
import { Wave, JoinConversation, Callout } from '../components';
import {
	SectionAttributes,
	HeroTitleAttributes,
	HeroSubtitleAttributes
} from '../utils';

const Pricing = () => (
	<article>
		<Molecules.Section
			is="header"
			{...SectionAttributes}
			titleAttributes={{
				text: 'Accessibility should\'t be hard.',
				...HeroTitleAttributes
			}}
			subtitleAttributes={{
				text: 'Voice Computer is the last speech recognition solution you\'ll ever need.',
				...HeroSubtitleAttributes
			}}
			renderFooter={() => (
				<Atoms.ArrowButtonLink to="/sign-up">
					Try it free
				</Atoms.ArrowButtonLink>
			)}
		/>
		<Wave color="primary.main" />
		<Molecules.Section
			is="div"
			bg="primary.main"
			py="120px"
		/>
		<Molecules.Section
			mt="-120px"
			mb="120px"
			alignItems="center"
			color="white"
			display="flex"
		>
			this is a test
		</Molecules.Section>
		<Callout
			bg="primary.main"
			py={[5, 6]}
			color="white"
			title='Special Requests?'
			description={oneLineTrim`
				We have plenty of experience delivering personalized speech recognition
				solutions. Get in touch, and we'll discuss how to getting you up and running.
			`}
			buttonAttributes={{
				text: 'Contact Us',
				to: '/contact-us',
				type: 'tertiary',
				nostyle: true
			}}
			imageAttributes={{
				src: 'http://fillmurray.com/150/150',
				alt: 'fillmurray :)'
			}}
		/>
		<JoinConversation />
	</article>
);

export default Pricing;
