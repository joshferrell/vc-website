import React from 'react';
import { Molecules, Atoms } from 'vc-components';
import { SectionAttributes, HeroTitleAttributes, HeroSubtitleAttributes } from '../../utils';

const Hero = () => (
	<Molecules.Section
		is="header"
		{...SectionAttributes}
		titleAttributes={{
			text: 'Accessibility should not be hard.',
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
);

export default Hero;
