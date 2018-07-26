import React from 'react';
import sys from 'system-components';
import { Atoms, Molecules } from 'vc-components';
import { OutlookScreen } from '../../img';
import { HeaderAttributes, SubtitleAttributes } from '../../utils';

const Img = sys({
	is: 'img',
	width: '100%',
	flex: '1 500px',
	maxWidth: '500px',
	maxHeight: '400px',
	boxShadow: 3,
	m: 3,
	height: 'auto'
});

const containerStyles = {
	bg: 'neutral.1',
	pb: 6,
	is: 'section',
	pt: [5, 5, 3],
	px: 3,
	alignItems: 'center'
};

const wrapperStyles = {
	mx: 'auto',
	display: 'flex',
	width: '100vw',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'center'
};

const cardStyles = {
	maxWidth: '25rem',
	mx: [0, 0, 6]
};

const cardTitleStyles = {
	is: 'h3',
	fontSize: 2
};

const MainFeatures = () => (
	<Molecules.Section
		{...containerStyles}
		headerDivider="green"
		titleAttributes={{
			text: 'Built for you.',
			...HeaderAttributes
		}}
		subtitleAttributes={{
			text: 'Voice Computer enables you to reach even greater heights',
			...SubtitleAttributes
		}}
	>
		<Atoms.Box {...wrapperStyles}>
			<Img src={OutlookScreen} alt="preview of voicecomputer in a mail client" />
			<Atoms.Box {...cardStyles}>
				<Molecules.Section
					py={3}
					titleAttributes={{
						text: 'Up and running in an instant',
						...cardTitleStyles
					}}
				>
					<Atoms.SectionText>
						Interact with any element using only your microphone through our
						intuitive user interface.
					</Atoms.SectionText>
				</Molecules.Section>
				<Molecules.Section
					py={3}
					titleAttributes={{
						text: 'Unlimited flexibility',
						...cardTitleStyles
					}}
				>
					<Atoms.SectionText>
						Tag your favorite controls for easy access to your most commonly
						used app features.
					</Atoms.SectionText>
				</Molecules.Section>
			</Atoms.Box>
		</Atoms.Box>
	</Molecules.Section>
);

export default MainFeatures;
