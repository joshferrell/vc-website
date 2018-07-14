import React from 'react';
import { Molecules, Atoms } from 'vc-components';
import { HeaderAttributes, HeroTitleAttributes, HeroSubtitleAttributes, SectionAttributes } from '../../utils';
import { Wave } from '../../components';

const Company = () => (
	<article>
		<Molecules.Section
			is="section"
			{...SectionAttributes}
			titleAttributes={{
				text: 'About Us',
				...HeroTitleAttributes
			}}
			subtitleAttributes={{
				text: 'Best in class speech recognition solutions',
				...HeroSubtitleAttributes
			}}
			renderFooter={() => (
				<Atoms.ArrowButtonLink to="/sign-up">
					Try it free
				</Atoms.ArrowButtonLink>
			)}
		/>
		<Wave color="neutral.1" />
		<Molecules.Section
			bg="neutral.1"
			pb={[5, 6]}
			pt={[5, 5, 3]}
			alignItems="center"
			headerDivider="green"
			titleAttributes={{
				text: 'We are creators',
				...HeaderAttributes,
			}}
		>
			<Atoms.Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
				<img src="http://fillmurray.com/500/250" />
				<Atoms.Box m={[3, 6]} maxWidth="25rem">
					<p>
						We're a team of creators with decades of experience in speech recognition,
						enterprise technology, and product design. We're committed to making your
						life easier through applied speech recognition.
					</p>
					<p>
						We serve customers in <strong>20 countries</strong> from three Californian offices in Sacramento, Davis, and the San Francisco Bay Area.
					</p>
				</Atoms.Box>
			</Atoms.Box>
		</Molecules.Section>
	</article>
);

export default Company;
