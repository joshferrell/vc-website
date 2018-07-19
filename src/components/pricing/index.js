import React from 'react';
import { Molecules } from 'vc-components';
import { oneLine } from 'common-tags';
import { FeatureTable, PricingCards } from './components';
import { Wave, JoinConversation, Callout, Skew } from '../../components';
import { MailBalloons } from '../../img';
import {
	SectionAttributes,
	HeroTitleAttributes,
	HeroSubtitleAttributes
} from '../../utils';

const Pricing = () => (
	<article>
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
		<Molecules.Section
			is="div"
			bg="primary.main"
			py="136px"
		/>
		<PricingCards />
		<FeatureTable />
		<Skew bg="primary.main" />
		<Callout
			bg="primary.main"
			py={[5, 6]}
			color="white"
			title="Special Requests?"
			description={oneLine`
				We have plenty of experience delivering personalized speech recognition
				solutions. Get in touch, and we'll discuss how to getting you up and running.
			`}
			buttonAttributes={{
				text: 'Contact Us',
				to: '/contact',
				type: 'tertiary',
				nostyle: true
			}}
			imageAttributes={{
				src: MailBalloons,
				alt: 'envelope attached to balloons',
				ariaHidden: true,
				width: 250,
				style: {
					marginTop: '-40px'
				}
			}}
		/>
		<JoinConversation />
	</article>
);

export default Pricing;
