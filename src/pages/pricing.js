import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { oneLine } from 'common-tags';
import { SectionAttributes, HeroTitleAttributes, HeroSubtitleAttributes } from '../utils';
import { MailBalloons } from '../img';
import { Wave, Skew, Callout, JoinConversation } from '../components';
import { KeyFeatures, PricingCard } from '../components/pricing';

const Pricing = () => (
	<div>
		<Molecules.Section
			is="header"
			{...SectionAttributes}
			titleAttributes={{
				text: 'Plans and pricing',
				...HeroTitleAttributes
			}}
			subtitleAttributes={{
				text: 'Simple and transparent',
				...HeroSubtitleAttributes
			}}
		/>
		<Wave color="primary.main" />
		<Atoms.Box bg="primary.main" py="136px" />
		<PricingCard />
		<KeyFeatures />
		<Skew bg="primary.main" />
		<Callout
			bg="primary.main"
			color="white"
			title="Special Guests?"
			description={oneLine`
				We have plenty of experience delivering personalized speech recognition
				solutions. Get in touch, and we'll discuss how to getting you up and running.
			`}
			buttonAttributes={{
				text: 'Contact Us',
				to: '/contact',
				type: 'tertiary'
			}}
			imageAttributes={{
				src: MailBalloons,
				alt: 'envelope attached to balloons'
			}}
		/>
		<JoinConversation />
	</div>
);

export default Pricing;
