import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { SectionAttributes, HeroTitleAttributes, HeroSubtitleAttributes } from '../../utils';
import { Wave } from '../../components';
import { Creators } from '../../components/company';

const Company = () => (
	<div>
		<Molecules.Section
			is="header"
			{...SectionAttributes}
			titleAttributes={{
				text: 'About Us',
				...HeroTitleAttributes
			}}
			subtitleAttributes={{
				text: 'Best in class speech recognition solutions.',
				...HeroSubtitleAttributes
			}}
			renderFooter={() => (
				<Atoms.ArrowButtonLink to="/sign-up">
					Try it free
				</Atoms.ArrowButtonLink>
			)}
		/>
		<Wave color="neutral.1" />
		<Creators />
	</div>
);

export default Company;
