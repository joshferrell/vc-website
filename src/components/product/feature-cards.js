import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { SectionAttributes, HeaderAttributes, SubtitleAttributes } from '../../utils';

const cardStyles = {
	px: 4,
	py: 5,
	m: 4,
	bg: 'white',
	boxShadow: 3,
	flex: '1 20rem',
	borderRadius: 4,
	maxWidth: '25rem'
};

const cardTitleStyles = {
	is: 'h3',
	fontSize: 2,
	lineHeight: '1.25'
};

const FeatureCards = () => (
	<Molecules.Section
		is="section"
		{...SectionAttributes}
		bg="primary.main"
		titleAttributes={{
			text: 'We\'ve got your back.',
			color: 'white',
			...HeaderAttributes
		}}
		subtitleAttributes={{
			text: 'Voice Computer enables you to reach even greater heights',
			color: 'white',
			...SubtitleAttributes
		}}
		headerDivider="yellow"
	>
		<Atoms.Box display="flex" flexWrap="wrap" justifyContent="space-around">
			<Molecules.Section
				{...cardStyles}
				titleAttributes={{
					text: 'Personal guidance from start to finish',
					...cardTitleStyles
				}}
			>
				<Atoms.SectionText>
					Our trainers are ready to walk you through our voice-activated controls,
					fully-customize your Voice Computer solution, and handle anything else
					it takes to get you hands-free.
				</Atoms.SectionText>
			</Molecules.Section>
			<Molecules.Section
				{...cardStyles}
				titleAttributes={{
					text: 'On-demand instruction and support',
					...cardTitleStyles
				}}
			>
				<Atoms.SectionText>
					With Voice Computer you&#039;ll always have easy access to documentation,
					expert-guided lessons, and the backing of over 20 years of voice
					recognition experience.
				</Atoms.SectionText>
			</Molecules.Section>
		</Atoms.Box>
	</Molecules.Section>
);

export default FeatureCards;
