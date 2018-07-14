import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { oneLineTrim } from 'common-tags';
import { Wave, JoinConversation, Callout, Skew } from '../components';
import {
	SectionAttributes,
	HeroTitleAttributes,
	HeroSubtitleAttributes
} from '../utils';

const checkBoxCell = {
	iconAttributes: { name: 'check', type: 'glyph', color: '#72C472', alignToText: true },
	cellAttributes: { textAlign: 'center' }
};

const minusBoxCell = {
	iconAttributes: { name: 'minus', type: 'glyph', color: '#a6abb7', alignToText: true },
	cellAttributes: { textAlign: 'center' }
};

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
		<Molecules.Section
			alignItems="left"
			maxWidth="1088px"
			py={[5, 6]}
			mx="auto"
			titleAttributes={{
				text: 'Key Features',
				fontSize: 3
			}}
		>
			<Molecules.Table
				mb={[5, 0]}
				mt={4}
				mx="auto"
				width="100%"
				headerCells={[
					{
						text: 'Key Feature',
						cellAttributes: { textAlign: 'left' }
					},
					{ text: 'Voice Computer' },
					{ text: 'Enterprise' }
				]}
				bodyCells={[
					[
						{ text: 'Voice-controlled mouse' },
						checkBoxCell,
						checkBoxCell
					],
					[
						{ text: 'Numbered tag interface' },
						checkBoxCell,
						checkBoxCell
					],
					[
						{ text: 'Microsoft Windows support' },
						checkBoxCell,
						checkBoxCell
					],
					[
						{ text: 'Documentation, lessons, and on-boarding' },
						checkBoxCell,
						checkBoxCell
					],
					[
						{ text: 'Personalized training, customization, and support' },
						{
							text: 'Available upon request',
							cellAttributes: { textAlign: 'center' }
						},
						checkBoxCell
					],
					[
						{ text: 'Dedicated account manager' },
						minusBoxCell,
						checkBoxCell
					],
					[
						{ text: 'Enterprise SLA & custom Terms of Service' },
						minusBoxCell,
						checkBoxCell
					],
					[
						{ text: 'Volume discount' },
						minusBoxCell,
						checkBoxCell
					]
				]}
				boxShadow={2}
			/>
		</Molecules.Section>
		<Skew bg="primary.main" />
		<Callout
			bg="primary.main"
			py={[5, 6]}
			color="white"
			title="Special Requests?"
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
